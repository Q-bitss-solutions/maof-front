<template>
  <div>
    <header-component/>
    <div class="pb-24 h-auto">
      <router-view />
    </div>
    <footer-component />
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
