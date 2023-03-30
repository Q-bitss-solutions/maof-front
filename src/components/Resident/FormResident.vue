<template>
  <div class="max-w-xl mx-auto">
    <select-base id="id_area_revisora" label="Area revisora" :options="app.listReviewAreas" v-model="app.idAreaRevisora"
      @change="getEmpleadosSICT()" class="mb-3" v-if="editMode !== true" />
    <select-base id="id_empleado_sict" label="Empleado SICT" :options="app.listEmpleados" class="mb-3"
      v-if="editMode !== true" v-model="app.resident.id_empleado_sict" />
    <input-base id="fecha_inicio_proyecto" label="Fecha inicio proyecto" type="date" class="mb-3"
      v-model="app.resident.fecha_inicio_residente" />
    <button-base label="Guardar" @click="sendForm" class="mr-0 ml-auto" />
  </div>
</template>

<script>
import { reactive } from 'vue'
import InputBase from '../InputBase.vue'
import ButtonBase from '../ButtonBase.vue'
import SelectBase from '../SelectBase.vue'
import { fetchReviewAreas } from '../../api/reviewArea'
import { fetchSCIT_EmployeesQuery } from '../../api/SCIT_Employees'

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
        id_empleado_sict: '',
        fecha_inicio_residente: '',
        fecha_fin_residente: '',
      },
      idAreaRevisora: '',
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
      app.listReviewAreas = data.map(reviewArea => ({ value: reviewArea.id_unidad_sict, label: reviewArea.nombre_unidad }))
    }

    const getEmpleadosSICT = async () => {
      const { data } = await fetchSCIT_EmployeesQuery(app.idAreaRevisora)
      app.listEmpleados = data.map(empleado => ({ value: empleado.empleado_sict, label: empleado.nombre_completo }))
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
