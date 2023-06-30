<template>
  <main class="px-4 mt-10">
    <div class="flex justify-between">
      <arrow-back />
      <div class="flex justify-center items-center">
        <p class="text-black font-semibold mr-4 items-center content-center">
          {{ rol }}
        </p>
        <home-page />
        <logout-component />
      </div>
    </div>
    <title-bar title="Consulta MAOF" subtitle="Agenda de Estimaciones" />
    <section class="px-4">
      <!-- Pendientes Pagadas Total -->
      <div class="flex justify-center text-3xl" v-if="!app.loading">
        <div class="px-10 text-red cursor-pointer" @click="
          getStatusEstimations(app.filtro.data.pendientes, 'pendientes')
          ">
          <p class="text-center">{{ app.filtro.data.pendientes.length }}</p>
          <h1 class="text-center">Pendientes</h1>
        </div>
        <div class="px-10 text-green cursor-pointer" @click="getStatusEstimations(app.filtro.data.pagados, 'pagadas')">
          <p class="text-center">{{ app.filtro.data.pagados.length }}</p>
          <h1 class="text-center">Pagadas</h1>
        </div>
        <div class="px-10 cursor-pointer" @click="getStatusEstimations(app.filtro.data.totales, 'totales')">
          <p class="text-center">{{ app.filtro.data.totales.length }}</p>
          <h1 class="text-center">Total</h1>
        </div>
      </div>
      <!-- Filtro y Busqueda -->
      <div class="flex flex-col mt-20">
        <!-- Filtro -->
        <Filtro :filtro="app.filtro" :getDocsByType="getDocsByType" :saveFiltro="saveFiltro" />
        <!-- :esperandoAccion="esperandoAccion" -->
        <!-- Busqueda -->
        <Busqueda :showBusquedaValue="showBusquedaValue" :showBusqueda="showBusqueda" :saveBusqueda="saveBusqueda" />
      </div>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
import TableBase from "../../components/UsersAndRolsMAOF/TableUsers.vue";
import ArrowBack from "../../components/ArrowBack.vue";
import HomePage from "../../components/HomePage.vue";
import SelectBase from "../../components/SelectBase.vue";
import ButtonBase from "../../components/ButtonBase.vue";
import { useRouter } from "vue-router";
import TitleBar from "../../components/TitleBar.vue";
import FormConsultaBusqueda from "../../components/Consulta/FormConsultaBusqueda.vue";
import Swal from "sweetalert2";
import { fetchProjects } from "./../../api/project";
import { fetchContracts } from "./../../api/contract";
import { fetchFiltroAll, fetchBusqueda } from "../../api/consulta";
import { consultas } from "../../store/consultas";
import { auth } from "../../store/auth";
import Filtro from "../../components/Consulta/Filtro.vue";
import Busqueda from "../../components/Consulta/Busqueda.vue";
import LogoutComponent from "../../components/LogoutComponent.vue";

