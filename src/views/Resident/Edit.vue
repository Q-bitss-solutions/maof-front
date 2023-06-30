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
    <title-bar title="Residente" subtitle="Editar" />
    <section class="px-4">
      <form-resident @submit="saveResident" :resident="app.resident" edit-mode v-if="!app.loading" />
    </section>
  </main>
</template>

<script>
import FormResident from '../../components/Resident/FormResident.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { updateResident, fetchResidentById } from '../../api/resident'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import LogoutComponent from '../../components/LogoutComponent.vue'
import HomePage from '../../components/HomePage.vue'
import { auth } from '../../store/auth'


export default {
  name: 'EditResident',
  components: {
    FormResident,
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
      resident: {},
      loading: true,
    })
    const getResidentById = async () => {
      app.loading = true
      const { data } = await fetchResidentById(route.params.residentId)
      app.resident = data
      app.loading = false
    }
    const saveResident = async (resident) => {
      try {
        await updateResident(resident)
        /* alert('Residente actualizado con exito!') */
        Swal.fire(
          '¡Éxito!',
          '¡Residente actualizado con éxito!',
          'success'
        )
        router.push({ name: 'Resident' })
      } catch (error) {
        Swal.fire(
          'Error',
          `${error.response.data.detail}`,
          'error'
        )
      }
    }

    getResidentById()

    return {
      app,
      rol,
      saveResident,
    }
  },
}
</script>
