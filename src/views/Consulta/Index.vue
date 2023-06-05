<template>
  <main class="px-4 mt-10">
    <div class="flex justify-between">
      <arrow-back />
      <home-page />
    </div>
    <title-bar title="Consulta MAOF" subtitle="Agenda de Estimaciones" />
    <section class="px-4">
      <dialog-base>
        <h2 class="text-lg font-bold mb-4">Título del diálogo</h2>
        <p class="text-gray-700">Contenido del diálogo.</p>
      </dialog-base>
      <!-- Pendientes Pagadas Total -->
      <div class="flex justify-center text-3xl">
        <div class="px-10 text-green cursor-pointer" @click="getStatusEstimations()">
          <p class="text-center">4</p>
          <h1 class="text-center">Pendientes</h1>
        </div>
        <div class="px-10 text-red cursor-pointer" @click="getStatusEstimations()">
          <p class="text-center">2</p>
          <h1 class="text-center">Pagadas</h1>
        </div>
        <div class="px-10 cursor-pointer" @click="getStatusEstimations()">
          <p class="text-center">6</p>
          <h1 class="text-center">Total</h1>
        </div>
      </div>
      <!-- Filtro y Busqueda -->
      <div class="flex flex-col mt-20">
        <!-- Filtro -->
        <div class="flex justify-start items-center pb-10">
          <img src="../../assets/Filter.png" alt="filter" class="w-10 items-center" />
          <select-base label="Filtros" class="text-center w-48 mr-10" id="filtros" :options="app.filtro.listFiltros"
            v-model="app.filtro.tipoDocumento" @change="getDocsByType(app.filtro.tipoDocumento)" />
          <select-base label="" class="text-center w-48 ml-36" id="filtrosDocs" :options="app.filtro.listDocsFiltrados"
            v-if="app.filtro.listDocsFiltrados != '' && app.filtro.tipoDocumento !== ''"
            v-model="app.filtro.filtroDocValue" />
          <button-base label="Aplicar" class=" border-gray text-black hover:bg-white hover:text-red" :class="{
            'ml-[36rem]': app.filtro.tipoDocumento === '1',
            ' ml-[3.7rem]': app.filtro.tipoDocumento !== '1' && app.filtro.filtroDocValue === '',
            ' ml-[0rem]': app.filtro.tipoDocumento !== '1' && app.filtro.filtroDocValue !== '',
            /* ' ml-[6.7rem]': app.filtro.tipoDocumento === '3' && app.filtro.filtroDocValue === '', */
            /* ' ml-[2.7rem]': app.filtro.tipoDocumento === '3' && app.filtro.filtroDocValue !== '', */
          }" v-if="app.filtro.listDocsFiltrados != '' && app.filtro.tipoDocumento !== ''"
            @click="saveFiltro(app.filtro.filtroDocValue)" />
          <button-base label="Aplicar" class="ml-40 border-gray text-black hover:bg-white hover:text-red"
            v-if="app.filtro.tipoDocumento === '4'" @click="saveFiltro(5)" />
        </div>