export default {
  name: "UsersRolesMAOFIndex",
  components: {
    TableBase,
    ArrowBack,
    HomePage,
    ButtonBase,
    TitleBar,
    SelectBase,
    FormConsultaBusqueda,
    Filtro,
    Busqueda,
    LogoutComponent,
  },
  setup() {
    const router = useRouter();
    const store = consultas();
    const authStore = auth();
    const { rol } = authStore.getAuthData;
    const app = ref({
      filtro: {
        tipoDocumento: "",
        listFiltros: [
          { value: 2, label: "Contrato o Convenio de Colaboración" },
          { value: 3, label: "Convenio Modificatorio" },
          /* { value: 4, label: "Esperando una acción" }, */
          { value: 1, label: "Proyecto / Cartera de inversión" },
        ],
        listDocsFiltrados: [],
        filtroDocValue: "",
        data: {
          pendientes: [],
          pagados: [],
          totales: [],
        },
      },
      loading: true,
    });

    let showBusquedaValue = ref(false);

    const getStatusEstimations = (estimacion, estatus) => {
      switch (estatus) {
        case "pendientes":
          if (estimacion.length > 0) {
            store.addPendientes(estimacion);
            router.push({
              name: "ConsultasPedientesMAOF",
            });
          } else {
            Swal.fire(
              "No hay estimaciones",
              "Intenta con otro filtro",
              "warning"
            );
          }
          break;
        case "pagadas":
          if (estimacion.length > 0) {
            store.addPagados(estimacion);
            router.push({
              name: "ConsultasPagadosMAOF",
            });
          } else {
            Swal.fire(
              "No hay estimaciones",
              "Intenta con otro filtro",
              "warning"
            );
          }
          break;
        case "totales":
          if (estimacion.length > 0) {
            store.addTotal(estimacion);
            router.push({
              name: "ConsultasTotalesMAOF",
            });
          } else {
            Swal.fire(
              "No hay estimaciones",
              "Intenta con otro filtro",
              "warning"
            );
          }
          break;

        default:
          console.log("opcion invalida");
          break;
      }
    };
    const getDocsByType = async (id) => {
      if (showBusquedaValue.value === true) {
        showBusquedaValue.value = false;
      }
      switch (id) {
        case "1":
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con valor 1
          app.value.filtro.listDocsFiltrados = [];
          app.value.filtro.filtroDocValue = "";
          getProjects();
          break;
        case "2":
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con valor 2
          app.value.filtro.listDocsFiltrados = [];
          app.value.filtro.filtroDocValue = "";
          getContracts(id);
          break;
        case "3":
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con valor 3
          app.value.filtro.listDocsFiltrados = [];
          app.value.filtro.filtroDocValue = "";
          getContracts(id);
          break;
        case "4":
          app.value.filtro.listDocsFiltrados = [];
          app.value.filtro.filtroDocValue = "";
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con valor 4
          break;
        default:
          //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
          console.log("No se encontro nada");
          break;
      }
    };

    const getProjects = async () => {
      const params = {
        estatus_proyecto: 3,
        activate_filters: true
      }
      try {
        const { data } = await fetchProjects(params);
        app.value.filtro.listDocsFiltrados = data.map((project) => ({
          value: project.id_proyecto,
          label: `${project.clave_cartera}-${project.nombre_proyecto}`,
        }));
      } catch (error) {
        Swal.fire("Error", `${error.response.data.detail}`, "error");
        app.value.filtro.tipoDocumento = "";
        app.value.filtro.filtroDocValue = "";
      }
    };

    const getContracts = async (id) => {
      const params = { activate_filters: true }
      try {
        const { data } = await fetchContracts(params);
        if (id === "2") {
          data.forEach((contract) => {
            if (contract.id_tipo_contrato !== 3) {
              app.value.filtro.listDocsFiltrados.push({
                value: contract.id_contrato,
                label: contract.numero_contrato,
              });
            }
          });
          app.value.filtro.listDocsFiltrados.sort((a, b) => {
            if (a.label > b.label) {
              return 1;
            }
            if (a.label < b.label) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
        }
        if (id === "3") {
          data.forEach((contract) => {
            if (contract.id_tipo_contrato === 3) {
              app.value.filtro.listDocsFiltrados.push({
                value: contract.id_contrato,
                label: contract.numero_contrato,
              });
            }
          });
          app.value.filtro.listDocsFiltrados.sort((a, b) => {
            if (a.label > b.label) {
              return 1;
            }
            if (a.label < b.label) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
        }
      } catch (error) {
        Swal.fire("Error", `${error.response.data.detail}`, "error");
        app.value.filtro.tipoDocumento = "";
        app.value.filtro.filtroDocValue = "";
      }
    };

    const showBusqueda = () => {
      app.value.filtro.tipoDocumento = "";
      app.value.filtro.filtroDocValue = "";
      showBusquedaValue.value = !showBusquedaValue.value;
      /* if (procesoVariable === true) {
        const { data } = await fetchResidentEstimateHojaViajeraInProgress(9)
        residentEstimate.value = data
      }
      if (procesoVariable === false) {
        getResidentEstimate()
      } */
    };

    const infoToStore = (pendiente, pagado, total) => {
      store.addPendientes(pendiente);
      store.addPagados(pagado);
      store.addTotal(total);
    };

    const getFiltroDefault = async () => {
      app.value.loading = true;
      try {
        const { data } = await fetchFiltroAll();
        app.value.filtro.data.totales = data.total;
        app.value.filtro.data.pagados = data.pagadas;
        app.value.filtro.data.pendientes = data.pendiente;
        infoToStore(data.pendiente, data.pagadas, data.total);
      } catch (error) {
        Swal.fire("Error", `${error.response.data.detail}`, "error");
        router.push({
          name: "Home",
        })
      }
      app.value.loading = false;
    };

    const saveBusqueda = async (criterios) => {
      //Funcion para construir los parametros enviados
      const params = Object.entries(criterios)
        .filter(([clave, valor]) => {
          if (Array.isArray(valor)) {
            return valor.length > 0;
          } else {
            return valor !== "";
          }
        })
        .reduce((resultado, [clave, valor]) => {
          if (Array.isArray(valor)) {
            resultado[clave] = valor.join(",");
          } else {
            resultado[clave] = valor;
          }
          return resultado;
        }, {});
      try {
        const { data } = await fetchBusqueda(params);
        store.addBusqueda(data);
        router.push({
          name: "ConsultasBusquedaMAOF",
        });
      } catch (error) {
        Swal.fire("Error", `${error.response.data.detail}`, "error");
        showBusqueda()
      }
    };

    const saveFiltro = async (id_doc, id_typeDoc) => {
      app.value.loading = true;
      let params = {};
      if (id_typeDoc === "1") {
        params = { id_proyecto: id_doc };
      } else if (id_typeDoc === "2" || id_typeDoc === "3") {
        params = { id_contrato: id_doc };
      }
      const { data } = await fetchFiltroAll(params);
      app.value.filtro.data.totales = data.total;
      app.value.filtro.data.pagados = data.pagadas;
      app.value.filtro.data.pendientes = data.pendiente;
      infoToStore(data.pendiente, data.pagadas, data.total);
      app.value.loading = false;
    };

    getFiltroDefault();

    return {
      app,
      showBusquedaValue,
      rol,
      getStatusEstimations,
      showBusqueda,
      saveBusqueda,
      saveFiltro,
      getDocsByType,
      getProjects,
      getContracts,
      getFiltroDefault,
      infoToStore,
    };
  },
};
</script>

<style>
label[for="filtros"] {
  margin-top: 5px;
  width: 10px;
}

select[id="filtros"] {
  width: 300px;
}

select[id="filtrosDocs"] {
  width: fit-content;
}
</style>
