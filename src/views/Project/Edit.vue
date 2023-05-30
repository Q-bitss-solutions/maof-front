<template>
  <main class="px-4 mt-10">
    <arrow-back />
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


export default {
  name: 'EditProject',
  components: {
    FormProject,
    ArrowBack,
    TitleBar,
  },
  setup() {
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
      saveProject,
    }
  },
}
</script>
