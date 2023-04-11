<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Convenio de Colaboración" subtitle="Nuevo" />
    <section class="px-4">
      <form-collaboration-agreements @submit="saveCollaborationAgreements" />
    </section>
  </main>
</template>

<script>
import FormCollaborationAgreements from '../../components/CollaborationAgreements/FormCollaborationAgreements.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { storeResident } from '../../api/resident'
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
      /* await storeResident(resident) */
      console.log(collaborationAgreements)
      Swal.fire(
        'Exito!',
        'Residente guardado con exito!',
        'success'
      )
      router.push({ name: 'CollaborationAgreements' })
    }

    return {
      saveCollaborationAgreements,
    }
  },
}
</script>
