<template>
  <div class="max-w-xl mx-auto">
    <select-base
      id="id_proyecto"
      label="Proyecto"
      v-model="app.contract.id_proyecto"
      :options="app.listProjects"
      class="mb-3"
    />
    <select-base
      id="id_contratista"
      label="Contratista"
      v-model="app.contract.id_contratista"
      :options="app.listContractors"
      class="mb-3"
    />
    <select-base
      id="area_revisora"
      label="Área revisora"
      v-model="app.contract.id_area_revisora"
      :options="app.listReviewAreas"
      class="mb-3"
    />
    <input-base
      id="monto_sin_iva"
      label="Monto sin IVA"
      placeholder="Escribe el monto sin IVA"
      type="number"
      v-model="app.contract.monto_sin_iva"
      class="mb-3"
    />
    <input-base
      id="objeto_contrato"
      label="Objeto contrato"
      placeholder="Escribe el objeto contrato"
      v-model="app.contract.objeto_contrato"
      class="mb-4"
    />
    <input-base
      id="plazo_inicio"
      label="Fecha Inició"
      type="date"
      v-model="app.contract.plazo_inicio"
      class="mb-4"
    />
    <input-base
      id="plazo_fin"
      label="Fecha fin"
      type="date"
      v-model="app.contract.plazo_fin"
      class="mb-4"
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
import { fetchProjects } from '../../api/project'
import { fetchReviewAreas } from '../../api/reviewArea'
import { fetchContractors } from '../../api/contractor'

export default {
  name: 'FormContract',
  props: {
    editMode: {
      type: Boolean,
      default: false,
    },
    contract: {
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
      contract: {
        id_proyecto: '',
        id_contratista: '',
        id_area_revisora: '',
        monto_sin_iva: '',
        plazo_inicio: '',
        plazo_fin: '',
        objeto_contrato: '',
      },
      listProjects: [],
      listContractors: [],
      listReviewAreas: [],
    })
    if (props.editMode) {
      app.contract = props.contract
      app.contract.plazo_inicio = props.contract.plazo_inicio.split('-').reverse().join('-')
      app.contract.plazo_fin = props.contract.plazo_fin.split('-').reverse().join('-')  
    }

    const sendForm = () => emit('submit', app.contract)

    const getProjects = async () => {
      const { data } = await fetchProjects()
      app.listProjects = data.map(project => ({ value: project.id_proyecto, label: project.nombre_proyecto }))
    }

    const getContractors = async () => {
      const { data } = await fetchContractors()
      app.listContractors = data.map(contractor => ({ value: contractor.id_contratista, label: contractor.nombre_contratista }))
    }

    const getReviewAreas = async () => {
      const { data } = await fetchReviewAreas()
      app.listReviewAreas = data.map(reviewArea => ({ value: reviewArea.id, label: reviewArea.nombre_unidad }))
    }

    getProjects()
    getContractors()
    getReviewAreas()

    return {
      app,
      sendForm,
    }
  },
}
</script>
