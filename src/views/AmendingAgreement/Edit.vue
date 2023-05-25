<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Convenio Modificatorio" subtitle="Editar" />
    <section class="px-4">
      <form-amending-agreement @submit="saveAmendingAgreement" :amendingAgreement="app.amendingAgreement" edit-mode
        v-if="!app.loading" />
    </section>
  </main>
</template>

<script>
import FormAmendingAgreement from '../../components/AmendingAgreement/FormAmendingAgreement.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { updateContract, fetchContractById } from '../../api/contract'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export default {
  name: 'EditAmendingAgreement',
  components: {
    FormAmendingAgreement,
    ArrowBack,
    TitleBar,
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
      const { data } = await fetchContractById(route.params.amendingAgreementId)
      app.amendingAgreement = data
      app.loading = false
    }
    const saveAmendingAgreement = async (amendingAgreement) => {
      /* amendingAgreement.id_contratista = parseInt(amendingAgreement.id_contratista) */

      try {
        await updateContract(amendingAgreement)
        /* alert('Residente actualizado con exito!') */
        Swal.fire(
          '¡Éxito!',
          'Convenio modificatorio actualizado con éxito!',
          'success'
        )
        router.push({ name: 'AmendingAgreement' })
      } catch (error) {
        Swal.fire(
          'Error',
          `${error.response.data.detail}`,
          'error'
        )
      }
    }

    getAmendingAgreementById()

    return {
      app,
      saveAmendingAgreement,
    }
  },
}
</script>
