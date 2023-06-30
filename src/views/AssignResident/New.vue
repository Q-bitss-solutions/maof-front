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
    <title-bar title="Asignación Residente" subtitle="Nuevo" />
    <section class="px-4">
      <form-assign-resident @submit="saveAssingResident" />
    </section>
  </main>
</template>

<script>
import FormAssignResident from '../../components/AssignResident/FormAssignResident.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { storeAssingResident } from '../../api/assingResident'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import LogoutComponent from '../../components/LogoutComponent.vue'
import HomePage from '../../components/HomePage.vue'
import { auth } from '../../store/auth'


export default {
  name: 'NewAssingResident',
  components: {
    FormAssignResident,
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
    const saveAssingResident = async (assingResident) => {
      /* await storeReviewArea(reviewArea) */
      try {
        await storeAssingResident(assingResident)
        Swal.fire(
          '¡Éxito!',
          'Asignación guardada con éxito!',
          'success'
        )
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
      /*  alert('Residente guardado con exito!') */
      router.push({ name: 'AssignResident' })
    }

    return {
      rol,
      saveAssingResident,
    }
  },
}
</script>
