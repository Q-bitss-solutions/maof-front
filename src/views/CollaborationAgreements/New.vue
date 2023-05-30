<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Contratos y Convenios de colaboración" subtitle="Nuevo" />
    <section class="px-4">
      <form-collaboration-agreements @submit="saveCollaborationAgreements" />
    </section>
  </main>
</template>

<script>
import FormCollaborationAgreements from '../../components/CollaborationAgreements/FormCollaborationAgreements.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { storeContract } from '../../api/contract'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export default {
  name: 'NewFormCollaborationAgreements',
  components: {
    FormCollaborationAgreements,
    ArrowBack,
    TitleBar,
  },
  setup() {
    const router = useRouter()
    const saveCollaborationAgreements = async (collaborationAgreements) => {
      /* await storeCollaborationAgreements(collaborationAgreements) */
      /* Swal.fire(
        '¡Éxito!',
        'Residente guardado con éxito!',
        'success'
      ) */
      try {
        await storeContract(collaborationAgreements)
        Swal.fire(
          '¡Éxito!',
          'Convenio de colaboración guardado con éxito!',
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

    return {
      saveCollaborationAgreements,
    }
  },
}
</script>
