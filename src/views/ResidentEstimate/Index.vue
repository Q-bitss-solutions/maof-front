<template>
  <main class="px-4 mt-10">
    <div class="flex justify-between">
      <arrow-back  />
      <div class="flex justify-center items-center">
        <p class=" text-black font-semibold mr-4 items-center content-center">{{ rol }}</p> 
        <home-page/>
        <logout-component/>
      </div>
    </div>
    <title-bar title="Estimación Residente" subtitle="Inicio" />
    <section class="px-4">
      <div class=" flex justify-end">
        <detail-estimate :data="detalleEstimacionData" :isOpen="detalleEstimacion" @submit="detalleEstimacion = false" />
        <button-base label="Nueva Estimación Residente" @click="goToNewResidentEstimate" class="mb-3 mr-0 ml-auto" v-if="rol == 'Residente'"/>
        <toggle-switch label="En Proceso" @change="processo" class="mb-3 mr-0 ml-10" :placeholder="'En Proceso'" />
      </div>
      <!-- <table-base :options="featureOptions" :headers="headers" /> -->
      <tablero-estimacion-residente :options="featureOptions" :headers="headers" :data="residentEstimate" />
      <!-- <tablero-estimacion-residente  /> -->
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import TableroEstimacionResidente from '../../components/ResidentEstimate/TableroEstimacionResidente.vue'
import TableBase from '../../components/TableBase.vue'
import {fetchResidentEstimateById, fetchResidentEstimateHojaViajeraInProgress, fetchResidentEstimateHojaViajeraActivos } from './../../api/residentEstimate'
import ArrowBack from '../../components/ArrowBack.vue'
import HomePage from '../../components/HomePage.vue'
import ButtonBase from '../../components/ButtonBase.vue'
import ToggleSwitch from '../../components/ToggleSwtich.vue'
import DetailEstimate from '../../components/ResidentEstimate/DetailEstimate.vue'
import LogoutComponent from '../../components/LogoutComponent.vue'
import { useRouter } from 'vue-router'
import TitleBar from '../../components/TitleBar.vue'
import Swal from 'sweetalert2'
import { auth } from '../../store/auth'

export default {
  name: 'ResidentEstimateIndex',
  components: {
    TableroEstimacionResidente,
    ArrowBack,
    HomePage,
    ButtonBase,
    TitleBar,
    TableBase,
    ToggleSwitch,
    DetailEstimate,
    LogoutComponent
  },
  setup() {
    const authStore = auth();
    const { rol } = authStore.getAuthData
    const router = useRouter()
    const headers = [
      {
        label: '#',
        field: '',
      },
      {
        label: 'Contrato o Convenio de Colaboración',
        field: 'numero_contrato',
      },
      {
        label: 'Convenio Modificatorio',
        field: 'numero_contrato_padre',
      },
      {
        label: ' ',
        field: 'documents',
      },
      {
        label: '# Estimación',
        field: 'num_consecutivo_estimacion',
      },
      {
        label: 'Inicio',
        field: 'fecha_periodo_inicio_estimacion',
      },
      {
        label: 'Fin',
        field: 'fecha_periodo_fin_estimacion',
      },
      {
        label: 'Alta',
        field: 'fecha_alta',
      },
      {
        label: 'Fecha de autorización',
        field: 'fecha_autorizacion_contratista',
      },
      {
        label: 'Días transcurridos',
        field: 'dias_transcurridos',
      },
      {
        label: 'RESIDENTE',
        field: 'estatus_semaforo',
      },
      {
        label: 'ÁREA REVISORA',
        field: 'estatus_semaforo',
      },
      {
        label: 'FINANZAS',
        field: 'estatus_semaforo',
      },
      {
        label: 'TRÁMITE DE PAGO',
        field: 'estatus_semaforo',
      },
      {
        label: 'PAGO',
        field: 'estatus_semaforo',
      },
    ]
    const residentEstimate = ref([])
    const detalleEstimacionData = ref([])
    let procesoVariable = false
    let detalleEstimacion = ref(false)
    const getResidentEstimate = async () => {
      const { data } = await fetchResidentEstimateHojaViajeraActivos()
      residentEstimate.value = data
    }
    const featureOptions = [
      {
        label: 'Detalles',
        disabled: false,
        action: async (residentEstimate) => {
          detalleEstimacion.value = !detalleEstimacion.value
          const { data } = await fetchResidentEstimateById(residentEstimate.id_estimacion)
          data.fecha_recepcion_info_contratista = data.fecha_recepcion_info_contratista.split(" ")[0]
          data.fecha_periodo_inicio_estimacion = data.fecha_periodo_inicio_estimacion.split(" ")[0]
          data.fecha_periodo_fin_estimacion = data.fecha_periodo_fin_estimacion.split(" ")[0]
          detalleEstimacionData.value = data
        }
      },
      {
        label: 'Nuevo',
        disabled: rol != 'Residente' || residentEstimate.estatus_semafor != 'RESIDENTE',
        action: (residentEstimate) => router
          .push({
            name: 'NewResidentEstimateById',
            params: {
              residentEstimateId: residentEstimate.contrato_estimacion,
            },
          }),
      },
      {
        label: 'Archivo',
        disabled: false,
        action: async (residentEstimate) => {
          router.push({
            name: 'FilesResidentEstimate',
            params: {
              residentEstimateId: residentEstimate.id_estimacion,
            },
          })
        },
      },
      {
        label: 'Histórico',
        disabled: false,
        action: async (residentEstimate) => {
          router.push({
            name: 'HistoricoResidentEstimate',
            params: {
              residentEstimateId: residentEstimate.id_estimacion,
            },
          })
        },
      },
    ]
    const goToNewResidentEstimate = () => router.push({ name: 'NewResidentEstimate' })
    const processo = async () => {
      procesoVariable = !procesoVariable
      if (procesoVariable === true) {
        const { data } = await fetchResidentEstimateHojaViajeraInProgress(9)
        residentEstimate.value = data
      }
      if (procesoVariable === false) {
        getResidentEstimate()
      }
    }

    getResidentEstimate()

    return {
      residentEstimate,
      featureOptions,
      headers,
      goToNewResidentEstimate,
      getResidentEstimate,
      processo,
      procesoVariable,
      detalleEstimacionData,
      detalleEstimacion,
      rol
    }
  },
}
</script>
