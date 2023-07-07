<template>
  <main class="px-4 mt-10">
    <CustomHeaderApp />
    <title-bar title="Proyectos" subtitle="Nuevo" />
    <section class="px-4">
      <form-project @submit="saveProject" />
    </section>
  </main>
</template>

<script>
import FormProject from '../../components/Project/FormProject.vue'
import { storeProject } from '../../api/project'
import TitleBar from '../../components/TitleBar.vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import CustomHeaderApp from '../../components/CustomHeaderApp.vue'


export default {
  name: 'EditProject',
  components: {
    FormProject,
    TitleBar,
    CustomHeaderApp,
  },
  setup() {
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
      saveProject,
    }
  },
}
</script>
