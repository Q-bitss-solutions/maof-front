<template>
  <main class="px-4 mt-10">
    <CustomHeaderApp />
    <title-bar title="Estimación Residente" subtitle="Nuevo" />
    <section class="px-4">
      <form-resident-estimate />
    </section>
  </main>
</template>

<script>
import FormResidentEstimate from '../../components/ResidentEstimate/FormResidentEstimate.vue'
import TitleBar from '../../components/TitleBar.vue'
import { storeResident } from '../../api/resident'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import CustomHeaderApp from '../../components/CustomHeaderApp.vue'



export default {
  name: 'NewResident',
  components: {
    FormResidentEstimate,
    TitleBar,
    CustomHeaderApp,
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
