<template>
  <main class="px-4 mt-10">
    <CustomHeaderApp />
    <title-bar title="Contratos y Convenios de Colaboración" subtitle="Inicio" />
    <section class="px-4">
      <button-base label="Nuevo Contrato o Convenio de Colaboración" @click="goToNewCollaborationAgreements"
        class="mb-3 mr-0 ml-auto" />
      <table-base description="Contratos y convenios de colaboración" :options="featureOptions" :headers="headers"
        :data="collaborationAgreements" />
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import TableBase from '../../components/TableBase.vue'
import { fetchContracts, deleteContract } from './../../api/contract'
import ButtonBase from '../../components/ButtonBase.vue'
import { useRouter } from 'vue-router'
import TitleBar from '../../components/TitleBar.vue'
import Swal from 'sweetalert2'
import CustomHeaderApp from '../../components/CustomHeaderApp.vue'

export default {
  name: 'CollaborationAgreementsIndex',
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
        field: 'id_contrato',
      },
      {
        label: 'Tipo',
        field: 'tipo_contrato',
      },
      /* {
        label: '',
        field: 'numero_contrato'
      }, */
      {
        label: 'Proyecto padre (Cartera de inversión)',
        field: 'clave_cartera'
      },
      {
        label: 'Contratista',
        field: 'nombre_contratista',
      },
      {
        label: 'Unidad MAOF',
        field: 'nombre_unidad',
      },
      {
        label: 'Número',
        field: 'numero_contrato',
      },
      {
        label: 'Objeto',
        field: 'objeto_contrato',
      },
      {
        label: 'Monto (sin IVA)',
        field: 'monto_sin_iva',
      },
      {
        label: 'Plazo de inicio',
        field: 'plazo_inicio',
      },
      {
        label: 'Plazo de fin',
        field: 'plazo_fin',
      },
      {
        label: 'Estatus',
        field: 'estatus_contrato',
      },
    ]
    const collaborationAgreements = ref([])
    const getCollaborationAgreements = async () => {
      const { data } = await fetchContracts()
      collaborationAgreements.value = data
    }
    const featureOptions = [
      {
        label: 'Editar',
        action: (collaborationAgreements) => router
          .push({
            name: 'EditCollaborationAgreements',
            params: {
              collaborationAgreementsId: collaborationAgreements.id_contrato,
            },
          }),
      },
      {
        label: 'Inactivar',
        action: async (collaborationAgreements) => {
          Swal.fire({
            title: 'Se finalizará el Contrato o Convenio de Colaboración...',
            text: "¿Está usted seguro?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, !Finalizar!',
            reverseButtons: true,
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                await deleteContract(collaborationAgreements.id_contrato)
                await getCollaborationAgreements()
                Swal.fire(
                  'Inactivo!',
                  'El contrato o convenio de colaboración se inactivó',
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
    const goToNewCollaborationAgreements = () => router.push({ name: 'NewCollaborationAgreements' })

    getCollaborationAgreements()

    return {
      collaborationAgreements,
      featureOptions,
      headers,
      goToNewCollaborationAgreements,
    }
  },
}
</script>
