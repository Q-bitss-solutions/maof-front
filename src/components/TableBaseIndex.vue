<template>
  <table class="border border-solid border-black border-collapse text-gray-900 w-full">
    <tr>
      <th v-for="(header, index) in headers" :key="index" class="p-2 border border-b-2 border-solid border-black">
        {{ header.label }}
      </th>
    </tr>
    <tr id="rows" class="" v-for="(item, contador) in data" :key="contador"
      :class="{ ' bg-gray-100': contador % 2 === 0 }">
      <td v-for="(header, index) in headers" :key="index" class="p-2 border border-solid border-black">
        <p v-if="header.label === '#'">
          {{ contador + 1 }}
        </p>
        {{ item[header.field] }}
      </td>
      <td v-if="options.length" class="p-2 border border-solid border-gray-100 relative">
        <div class="flex justify-center">
          <div class="p-1 cursor-pointer" @click="openActions(`table-actions-${contador}`)">
            <span v-for="(dot, index) in dots" :key="index" class="rounded-full h-1 w-1 block bg-blue mb-1" />
          </div>
        </div>
        <div v-if="option !== null" class="hidden absolute right-4 top-8 bg-white z-10"
          style="box-shadow: -3px 3px 6px #00000029;" :id="`table-actions-${contador}`"
          @mouseleave="openActions(`table-actions-${contador}`)">
          <div class="flex flex-col">
            <div v-for="(option, index) in options" :key="index" class="h-8 flex justify-center items-center py-2 px-8">
              <p class="text-xs border-b border-solid border-gray-100 cursor-pointer hover:border-gray hover:font-medium"
                @click="option.action(item)">
                {{ option.label }}
              </p>
            </div>
          </div>
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'TableBase',
  props: {
    headers: {
      type: Array,
      default: () => ([
        {
          label: 'Example Header',
          field: 'example'
        }
      ]),
    },
    data: {
      type: Array,
      default: () => ([
        {
          example: 'value 1',
        }
      ]),
    },
    options: {
      type: Array,
      default: []
      /* default: () => ([
        {
          label: 'example',
          action: (context) => console.log(context),
        }
      ]), */
    },
  },
  setup() {
    const dots = [1, 2, 3]
    const openActions = (id) => {
      document.getElementById(id).classList.toggle('hidden')
    }

    return { dots, openActions }
  },
}
</script>

