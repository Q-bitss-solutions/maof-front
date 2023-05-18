<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Usuarios y Roles MAOF" subtitle="Inicio" />
    <section class="px-4">
      <button-base label="Alta de Usuarios MAOF" @click="goToNewUserAndRols" class="mb-3 mr-0 ml-auto" />
      <table-base :options="featureOptions" :headers="headers" :data="userAndRols" />
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import TableBase from '../../components/TableBase.vue'
import { fetchSICTUnits, deleteSICTUnits } from './../../api/SICTUnits'
import ArrowBack from '../../components/ArrowBack.vue'
import ButtonBase from '../../components/ButtonBase.vue'
import { useRouter } from 'vue-router'
import TitleBar from '../../components/TitleBar.vue'
import Swal from 'sweetalert2'

export default {
  name: 'UnitMAOFIndex',
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
        field: 'clave_unidad',
      },
      {
        label: 'Nombre',
        field: 'unidad',
      },
      {
        label: 'Unidad MAOF',
        field: 'unidad',
      },
      {
        label: 'Correo',
        field: 'unidad',
      },
      {
        label: 'Rol MAOF',
        field: 'unidad',
      },
      {
        label: 'Estatus',
        field: 'estado_unidad_maof',
      },
    ]
    const userAndRols = ref([])
    const getUnits = async () => {
      const { data } = await fetchSICTUnits()
      userAndRols.value = data
    }
    const featureOptions = [
      {
        label: 'Editar',
        action: (unit) => {
          router.push({
            name: 'EditUnitMAOF',
            params: {
              userRolMAOFId: unit.id_unidad_maof,
            }
          })
        }
      },
      {
        label: 'Eliminar',
        action: async (unit) => {
          Swal.fire({
            title: `Estás seguro que desea inactivar la unidad "${unit.unidad}"?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Si, Inactivar!',
            reverseButtons: true,
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                await deleteSICTUnits(unit.id_unidad_maof)
                await getUnits()
                Swal.fire(
                  '¡Inactivo!',
                  'La unidad se inactivó',
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
    const goToNewUserAndRols = () => router.push({ name: 'NewUsersRolesMAOF' })

    getUnits()

    return {
      userAndRols,
      featureOptions,
      headers,
      goToNewUserAndRols,
    }
  },
}
</script>
