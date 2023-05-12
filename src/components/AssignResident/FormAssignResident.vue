<template>
  <div class="max-w-xl mx-auto">
    <select-base id="id_contrato" label="Contrato" :options="app.listContract" v-model="app.assingResident.id_contrato"
      class="mb-3" />
    <!-- <span v-for="error in v$.id_contrato.$errors" :key="error.$uid" class="text-red text-lg">
      {{ error.$message }}
    </span> -->
    <select-base id="id_residente" label="Residente" :options="app.listResident" class="mb-3"
      v-model="app.assingResident.id_residente" />
    <input-base id="fecha_inicio_asignacion" label="Fecha de asignación del Residente" type="date" class="mb-3"
      v-model="app.assingResident.fecha_inicio_asignacion" />
    <div>
      <div>
        <input-base id="archivo_asignacion" label="Carga oficio de designación" type="file" class="mb-3"
          accept="application/pdf" @change="fileUpload" />
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
import useVuelidate from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

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
    /* const rules = {
      id_contrato: { required: helpers.withMessage('El id es requerido', required) },
      id_residente: { required },
    }
    const v$ = useVuelidate(rules, app.assingResident) */
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
    const sendForm = async () => {
      formData.append('id_contrato', app.assingResident.id_contrato);
      formData.append('id_residente', app.assingResident.id_residente);
      formData.append('fecha_inicio_asignacion', app.assingResident.fecha_inicio_asignacion);
      emit('submit', formData)
      /* const result = await v$.value.$validate()
      if (result) {
        emit('submit', formData)
        alert('Validation')

      } else {
        alert('no validation')
      } */
      /* emit('submit', app.assingResident) */
    }

    const getContracts = async () => {
      const { data } = await fetchContracts()
      app.listContract = data.map(contract => ({ value: contract.id_contrato, label: contract.nombre_proyecto }))
      app.listContract.sort((a, b) => {
        if (a.value > b.value) {
          return 1;
        }
        if (a.value < b.value) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
    }

    const getResident = async () => {
      const { data } = await fetchResident()
      app.listResident = data.map(resident => ({ value: resident.id_residente, label: resident.nombre_completo }))
      app.listResident.sort((a, b) => {
        if (a.value > b.value) {
          return 1;
        }
        if (a.value < b.value) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })
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
      /* v$, */
    }
  },
}
</script>
