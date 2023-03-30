<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Áreas revisoras" subtitle="Editar" />
    <section class="px-4">
      <form-resident @submit="saveReviewArea" :resident="app.resident" edit-mode v-if="!app.loading" />
    </section>
  </main>
</template>

<script>
import FormResident from '../../components/Resident/FormResident.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { updateReviewArea, fetchReviewAreaById } from '../../api/reviewArea'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'EditResident',
  components: {
    FormResident,
    ArrowBack,
    TitleBar,
  },
  setup() {
    const route = useRoute()
    const app = reactive({
      resident: {},
      loading: true,
    })
    const getReviewAreaById = async () => {
      app.loading = true
      const { data } = await fetchReviewAreaById(route.params.residentId)
      app.resident = data
      app.loading = false
      console.log(app)
    }
    const saveReviewArea = async (reviewArea) => {
      await updateReviewArea(resident)
    }

    getReviewAreaById()

    return {
      app,
      saveReviewArea,
    }
  },
}
</script>
