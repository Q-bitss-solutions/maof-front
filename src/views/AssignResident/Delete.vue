<template>
  <main class="px-4 mt-10">
    <div class="flex justify-between">
      <arrow-back />
      <div class="flex justify-center items-center">
        <p class=" text-black font-semibold mr-4 items-center content-center">{{ rol }}</p>
        <home-page />
        <logout-component />
      </div>
    </div>
    <title-bar title="Asignación Residente" subtitle="Inactivar" />
    <section class="px-4">
      <delete-assign-resident @submit="saveAssingResident" :assingResident="app.assingResident" edit-mode
        v-if="!app.loading" />
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
import Swal from 'sweetalert2'
import LogoutComponent from '../../components/LogoutComponent.vue'
import HomePage from '../../components/HomePage.vue'
import { auth } from '../../store/auth'



export default {
  name: 'DeleteAssingResident',
  components: {
    DeleteAssignResident,
    ArrowBack,
    TitleBar,
    HomePage,
    LogoutComponent
  },
  setup() {
    const authStore = auth();
    const { rol } = authStore.getAuthData
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
      rol,
      saveAssingResident,

    }
  },
}
</script>
