<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Convenio de Colaboración" subtitle="Nuevo" />
    <section class="px-4">
      <form-amending-agreement @submit="saveAmendingAgreement" />
    </section>
  </main>
</template>

<script>
import FormAmendingAgreement from '../../components/AmendingAgreement/FormAmendingAgreement.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { storeResident } from '../../api/resident'
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
      /* await storeResident(resident) */
      console.log(amendingAgreement)
      Swal.fire(
        'Exito!',
        'Residente guardado con éxito!',
        'success'
      )
      router.push({ name: 'AmendingAgreement' })
    }

    return {
      saveAmendingAgreement,
    }
  },
}
</script>
