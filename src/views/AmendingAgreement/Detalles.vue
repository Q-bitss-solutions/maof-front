<template>
  <main class="px-4 mt-10">
    <div class="flex justify-between">
      <arrow-back />
      <logout-component/>
    </div>
    <title-bar title="Áreas revisoras" subtitle="Editar" />
    <section class="px-4">
      <!-- <form-amending-agreement @submit="saveAmendingAgreement" :amendingAgreement="app.amendingAgreement" edit-mode v-if="!app.loading" /> -->
    
    </section>
  </main>
</template>

<script>
import FormAmendingAgreement from '../../components/AmendingAgreement/FormAmendingAgreement.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { updateResident, fetchResidentById } from '../../api/resident'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import LogoutComponent from '../../components/LogoutComponent.vue'

export default {
  name: 'DetallesCollaborationAgreements',
  components: {
    FormAmendingAgreement,
    ArrowBack,
    TitleBar,
    LogoutComponent
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const app = reactive({
      amendingAgreement: {},
      loading: true,
    })
    const getAmendingAgreementById = async () => {
      app.loading = true
      const { data } = await fetchAmendingAgreementById(route.params.amendingAgreementId)
      app.amendingAgreement = data
      app.loading = false
    }
    const saveAmendingAgreement = async (amendingAgreement) => {
      await updateAmendingAgreement(amendingAgreement)
      /* alert('Residente actualizado con exito!') */
      Swal.fire(
        '¡Éxito!',
        'Residente actualizado con éxito!',
        'success'
      )
      router.push({ name: 'AmendingAgreement' })
    }

    getAmendingAgreementById()

    return {
      app,
      saveAmendingAgreement,
    }
  },
}
</script>
