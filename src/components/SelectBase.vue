<template>
  <div class="grid grid-cols-3 gap-3">
    <label :for="id" class="text-lg font-bold">
      {{ label }}
    </label>
    <select
      :id="id"
      :name="id"
      class="rounded h-10 px-3 w-full
        border border-gray border-solid outline-none
        text-lg text-gray-900 cursor-pointer bg-white
        focus:border-blue
        col-span-2
      "
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      :disabled="disabled"
    >
      <option
        v-if="!modelValue"
        value=""
        disabled
        selected
      >
        Selecciona una opción
      </option>
      <option
        v-for="(option, key) in options"
        :key="key"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectBase',
  props: {
    label: {
      type: String,
      default: 'Example Label',
    },
    modelValue: {
      default: '01',
    },
    options: {
      type: Array,
      default: () => ([
        {
          value: '01',
          label: 'Option 1',
        }
      ]),
    },
    id: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
}
</script>

<style scoped>
select {
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
}
select:focus {
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
}
</style>