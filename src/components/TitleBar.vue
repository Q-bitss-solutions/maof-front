<template>
  <div class="font-bold text-gray-900 mt-10 mb-12">
    <h1 class="text-4xl">Módulo de Administración de Obra Ferroviaria</h1>
    <h2 class="text-3xl">
      {{ title }}
    </h2>
    <h3 class="text-2xl mt-4">
      {{ subtitle }}
    </h3>
    <div class="flex mt-3">
      <span class=" w-9 h-1 bg-brown-300"></span>
      <hr class="border-gray-200 border-t border-solid w-full" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleBar',
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    subtitle: {
      type: String,
      default: 'Subtitle',
    },
  },
}
</script>
