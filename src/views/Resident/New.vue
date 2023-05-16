<template>
  <main class="px-4 mt-10">
    <arrow-back />
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

export default {
  name: 'NewResident',
  components: {
    FormResident,
    ArrowBack,
    TitleBar,
  },
  setup() {
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
      saveResident,
    }
  },
}
</script>
