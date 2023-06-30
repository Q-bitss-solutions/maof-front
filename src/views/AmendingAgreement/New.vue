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
import LogoutComponent from '../../components/LogoutComponent.vue'
import HomePage from '../../components/HomePage.vue'

import { auth } from '../../store/auth'

export default {
  name: 'NewAmendingAgreement',
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
      rol,
      saveAmendingAgreement,
    }
  },
}
</script>
