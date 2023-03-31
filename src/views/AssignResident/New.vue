<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Asignación Residente" subtitle="Nuevo" />
    <section class="px-4">
      <form-assign-resident @submit="saveAssingResident" />
    </section>
  </main>
</template>

<script>
import FormAssignResident from '../../components/AssignResident/FormAssignResident.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { storeAssingResident } from '../../api/assingResident'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'NewAssingResident',
  components: {
    FormAssignResident,
    ArrowBack,
    TitleBar,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const saveAssingResident = async (assingResident) => {
      /* await storeReviewArea(reviewArea) */
      console.log('assingResident: ',assingResident)
      await storeAssingResident(assingResident)
      alert('Residente guardado con exito!')
      router.push({ name: 'AssignResident' })
    }

    return {
      saveAssingResident,
    }
  },
}
</script>
