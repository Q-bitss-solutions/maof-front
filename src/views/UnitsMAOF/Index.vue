<template>
  <main class="px-4 mt-10">
    <div class="flex justify-between">
      <arrow-back  />
      <div>
        <home-page/>
        <logout-component/>
      </div>
    </div>
    <title-bar title="Unidades MAOF" subtitle="Inicio" />
    <section class="px-4">
      <button-base label="Nueva Unidad MAOF" @click="goToNewResident" class="mb-3 mr-0 ml-auto" />
      <table-base description="Unidades MAOF" :options="featureOptions" :headers="headers" :data="resident" />
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import TableBase from '../../components/TableBase.vue'
import { fetchSICTUnits, deleteSICTUnits } from './../../api/SICTUnits'
import ArrowBack from '../../components/ArrowBack.vue'
import HomePage from '../../components/HomePage.vue'
import ButtonBase from '../../components/ButtonBase.vue'
import { useRouter } from 'vue-router'
import TitleBar from '../../components/TitleBar.vue'
import Swal from 'sweetalert2'
import LogoutComponent from '../../components/LogoutComponent.vue'

export default {
  name: 'UnitMAOFIndex',
  components: {
    TableBase,
    ArrowBack,
    HomePage,
    ButtonBase,
    TitleBar,
    LogoutComponent
  },
  setup() {
    const router = useRouter()
    const headers = [
      {
        label: 'Id',
        field: 'clave_unidad',
      },
      {
        label: 'Unidad MAOF',
        field: 'unidad',
      },
      {
        label: 'Estatus',
        field: 'estado_unidad_maof',
      },
    ]
    const resident = ref([])
    const getUnits = async () => {
      const { data } = await fetchSICTUnits()
      resident.value = data
    }
    const featureOptions = [
      {
        label: 'Editar',
        action: (unit) => {
          router.push({
            name: 'EditUnitMAOF',
            params: {
              unityMAOFId: unit.id_unidad_maof,
            }
          })
        }
      },
      {
        label: 'Inactivar',
        action: async (unit) => {
          Swal.fire({
            title: `Estás seguro que deseas inactivar la unidad "${unit.unidad}"?`,
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
    const goToNewResident = () => router.push({ name: 'NewUnitMAOF' })

    getUnits()

    return {
      resident,
      featureOptions,
      headers,
      goToNewResident,
    }
  },
}
</script>
