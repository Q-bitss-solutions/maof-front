<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Catálogos" subtitle="Áreas Revisoras" />
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
      alert('Area revisora guardada con exito!')
      router.push({ name: 'ReviewAreas' })
    }

    return {
      saveReviewArea,
    }
  },
}
</script>
