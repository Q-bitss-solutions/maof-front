<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Residente" subtitle="Nuevo" />
    <section class="px-4">
      <form-assign-resident @submit="saveResident" />
    </section>
  </main>
</template>

<script>
import FormAssignResident from '../../components/AssignResident/FormAssignResident.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { storeReviewArea } from '../../api/reviewArea'
import { useRouter } from 'vue-router'

export default {
  name: 'NewResident',
  components: {
    FormAssignResident,
    ArrowBack,
    TitleBar,
  },
  setup() {
    const router = useRouter()
    const saveResident = async (resident) => {
      /* await storeReviewArea(reviewArea) */
      /* await storeResident(resident) */
      console.log('resident: ',resident)
      alert('Residente guardado con exito!')
      router.push({ name: 'Resident' })
    }

    return {
      saveResident,
    }
  },
}
</script>
