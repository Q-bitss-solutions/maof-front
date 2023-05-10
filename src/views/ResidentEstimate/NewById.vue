<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Estimación Residente By Id" subtitle="Nuevo" />
    <section class="px-4">
      <form-resident-estimate :residentEstimate="app.residentEstimate" edit-mode v-if="!app.loading" />
    </section>
  </main>
</template>

<script>
import FormResidentEstimate from '../../components/ResidentEstimate/FormResidentEstimateById.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { fetchContractById } from '../../api/contract'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export default {
  name: 'NewResidentbyId',
  components: {
    FormResidentEstimate,
    ArrowBack,
    TitleBar,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const app = reactive({
      residentEstimate: { id_contrato: '', num_consecutivo_estimacion: '',numero_contrato:'', objeto_contrato:'' },
      loading: true,
    })
    const getResidentById = async () => {
      app.loading = true
      const { data } = await fetchContractById(route.params.residentEstimateId)
      app.residentEstimate.num_consecutivo_estimacion = data.contador_siguiente_estimacion
      app.residentEstimate.numero_contrato = data.numero_contrato
      app.residentEstimate.id_contrato = data.id_contrato
      app.residentEstimate.objeto_contrato = data.objeto_contrato
      app.loading = false
    }
    const saveResident = async (resident) => {
      await updateResident(resident)
      /* alert('Residente actualizado con exito!') */
      Swal.fire(
        '¡Éxito!',
        '!Estimación residente actualizado con éxito!',
        'success'
      )
      router.push({ name: 'Resident' })
    }

    getResidentById()

    return {
      app,
      saveResident,
    }
  },
}
</script>
