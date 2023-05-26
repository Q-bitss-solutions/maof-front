<template>
  <div class="inline-block justify-end">
    <div @click="goHome" class="flex items-center cursor-pointer justify-end">
      <img src="../assets/house-icon-vector-illustration.jpg" alt="Home" class=" w-6">
      <p class="text-wine text-lg ml-2">Home</p>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'GoHome',
  setup() {
    const router = useRouter()
    const goHome = () => {
      return router.push({ name: 'Home' })
    }

    return { goHome }
  },
}
</script>
