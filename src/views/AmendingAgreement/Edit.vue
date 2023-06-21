<template>
  <main class="px-4 mt-10">
    <div class="flex justify-between">
      <arrow-back />
      <logout-component/>
    </div>
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
import LogoutComponent from '../../components/LogoutComponent.vue'

export default {
  name: 'EditAmendingAgreement',
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

    getAmendingAgreementById()

    return {
      app,
      saveAmendingAgreement,
    }
  },
}
</script>
