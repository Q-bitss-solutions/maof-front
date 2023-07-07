<template>
  <main class="px-4 mt-10">
    <CustomHeaderApp />
    <title-bar title="Áreas revisoras" subtitle="Nuevo" />
    <section class="px-4">
      <form-review-area @submit="saveReviewArea" />
    </section>
  </main>
</template>

<script>
import FormReviewArea from '../../components/ReviewArea/FormReviewArea.vue'
import TitleBar from '../../components/TitleBar.vue'
import { storeReviewArea } from '../../api/reviewArea'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import CustomHeaderApp from '../../components/CustomHeaderApp.vue'

export default {
  name: 'NewReviewArea',
  components: {
    FormReviewArea,
    TitleBar,
    CustomHeaderApp,
  },
  setup() {
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
      saveReviewArea,
    }
  },
}
</script>
