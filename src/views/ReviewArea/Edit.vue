<template>
  <main class="px-4 mt-10">
    <div class="flex justify-between">
      <arrow-back />
      <logout-component />
    </div>
    <title-bar title="Áreas revisoras" subtitle="Editar" />
    <section class="px-4">
      <form-review-area @submit="saveReviewArea" :reviewArea="app.reviewArea" edit-mode v-if="!app.loading" />
    </section>
  </main>
</template>

<script>
import FormReviewArea from '../../components/ReviewArea/FormReviewArea.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { updateReviewArea, fetchReviewAreaById } from '../../api/reviewArea'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import LogoutComponent from '../../components/LogoutComponent.vue'

export default {
  name: 'EditReviewArea',
  components: {
    FormReviewArea,
    ArrowBack,
    TitleBar,
    LogoutComponent
  },
  setup() {
    const route = useRoute()
    const app = reactive({
      reviewArea: {},
      loading: true,
    })
    const getReviewAreaById = async () => {
      app.loading = true
      const { data } = await fetchReviewAreaById(route.params.reviewAreaId)
      app.reviewArea = data
      app.loading = false
    }
    const saveReviewArea = async (reviewArea) => {
      await updateReviewArea(reviewArea)
    }

    getReviewAreaById()

    return {
      app,
      saveReviewArea,
    }
  },
}
</script>
