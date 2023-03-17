<template>
  <button
    type="button"
    class="bg-white text-red font-light text-lg py-2 px-6
      block rounded cursor-pointer
      border-red border-solid border-2
      hover:text-white hover:bg-red
      disabled:cursor-not-allowed
    "
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'ButtonBase',
  props: {
    label: {
      type: String,
      default: '',
    },
  },
}
</script>
