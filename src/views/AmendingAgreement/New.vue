<template>
  <main class="px-4 mt-10">
    <CustomHeaderApp />
    <title-bar title="Convenio Modificatorio" subtitle="Nuevo" />
    <section class="px-4">
      <form-amending-agreement @submit="saveAmendingAgreement" />
    </section>
  </main>
</template>

<script>
import FormAmendingAgreement from '../../components/AmendingAgreement/FormAmendingAgreement.vue'
import TitleBar from '../../components/TitleBar.vue'
import { storeContract } from '../../api/contract'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import CustomHeaderApp from '../../components/CustomHeaderApp.vue'

export default {
  name: 'NewAmendingAgreement',
  components: {
    FormAmendingAgreement,
    TitleBar,
    CustomHeaderApp,
  },
  setup() {
    const router = useRouter()
    const saveAmendingAgreement = async (amendingAgreement) => {
      try {
        await storeContract(amendingAgreement)
        Swal.fire(
          'Éxito!',
          'Convenio modificatorio guardado con éxito!',
          'success'
        )
        router.push({ name: 'AmendingAgreement' })
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
      saveAmendingAgreement,
    }
  },
}
</script>
