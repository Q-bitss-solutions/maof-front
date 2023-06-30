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
    <title-bar title="Unidades MAOF" subtitle="Nuevo" />
    <section class="px-4">
      <form-units-m-a-o-f @submit="saveUnit" />
    </section>
  </main>
</template>

<script>
import FormUnitsMAOF from '../../components/UnitsMAOF/FormUnitsMAOF.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { storeSICTUnits } from './../../api/SICTUnits'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import LogoutComponent from '../../components/LogoutComponent.vue'
import HomePage from '../../components/HomePage.vue'
import { auth } from '../../store/auth'

export default {
  name: 'NewUnitMAOF',
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
    const router = useRouter()
    const saveUnit = async (unit) => {
      /* await storeReviewArea(reviewArea) */
      await storeSICTUnits(unit)
      /* alert('Residente guardado con exito!') */
      Swal.fire(
        '¡Éxito!',
        '¡Unidad guardada con éxito!',
        'success'
      )
      router.push({ name: 'UnitsMAOF' })
    }

    return {
      rol,
      saveUnit,
    }
  },
}
</script>
