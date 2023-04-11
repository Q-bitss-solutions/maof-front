<template>
  <div class="flex items-center grid-cols-3 gap-3">
    <label
      :for="id"
      class="text-lg font-bold basis-1/3"
    >
      {{ label }}
    </label>
    <textarea
      :id="id"
      class="h-20 py-2 px-3 basis-2/3
        bg-white
        rounded outline-none border border-gray border-solid
        text-black text-lg
        focus:border-blue
        w-full
      "
      :value="modelValue"
      :placeholder="placeholder"
      :maxlength="maxLength"
      :disabled="disabled"
      @input="(event) => $emit('update:modelValue', event.target.value)"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'InputBase',
  props: {
    id: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
    maxLength: {
      type: String,
      default: '100',
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  emits: ['update:modelValue'],
}
</script>

<style scoped>
textarea {
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
}
textarea:focus {
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
}
</style>