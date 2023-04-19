<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Estimación Residente" subtitle="Files" />
    <section class="px-4">
      <h1>files</h1>
      <button-base label="Nuevo" @click="fileUpload()" class="mr-0 ml-auto" />
      <table-base :options="featureOptions" :headers="headers" :data="filesById" />
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import FormResident from '../../components/Resident/FormResident.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import InputBase from '../../components/InputBase.vue'
import TableBase from '../../components/TableBase.vue'
import ButtonBase from '../../components/ButtonBase.vue'
import { fetchResidentEstimateById, archivoResidentEstimate, fetchArchivoResidentEstimateById, deleteArchivoResidentEstimate } from '../../api/residentEstimate'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export default {
  name: 'FilesResidentEstimate',
  components: {
    FormResident,
    ArrowBack,
    TitleBar,
    InputBase,
    TableBase,
    ButtonBase,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const headers = [
      {
        label: 'Id',
        field: 'id_archivo_estimacion',
      },
      {
        label: 'Documentos Residente',
        field: 'ruta_archivo_residente',
      },
      {
        label: 'Descripcion',
        field: 'descripcion_archivo',
      },
      {
        label: 'Estado',
        field: 'estatus_archivo',
      },
    ]
    const app = reactive({
      file: {
        id_estimacion: '',
        file: '',
        descripcionFile: '',
        estatus_archivo: true,
      },
      filesById: [],
      loading: true,
    })
    const filesById = ref([])
    const getResidentEstimateById = async () => {
      app.loading = true
      const { data } = await fetchResidentEstimateById(route.params.amendingAgreementId)
      app.file.id_estimacion = data.id_estimacion
      formData.append('id_estimacion', app.file.id_estimacion);
      app.loading = false
      getDocumentsResidentEstimateById()
    }
    const getDocumentsResidentEstimateById = async () => {
      const { data } = await fetchArchivoResidentEstimateById(app.file.id_estimacion)
      filesById.value = data
    }
    const saveResident = async (resident) => {
      await updateResident(resident)
      /* alert('Residente actualizado con exito!') */
      Swal.fire(
        '¡Éxito!',
        'Residente actualizado con éxito!',
        'success'
      )
      router.push({ name: 'Resident' })
    }
    let formData = new FormData()
    const fileUpload = async () => {
      /* app.resident.file */
      try {
        const { value: file } = await Swal.fire({
          title: 'Select file',
          input: 'file',
          showCancelButton: true,
          reverseButtons: true,
          inputAttributes: {
            'accept': 'pdf/*',
            'aria-label': 'Upload your profile picture'
          }
        })
        if (file !== undefined) {
          const { value: descripcionFile } = await Swal.fire({
            title: 'Descripcion del archivo',
            input: 'text',
            showCancelButton: true,
            reverseButtons: true,
          })
          app.file.descripcionFile = descripcionFile
          app.file.file = file
          console.log(app.file.file)
          console.log(app.file.descripcionFile)
          formData.append('archivo_estimacion ', app.file.file);
          formData.append('descripcion_archivo ', app.file.descripcionFile);
        }
        try {
          await archivoResidentEstimate(formData)
          Swal.fire(
            '¡Éxito!',
            '!Archivo guardado con éxito!',
            'success'
          )
        } catch (error) {
          Swal.fire(
            'Error',
            `${error.response.data.detail}`,
            'error'
          )
          /* router.push({ name: 'AssignResident' }) */
        }

      } catch (error) {

      }

    }
    const featureOptions = [
      /* {
        label: 'Editar',
        action: (resident) => {
          if (resident.estado_residente === 'Activo') {
            router.push({
            name: 'EditResident',
            params: {
              residentId: resident.id_residente,
            },
          })
          } else {
            return ''
            
          }
        }
      }, */
      {
        label: 'Eliminar',
        action: async (files) => {
          Swal.fire({
            title: `Estás seguro que desea inactivar el residente "${files.nombre_completo}"?`,
            text: "Esto finalizara las asignaciones del residente",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Si, Inactivar!',
            reverseButtons: true,
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                console.log('Files Delete: ', files)
                await deleteArchivoResidentEstimate(files.id_archivo_estimacion)
                await getDocumentsResidentEstimateById()
                Swal.fire(
                  '¡Inactivo!',
                  'El residente se inactivó',
                  'success'
                )
              } catch (error) {
                Swal.fire(
                  'Error',
                  `${error.response.data.message}`,
                  'error'
                )
              }
            }
          })
          /* if (confirm(`Estas seguro que desea eliminar el residente "${resident.nombre_completo}"?,esto finalizara las asignaciones del residente`)) {
            await deleteResident(resident.id_residente)
            await getResident()
          } */
        },
      },
    ]

    getResidentEstimateById()

    return {
      app,
      filesById,
      saveResident,
      featureOptions,
      formData,
      headers,
      fileUpload,
    }
  },
}
</script>
