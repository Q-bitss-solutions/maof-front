<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Asignacion Residente" subtitle="Eliminar" />
    <section class="px-4">
      <delete-assign-resident @submit="saveAssingResident" :assingResident="app.assingResident" edit-mode v-if="!app.loading" />
    </section>
  </main>
</template>

<script>
import DeleteAssignResident from '../../components/AssignResident/DeleteAssignResident.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { updateAssingResident, fetchAssingResidentById } from '../../api/assingResident'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'DeleteAssingResident',
  components: {
    DeleteAssignResident,
    ArrowBack,
    TitleBar,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const app = reactive({
      assingResident: {},
      loading: true,
    })
    const getReviewAreaById = async () => {
      app.loading = true
      const { data } = await fetchAssingResidentById(route.params.assingResidentId)
      app.assingResident = data
      app.loading = false
      console.log(app)
    }
    const saveAssingResident = async (assingResident) => {
      await updateAssingResident(app.assingResident)
      alert('Eliminado con exito!')
      router.push({ name: 'AssignResident' })
    }

    getReviewAreaById()

    return {
      app,
      saveAssingResident,
      
    }
  },
}
</script>
