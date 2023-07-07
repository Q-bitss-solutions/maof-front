<template>
  <div class="flex justify-between">
    <arrow-back />
    <div class="flex justify-center items-center">
      <p class="text-black font-semibold mr-4 items-center content-center">{{ nombre_completo }}</p>
      <p class="text-black font-semibold mr-4 items-center content-center">{{ rol }}</p>
      <home-page />
      <logout-component />
    </div>
  </div>
</template>

<script>
import ArrowBack from './ArrowBack.vue'
import HomePage from './HomePage.vue'
import LogoutComponent from './LogoutComponent.vue'
import { auth } from '../store/auth'

export default {
  components: {
    ArrowBack,
    HomePage,
    LogoutComponent
  },
  setup() {
    const authStore = auth();
    const { rol, nombre_completo } = authStore.getAuthData

    return {
      rol,
      nombre_completo
    }
  }
}
</script>
