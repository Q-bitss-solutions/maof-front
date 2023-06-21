<template>
  <main class="px-4 mt-10">
    <div class="flex justify-between">
      <arrow-back />
      <logout-component/>
    </div>
    <title-bar title="Estimación Residente" subtitle="Editar" />
    <section class="px-4">
      <form-resident-estimate :residentEstimate="app.residentEstimate" editMode v-if="!app.loading"/>
    </section>
  </main>
</template>

<script>
import FormResidentEstimate from '../../components/ResidentEstimate/FormResidentEstimateSemaforoById.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import LogoutComponent from '../../components/LogoutComponent.vue'
import { fetchResidentEstimateById } from '../../api/residentEstimate'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export default {
  name: 'EditResident',
  components: {
    FormResidentEstimate,
    ArrowBack,
    TitleBar,
    LogoutComponent
},
  setup() {
    const route = useRoute()
    const router = useRouter()
    const app = reactive({
      residentEstimate: {},
      loading: true,
    })
    const getResidentById = async () => {
      app.loading = true
      const { data } = await fetchResidentEstimateById(route.params.residentEstimateId)
      app.residentEstimate = data
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
