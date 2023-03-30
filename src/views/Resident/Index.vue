<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Residente" subtitle="Inicio" />
    <section class="px-4">
      <button-base label="Nuevo Residente" @click="goToNewResident" class="mb-3 mr-0 ml-auto" />
      <table-base :options="featureOptions" :headers="headers" :data="resident" />
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import TableBase from '../../components/TableBase.vue'
import { fetchResident ,deleteResident } from './../../api/resident'
import ArrowBack from '../../components/ArrowBack.vue'
import ButtonBase from '../../components/ButtonBase.vue'
import { useRouter } from 'vue-router'
import TitleBar from '../../components/TitleBar.vue'

export default {
  name: 'ResidenteIndex',
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
        label: 'Id',
        field: 'id_residente',
      },
      {
        label: 'Nombre',
        field: 'nombre_completo',
      },
      {
        label: 'Unidad SICT',
        field: 'unidad_sict',
      },
      {
        label: 'Fecha de inicio',
        field: 'fecha_inicio_residente',
      },
      {
        label: 'Fecha de fin',
        field: 'fecha_fin_residente',
      },
      {
        label: 'Estado',
        field: 'estado_residente',
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
              residentId: resident.id_residente,
            },
          }),
      },
      {
        label: 'Eliminar',
        action: async (resident) => {
          if (confirm(`Estas seguro que desea eliminar el residente "${resident.nombre_completo}"?,esto finalizara las asignaciones del residente`)) {
            await deleteResident(resident.id_residente)
            await getResident()
          }
        },
      },
    ]
    const goToNewResident = () => router.push({ name: 'NewResident' })

    getResident()

    return {
      resident,
      featureOptions,
      headers,
      goToNewResident,
    }
  },
}
</script>
