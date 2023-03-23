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
      alert('Proyecto guardado con exito!')
      router.push({ name: 'Projects' })
    }

    return {
      saveProject,
    }
  },
}
</script>
