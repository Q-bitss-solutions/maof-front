<template>
  <main class="px-4 mt-10">
    <div class="flex justify-between">
      <arrow-back />
      <home-page />
    </div>
    <title-bar title="Consulta MAOF" subtitle="Inicio" />
    <section class="px-4">
      <!-- Pendientes Pagadas Total -->
      <div class="flex justify-center">
        <div class="px-10 text-green cursor-pointer" @click="getStatusEstimations()">
          <p class=" text-center">4</p>
          <h1 class=" text-center">Pendientes</h1>
        </div>
        <div class="px-10 text-red cursor-pointer" @click="getStatusEstimations()">
          <p class=" text-center">2</p>
          <h1 class=" text-center">Pagadas</h1>
        </div>
        <div class="px-10 cursor-pointer" @click="getStatusEstimations()">
          <p class=" text-center">6</p>
          <h1 class=" text-center">Total</h1>
        </div>
      </div>
      <!-- Filtro y Busqueda -->
      <div class="flex flex-col mt-20">
        <div class="flex justify-start items-center pb-10">
          <img src="../../assets/Filter.png" alt="filter" class=" w-10 items-center ">
          <select-base label="Filtros" class="text-center w-48 " id="filtros" />
        </div>
        <div class="flex justify-start items-center pt-10">
          <img src="../../assets/Search.png" alt="filter" class=" w-10 items-center">
          <h1 class="text-center font-bold text-lg">
            Busqueda
          </h1>
          <!-- <select-base label="Filtros" class="text-center w-48" id="filtros"/> -->
          <button-base label="Criterio de búsqueda" class="ml-5 border-gray text-black hover:bg-white hover:text-red"
            @click="showBusqueda" />
        </div>
      </div>
      <!-- Form Filtro -->
      <div>

      </div>
      <!-- Form Busqueda -->
    </section>
    <form-consulta-busqueda @submit="saveBusqueda" class="mt-20 w-full" v-if="showBusquedaValue" />
  </main>
</template>

<script>
import { ref } from 'vue'
import TableBase from '../../components/UsersAndRolsMAOF/TableUsers.vue'
import { fetchUser, deleteUser } from './../../api/users'
import ArrowBack from '../../components/ArrowBack.vue'
import HomePage from '../../components/HomePage.vue'
import SelectBase from '../../components/SelectBase.vue'
import ButtonBase from '../../components/ButtonBase.vue'
import { useRouter } from 'vue-router'
import TitleBar from '../../components/TitleBar.vue'
import FormConsultaBusqueda from '../../components/Consulta/FormConsultaBusqueda.vue'
import Swal from 'sweetalert2'

export default {
  name: 'UsersRolesMAOFIndex',
  components: {
    TableBase,
    ArrowBack,
    HomePage,
    ButtonBase,
    TitleBar,
    SelectBase,
    FormConsultaBusqueda,
  },
  setup() {
    const router = useRouter()
    const headers = [
      {
        label: 'Id',
        field: 'empleado_maof',
      }
    ]
    const userAndRols = ref([])
    let showBusquedaValue = ref(false)
    const getUserAndRols = async () => {
      const { data } = await fetchUser()
      userAndRols.value = data
    }
    const featureOptions = []
    const goToNewUserAndRols = () => router.push({ name: 'NewUsersRolesMAOF' })
    const getStatusEstimations = () => {
      console.log('Se muestra el resultado ');
    }
    const showBusqueda = () => {
      showBusquedaValue.value = !showBusquedaValue.value
      /* if (procesoVariable === true) {
        const { data } = await fetchResidentEstimateHojaViajeraInProgress(9)
        residentEstimate.value = data
      }
      if (procesoVariable === false) {
        getResidentEstimate()
      } */
      console.log('Se muestra el la busqueda  ');
    }
    const saveBusqueda = async (criterios) => {
      console.log('Criterios de busqueda: ', criterios);
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
    }
    getUserAndRols()

    return {
      userAndRols,
      featureOptions,
      headers,
      goToNewUserAndRols,
      getStatusEstimations,
      showBusqueda,
      showBusquedaValue,
      saveBusqueda,
    }
  },
}
</script>

<style >
label[for=filtros] {
  margin-top: 5px;
  width: 10px;
}

select[id=filtros] {
  width: 300px;
}
</style>
