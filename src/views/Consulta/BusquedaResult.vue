<template>
  <main class="px-4 mt-10">
    <CustomHeaderApp />
    <title-bar title="Estimación Residente" subtitle="Busqueda" />
    <section class="px-4">
      <div class="flex justify-end">
        <detail-estimate :data="detalleEstimacionData" :isOpen="detalleEstimacion" @submit="detalleEstimacion = false" />
        <toggle-switch label="En Proceso" @change="processo" class="mb-3 mr-0 ml-10" />
      </div>
      <tablero-estimacion-residente :options="featureOptions" :headers="headers" :data="app.busqueda"
        v-if="!app.loading" />
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
import TableroEstimacionResidente from "../../components/ResidentEstimate/TableroEstimacionResidente.vue";
import TitleBar from "../../components/TitleBar.vue";
import ButtonBase from "../../components/ButtonBase.vue";
import ToggleSwitch from "../../components/ToggleSwtich.vue";
import DetailEstimate from "../../components/ResidentEstimate/DetailEstimate.vue";
import { useRouter, useRoute } from "vue-router";
import { fetchResidentEstimateById } from "../../api/residentEstimate";
import { consultas } from "../../store/consultas";
import CustomHeaderApp from '../../components/CustomHeaderApp.vue'

export default {
  name: "ConsultasBusquedaMAOF",
  components: {
    TableroEstimacionResidente,
    ButtonBase,
    TitleBar,
    DetailEstimate,
    ToggleSwitch,
    CustomHeaderApp,
  },
  setup() {
    const app = ref({
      busqueda: {},
      loading: true,
    });
    const headers = [
      {
        label: "#",
        field: "",
      },
      {
        label: "Contrato o Convenio de Colaboración",
        field: "numero_contrato",
      },
      {
        label: "Convenio Modificatorio",
        field: "numero_contrato_padre",
      },
      {
        label: " ",
        field: "documents",
      },
      {
        label: "# Estimación",
        field: "num_consecutivo_estimacion",
      },
      {
        label: "Inicio",
        field: "fecha_periodo_inicio_estimacion",
      },
      {
        label: "Fin",
        field: "fecha_periodo_fin_estimacion",
      },
      {
        label: "Alta",
        field: "fecha_alta",
      },
      {
        label: "Fecha de autorización",
        field: "fecha_autorizacion_contratista",
      },
      {
        label: "Días transcurridos",
        field: "dias_transcurridos",
      },
      {
        label: "RESIDENTE",
        field: "estatus_semaforo",
      },
      {
        label: "ÁREA REVISORA",
        field: "estatus_semaforo",
      },
      {
        label: "FINANZAS",
        field: "estatus_semaforo",
      },
      {
        label: "TRÁMITE DE PAGO",
        field: "estatus_semaforo",
      },
      {
        label: "PAGO",
        field: "estatus_semaforo",
      },
    ];
    const featureOptions = [
      {
        label: "Detalles",
        action: async (residentEstimate) => {
          detalleEstimacion.value = !detalleEstimacion.value;
          const { data } = await fetchResidentEstimateById(
            residentEstimate.id_estimacion
          );
          data.fecha_recepcion_info_contratista =
            data.fecha_recepcion_info_contratista.split(" ")[0];
          data.fecha_periodo_inicio_estimacion =
            data.fecha_periodo_inicio_estimacion.split(" ")[0];
          data.fecha_periodo_fin_estimacion =
            data.fecha_periodo_fin_estimacion.split(" ")[0];
          detalleEstimacionData.value = data;
        },
      },
      {
        label: "Nuevo",
        action: (residentEstimate) =>
          router.push({
            name: "NewResidentEstimateById",
            params: {
              residentEstimateId: residentEstimate.contrato_estimacion,
            },
          }),
      },
      {
        label: "Archivo",
        action: async (residentEstimate) => {
          router.push({
            name: "FilesResidentEstimate",
            params: {
              residentEstimateId: residentEstimate.id_estimacion,
            },
          });
        },
      },
      {
        label: "Histórico",
        action: async (residentEstimate) => {
          router.push({
            name: "HistoricoResidentEstimate",
            params: {
              residentEstimateId: residentEstimate.id_estimacion,
            },
          });
        },
      },
    ];
    const router = useRouter();
    const store = consultas();
    const detalleEstimacionData = ref([]);
    let detalleEstimacion = ref(false);
    let procesoVariable = false;

    const processo = async () => {
      procesoVariable = !procesoVariable;
      if (procesoVariable === true) {
        app.value.loading = true;
        app.value.busqueda = app.value.busqueda.filter(
          (item) => item.estatus_semaforo !== "Pago Efectuado"
        );
        app.value.loading = false;
      }
      if (procesoVariable === false) {
        getQuery();
      }
    };
    const goToNewResidentEstimate = () =>
      router.push({ name: "NewResidentEstimate" });

    const getQuery = () => {
      // Utilizar el valor del parámetro como necesites
      app.value.loading = true;
      console.log(store.busqueda);
      app.value.busqueda = store.busqueda;
      app.value.loading = false;
    };

    getQuery();

    return {
      app,
      procesoVariable,
      headers,
      featureOptions,
      detalleEstimacionData,
      detalleEstimacion,
      goToNewResidentEstimate,
      getQuery,
      processo,
    };
  },
};
</script>
