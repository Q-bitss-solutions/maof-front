<template>
  <main class="px-4 mt-10">
    <CustomHeaderApp />
    <title-bar title="Asignación Residente" subtitle="Inactivar" />
    <section class="px-4">
      <delete-assign-resident @submit="saveAssingResident" :assingResident="app.assingResident" edit-mode
        v-if="!app.loading" />
    </section>
  </main>
</template>

<script>
import DeleteAssignResident from '../../components/AssignResident/DeleteAssignResident.vue'
import TitleBar from '../../components/TitleBar.vue'
import { updateAssingResident, fetchAssingResidentById } from '../../api/assingResident'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import CustomHeaderApp from '../../components/CustomHeaderApp.vue'



export default {
  name: 'DeleteAssingResident',
  components: {
    DeleteAssignResident,
    TitleBar,
    CustomHeaderApp,
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
    }
    const saveAssingResident = async (assingResident) => {
      await updateAssingResident(app.assingResident)
      /* alert('Eliminado con exito!') */
      Swal.fire(
        '¡Éxito!',
        'Asignacion inhabilitada con éxito!',
        'success'
      )
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
