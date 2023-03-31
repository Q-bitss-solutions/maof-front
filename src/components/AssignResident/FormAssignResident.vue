<template>
  <div class="max-w-xl mx-auto">
    <select-base id="id_contrato" label="Contrató" :options="app.listContract" v-model="app.assingResident.id_contrato"
      class="mb-3" />
    <select-base id="id_residente" label="Residente" :options="app.listResident" class="mb-3"
      v-model="app.assingResident.id_residente" />
    <input-base id="fecha_inicio_asignacion" label="Fecha de asignación del Residente" type="date" class="mb-3"
      v-model="app.assingResident.fecha_inicio_asignacion" />
    <div>
      <div>
        <input-base id="archivo_asignacion" label="Archivo" type="file" class="mb-3" accept="application/pdf" @change="fileUpload" />
      </div>
      <div v-if="editMode === true" class="flex flex-row justify-end">
        <span>
          {{ app.fileName[5] }}
        </span>
        <img src="../../assets/PDF.png" class="w-12 h-12 " @click="downloadFile">
      </div>
    </div>
    <button-base label="Guardar" @click="sendForm" class="mr-0 ml-auto" />
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
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
    assingResident: {
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
      assingResident: {
        id_contrato: '',
        id_residente: '',
        fecha_inicio_asignacion: '',
        archivo_asignacion: '',
      },
      fileName: '',
      fileURl: '',
      listResident: [],
      listContract: [],
    })
    let formData = new FormData()
    if (props.editMode) {
      app.assingResident = props.assingResident
      app.fileURl = app.assingResident.archivo_asignacion
      app.fileName = app.assingResident.archivo_asignacion.split('/')
      delete app.assingResident.archivo_asignacion
      formData.append('id_contrato', app.assingResident.id_contrato);
      formData.append('id_residente', app.assingResident.id_residente);
      formData.append('fecha_inicio_asignacion', app.assingResident.fecha_inicio_asignacion);
    }
    const sendForm = () => {
      formData.append('id_contrato', app.assingResident.id_contrato);
      formData.append('id_residente', app.assingResident.id_residente);
      formData.append('fecha_inicio_asignacion', app.assingResident.fecha_inicio_asignacion);
      emit('submit', formData)
      /* emit('submit', app.assingResident) */
    }

    const getContracts = async () => {
      const { data } = await fetchContracts()
      app.listContract = data.map(contract => ({ value: contract.id_contrato, label: contract.nombre_proyecto }))
    }

    const getResident = async () => {
      const { data } = await fetchResident()
      app.listResident = data.map(resident => ({ value: resident.id_residente, label: resident.nombre_completo }))
    }

    const fileUpload = (event) => {
      formData.append('archivo_asignacion', event.target.files[0]);
    }

    const downloadFile = async () => {
      window.open(`${app.fileURl}`, '_blank');
    }


    getContracts()
    getResident()

    return {
      app,
      formData,
      sendForm,
      getContracts,
      getResident,
      fileUpload,
      downloadFile,
    }
  },
}
</script>
