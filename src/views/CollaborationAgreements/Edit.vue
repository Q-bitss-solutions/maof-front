<template>
  <main class="px-4 mt-10">
    <CustomHeaderApp />
    <title-bar title="Contratos y Convenios de colaboración" subtitle="Editar" />
    <section class="px-4">
      <form-collaboration-agreements @submit="saveCollaborationAgreement"
        :collaborationAgreements="app.collaborationAgreements" edit-mode v-if="!app.loading" />
    </section>
  </main>
</template>

<script>
import FormCollaborationAgreements from '../../components/CollaborationAgreements/FormCollaborationAgreements.vue'
import TitleBar from '../../components/TitleBar.vue'
import { updateContract, fetchContractById } from '../../api/contract'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import CustomHeaderApp from '../../components/CustomHeaderApp.vue'


export default {
  name: 'EditCollaborationAgreement',
  components: {
    FormCollaborationAgreements,
    TitleBar,
    CustomHeaderApp,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const app = reactive({
      collaborationAgreements: {},
      loading: true,
    })
    const getCollaborationAgreementsById = async () => {
      app.loading = true
      const { data } = await fetchContractById(route.params.collaborationAgreementsId)
      app.collaborationAgreements = data
      app.loading = false
    }
    const saveCollaborationAgreement = async (collaborationAgreements) => {
      try {
        await updateContract(collaborationAgreements)
        /* alert('Residente actualizado con exito!') */
        Swal.fire(
          '¡Éxito!',
          'Convenio de colaboración actualizado con éxito!',
          'success'
        )
        router.push({ name: 'CollaborationAgreements' })
      } catch (error) {
        if (error.response.data.detail) {
          Swal.fire(
            'Error',
            `${error.response.data.detail}`,
            'error'
          )
        } else {
          let errors = []
          for (const [clave, valor] of Object.entries(error.response.data)) {
            errors.push(`\n${clave} - ${valor}\n`);
          }
          Swal.fire(
            'Error',
            `${errors}`,
            'error'
          )

        }
      }
    }

    getCollaborationAgreementsById()

    return {
      app,
      saveCollaborationAgreement,
    }
  },
}
</script>
