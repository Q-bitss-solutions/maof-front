<template>
  <main class="px-4 mt-10">
    <div class="flex justify-between">
      <arrow-back  />
      <div>
        <home-page/>
        <logout-component/>
      </div>
    </div>
    <title-bar title="Contratos" subtitle="Inicio" />
    <section class="px-4">
      <button-base label="Nuevo contrato" @click="goToNewContract" class="mb-3 mr-0 ml-auto" />
      <table-base
        description="Contratos"
        :options="featureOptions"
        :headers="headers"
        :data="contract"
      />
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import TableBase from '../../components/TableBase.vue'
import { fetchContracts } from './../../api/contract'
import ArrowBack from '../../components/ArrowBack.vue'
import HomePage from '../../components/HomePage.vue'
import ButtonBase from '../../components/ButtonBase.vue'
import { useRouter } from 'vue-router'
import TitleBar from '../../components/TitleBar.vue'
import LogoutComponent from '../../components/LogoutComponent.vue'

export default {
  name: 'ContractsIndex',
  components: {
    TableBase,
    ArrowBack,
    HomePage,
    ButtonBase,
    TitleBar,
    LogoutComponent
  },
  setup() {
    const router = useRouter()
    const headers = [
      {
        label: 'Proyecto',
        field: 'nombre_proyecto',
      },
      {
        label: 'Contratista',
        field: 'nombre_contratista',
      },
      {
        label: 'Área revisora',
        field: 'nombre_unidad',
      },
      {
        label: 'Monto sin IVA',
        field: 'monto_sin_iva',
      },
      {
        label: 'Fecha inicio',
        field: 'plazo_inicio',
      },
      {
        label: 'Fecha fin',
        field: 'plazo_fin',
      },
      {
        label: 'Objeto contrato',
        field: 'objeto_contrato',
      },
      {
        label: 'Estatus',
        field: 'estatus_contrato',
      },
    ]
    const contract = ref([])
    const getContracts = async () => {
      const { data } = await fetchContracts()
      contract.value = data
    }
    const featureOptions = [
      {
        label: 'Editar',
        action: (contract) => router
          .push({
            name: 'EditContract',
            params: {
              contractId: contract.id_contrato,
            },
          }),
      },
    ]
    const goToNewContract = () => router.push({ name: 'NewContract' })

    getContracts()

    return {
      contract,
      featureOptions,
      headers,
      goToNewContract,
    }
  },
}
</script>
