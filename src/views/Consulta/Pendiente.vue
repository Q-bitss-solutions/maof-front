<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Pendientes" subtitle="Hoja Viajera" />
    <section class="px-4">
      {{ app.pendiente }}
    </section>
  </main>
</template>

<script>
import { ref } from 'vue';
import FormUsersAndRolsMAOF from '../../components/UsersAndRolsMAOF/FormUsersAndRolsMAOF.vue'
import ArrowBack from '../../components/ArrowBack.vue'
import TitleBar from '../../components/TitleBar.vue'
import { storeUser } from '../../api/users'
import { useRouter,useRoute } from 'vue-router'
import Swal from 'sweetalert2'
import { consultas } from '../../store/Consultas/Consultas'
export default {
  name: 'NewUnitMAOF',
  components: {
    FormUsersAndRolsMAOF,
    ArrowBack,
    TitleBar,
  },
  setup() {
    const app = ref({
      pendiente: {},
      loading: true,
    });
    const router = useRoute()
    const store = consultas()
    const saveUserAndRols = async (userAndRol) => {
      try {
        await storeUser(userAndRol)
        console.log('Info: ', userAndRol)
        Swal.fire(
          '¡Éxito!',
          '¡Ususario guardado con éxito!',
          'success'
        )
        router.push({ name: 'UsersRolesMAOF' })
      } catch (error) {
        console.log(error)
        Swal.fire(
          'Error',
          `${error.response.data.detail}`,
          'error'
        )
      }
    }

    const getQuery = () => {
      
      // Utilizar el valor del parámetro como necesites
      app.value.pendiente = store.filtros.pendientes
      console.log(store.filtros.pendientes);
      console.log('Valor del parámetro:', app.value.pendiente);
    }
    getQuery()
    return {
      app,
      saveUserAndRols,
      getQuery,
    }
  },
}
</script>
