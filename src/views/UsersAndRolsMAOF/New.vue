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
    <title-bar title="Usuarios y Roles MAOF" subtitle="Nuevo" />
    <section class="px-4">
      <form-users-and-rols-m-a-o-f @submit="saveUserAndRols" />
    </section>
  </main>
</template>

<script>
import FormUsersAndRolsMAOF from '../../components/UsersAndRolsMAOF/FormUsersAndRolsMAOF.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { storeUser } from './../../api/users'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import LogoutComponent from '../../components/LogoutComponent.vue'
import HomePage from '../../components/HomePage.vue'
import { auth } from '../../store/auth'

export default {
  name: 'NewUnitMAOF',
  components: {
    FormUsersAndRolsMAOF,
    ArrowBack,
    TitleBar,
    HomePage,
    LogoutComponent
  },
  setup() {
    const authStore = auth();
    const { rol } = authStore.getAuthData
    const router = useRouter()
    const saveUserAndRols = async (userAndRol) => {
      try {
        await storeUser(userAndRol)
        Swal.fire(
          '¡Éxito!',
          'Usuario guardado con éxito!',
          'success'
        )
        router.push({ name: 'UsersRolesMAOF' })
      } catch (error) {
        Swal.fire(
          'Error',
          `${error.response.data.detail}`,
          'error'
        )
      }
    }

    return {
      rol,
      saveUserAndRols,
    }
  },
}
</script>
