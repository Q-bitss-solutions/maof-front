<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Áreas revisoras" subtitle="Inició" />
    <section class="px-4">
      <button-base label="Nueva área revisora" @click="goToNewReviewArea" class="mb-3 mr-0 ml-auto" />
      <table-base
        :options="featureOptions"
        :headers="headers"
        :data="reviewAreas"
      />
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import TableBase from '../../components/TableBase.vue'
import { fetchReviewAreas } from './../../api/reviewArea'
import ArrowBack from '../../components/ArrowBack.vue'
import ButtonBase from '../../components/ButtonBase.vue'
import { useRouter } from 'vue-router'
import TitleBar from '../../components/TitleBar.vue'

export default {
  name: 'ReviewAreasIndex',
  components: {
    TableBase,
    ArrowBack,
    ButtonBase,
    TitleBar,
  },
  setup() {
    const router = useRouter()
    const headers = [
      {
        label: 'Nombre Unidad SICT',
        field: 'nombre_unidad',
      },
      {
        label: 'Estatus',
        field: 'estado_area_revisora',
      },
      {
        label: 'Fecha Inició',
        field: 'fecha_inicio_area_revisora',
      },
      {
        label: 'Fecha fin',
        field: 'fecha_fin_area_revisora',
      },
    ]
    const reviewAreas = ref([])
    const getReviewAreas = async () => {
      const { data } = await fetchReviewAreas()
      reviewAreas.value = data
    }
    const featureOptions = []
    const goToNewReviewArea = () => router.push({ name: 'NewReviewArea' })

    getReviewAreas()

    return {
      reviewAreas,
      featureOptions,
      headers,
      goToNewReviewArea,
    }
  },
}
</script>
