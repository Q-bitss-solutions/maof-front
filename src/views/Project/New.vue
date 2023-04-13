<template>
  <main class="px-4 mt-10">
    <arrow-back />
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

export default {
  name: 'EditProject',
  components: {
    FormProject,
    ArrowBack,
    TitleBar,
  },
  setup() {
    const router = useRouter()
    const saveProject = async (project) => {
      await storeProject(project)
      /* alert('Proyecto guardado con exito!') */
      Swal.fire(
        '¡Éxito!',
        '!Proyecto guardado con éxito!',
        'success'
      )
      router.push({ name: 'Projects' })
    }

    return {
      saveProject,
    }
  },
}
</script>
