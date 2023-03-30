<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Asignacion Residente" subtitle="Inicio" />
    <section class="px-4">
      <button-base label="Nueva  Asignacion" @click="goToNewResident" class="mb-3 mr-0 ml-auto" />
      {{ resident }}
      <table-base
        :options="featureOptions"
        :headers="headers"
        :data="resident"
      />
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import TableBase from '../../components/TableBase.vue'
import { fetchResident } from './../../api/resident'
import ArrowBack from '../../components/ArrowBack.vue'
import ButtonBase from '../../components/ButtonBase.vue'
import { useRouter } from 'vue-router'
import TitleBar from '../../components/TitleBar.vue'

export default {
  name: 'AssignResidentIndex',
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
        label: '# Contrato',
        field: 'numero_contrato',
      },
      {
        label: 'Id residente',
        field: 'id_residente',
      },
      {
        label: 'Nombre Residente',
        field: 'nombre_residente',
      },
      {
        label: 'Fecha de inicio',
        field: 'fecha_inicio_asignacion',
      },
      {
        label: 'Fecha de fin',
        field: 'fecha_fin_asignacion',
      },
      {
        label: 'Estado',
        field: 'estado_asignacion',
      },
    ]
    const resident = ref([])
    const getResident = async () => {
      const { data } = await fetchResident()
      resident.value = data
    }
    const featureOptions = [
      {
        label: 'Editar',
        action: (resident) => router
          .push({
            name: 'EditResident',
            params: {
              residentId: resident.id_proyecto,
            },
          }),
      },
      {
        label: 'Eliminar',
        action: async (resident) => {
          if (confirm(`Estas seguro que desea eliminar el proyecto "${resident.nombre_proyecto}"?`)) {
            await deleteProject(project.id_proyecto)
            await getProjects()
          }
        },
      },
    ]
    const goToNewResident = () => router.push({ name: 'NewAssignResident' })

    getResident
    return {
      resident,
      featureOptions,
      headers,
      goToNewResident,
    }
  },
}
</script>
