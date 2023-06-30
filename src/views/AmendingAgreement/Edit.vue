<template>
  <main class="px-4 mt-10">
    <div class="flex justify-between">
      <arrow-back />
      <div class="flex justify-center items-center">
        <p class=" text-black font-semibold mr-4 items-center content-center">{{ rol }}</p>
        <home-page />
        <logout-component />
      </div>
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
import HomePage from '../../components/HomePage.vue'
import { auth } from '../../store/auth'

export default {
  name: 'EditAmendingAgreement',
  components: {
    FormAmendingAgreement,
    ArrowBack,
    TitleBar,
    HomePage,
    LogoutComponent
  },
  setup() {
    const authStore = auth();
    const { rol } = authStore.getAuthData
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
      rol,
      saveAmendingAgreement,
    }
  },
}
</script>
