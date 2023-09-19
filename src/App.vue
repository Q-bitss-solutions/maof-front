<template>
  <div>
    <header-component/>
    <div class="h-auto pt-5">
      <router-view />
    </div>
    <div class=" w-auto">
      <footer-component class=" w-auto" />
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },
}
</script>
