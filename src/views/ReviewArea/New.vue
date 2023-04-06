<template>
  <main class="px-4 mt-10">
    <arrow-back />
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

export default {
  name: 'NewReviewArea',
  components: {
    FormReviewArea,
    ArrowBack,
    TitleBar,
  },
  setup() {
    const router = useRouter()
    const saveReviewArea = async (reviewArea) => {
      await storeReviewArea(reviewArea)
      /* alert('Área revisora guardada con exito!') */
      Swal.fire(
        'Exito!',
        'Área revisora guardada con exito!',
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
