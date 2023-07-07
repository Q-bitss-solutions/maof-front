<template>
  <main class="px-4 mt-10">
    <CustomHeaderApp />
    <title-bar title="Residente" subtitle="Inicio" />
    <section class="px-4">
      <button-base label="Nuevo Residente" @click="goToNewResident" class="mb-3 mr-0 ml-auto" />
      <table-base description="Residentes" :options="featureOptions" :headers="headers" :data="resident" />
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import TableBase from '../../components/TableBase.vue'
import { fetchResident, deleteResident } from './../../api/resident'
import ButtonBase from '../../components/ButtonBase.vue'
import { useRouter } from 'vue-router'
import TitleBar from '../../components/TitleBar.vue'
import Swal from 'sweetalert2'
import CustomHeaderApp from '../../components/CustomHeaderApp.vue'



export default {
  name: 'ResidenteIndex',
  components: {
    TableBase,
    ButtonBase,
    TitleBar,
    CustomHeaderApp,
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
        label: 'Unidad MAOF',
        field: 'unidad_maof',
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
        action: (resident) => {
          if (resident.estado_residente === 'Activo') {
            router.push({
              name: 'EditResident',
              params: {
                residentId: resident.id_residente,
              },
            })
          } else {
            return ''

          }
        }
      },
      {
        label: 'Inactivar',
        action: async (resident) => {
          Swal.fire({
            title: `Estás seguro que deseas inactivar el residente "${resident.nombre_completo}"?`,
            text: "Esto finalizara las asignaciones del residente",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Si, Inactivar!',
            reverseButtons: true,
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                await deleteResident(resident.id_residente)
                await getResident()
                Swal.fire(
                  '¡Inactivo!',
                  'El residente se inactivó',
                  'success'
                )
              } catch (error) {
                Swal.fire(
                  'Error',
                  `${error.response.data.detail}`,
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
