<template>
  <div class="max-w-xl mx-auto">
    <select-base id="id_area_revisora" label="Tipo" :options="app.listReviewAreas" class="mb-3"
      v-if="editMode !== true" />
    <select-base id="id_numero_proyecto" label="Número de proyecto (Cartera de Inversión)" :options="app.listReviewAreas"
      class="mb-3" v-if="editMode !== true" />
    <select-base id="id_area_revisora" label="Contratista" :options="app.listContratista" class="mb-3"
      v-if="editMode !== true" />
    <select-base id="id_empleado_sict" label="Unidad SICT" :options="app.listReviewAreas" class="mb-3"
      v-if="editMode !== true" />
    <input-base id="fecha_inicio_proyecto" label="Número de Contrato o Convenio de Colaboración" type="text"
      class="mb-3" />
    <text-area-base id="fecha_inicio_proyecto" label="Objeto" class="mb-3" />
    <input-base id="fecha_inicio_proyecto" label="Monto sin IVA" type="number" class="mb-3" />
    <input-base id="fecha_inicio_proyecto" label="Plazo (inicio)" type="date" class="mb-3" />
    <input-base id="fecha_inicio_proyecto" label="Plazo (fin)" type="date" class="mb-3" />
    <button-base label="Guardar" @click="sendForm" class="mr-0 ml-auto" />
  </div>
</template>

<script>
import { reactive } from 'vue'
import InputBase from '../InputBase.vue'
import TextAreaBase from '../TextAreaBase.vue'
import ButtonBase from '../ButtonBase.vue'
import SelectBase from '../SelectBase.vue'
import { fetchReviewAreas } from '../../api/reviewArea'
/* import { fetchSCIT_EmployeesQuery } from '../../api/SCIT_Employees' */
import { fetchContractors } from '../../api/contractor'

export default {
  name: 'FormCollaborationAgreements',
  props: {
    editMode: {
      type: Boolean,
      default: false,
    },
    collaborationAgreements: {
      type: Object,
      default: () => ({})
    },
  },
  components: {
    InputBase,
    ButtonBase,
    SelectBase,
    TextAreaBase,
  },
  setup(props, { emit }) {
    const app = reactive({
      collaborationAgreements: {
        id_empleado_sict: '',
        fecha_inicio_residente: '',
        fecha_fin_residente: '',
      },
      idAreaRevisora: '',
      listReviewAreas: [],
      listContratista: [],
    })
    if (props.editMode) {
      app.collaborationAgreements = props.collaborationAgreements
      app.resident.fecha_inicio_residente = props.resident.fecha_inicio_residente.split('-').reverse().join('-')
    }
    const sendForm = () => emit('submit', app.collaborationAgreements)

    const getReviewAreas = async () => {
      const { data } = await fetchReviewAreas()
      app.listReviewAreas = data.map(reviewArea => ({ value: reviewArea.id_unidad_sict, label: reviewArea.nombre_unidad }))
    }

    /* const getEmpleadosSICT = async () => {
      const { data } = await fetchSCIT_EmployeesQuery(app.idAreaRevisora)
      app.listEmpleados = data.map(empleado => ({ value: empleado.empleado_sict, label: empleado.nombre_completo }))
    } */
    const getContratistas = async () => {
      const { data } = await fetchContractors()
      /* app.listContratista = data.map((contrato) => {
        if (contrato.estatus_contratista === 'Activo') {
          return { value: contrato.id_contratista, label: contrato.nombre_contratista }
        }
      }) */
      data.forEach(contrato => {
        if (contrato.estatus_contratista === 'Activo') {
          app.listContratista.push({ value: contrato.id_contratista, label: contrato.nombre_contratista })
        }
      });
      console.log(' app.listContratista: ', app.listContratista)
    }

    getReviewAreas()
    getContratistas()

    return {
      app,
      sendForm,
      getReviewAreas,
      getContratistas,
    }
  },
}
</script>
<style>

label[for=id_numero_proyecto] {
  font-size: 1.100rem;
}
</style>