<template>
  <div>
    <header-component/>
    <router-view  class="pb-24 min-h-screen"/>
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
