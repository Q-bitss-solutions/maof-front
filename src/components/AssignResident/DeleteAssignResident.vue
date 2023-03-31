<template>
  <div class="max-w-xl mx-auto">
    <select-base id="id_contrato" label="Contrató" :options="app.listContract" v-model="app.assingResident.id_contrato"
      class="mb-3" disabled />
    <select-base id="id_residente" label="Residente" :options="app.listResident" class="mb-3"
      v-model="app.assingResident.id_residente" disabled />
    <input-base id="fecha_inicio_asignacion" label="Fecha de asignación del Residente" type="date" class="mb-3"
      v-model="app.assingResident.fecha_inicio_asignacion" disabled />
    <div>
      <div>
        <input-base id="archivo_asignacion" label="Archivo" type="file" class="mb-3"
          :value="app.assingResident.archivo_asignacion" disabled />
      </div>
      <div v-if="editMode === true" class="flex flex-row justify-end">
        <span>
          {{ app.fileName[5] }}
        </span>
        <img src="../../assets/PDF.png" class="w-12 h-12 " @click="downloadFile">
      </div>
    </div>
    <div>
      <h4 class="text-2xl mt-4">¿Seguro de eliminar el registro?</h4>
    </div>
    <button-base label="Eliminar" @click="deleteRegister" class="mr-0 ml-auto" />
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import InputBase from '../InputBase.vue'
import ButtonBase from '../ButtonBase.vue'
import SelectBase from '../SelectBase.vue'
import { fetchResident } from '../../api/resident'
import { fetchContracts } from '../../api/contract'
import { deleteAssingResident } from '../../api/assingResident'
import { useRoute, useRouter } from 'vue-router'

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
    const route = useRoute()
    const router = useRouter()
    const app = reactive({
      assingResident: {
        id_contrato: '',
        id_residente: '',
        fecha_inicio_asignacion: '',
        archivo_asignacion: '',
      },
      fileName: '',
      listResident: [],
      listContract: [],
    })
    let formData = new FormData()
    if (props.editMode) {
      app.assingResident = props.assingResident
      app.fileName = props.assingResident.archivo_asignacion.split('/')
    }
    const deleteRegister = async () => {
      /* formData.append('id_contrato', app.assingResident.id_contrato);
      formData.append('id_residente', app.assingResident.id_residente);
      formData.append('fecha_inicio_asignacion', app.assingResident.fecha_inicio_asignacion);
      console.log('formData id_contrato: ', formData)
      emit('submit', formData) */
      /* emit('submit', app.assingResident) */
      if (confirm(`Estas seguro que desea eliminar el registro?`)) {
        await deleteAssingResident(app.assingResident.id_asignacion_residente_contrato)
        alert('Eliminado con exito!')
        router.push({ name: 'AssignResident' })
      }
    }

    const getContracts = async () => {
      const { data } = await fetchContracts()
      app.listContract = data.map(contract => ({ value: contract.id_contrato, label: contract.nombre_proyecto }))
    }

    const getResident = async () => {
      const { data } = await fetchResident()
      app.listResident = data.map(resident => ({ value: resident.id_residente, label: resident.nombre_completo }))
    }

    const downloadFile = async () => {
      window.open(`${app.assingResident.archivo_asignacion}`, '_blank');
    }


    getContracts()
    getResident()

    return {
      app,
      formData,
      getContracts,
      getResident,
      downloadFile,
      deleteRegister,
    }
  },
}
</script>
