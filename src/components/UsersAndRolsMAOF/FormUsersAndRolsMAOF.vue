<template>
  <div class="max-w-xl mx-auto">
    <input-base id="aPaterno" label="Apellido paterno" class="mb-3" v-model="app.userAndRols.last_name" />
    <input-base id="aMaterno" label="Apellido materno" class="mb-3" v-model="app.maternal_surname" />
    <input-base id="nombre" label="Nombres(s)" class="mb-3" v-model="app.userAndRols.first_name" />
    <select-base id="id_unidad_maof" label="Unidad MAOF" :options="app.listUnitsMAOF"
      v-model="app.userAndRols.unidad_maof" class="mb-3" />
    <select-base id="id_rol_maof" label="Rol en el sistema" :options="app.listRolesMAOF" class="mb-3"
      v-model="app.userAndRols.rol" />
    <input-base id="email" label="Correo electrónico" class="mb-3" type="email" v-model="app.userAndRols.email" />
    <button-base label="Guardar" @click="sendForm" class="mr-0 ml-auto" />
  </div>
</template>

<script>
import { reactive } from 'vue'
import InputBase from '../InputBase.vue'
import ButtonBase from '../ButtonBase.vue'
import SelectBase from '../SelectBase.vue'
import { fetchSICTUnits } from "../../api/SICTUnits";
import { fetchRoles } from "../../api/roles";

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
      maternal_surname: '',
      listUnitsMAOF: [],
      listRolesMAOF: [],
    })
    if (props.editMode) {
      app.userAndRols = props.userAndRols
      app.maternal_surname = props.userAndRols.last_name.split(' ')[1]
      app.userAndRols.last_name = props.userAndRols.last_name.split(' ')[0]
      app.userAndRols.rol = props.userAndRols.rol_id
      app.userAndRols.unidad_maof = props.userAndRols.unidad_maof_id
      console.log('app: ', app.userAndRols);
    }
    const getUnitsMAOF = async () => {
      const { data } = await fetchSICTUnits()
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
    const sendForm = () => {
      //se concatenan los apellidos en un solo campo
      app.userAndRols.last_name = app.userAndRols.last_name + ' ' + app.maternal_surname
      /* app.userAndRols.username = app.userAndRols.email */
      emit('submit', app.userAndRols)
    }

    getUnitsMAOF()
    getRolesMAOF()

    return {
      app,
      sendForm,
    }
  },
}
</script>
