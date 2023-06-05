<template>
  <div v-if="visible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-4 rounded-lg shadow-md">
      <slot></slot>
      <ButtonBase class="mt-4 px-4 py-2 bg-blue-500 black rounded" @click="closeDialog" label="Cerrar" />
    </div>
  </div>
  <ButtonBase class="mt-4 px-4 py-2 bg-blue-500 black rounded" @click="openDialog" label="Abrir diálogo" />
</template>
  
<script>
import { ref } from 'vue';
import ButtonBase from '../components/ButtonBase.vue';

export default {
  components: {
    ButtonBase
  },
  setup() {
    const visible = ref(false);

    function openDialog() {
      visible.value = true;
    }

    function closeDialog() {
      visible.value = false;
    }

    return {
      visible,
      openDialog,
      closeDialog
    };
  }
};
</script>
  
<style>
button {
  margin-top: 10px;
}
</style>