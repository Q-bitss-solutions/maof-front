<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Convenios de Colaboración" subtitle="Inicio" />
    <section class="px-4">
      <button-base label="Nuevo Convenio de Colaboración" @click="goToNewCollaborationAgreements" class="mb-3 mr-0 ml-auto" />
      <table-base :options="featureOptions" :headers="headers" :data="collaborationAgreements" />
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
  name: 'CollaborationAgreementsIndex',
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
        field: '',
      },
      {
        label: 'Tipo',
        field: '',
      },
      {
        label: 'Proyecto padre (Cartera de inversión)',
        field: '',
      },
      {
        label: 'Contratista',
        field: '',
      },
      {
        label: 'Unidad SICT',
        field: '',
      },
      {
        label: 'Número',
        field: '',
      },
      {
        label: 'Objeto',
        field: '',
      },
      {
        label: 'Monto (sin IVA)',
        field: '',
      },
      {
        label: 'Plazo de inicio',
        field: '',
      },
      {
        label: 'Plazo de fin',
        field: '',
      },
      {
        label: 'Estatus',
        field: '',
      },
    ]
    const collaborationAgreements = ref([])
    const getResident = async () => {
      const { data } = await fetchResident()
      collaborationAgreements.value = data
    }
    const featureOptions = [
      {
        label: 'Editar',
        action: (collaborationAgreements) => router
          .push({
            name: 'EditCollaborationAgreements',
            params: {
              collaborationAgreementId: collaborationAgreements.id_collaborationAgreementse,
            },
          }),
      },
      {
        label: 'Eliminar',
        action: async (resident) => {
          Swal.fire({
            title: `Estas seguro que desea inactivar el residente "${resident.nombre_completo}"?`,
            text: "Esto finalizara las asignaciones del residente",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Inactivar!'
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                await deleteResident(resident.id_residente)
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
    const goToNewCollaborationAgreements = () => router.push({ name: 'NewCollaborationAgreements' })

    /* getResident() */

    return {
      collaborationAgreements,
      featureOptions,
      headers,
      goToNewCollaborationAgreements,
    }
  },
}
</script>
