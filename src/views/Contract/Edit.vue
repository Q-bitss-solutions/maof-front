<template>
  <main class="px-4 mt-10">
    <div class="flex justify-between">
      <arrow-back />
      <logout-component/>
    </div>
    <title-bar title="Contratos" subtitle="Editar" />
    <section class="px-4">
      <form-contract @submit="saveContract" :contract="app.contract" edit-mode v-if="!app.loading" />
    </section>
  </main>
</template>

<script>
import FormContract from '../../components/Contract/FormContract.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { updateContract, fetchContractById } from '../../api/contract'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import LogoutComponent from '../../components/LogoutComponent.vue'


export default {
  name: 'EditContract',
  components: {
    FormContract,
    ArrowBack,
    TitleBar,
    LogoutComponent
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const app = reactive({
      contract: {},
      loading: true,
    })
    const getContractById = async () => {
      app.loading = true
      const { data } = await fetchContractById(route.params.contractId)
      app.contract = data
      app.loading = false
    }
    const saveContract = async (contract) => {
      await updateContract(contract)
      /* alert('Contrato actualizado con exito!') */
      Swal.fire(
        '¡Éxito!',
        'Contrato actualizado con éxito!',
        'success'
      )
      router.push({ name: 'Contracts' })
    }

    getContractById()

    return {
      app,
      saveContract,
    }
  },
}
</script>
