<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Estimación Residente" subtitle="Histórico" />
    <div class="mb-10">
      <div class="flex  items-center ">
        <p class="font-semibold text-center">Número de contrato (de origen)</p>
        <p class=" text-sm text-center ml-2">{{ app.residentEstimate.numero_contrato }}</p>
        <p class="font-semibold text-center ml-80 text-red">Número de la Estimación</p>
        <p class=" text-xl font-semibold text-red text-center ml-2">{{ app.residentEstimate.num_consecutivo_estimacion }}</p>
        <p class="font-semibold text-center ml-10 text-red">Días transcurridos</p>
        <p class=" text-sm font-semibold text-red text-center ml-4">{{ app.residentEstimate.dias_transcurridos }}</p>
      </div>
      <div class="flex  items-center ">
        <p class="font-semibold text-center">Objeto del contrato</p>
        <p class=" text-sm text-center ml-4">{{ app.residentEstimate.objeto_contrato }}</p>
      </div>
      <div class="flex  items-center ">
        <p class="font-semibold text-center ">Fecha de recepción</p>
        <p class=" text-sm text-center ml-2">{{ app.fecha_recepcion_info_contratista }}
        </p>
        <p class="font-semibold text-center ml-2 text-red">Fecha de autorización</p>
        <p class=" text-sm text-center ml-2 text-red">{{ app.residentEstimate.fecha_autorizacion_contratista }}</p>
        <p class="font-semibold text-center ml-2">Periodo de la Estimación</p>
        <p class=" text-sm text-center ml-2">{{ app.fecha_periodo_inicio_estimacion }}
        </p>
        <p class="font-semibold text-center ml-2">al</p>
        <p class=" text-sm text-center ml-2">{{ app.fecha_periodo_fin_estimacion }}
        </p>
      </div>
      <div class="flex  items-center ">
        <p class="font-semibold text-center">Importe de la obra ejecutada</p>
        <p class=" text-sm text-center ml-2">{{ app.residentEstimate.frt_importe_obra_ejecutada }}</p>
        <p class="font-semibold text-center ml-2">Importe a pagar</p>
        <p class=" text-sm text-center ml-2">{{ app.residentEstimate.frt_importe_pagar }}</p>
      </div>
      <div class="flex  items-center ">
        <p class="font-semibold text-center">% de avance físico</p>
        <p class=" text-sm text-center ml-2">{{ app.residentEstimate.porcentaje_avance_fisico }}%</p>
        <p class="font-semibold text-center ml-2">% de avance financiero</p>
        <p class=" text-sm text-center ml-2">{{ app.residentEstimate.porcensaje_avance_financiero }}%</p>
        <p class="font-semibold text-center  ml-2">% de grado de avance</p>
        <p class=" text-sm text-center ml-2">{{ app.residentEstimate.grado_avance_obra }}%</p>
        <p class="font-semibold text-center  ml-2">% de avance de la Estimación</p>
        <p class=" text-sm text-center ml-2">{{ app.residentEstimate.porcentaje_avance_estimacion }}%</p>
        <p class="font-semibold text-center  ml-2">% de avance de la Estimación acumulado</p>
        <p class=" text-sm text-center ml-2">{{ app.residentEstimate.porcentaje_avance_estimacion_acumulado }}%</p>
      </div>
    </div>
    <table-base-index class="mb-10"  :headers="headers" :data="app.residentEstimateHistory" :option="[]" />
    <!-- <form-resident-estimate :residentEstimate="app.residentEstimate" editMode v-if="!app.loading"/> -->
  </main>
</template>

<script>
import FormResidentEstimate from '../../components/ResidentEstimate/FormResidentEstimateSemaforoById.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import TableBaseIndex from '../../components/TableBaseIndex.vue'
import { fetchResidentEstimateById, fetchHistoryResidentEstimateById } from '../../api/residentEstimate'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export default {
  name: 'Historico',
  components: {
    FormResidentEstimate,
    ArrowBack,
    TitleBar,
    TableBaseIndex,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const app = reactive({
      residentEstimate: {},
      residentEstimateHistory: [],
      fecha_recepcion_info_contratista: '',
      fecha_periodo_inicio_estimacion: '',
      fecha_periodo_fin_estimacion: '',
      loading: true,
    })
    const headers = [
      {
        label: '#',
        field: '',
      },
      {
        label: 'Fecha',
        field: 'fecha_historial_estimacion',
      },
      {
        label: 'Estatus',
        field: 'estatus_historial_estimacion',
      },
      {
        label: 'Observaciones',
        field: 'observaciones_residente',
      },
    ]
    const getResidentById = async () => {
      app.loading = true
      const { data } = await fetchResidentEstimateById(route.params.residentEstimateId)
      app.residentEstimate = data
      app.fecha_recepcion_info_contratista = data.fecha_recepcion_info_contratista.split(" ")[0]
      app.fecha_periodo_inicio_estimacion = data.fecha_periodo_inicio_estimacion.split(" ")[0]
      app.fecha_periodo_fin_estimacion = data.fecha_periodo_fin_estimacion.split(" ")[0]
      app.loading = false
    }
    const getHistoryById = async () => {
      app.loading = true
      const { data } = await fetchHistoryResidentEstimateById(route.params.residentEstimateId)
      app.residentEstimateHistory = data
      app.loading = false
    }
    const saveResident = async (resident) => {
      await updateResident(resident)
      /* alert('Residente actualizado con exito!') */
      Swal.fire(
        '¡Éxito!',
        '!Estimación residente actualizado con éxito!',
        'success'
      )
      router.push({ name: 'Resident' })
    }

    getResidentById()
    getHistoryById()

    return {
      app,
      saveResident,
      headers,
    }
  },
}
</script>

<style scoped>
.text-sm {
  line-height: normal;
}
</style>
