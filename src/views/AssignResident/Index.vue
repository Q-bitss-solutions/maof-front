<template>
  <main class="px-4 mt-10">
    <div class="flex justify-between">
      <arrow-back />
      <home-page />
    </div>
    <title-bar title="Asignación Residente" subtitle="Inicio" />
    <section class="px-4">
      <button-base label="Nueva  Asignación" @click="goToNewAssingResident" class="mb-3 mr-0 ml-auto" />
      <table-base :options="featureOptions" :headers="headers" :data="assingResident" />
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import TableBase from '../../components/TableBase.vue'
import { fetchAssingResident } from './../../api/assingResident'
import ArrowBack from '../../components/ArrowBack.vue'
import HomePage from '../../components/HomePage.vue'
import ButtonBase from '../../components/ButtonBase.vue'
import { useRouter } from 'vue-router'
import TitleBar from '../../components/TitleBar.vue'

export default {
  name: 'AssignResidentIndex',
  components: {
    TableBase,
    ArrowBack,
    HomePage,
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
    const assingResident = ref([])
    const getAssingResident = async () => {
      const { data } = await fetchAssingResident()
      assingResident.value = data
    }
    const featureOptions = [
      {
        label: 'Editar',
        action: (assingResident) => {
          if (assingResident.estado_asignacion !== "Inactivo") {
            router.push({
              name: 'EditAssignResident',
              params: {
                assingResidentId: assingResident.id_asignacion_residente_contrato,
              },
            })
          }
        }
      },
      {
        label: 'Inactivar',
        action: async (assingResident) => router.push({
          name: 'DeleteAssignResident',
          params: {
            assingResidentId: assingResident.id_asignacion_residente_contrato
          }
        })
      },
      {
        label: 'PDF',
        action: async (assingResident) => {
          window.open(`${assingResident.archivo_asignacion}`, '_blank');
        },
      },
    ]
    const goToNewAssingResident = () => router.push({ name: 'NewAssignResident' })

    getAssingResident()
    return {
      assingResident,
      featureOptions,
      headers,
      goToNewAssingResident,
      getAssingResident,
    }
  },
}
</script>
