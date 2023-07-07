<template>
  <main class="px-4 mt-10">
    <CustomHeaderApp />
    <title-bar title="Usuarios y Roles MAOF" subtitle="Nuevo" />
    <section class="px-4">
      <form-users-and-rols-m-a-o-f @submit="saveUserAndRols" />
    </section>
  </main>
</template>

<script>
import FormUsersAndRolsMAOF from '../../components/UsersAndRolsMAOF/FormUsersAndRolsMAOF.vue'
import TitleBar from '../../components/TitleBar.vue'
import { storeUser } from './../../api/users'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import CustomHeaderApp from '../../components/CustomHeaderApp.vue'

export default {
  name: 'NewUnitMAOF',
  components: {
    FormUsersAndRolsMAOF,
    TitleBar,
    CustomHeaderApp,
  },
  setup() {
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
      saveUserAndRols,
    }
  },
}
</script>
