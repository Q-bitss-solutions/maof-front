<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Estimación Residente" subtitle="Inicio" />
    <section class="px-4">
      <div class=" flex justify-end">
        <button-base label="Nueva Estimación Residente" @click="goToNewResidentEstimate" class="mb-3 mr-0 ml-auto" />
        <toggle-switch label="En Proceso" @change="processo" class="mb-3 mr-0 ml-10" />
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
import { fetchResidentEstimate, fetchResidentEstimateHojaViajera } from './../../api/residentEstimate'
import ArrowBack from '../../components/ArrowBack.vue'
import ButtonBase from '../../components/ButtonBase.vue'
import ToggleSwitch from '../../components/ToggleSwtich.vue'
import { useRouter } from 'vue-router'
import TitleBar from '../../components/TitleBar.vue'
import Swal from 'sweetalert2'

export default {
  name: 'ResidentEstimateIndex',
  components: {
    TableroEstimacionResidente,
    ArrowBack,
    ButtonBase,
    TitleBar,
    TableBase,
    ToggleSwitch,
  },
  setup() {
    const router = useRouter()
    const headers = [
      {
        label: '#',
        field: '',
      },
      {
        label: 'Contrato o Convenio de Colaboracion',
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
        label: 'Fecha de inicio',
        field: 'fecha_periodo_inicio_estimacion',
      },
      {
        label: 'Fecha de fin',
        field: 'fecha_periodo_fin_estimacion',
      },
      {
        label: 'Fecha de alta',
        field: 'fecha_autorizacion_contratista',
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
    let procesoVariable = false
    const getResidentEstimate = async () => {
      const { data } = await fetchResidentEstimateHojaViajera()
      console.log(data)
      residentEstimate.value = data
    }
    const featureOptions = [
     /*  {
        label: 'Detalles',
        action: (residentEstimate) => router
          .push({
            name: 'EditResidentEstimate',
            params: {
              residentEstimateId: residentEstimate.id_residentEstimate,
            },
          }),
      }, */
      {
        label: 'Nuevo',
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
        action: async (residentEstimate) => {
          router.push({
            name: 'FilesResidentEstimate',
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
      console.log(procesoVariable)
    }

    getResidentEstimate()

    return {
      residentEstimate,
      featureOptions,
      headers,
      goToNewResidentEstimate,
      getResidentEstimate,
      processo,
    }
  },
}
</script>
