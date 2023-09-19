<template>
  <main class="pb-10">
    <section>
    <div class="mx-auto px-4 pt-4 lg:px-6 xl:px-2 xl:max-w-6xl lg:max-w-screen-lg md:max-w-4xl">
      <title-bar title="Login" subtitle="Inicio" />
    </div>
    
    <!-- Grid wrapper -->
    <div class="grid">
      <!-- Columns -->
      <div>
        <section class="px-4">
          <div class="max-w-xl mx-auto">
            <input-base id="email" label="Email" type="email" class="mb-3" v-model="user.email" />
            <!--         {{ user.email }} -->
            <input-base id="password" label="Password" type="password" class="mb-3" v-model="user.password" />
            <!--         {{ user.password }} -->
            <button-base label="Enviar" @click="sendForm" class="mr-0 ml-auto" />
          </div>
        </section>
      </div>

      <!-- Columns -->
    </div>
    <!-- Grid wrapper -->
    </section>
  </main>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import ButtonBase from '../components/ButtonBase.vue'
import TitleBar from '../components/TitleBar.vue'
import InputBase from '../components/InputBase.vue'
import Swal from 'sweetalert2'
import { loginUser } from '../api/auth'
import { auth } from "../store/auth";


export default {
  name: 'ResidenteIndex',
  components: {
    ButtonBase,
    TitleBar,
    InputBase
  },
  setup() {
    const router = useRouter()
    const store = auth();
    const user = ref({
      email: '',
      password: '',
    })
    const sendForm = async () => {
      try {
        const { data } = await loginUser(user.value)
        //setItem se asigna el item
        /* console.log(data); */
        store.setToLocalStore(data)
        store.setInfo()
        /* localStorage.setItem('acces', data.access)
        localStorage.setItem('refresh', data.refresh)
        localStorage.setItem('rol', data.rol)
        localStorage.setItem('id_empleado', data.id_empleado) */
        logIn()

      } catch (error) {
        Swal.fire(
          "Error",
          "Usuario y/o contraseña incorrecta",
          "error"
        );
      }
    }
    const logIn = () => {
      if (store.access !== null) {
        router.push({ name: 'Home' })
      }
    }
    logIn()
    return {
      user,
      sendForm,
      logIn,
    }
  },
}
</script>
