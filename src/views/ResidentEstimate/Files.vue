<template>
  <main class="px-4 mt-10">
    <div class="flex justify-between">
      <arrow-back />
      <logout-component/>
    </div>
    <title-bar title="Estimación Residente" subtitle="Archivos" />
    <section class="px-4">
      <div class=" flex flex-row justify-between">
        <div class="font-bold text-lg">
          {{ app.data.numero_contrato }}
        </div>
        <div class="font-bold text-lg w-128 text-center">
          Objeto: {{ app.data.objeto_contrato }}
        </div>
        <div class=" flex content-start justify-end items-center mb-10">
          <div class=" items-center justify-center">
            <h1 class=" font-bold text-lg text-center"> Número de la Estimación </h1>
            <p class=" text-center font-semibold text-lg numEstimacion">
              {{ app.data.num_consecutivo_estimacion }}
            </p>
          </div>
        </div>
      </div>
      <button-base label="Nuevo" @click="fileUpload()" class="mr-0 ml-auto mb-5" v-if="canAddNew" />
      <div v-if="filesResidente.length" class="flex flex-col py-px">
        <banner title="Documentos de Residente" />
        <table-base :options="featureOptions" :headers="headers" :data="filesResidente" :showOptions="canEditResidente" />
      </div>
      <div v-if="filesAreaRevisora.length">
        <banner title="Documentos de Área Revisora" />
        <table-base :options="featureOptions" :headers="headers" :data="filesAreaRevisora" :showOptions="canEditAreaRevisora" />
      </div>
      <div v-if="filesFinanzas.length">
        <banner title="Documentos de Finanzas" />
        <table-base :options="featureOptions" :headers="headers" :data="filesFinanzas" :showOptions="canEditFinanzas" />
      </div>
      <div v-if="filesDGPOP.length">
        <banner title="Documentos de Registro de Pago" />
        <table-base :options="featureOptions" :headers="headers" :data="filesDGPOP" :showOptions="canEditPago" />
      </div>
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
import LogoutComponent from '../../components/LogoutComponent.vue'
import { fetchResidentEstimateById, archivoResidentEstimate, fetchArchivoResidentEstimateById, deleteArchivoResidentEstimate } from '../../api/residentEstimate'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import Banner from '../../components/Banner.vue'
import { auth } from "../../store/auth";

