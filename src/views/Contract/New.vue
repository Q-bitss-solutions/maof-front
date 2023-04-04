<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Contratos" subtitle="Nuevo" />
    <section class="px-4">
      <form-contract @submit="saveContract" />
    </section>
  </main>
</template>

<script>
import FormContract from '../../components/Contract/FormContract.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { storeContract } from '../../api/contract'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export default {
  name: 'NewContract',
  components: {
    FormContract,
    ArrowBack,
    TitleBar,
  },
  setup() {
    const router = useRouter()
    const saveContract = async (contract) => {
      await storeContract(contract)
      /* alert('Contrato guardado con exito!') */
      Swal.fire(
        'Exito!',
        'Contrato guardado con exito!',
        'success'
      )
      router.push({ name: 'Contracts' })
    }

    return {
      saveContract,
    }
  },
}
</script>
