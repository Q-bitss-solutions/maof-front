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
    <title-bar title="Residente" subtitle="Nuevo" />
    <section class="px-4">
      <form-resident @submit="saveResident" />
    </section>
  </main>
</template>

<script>
import FormResident from '../../components/Resident/FormResident.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { storeResident } from '../../api/resident'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import LogoutComponent from '../../components/LogoutComponent.vue'
import HomePage from '../../components/HomePage.vue'
import { auth } from '../../store/auth'



export default {
  name: 'NewResident',
  components: {
    FormResident,
    ArrowBack,
    TitleBar,
    HomePage,
    LogoutComponent
  },
  setup() {
    const authStore = auth();
    const { rol } = authStore.getAuthData
    const router = useRouter()
    const saveResident = async (resident) => {
      try {
        /* await storeReviewArea(reviewArea) */
        await storeResident(resident)
        /* alert('Residente guardado con exito!') */
        Swal.fire(
          '¡Éxito!',
          '¡Residente guardado con éxito!',
          'success'
        )
        router.push({ name: 'Resident' })
      } catch (error) {
        Swal.fire(
          'Error',
          `${error.response.data.detail}`,
          'error'
        )
      }
    }

    return {
      rol,
      saveResident,
    }
  },
}
</script>
