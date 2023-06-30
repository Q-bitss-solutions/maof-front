<template>
  <div class="max-w-xl mx-auto">
    <select-base id="tipo_contrato" label="Tipo" :options="app.listTypeContracts" class="mb-3"
      v-model="app.collaborationAgreements.id_tipo_contrato" />
    <select-base id="proyecto" label="Número de proyecto (Cartera de Inversión)" :options="app.listProyects" class="mb-3"
      v-model="app.collaborationAgreements.id_proyecto" />
    <select-base id="Contratista" label="Contratista" :options="app.listContratista" class="mb-3"
      v-model="app.collaborationAgreements.id_contratista" />
    <select-base id="empleado_maof" label="Unidad MAOF" :options="app.listReviewAreas" class="mb-3"
      v-model="app.collaborationAgreements.id_area_revisora" />
    <input-base id="numero_Contrato" label="Número de Contrato o Convenio de Colaboración" type="text" class="mb-3"
      v-model="app.collaborationAgreements.numero_contrato" />
    <text-area-base id="objeto" label="Objeto" class="mb-3" v-model="app.collaborationAgreements.objeto_contrato" />
    <input-base id="monto" label="Monto sin IVA" type="number" class="mb-3"
      v-model="app.collaborationAgreements.monto_sin_iva" />
    <input-base id="plazo_inicio" label="Plazo (inicio)" type="date" class="mb-3"
      v-model="app.collaborationAgreements.plazo_inicio" />
    <input-base id="plazo_fin" label="Plazo (fin)" type="date" class="mb-3"
      v-model="app.collaborationAgreements.plazo_fin" />
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
import { fetchContractors } from '../../api/contractor'
import { fetchTypeContracts } from '../../api/typeContract'
import { fetchProjectsActive } from '../../api/project'

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
        numero_contrato: '',
        id_proyecto: '',
        id_contratista: '',
        id_area_revisora: '',
        id_tipo_contrato: '',
        monto_sin_iva: '',
        plazo_inicio: '',
        plazo_fin: '',
        objeto_contrato: ''
      },
      idAreaRevisora: '',
      listReviewAreas: [],
      listProyects: [],
      listContratista: [],
      listTypeContracts: [],
    })
    if (props.editMode) {
      app.collaborationAgreements = props.collaborationAgreements
      delete props.collaborationAgreements.id_contrato_padre
      app.collaborationAgreements.plazo_inicio = props.collaborationAgreements.plazo_inicio.split('-').reverse().join('-')
      app.collaborationAgreements.plazo_fin = props.collaborationAgreements.plazo_fin.split('-').reverse().join('-')
    }
    const sendForm = () => emit('submit', app.collaborationAgreements)

    const getProjects = async () => {
      const { data } = await fetchProjectsActive()
      app.listProyects = data.map(projetc => ({ value: projetc.id_proyecto, label: `${projetc.clave_cartera} - ${projetc.nombre_proyecto}` }))
    }
    const getReviewAreas = async () => {
      const { data } = await fetchReviewAreas()
      app.listReviewAreas = data.map(reviewArea => ({ value: reviewArea.id, label: `${reviewArea.id_unidad_maof} - ${reviewArea.nombre_unidad}`, id_unit_maof: reviewArea.id_unidad_maof }))
      app.listReviewAreas.sort((a, b) => {
        if (a.id_unit_maof > b.id_unit_maof) {
          return 1;
        }
        if (a.id_unit_maof < b.id_unit_maof) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
    }
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
          app.listContratista.sort((a, b) => {
        if (a.nombre_contratista > b.nombre_contratista) {
          return 1;
        }
        if (a.nombre_contratista < b.nombre_contratista) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
        }
      });
    }
    const getTypeContracts = async () => {
      const { data } = await fetchTypeContracts()
      data.forEach(typeContract => {
        if (typeContract.tipo_contrato_nombre !== 'Convenio Modificatorio') {
          app.listTypeContracts.push({ value: typeContract.tipo_contrato, label: `${typeContract.tipo_contrato} - ${typeContract.tipo_contrato_nombre}` })
        }
      });
      /* app.listTypeContracts = data.map(typeContract => ({ value: typeContract.tipo_contrato, label: `${typeContract.tipo_contrato} - ${typeContract.tipo_contrato_nombre}` })) */
    }

    getReviewAreas()
    getContratistas()
    getTypeContracts()
    getProjects()

    return {
      app,
      sendForm,
      getReviewAreas,
      getContratistas,
      getTypeContracts,
      getProjects,
    }
  },
}
</script>
<style>
label[for=id_numero_proyecto] {
  font-size: 1.100rem;
}
</style>