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
    <title-bar title="Proyectos" subtitle="Nuevo" />
    <section class="px-4">
      <form-project @submit="saveProject" />
    </section>
  </main>
</template>

<script>
import FormProject from '../../components/Project/FormProject.vue'
import { storeProject } from '../../api/project'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import LogoutComponent from '../../components/LogoutComponent.vue'
import HomePage from '../../components/HomePage.vue'
import { auth } from '../../store/auth'


export default {
  name: 'EditProject',
  components: {
    FormProject,
    ArrowBack,
    TitleBar,
    HomePage,
    LogoutComponent
  },
  setup() {
    const authStore = auth();
    const { rol } = authStore.getAuthData
    const router = useRouter()
    const saveProject = async (project) => {
      try {
        await storeProject(project)
        /* alert('Proyecto guardado con exito!') */
        Swal.fire(
          '¡Éxito!',
          '!Proyecto guardado con éxito!',
          'success'
        )
        router.push({ name: 'Projects' })

      } catch (error) {
        Swal.fire(
          'Error',
          `${error.response.data.detail}`,
          'error'
        )
      }
    }

    return {
      rol,
      saveProject,
    }
  },
}
</script>
