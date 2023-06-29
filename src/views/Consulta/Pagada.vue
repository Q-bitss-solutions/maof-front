<template>
  <main class="px-4 mt-10">
    <div class="flex justify-between">
      <arrow-back />
      <div>
        <home-page/>
        <logout-component/>
      </div>
    </div>
    <title-bar title="Estimación Residente" subtitle="Pagadas" />
    <section class="px-4">
      <div class=" flex justify-end">
        <detail-estimate :data="detalleEstimacionData" :isOpen="detalleEstimacion" @submit="detalleEstimacion = false" />
        <button-base label="Nueva Estimación Residente" @click="goToNewResidentEstimate" class="mb-3 mr-0 ml-auto" v-if="rol == 'Residente'"/>
      </div>
      <!-- <table-base :options="featureOptions" :headers="headers" /> -->
      <tablero-estimacion-residente :options="featureOptions" :headers="headers" :data="app.pagados"
        v-if="!app.loading" />
      <!-- <tablero-estimacion-residente  /> -->
    </section>
  </main>
</template>

<script>
import { ref } from 'vue';
import TableroEstimacionResidente from '../../components/ResidentEstimate/TableroEstimacionResidente.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import HomePage from '../../components/HomePage.vue'
import ButtonBase from '../../components/ButtonBase.vue'
import DetailEstimate from '../../components/ResidentEstimate/DetailEstimate.vue'
import { useRouter, useRoute } from 'vue-router'
import Swal from 'sweetalert2'
import { fetchResidentEstimateById } from "../../api/residentEstimate";
import { consultas } from '../../store/consultas';
import LogoutComponent from '../../components/LogoutComponent.vue';
import { auth } from '../../store/auth'
export default {
  name: 'ConsultasPagadosMAOF',
  components: {
    TableroEstimacionResidente,
    ArrowBack,
    HomePage,
    ButtonBase,
    TitleBar,
    DetailEstimate,
    LogoutComponent
  },
  setup() {
    const authStore = auth();
    const { rol } = authStore.getAuthData
    const app = ref({
      pagados: {},
      loading: true,
    });
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
    const featureOptions = [
      {
        label: 'Detalles',
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
        disabled: rol != 'Residente',
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
      {
        label: 'Histórico',
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
    const router = useRouter()
    const store = consultas()
    /*  const residentEstimate = ref([]) */
    const detalleEstimacionData = ref([])
    let detalleEstimacion = ref(false)
    const goToNewResidentEstimate = () => router.push({ name: 'NewResidentEstimate' })

    const getQuery = () => {
      // Utilizar el valor del parámetro como necesites
      app.value.loading = true
      app.value.pagados = store.filtros.pagados
      app.value.loading = false
    }
    getQuery()
    return {
      app,
      headers,
      featureOptions,
      detalleEstimacionData,
      detalleEstimacion,
      rol,
      goToNewResidentEstimate,
      getQuery,
    }
  },
}
</script>
