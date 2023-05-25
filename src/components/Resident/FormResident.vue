<template>
  <div class="max-w-xl mx-auto">
    <select-base id="id_area_revisora" label="Área revisora" :options="app.listReviewAreas" v-model="app.idAreaRevisora"
      @change="getEmpleadosSICT()" class="mb-3" v-if="editMode !== true" />
    <select-base id="id_empleado_sict" label="Empleado SICT" :options="app.listEmpleados" class="mb-3"
      v-if="editMode !== true" v-model="app.resident.id_empleado_maof" :disabled="app.disabled" />
    <input-base id="fecha_inicio_proyecto" label="Fecha inicio del residente" type="date" class="mb-3"
      v-model="app.resident.fecha_inicio_residente" />
    <button-base label="Guardar" @click="sendForm" class="mr-0 ml-auto" :disabled="app.disabled" />
  </div>
</template>

<script>
import { reactive } from 'vue'
import InputBase from '../InputBase.vue'
import ButtonBase from '../ButtonBase.vue'
import SelectBase from '../SelectBase.vue'
import { fetchReviewAreas } from '../../api/reviewArea'
import { fetchMAOF_EmployeesQuery } from '../../api/users'
import Swal from 'sweetalert2'

export default {
  name: 'FormResident',
  props: {
    editMode: {
      type: Boolean,
      default: false,
    },
    resident: {
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
      resident: {
        id_empleado_maof: '',
        fecha_inicio_residente: '',
        fecha_fin_residente: '',
      },
      idAreaRevisora: '',
      disabled: false,
      listReviewAreas: [],
      listEmpleados: [],
    })
    if (props.editMode) {
      app.resident = props.resident
      app.resident.fecha_inicio_residente = props.resident.fecha_inicio_residente.split('-').reverse().join('-')
    }
    const sendForm = () => emit('submit', app.resident)

    const getReviewAreas = async () => {
      const { data } = await fetchReviewAreas()
      console.log(data)
      app.listReviewAreas = data.map(reviewArea => ({ value: reviewArea.id_unidad_maof, label: reviewArea.nombre_unidad }))
      console.log(app.listReviewAreas)
    }

    const getEmpleadosSICT = async () => {
      try {
        const { data } = await fetchMAOF_EmployeesQuery(app.idAreaRevisora)
        /*  app.listEmpleados = data.map(empleado => ({ value: empleado.empleado_maof, label: empleado.nombre_completo }))
         console.log(app.listEmpleados)
         app.disabled = false */
        let result = []
        data.forEach(element => {
          if (element.rol_maof === 'Residente') {
            result.push({ value: element.empleado_maof, label: element.nombre_completo })
          }
        });
        app.listEmpleados = result
        app.disabled = false
      } catch (error) {
        Swal.fire(
          'Error',
          `${error.response.data.detail}`,
          'error'
        )
        app.disabled = true
        app.listEmpleados = []
      }
    }

    getReviewAreas()

    return {
      app,
      sendForm,
      getReviewAreas,
      getEmpleadosSICT,
    }
  },
}
</script>
