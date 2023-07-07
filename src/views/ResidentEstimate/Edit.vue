<template>
  <main class="px-4 mt-10">
    <CustomHeaderApp />
    <title-bar title="Estimación Residente" :subtitle="subtitle" />
    <section class="px-4">
      <form-resident-estimate :residentEstimate="app.residentEstimate" editMode v-if="!app.loading" />
    </section>
  </main>
</template>

<script>
import FormResidentEstimate from '../../components/ResidentEstimate/FormResidentEstimateSemaforoById.vue'
import TitleBar from '../../components/TitleBar.vue'
import { fetchResidentEstimateById } from '../../api/residentEstimate'
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import CustomHeaderApp from '../../components/CustomHeaderApp.vue'


export default {
  name: 'EditResident',
  components: {
    FormResidentEstimate,
    TitleBar,
    CustomHeaderApp,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const subtitle = ref('Editar')
    const app = reactive({
      residentEstimate: {},
      loading: true,
    })
    const getResidentById = async () => {
      app.loading = true
      const { data } = await fetchResidentEstimateById(route.params.residentEstimateId)
      app.residentEstimate = data
      app.loading = false
      changeSubtitle()
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

    const changeSubtitle = () => {
      /* if(app.residentEstimate.estatus_semaforo != 'Residente') */
      subtitle.value = app.residentEstimate.estatus_estimacion
    }



    getResidentById()

    return {
      app,
      subtitle,
      saveResident,
    }
  },
}
</script>
