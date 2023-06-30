<template>
  <main class="px-4 mt-10">
    <div class="flex justify-between">
      <arrow-back />
      <div class="flex justify-center items-center">
        <p class=" text-black font-semibold mr-4 items-center content-center">{{ rol }}</p>
        <home-page />
        <logout-component />
      </div>
    </div>
    <title-bar title="Unidades MAOF" subtitle="Editar" />
    <section class="px-4">
      <form-units-m-a-o-f @submit="saveUnit" :unit="app.unit" edit-mode v-if="!app.loading" />
    </section>
  </main>
</template>

<script>
import FormUnitsMAOF from '../../components/UnitsMAOF/FormUnitsMAOF.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { updateSICTUnits, fetchSICTUnitsById } from './../../api/SICTUnits'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import LogoutComponent from '../../components/LogoutComponent.vue'
import HomePage from '../../components/HomePage.vue'
import { auth } from '../../store/auth'

export default {
  name: 'EditUnitMAOF',
  components: {
    FormUnitsMAOF,
    ArrowBack,
    TitleBar,
    HomePage,
    LogoutComponent
  },
  setup() {
    const authStore = auth();
    const { rol } = authStore.getAuthData
    const route = useRoute()
    const router = useRouter()
    const app = reactive({
      unit: {},
      loading: true,
    })
    const getUnitById = async () => {
      app.loading = true
      const { data } = await fetchSICTUnitsById(route.params.unityMAOFId)
      app.unit = data
      app.loading = false
    }
    const saveUnit = async (unit) => {
      try {
        await updateSICTUnits(unit)
        /* alert('Residente actualizado con exito!') */
        Swal.fire(
          '¡Éxito!',
          '¡Unidad actualizada con éxito!',
          'success'
        )
        router.push({ name: 'UnitsMAOF' })
      } catch (error) {
        Swal.fire(
          'Error',
          `Registro inactivo`,
          'error'
        )
      }
    }

    getUnitById()

    return {
      app,
      rol,
      saveUnit,
    }
  },
}
</script>
