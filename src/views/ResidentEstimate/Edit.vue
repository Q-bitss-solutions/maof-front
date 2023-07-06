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
    <title-bar title="Estimación Residente" :subtitle="subtitle" />
    <section class="px-4">
      <form-resident-estimate :residentEstimate="app.residentEstimate" editMode v-if="!app.loading" />
    </section>
  </main>
</template>

<script>
import FormResidentEstimate from '../../components/ResidentEstimate/FormResidentEstimateSemaforoById.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import LogoutComponent from '../../components/LogoutComponent.vue'
import { fetchResidentEstimateById } from '../../api/residentEstimate'
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { auth } from '../../store/auth'
import HomePage from '../../components/HomePage.vue'


export default {
  name: 'EditResident',
  components: {
    FormResidentEstimate,
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
      rol,
      saveResident,
    }
  },
}
</script>
