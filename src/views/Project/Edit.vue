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
    <title-bar title="Proyectos" subtitle="Editar" />
    <section class="px-4">
      <form-project @submit="saveProject" :project="app.project" edit-mode v-if="!app.loading" />
    </section>
  </main>
</template>

<script>
import FormProject from '../../components/Project/FormProject.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { updateProject, fetchProjectById } from '../../api/project'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
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
    const route = useRoute()
    const router = useRouter()
    const app = reactive({
      project: {},
      loading: true,
    })
    const getProjectById = async () => {
      app.loading = true
      const { data } = await fetchProjectById(route.params.projectId)
      app.project = data
      app.loading = false
    }
    const saveProject = async (project) => {
      try {
        await updateProject(project)
        /* alert('Proyecto actualizado con ¡Éxito!') */
        Swal.fire(
          '¡Éxito!',
          'Proyecto actualizado con éxito!',
          'success'
        )
        router.push({ name: 'Projects' })
      } catch (error) {
        if (error.response.data.detail) {
          Swal.fire(
            'Error',
            `${error.response.data.detail}`,
            'error'
          )
        } else {
          let errors = []
          for (const [clave, valor] of Object.entries(error.response.data)) {
            errors.push(`\n${clave} - ${valor}\n`);
          }
          Swal.fire(
            'Error',
            `${errors}`,
            'error'
          )

        }
      }
    }

    getProjectById()

    return {
      app,
      rol,
      saveProject,
    }
  },
}
</script>
