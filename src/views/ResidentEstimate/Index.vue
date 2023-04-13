<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Estimación Residente" subtitle="Inicio" />
    <section class="px-4">
      <button-base label="Nueva Estimación Residente" @click="goToNewResidentEstimate" class="mb-3 mr-0 ml-auto" />
      <table-base :options="featureOptions" :headers="headers" :data="residentEstimate" />
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import TableBase from '../../components/TableBase.vue'
import { fetchResident, deleteResident } from './../../api/resident'
import ArrowBack from '../../components/ArrowBack.vue'
import ButtonBase from '../../components/ButtonBase.vue'
import { useRouter } from 'vue-router'
import TitleBar from '../../components/TitleBar.vue'
import Swal from 'sweetalert2'

export default {
  name: 'ResidentEstimateIndex',
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
    const residentEstimate = ref([])
    const getResidentEstimate = async () => {
      const { data } = await fetchResidentEstimate()
      residentEstimate.value = data
    }
    const featureOptions = [
      {
        label: 'Editar',
        action: (residentEstimate) => router
          .push({
            name: 'EditResidentEstimate',
            params: {
              residentEstimateId: residentEstimate.id_residentEstimate,
            },
          }),
      },
      {
        label: 'Eliminar',
        action: async (residentEstimate) => {
          Swal.fire({
            title: `Estas seguro que desea inactivar la Estimación Residente "${residentEstimate.nombre_completo}"?`,
            text: "Esto finalizara las asignaciones del residente",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Inactivar!'
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                await deleteResident(residentEstimate.id_residentEstimate)
                await getResident()
                Swal.fire(
                  'Inactivo!',
                  'El residente se inactivó',
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
          /* if (confirm(`Estas seguro que desea eliminar el residente "${resident.nombre_completo}"?,esto finalizara las asignaciones del residente`)) {
            await deleteResident(resident.id_residente)
            await getResident()
          } */
        },
      },
    ]
    const goToNewResidentEstimate = () => router.push({ name: 'NewResidentEstimate' })

    /* getResident() */

    return {
      residentEstimate,
      featureOptions,
      headers,
      goToNewResidentEstimate,
    }
  },
}
</script>
