<template>
  <main class="px-4 mt-10">
    <arrow-back :route="goToHome" />
    <title-bar title="Proyectos" subtitle="Inicio" />
    <section class="px-4">
      <button-base label="Nuevo proyecto" @click="goToNewProject" class="mb-3 mr-0 ml-auto" />
      <table-base :options="featureOptions" :headers="headers" :data="projects" />
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import TableBase from '../../components/TableBase.vue'
import { fetchProjects, deleteProject } from './../../api/project'
import ArrowBack from '../../components/ArrowBack.vue'
import ButtonBase from '../../components/ButtonBase.vue'
import { useRouter } from 'vue-router'
import TitleBar from '../../components/TitleBar.vue'
import Swal from 'sweetalert2'

export default {
  name: 'ProjectIndex',
  components: {
    TableBase,
    ArrowBack,
    ButtonBase,
    TitleBar,
  },
  setup() {
    const router = useRouter()
    const headers = [
      {
        label: 'Clave cartera',
        field: 'clave_cartera',
      },
      {
        label: 'Nombre proyecto',
        field: 'nombre_proyecto',
      },
      {
        label: 'Monto total inversión',
        field: 'monto_total_inversion',
      },
      {
        label: 'Estatus proyecto',
        field: 'estatus_proyecto',
      },
      {
        label: 'Fecha inicio',
        field: 'fecha_inicio_proyecto',
      },
      {
        label: 'Fecha fin',
        field: 'fecha_fin_proyecto',
      },
    ]
    const projects = ref([])
    const getProjects = async () => {
      const { data } = await fetchProjects()
      projects.value = data
    }
    const featureOptions = [
      {
        label: 'Editar',
        action: (project) => router
          .push({
            name: 'EditProject',
            params: {
              projectId: project.id_proyecto,
            },
          }),
      },
      {
        label: 'Eliminar',
        action: async (project) => {
          /* if (confirm(`Estas seguro que desea eliminar el proyecto "${project.nombre_proyecto}"?`)) {
            await deleteProject(project.id_proyecto)
            await getProjects()
          } */
          Swal.fire({
            title: `Estas seguro que desea eliminar el proyecto "${project.nombre_proyecto}"?`,
            text: "Esto eliminara el proyecto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!'
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                await deleteProject(project.id_proyecto)
                await getProjects()
                Swal.fire(
                  'Eliminado!',
                  'El proyecto se elimino',
                  'success'
                )
              } catch (error) {
                Swal.fire(
                  'Error',
                  `${error.response.data.message}`,
                  'error'
                )
              }
            }
          })
        },
      },
    ]
    const goToNewProject = () => router.push({ name: 'NewProject' })
    const goToHome = () => router.push({ name: 'Home' })

    getProjects()

    return {
      projects,
      featureOptions,
      headers,
      goToNewProject,
      goToHome,
    }
  },
}
</script>
