<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Convenio Modificatorio" subtitle="Nuevo" />
    <section class="px-4">
      <form-amending-agreement @submit="saveAmendingAgreement" />
    </section>
  </main>
</template>

<script>
import FormAmendingAgreement from '../../components/AmendingAgreement/FormAmendingAgreement.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { storeContract } from '../../api/contract'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export default {
  name: 'NewAmendingAgreement',
  components: {
    FormAmendingAgreement,
    ArrowBack,
    TitleBar,
  },
  setup() {
    const router = useRouter()
    const saveAmendingAgreement = async (amendingAgreement) => {
      try {
        await storeContract(amendingAgreement)
        Swal.fire(
          'Exito!',
          'Convenio modificatorio guardado con éxito!',
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

    return {
      saveAmendingAgreement,
    }
  },
}
</script>
