<template>
  <div class="max-w-xl mx-auto">
    <select-base id="id_area_revisora" label="Contrato o Convenio de Colaboración" :options="app.listConvenioContrato"
      class="mb-3" v-model="app.amendingAgreement.id_contrato_padre" @change="getInfoContrato()" />
    <select-base id="id_numero_proyecto" label="Número de proyecto (Cartera de Inversión)" :options="app.listProyects"
      class="mb-3" v-model="app.amendingAgreement.id_proyecto" disabled />
    <select-base id="id_area_revisora" label="Contratista" :options="app.listContratista" class="mb-3"
      v-model="app.amendingAgreement.id_contratista" disabled />
    <select-base id="id_empleado_sict" label="Unidad SICT" :options="app.listReviewAreas" class="mb-3"
      v-model="app.amendingAgreement.id_area_revisora" disabled />
    <input-base id="fecha_inicio_proyecto" label="Número de Convenio Modificatorio" type="text" class="mb-3"
      v-model="app.amendingAgreement.numero_contrato" />
    <text-area-base id="fecha_inicio_proyecto" label="Objeto" class="mb-3"
      v-model="app.amendingAgreement.objeto_contrato" />
    <input-base id="fecha_inicio_proyecto" label="Monto sin IVA" type="number" class="mb-3"
      v-model="app.amendingAgreement.monto_sin_iva" />
    <input-base id="fecha_inicio_proyecto" label="Plazo (inicio)" type="date" class="mb-3"
      v-model="app.amendingAgreement.plazo_inicio" />
    <input-base id="fecha_inicio_proyecto" label="Plazo (fin)" type="date" class="mb-3"
      v-model="app.amendingAgreement.plazo_fin" />
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
import { fetchContracts, fetchContractById } from '../../api/contract'
import { fetchProjects } from '../../api/project'

export default {
  name: 'FormAmendingAgreement',
  props: {
    editMode: {
      type: Boolean,
      default: false,
    },
    amendingAgreement: {
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
      amendingAgreement: {
        numero_contrato: '',
        id_contratista: '',
        id_area_revisora: '',
        id_proyecto: '',
        id_contrato_padre: '',
        id_tipo_contrato: 3,
        monto_sin_iva: '',
        plazo_inicio: '',
        plazo_fin: '',
        objeto_contrato: '',
      },
      idAreaRevisora: '',
      listReviewAreas: [],
      listContratista: [],
      listConvenioContrato: [],
      listProyects: [],
    })
    if (props.editMode) {
      app.amendingAgreement = props.amendingAgreement
      app.amendingAgreement.plazo_inicio = props.amendingAgreement.plazo_inicio.split('-').reverse().join('-')
      app.amendingAgreement.plazo_fin = props.amendingAgreement.plazo_fin.split('-').reverse().join('-')
    }
    const sendForm = () => emit('submit', app.amendingAgreement)

    const getReviewAreas = async () => {
      const { data } = await fetchReviewAreas()
      app.listReviewAreas = data.map(reviewArea => ({ value: reviewArea.id, label: `${reviewArea.id_unidad_maof} - ${reviewArea.nombre_unidad}` }))
      app.listReviewAreas.sort((a, b) => {
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
      });
    }
    const getInfoContrato = async () => {
      const { data } = await fetchContractById(app.amendingAgreement.id_contrato_padre)
      app.amendingAgreement.id_proyecto = data.id_proyecto
      app.amendingAgreement.id_contratista = data.id_contratista
      app.amendingAgreement.id_area_revisora = data.id_area_revisora
      /* const { data } = await fetchProjects()
      app.listProyects = data.map(projetc => ({ value: projetc.id_proyecto, label: `${projetc.clave_cartera} - ${projetc.nombre_proyecto}` }))
      app.listProyects.sort((a, b) => {
        if (a.value > b.value) {
          return 1;
        }
        if (a.value < b.value) {
          return -1;
        }
        // a must be equal to b
        return 0;
      }) */
    }
    const getProjects = async () => {
      const { data } = await fetchProjects()
      app.listProyects = data.map(projetc => ({ value: projetc.id_proyecto, label: `${projetc.clave_cartera} - ${projetc.nombre_proyecto}` }))
      app.listProyects.sort((a, b) => {
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
    const getContracts = async () => {
      const { data } = await fetchContracts()
      app.listConvenioContrato = data.map(convenioContrato => ({ value: convenioContrato.id_contrato, label: `${convenioContrato.id_contrato} - ${convenioContrato.numero_contrato}` }))
      app.listConvenioContrato.sort((a, b) => {
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

    getReviewAreas()
    getContratistas()
    getContracts()
    getProjects()

    return {
      app,
      sendForm,
      getReviewAreas,
      getContratistas,
      getContracts,
      getInfoContrato,
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