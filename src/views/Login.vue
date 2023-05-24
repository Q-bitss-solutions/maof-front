<template>
  <main class="px-4 mt-10">
    <title-bar title="Login" subtitle="Inicio" />
    <section class="px-4">
      <div class="max-w-xl mx-auto">
        <input-base id="email" label="Email" type="email" class="mb-3" v-model="user.email" />
        {{ user.email }}
        <input-base id="password" label="Password" type="password" class="mb-3" v-model="user.password" />
        {{ user.password }}
        <button-base label="Enviar" @click="sendForm" class="mr-0 ml-auto" />
      </div>
    </section>
  </main>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import ButtonBase from '../components/ButtonBase.vue'
import TitleBar from '../components/TitleBar.vue'
import InputBase from '../components/InputBase.vue'
import { mapState } from 'vuex'
import Swal from 'sweetalert2'
import { loginUser } from '../api/auth'


export default {
  name: 'ResidenteIndex',
  components: {
    ButtonBase,
    TitleBar,
    InputBase
  },
  setup() {
    const router = useRouter()
    const user = ref({
      email: '',
      password: '',
    })
    const sendForm = async () => {
      try {
        const { data } = await loginUser(user.value)
        //setItem se asigna el item
        console.log(data);
        localStorage.setItem('acces', data.access)
        localStorage.setItem('refresh', data.refresh)
        router.push({ name: 'Home' })
        console.log(localStorage.getItem('acces'));
        console.log(localStorage.getItem('refresh'));

      } catch (error) {
        console.log('error: ', error)

      }
      //setItem se asigna el item
      /*  localStorage.setItem('token', response.token)
      localStorage.setItem('rol', response.rol) */
      //se consulta el item
      /* const token = localStorage.getItem('token')
      const isAdmin = localStorage.getItem('rol') === 'Admin' */
    }



    return {
      sendForm,
      user,
    }
  },
}
</script>
