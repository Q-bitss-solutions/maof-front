<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Usuarios y Roles MAOF" subtitle="Editar" />
    <section class="px-4">
      <form-users-and-rols-m-a-o-f @submit="saveUserAndRols" :userAndRols="app.userAndRols" edit-mode
        v-if="!app.loading" />
    </section>
  </main>
</template>

<script>
import FormUsersAndRolsMAOF from '../../components/UsersAndRolsMAOF/FormUsersAndRolsMAOF.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { updateUser, fetchUserById } from './../../api/users'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export default {
  name: 'EditUnitMAOF',
  components: {
    FormUsersAndRolsMAOF,
    ArrowBack,
    TitleBar,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const app = reactive({
      userAndRols: {},
      loading: true,
    })
    const getUnitById = async () => {
      app.loading = true
      const { data } = await fetchUserById(route.params.userRolMAOFId)
      app.userAndRols = data
      console.log('data: ', data);
      console.log('app.user: ', app.userAndRols);
      app.loading = false
    }
    const saveUserAndRols = async (userAndRol) => {
      console.log('userAndRol: ', userAndRol);
      try {

        await updateUser(userAndRol)
        /* alert('Residente actualizado con exito!') */
        Swal.fire(
          '¡Éxito!',
          '¡Usuario actualizado con éxito!',
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

    getUnitById()

    return {
      app,
      saveUserAndRols,
    }
  },
}
</script>