<!--         Id tipoDocumento {{ app.filtro.tipoDocumento }}
        <br />
        id filtroDocValue {{ app.filtro.filtroDocValue }} -->
        <!-- Busqueda -->
        <div class="flex justify-start items-center pt-10">
          <img src="../../assets/Search.png" alt="filter" class="w-10 items-center" />
          <h1 class="text-center font-bold text-lg">Búsqueda</h1>
          <!-- <select-base label="Filtros" class="text-center w-48" id="filtros"/> -->
          <button-base label="Criterio de búsqueda" class="ml-5 border-gray text-black hover:bg-white hover:text-red"
            @click="showBusqueda" />
        </div>
      </div>
      <div class="flex justify-center">
        <!-- Form Busqueda -->
        <form-consulta-busqueda @submit="saveBusqueda" class="mt-20 " v-if="showBusquedaValue" />
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
import { fetchProjectsActive } from "./../../api/project";
import { fetchContracts } from "./../../api/contract";
import DialogBase from "../../components/DialogBase.vue"
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
    DialogBase,
  },
  setup() {
    const router = useRouter();
    const headers = [
      {
        label: "Id",
        field: "empleado_maof",
      },
    ];
    const app = ref({
      filtro: {
        tipoDocumento: '',
        listFiltros: [
          { value: 2, label: "Contrato o Convenio de Colaboración" },
          { value: 3, label: "Convenio Modificatorio" },
          { value: 4, label: "Esperando una acción" },
          { value: 1, label: "Proyecto / Cartera de inversión" },
        ],
        listDocsFiltrados: [],
        filtroDocValue: '',
      },
    });
    let showBusquedaValue = ref(false);
    const featureOptions = [];
    const getStatusEstimations = () => {
      console.log("Se muestra el resultado ");
    };
    const getDocsByType = async (id) => {
      if (showBusquedaValue.value === true) {
        showBusquedaValue.value = false
      }
      switch (id) {
        case "1":
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con valor 1
          app.value.filtro.listDocsFiltrados = [];
          app.value.filtro.filtroDocValue = ''
          getProjects();
          break;
        case "2":
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con valor 2
          app.value.filtro.listDocsFiltrados = [];
          app.value.filtro.filtroDocValue = ''
          getContracts(id);
          break;
        case "3":
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con valor 3
          app.value.filtro.listDocsFiltrados = [];
          app.value.filtro.filtroDocValue = ''
          getContracts(id);
          break;
        case "4":
          app.value.filtro.listDocsFiltrados = [];
          app.value.filtro.filtroDocValue = ''
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con valor 4
          break;
        default:
          //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
          console.log("No se encontro nada");
          break;
      }
    };
    const getProjects = async () => {
      const { data } = await fetchProjectsActive();
      app.value.filtro.listDocsFiltrados = data.map((project) => ({
        value: project.id_proyecto,
        label: `${project.clave_cartera}-${project.nombre_proyecto}`,
      }));
    };
    const getContracts = async (id) => {
      const { data } = await fetchContracts();
      if (id === "2") {
        data.forEach((contract) => {
          if (contract.id_tipo_contrato !== 3) {
            app.value.filtro.listDocsFiltrados.push({
              value: contract.id_contrato,
              label: contract.numero_contrato,
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
        });
      }
      if (id === "3") {
        data.forEach((contract) => {
          if (contract.id_tipo_contrato === 3) {
            app.value.filtro.listDocsFiltrados.push({
              value: contract.id_contrato,
              label: contract.numero_contrato,
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
        });
      }
    };
    const showBusqueda = () => {
      app.value.filtro.tipoDocumento = ''
      app.value.filtro.filtroDocValue = ''
      showBusquedaValue.value = !showBusquedaValue.value;
      /* if (procesoVariable === true) {
        const { data } = await fetchResidentEstimateHojaViajeraInProgress(9)
        residentEstimate.value = data
      }
      if (procesoVariable === false) {
        getResidentEstimate()
      } */
      console.log("Se muestra el la busqueda  ");
    };
    const saveBusqueda = async (criterios) => {
      console.log("Criterios de busqueda: ", criterios);
      /* try {
        await storeProject(project)
        Swal.fire(
          '¡Éxito!',
          '!Proyecto guardado con éxito!',
          'success'
        )
        router.push({ name: 'Projects' })
    
      } catch (error) {
        Swal.fire(
          'Error',
          `${error.response.data.detail}`,
          'error'
        )
      } */
    };
    const saveFiltro = (id) => {
      /*  const { data } = await fetchProjectsActive(id); */
      console.log('Consulta con el id seleccionado: ', id)
    }

    return {
      app,
      featureOptions,
      headers,
      /* listFiltros, */
      showBusquedaValue,
      getStatusEstimations,
      showBusqueda,
      saveBusqueda,
      saveFiltro,
      getDocsByType,
      getProjects,
      getContracts,
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
