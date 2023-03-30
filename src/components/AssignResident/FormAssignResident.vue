<template>
  <div class="max-w-xl mx-auto">
    <select-base
      id="id_area_revisora"
      label="Contrato"
      :options="app.listReviewAreas"
      v-model="app.idAreaRevisora"
      @change="getEmpleadosSICT()"
      class="mb-3"
      v-if="editMode !== true"
    />
    <select-base
      id="id_empleado_sict"
      label="Residente"
      :options="app.listProjects"
      class="mb-3"
      v-if="editMode !== true"
      v-model="app.resident.id_empleado_sict"
    />
    <input-base
      id="fecha_inicio_proyecto"
      label="Fecha de asignacion del Residente"
      type="date"
      class="mb-3"
      v-model="app.resident.fecha_inicio_residente"
    />
    <input-base
      id="fecha_inicio_proyecto"
      label="Archivo"
      type="file"
      class="mb-3"
    />
    <button-base
      label="Guardar"
      @click="sendForm"
      class="mr-0 ml-auto"
    />
  </div>
</template>

<script>
import { reactive } from 'vue'
import InputBase from '../InputBase.vue'
import ButtonBase from '../ButtonBase.vue'
import SelectBase from '../SelectBase.vue'
import { fetchResident } from '../../api/resident'
import { fetchContracts } from '../../api/contract'

export default {
  name: 'FormAssignResident',
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
    })
    if (props.editMode) {
      app.resident = props.resident
    }
    const sendForm = () => emit('submit', app.resident)

    const getReviewAreas = async () => {
      const { data } = await fetchReviewAreas()
      console.log('data areaRevisora: ',data)
      app.listReviewAreas = data.map(reviewArea => ({ value: reviewArea.id, label: reviewArea.nombre_unidad }))
    }

    const getEmpleadosSICT = async () => {
      console.log('Consulta al endpoint recibiendo el id: ', app.idAreaRevisora)
    }

    const getContracts = async () => {
      const { data } = await fetchContracts()
      console.log('Contratos: ', data)
      /* app.listContractors = data.map(contractor => ({ value: contractor.id_contratista, label: contractor.nombre_contratista })) */
    }

    const getResident = async () => {
      const { data } = await fetchResident()
      console.log('residentes: ', data)
    }



    getContracts()
    getResident()

    return {
      app,
      sendForm,
      getContracts,
      getEmpleadosSICT,
      getResident,
    }
  },
}
</script>
