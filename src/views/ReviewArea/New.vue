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
    <title-bar title="Áreas revisoras" subtitle="Nuevo" />
    <section class="px-4">
      <form-review-area @submit="saveReviewArea" />
    </section>
  </main>
</template>

<script>
import FormReviewArea from '../../components/ReviewArea/FormReviewArea.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { storeReviewArea } from '../../api/reviewArea'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import LogoutComponent from '../../components/LogoutComponent.vue'
import HomePage from '../../components/HomePage.vue'
import { auth } from '../../store/auth'

export default {
  name: 'NewReviewArea',
  components: {
    FormReviewArea,
    ArrowBack,
    TitleBar,
    HomePage,
    LogoutComponent
  },
  setup() {
    const authStore = auth();
    const { rol } = authStore.getAuthData
    const router = useRouter()
    const saveReviewArea = async (reviewArea) => {
      await storeReviewArea(reviewArea)
      /* alert('Área revisora guardada con ¡Éxito!') */
      Swal.fire(
        '¡Éxito!',
        '¡Área revisora guardada con éxito!',
        'success'
      )
      router.push({ name: 'ReviewAreas' })
    }

    return {
      rol,
      saveReviewArea,
    }
  },
}
</script>
