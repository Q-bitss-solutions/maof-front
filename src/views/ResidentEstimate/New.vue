<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Residente" subtitle="Nuevo" />
    <section class="px-4">
      <form-resident-estimate @submit="saveResident" />
    </section>
  </main>
</template>

<script>
import FormResidentEstimate from '../../components/ResidentEstimate/FormResidentEstimate.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { storeResident } from '../../api/resident'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export default {
  name: 'NewResident',
  components: {
    FormResidentEstimate,
    ArrowBack,
    TitleBar,
  },
  setup() {
    const router = useRouter()
    const saveResident = async (resident) => {
      /* await storeReviewArea(reviewArea) */
      await storeResident(resident)
      /* alert('Residente guardado con ¡Éxito!') */
      Swal.fire(
        '¡Éxito!',
        'Residente guardado con éxito!',
        'success'
      )
      router.push({ name: 'Resident' })
    }

    return {
      saveResident,
    }
  },
}
</script>
