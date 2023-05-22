<template>
  <div class="max-w-xl mx-auto">
    <input-base id="aPaterno" label="Apellidos" class="mb-3" v-model="app.userAndRols.last_name" />
    <span v-if="v$.last_name.$error" v-for="error in  v$.last_name.$errors" :key="error"
      class=" text-red font-semibold text-center ml-80"> {{ error.$message }} </span>

    <!-- <input-base id="aMaterno" label="Apellido materno" class="mb-3" v-model="app.maternal_surname" />
    <span v-if="v$.last_name.$error" v-for="error in  v$.last_name.$errors" :key="error"
      class=" text-red font-semibold text-center ml-80"> {{ error.$message }} </span> -->

    <input-base id="nombre" label="Nombre(s)" class="mb-3" v-model="app.userAndRols.first_name" />
    <span v-if="v$.first_name.$error" v-for="error in  v$.first_name.$errors" :key="error"
      class=" text-red font-semibold text-center ml-80"> {{ error.$message }} </span>


    <select-base id="id_unidad_maof" label="Unidad MAOF" :options="app.listUnitsMAOF"
      v-model="app.userAndRols.unidad_maof" class="mb-3" />
    <span v-if="v$.unidad_maof.$error" v-for="error in  v$.unidad_maof.$errors" :key="error"
      class=" text-red font-semibold text-center ml-80"> {{ error.$message }} </span>


    <select-base id="id_rol_maof" label="Rol en el sistema" :options="app.listRolesMAOF" class="mb-3"
      v-model="app.userAndRols.rol" />
    <span v-if="v$.rol.$error" v-for="error in  v$.rol.$errors" :key="error"
      class=" text-red font-semibold text-center ml-80"> {{ error.$message }} </span>

    <input-base id="email" label="Correo electrónico" class="mb-3" type="email" v-model="app.userAndRols.email" />
    <span v-if="v$.email.$error" v-for="error in  v$.email.$errors" :key="error"
      class=" text-red font-semibold text-center ml-80"> {{ error.$message }} </span>



    <button-base label="Guardar" @click="sendForm" class="mr-0 ml-auto" />
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import InputBase from '../InputBase.vue'
import ButtonBase from '../ButtonBase.vue'
import SelectBase from '../SelectBase.vue'
import { fetchSICTUnitsActive } from "../../api/SICTUnits";
import { fetchRoles } from "../../api/roles";
import useVuelidate from '@vuelidate/core'
import { required, helpers, minValue, maxValue, email } from '@vuelidate/validators'
import Swal from 'sweetalert2'
export default {
  name: 'FormUnitMAOF',
  props: {
    editMode: {
      type: Boolean,
      default: false,
    },
    userAndRols: {
      type: Object,
      default: () => ({})
    },
  },
  components: {
    InputBase,
    ButtonBase,
    SelectBase,
  },
  setup(props, { emit }) {
    const app = reactive({
      userAndRols: {
        email: '',
        /* username: '', */
        first_name: '',
        last_name: '',
        rol: '',
        unidad_maof: ''
      },
      /*       maternal_surname: '', */
      listUnitsMAOF: [],
      listRolesMAOF: [],
    })
    if (props.editMode) {
      app.userAndRols = props.userAndRols
      /* app.maternal_surname = props.userAndRols.last_name.split(' ')[1]
      app.userAndRols.last_name = props.userAndRols.last_name.split(' ')[0] */
      app.userAndRols.rol = props.userAndRols.rol_id
      app.userAndRols.unidad_maof = props.userAndRols.unidad_maof_id
      console.log('app: ', app.userAndRols);
    }
    const rules = computed(() => {
      return {
        /* id_contrato: { required: helpers.withMessage('El id es requerido', required) },
        id_residente: { required }, */
        /*  porcentaje_avance_estimacion: {
           maxValue: helpers.withMessage('El valor maximo es 100%', maxValue(100)),
           minValue: helpers.withMessage('El valor minimo es 0%', minValue(0))
         },
         porcentaje_avance_estimacion_acumulado: {
           maxValue: helpers.withMessage('El valor maximo es 100%', maxValue(100)),
           minValue: helpers.withMessage('El valor minimo es 0%', minValue(0))
         },
         porcentaje_Avance_fisico: {
           maxValue: helpers.withMessage('El valor maximo es 100%', maxValue(100)),
           minValue: helpers.withMessage('El valor minimo es 0%', minValue(0))
         },
         porcensaje_avance_financiero: {
           maxValue: helpers.withMessage('El valor maximo es 100%', maxValue(100)),
           minValue: helpers.withMessage('El valor minimo es 0%', minValue(0))
         },
         grado_avance_obra: {
           maxValue: helpers.withMessage('El valor maximo es 100%', maxValue(100)),
           minValue: helpers.withMessage('El valor minimo es 0%', minValue(0))
         },
         fecha_autorizacion_contratista: {
           fechaActualFunction: helpers.withMessage('La fecha es mayor al dia de hoy', fechaActualFunction),
         }, */
        email: {
          required: helpers.withMessage('El email es requerido', required),
          email: helpers.withMessage('No es un correo valido', email)
        },
        first_name: { required: helpers.withMessage('El nombre es requerido', required) },
        last_name: { required: helpers.withMessage('El apellido es requerido', required) },
        rol: { required: helpers.withMessage('El rol es requerido', required) },
        unidad_maof: { required: helpers.withMessage('La unidad es requerido', required) },
      }
    })
    const v$ = useVuelidate(rules, app.userAndRols)
    const getUnitsMAOF = async () => {
      const { data } = await fetchSICTUnitsActive()
      app.listUnitsMAOF = data.map(unitMAOF => ({ value: unitMAOF.id_unidad_maof, label: unitMAOF.unidad }))
      app.listUnitsMAOF.sort((a, b) => {
        if (a.label > b.label) {
          return 1;
        }
        if (a.label < b.label) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
    }
    const getRolesMAOF = async () => {
      const { data } = await fetchRoles()
      app.listRolesMAOF = data.map(rol => ({ value: rol.id, label: rol.nombre_rol }))
      app.listRolesMAOF.sort((a, b) => {
        if (a.label > b.label) {
          return 1;
        }
        if (a.label < b.label) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
    }
    const sendForm = async () => {
      const validaciones = await v$.value.$validate()
      if (validaciones) {
        /* app.userAndRols.last_name = app.userAndRols.last_name + ' ' + app.maternal_surname */
        /* app.userAndRols.username = app.userAndRols.email */
        emit('submit', app.userAndRols)
      } else {
        Swal.fire(
          'Error',
          `Revisa bien los datos`,
          'error'
        )
      }
      //se concatenan los apellidos en un solo campo
    }

    getUnitsMAOF()
    getRolesMAOF()

    return {
      app,
      sendForm,
      v$,
    }
  },
}
</script>