export default {
  name: 'FilesResidentEstimate',
  components: {
    FormResident,
    ArrowBack,
    TitleBar,
    InputBase,
    TableBase,
    ButtonBase,
    Banner,
    LogoutComponent
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const authStore = auth();
    const headers = [
      {
        label: 'Id',
        field: 'id_archivo_estimacion',
      },
      {
        label: 'Nombre archivo',
        field: 'ruta_archivo_residente',
      },
      {
        label: 'Descripción',
        field: 'descripcion_archivo',
      },
    ]
    const app = reactive({
      file: {
        id_estimacion: '',
        file: '',
        descripcionFile: '',
      },
      data: {},
      filesById: [],
      loading: true,
      filesResidente: [],
      filesAreaRevisora: [],
      filesFinanzas: [],
      filesDGPOP: [],
    })
    const filesById = ref([])
    const filesResidente = ref([])
    const filesAreaRevisora = ref([])
    const filesFinanzas = ref([])
    const filesDGPOP = ref([])
    const { rol } = authStore.getAuthData
    const canAddNew = ref([])
    const canEditResidente = ref(false)
    const canEditAreaRevisora = ref(false)
    const canEditFinanzas = ref(false)
    const canEditPago = ref(false)
    const getResidentEstimateById = async () => {
      app.loading = true
      const { data } = await fetchResidentEstimateById(route.params.residentEstimateId)
      app.data = data
      app.file.id_estimacion = data.id_estimacion
      formData.append('id_estimacion', app.file.id_estimacion);
      app.loading = false
      canAddNew.value = isInYourArea(app.data.estatus_semaforo);
      canEditFiles();
      getDocumentsResidentEstimateById()
    }
    const getDocumentsResidentEstimateById = async () => {
      const { data } = await fetchArchivoResidentEstimateById(app.file.id_estimacion)
      filesById.value = data
            
      if(data.residente) {
        filesResidente.value = data.residente;
      }

      if(data.area_Revisora) {
        filesAreaRevisora.value = data.area_Revisora;
      }

      if(data.finanzas) {
        filesFinanzas.value = data.finanzas;
      }

      if(data.dgpop) {
        filesDGPOP.value = data.dgpop;
      }
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
          title: 'Subir Archivo',
          input: 'file',
          showCancelButton: true,
          reverseButtons: true,
          inputAttributes: {
            'accept': 'application/pdf',
            'aria-label': 'Upload your profile picture'
          }
        })
        if (file !== null && file !== undefined) {
          const { value: descripcionFile } = await Swal.fire({
            title: 'Descripción del archivo',
            input: 'text',
            showCancelButton: true,
            reverseButtons: true,
            inputValidator: (value) => {
              if (!value) {
                return 'El campo es requerido'
              }
            }
          })
          if (descripcionFile !== undefined) {
            /* Swal.fire(
              'No selesccionaste ningun archivo',
              'Agrega uno para continuar',
              'warning'
            ) */
            app.file.descripcionFile = descripcionFile
            app.file.file = file
            formData.append('archivo_estimacion ', app.file.file);
            formData.append('descripcion_archivo ', app.file.descripcionFile);
            try {
              await archivoResidentEstimate(formData)
              getDocumentsResidentEstimateById()
              Swal.fire(
                '¡Éxito!',
                '!Archivo guardado con éxito!',
                'success'
              )
              app.file.file = ''
              app.file.descripcionFile = ''
            } catch (error) {
              Swal.fire(
                'Error',
                `${error.response.data.detail}`,
                'error'
              )
              /* router.push({ name: 'AssignResident' }) */
            }
          }
        } else if (file === null) {
          Swal.fire(
            'No selesccionaste ningun archivo',
            'Agrega uno para continuar',
            'warning'
          )
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
        label: 'Descargar',
        action: async (files) => {
          window.open(`${files.archivo_estimacion}`, '_blank');
        },
      },
      {
        label: 'Eliminar',
        action: async (files) => {
          console.log('files: ',files);
          Swal.fire({
            title: `¿Estás seguro que desea eliminar el documento?`,
            text: "Esto quitará el documento",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Si, Eliminar!',
            reverseButtons: true,
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                await deleteArchivoResidentEstimate(files.id_archivo_estimacion)
                await getDocumentsResidentEstimateById()
                Swal.fire(
                  'Eliminado!',
                  'El documento se eliminó',
                  'success'
                )
              } catch (error) {
                Swal.fire(
                  'Error',
                  `${error.response.data.detail}`,
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

    const isInYourArea = (estatus_semaforo) => {
      var flag = false;
      if(estatus_semaforo === 'Residente' && rol == 'Residente') {
        flag = true;
      }
      if(estatus_semaforo === 'Area Revisora' && rol.includes('Área revisora')) {
        flag = true;
      }
      if((estatus_semaforo === 'Finanzas' || estatus_semaforo === 'DGPOP') && rol.includes('Finanzas')) {
        flag = true;
      }
      return flag;
    };

    const canEditFiles = () => {
      if(rol == 'Residente') {
        canEditResidente.value = true;
        canEditAreaRevisora.value = false;
        canEditFinanzas.value = false;
        canEditPago.value = false;
      }
      if(rol.includes('Área revisora')) {
        canEditResidente.value = false;
        canEditAreaRevisora.value = true;
        canEditFinanzas.value = false;
        canEditPago.value = false;
      }
      if(rol.includes('Finanzas')) {
        canEditResidente.value = false;
        canEditAreaRevisora.value = false;
        canEditFinanzas.value = true;
        canEditPago.value = true;
      }
    }

    getResidentEstimateById()

    return {
      app,
      filesById,
      saveResident,
      featureOptions,
      formData,
      headers,
      fileUpload,
      filesResidente,
      filesAreaRevisora,
      filesDGPOP,
      filesFinanzas,
      canAddNew,
      canEditResidente,
      canEditAreaRevisora,
      canEditFinanzas,
      canEditPago,
    }
  },
}
</script>
