<template>
  <div class="inline-block">
    <div @click="goBack" class="flex items-center cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <defs>
        </defs>
        <g transform="translate(24 24) rotate(180)">
          <path style="fill:none;" d="M0,0H24V24H0Z"/>
          <path class="fill-blue" d="M22,12,18,8v3H3v2H18v3Z"/>
        </g>
      </svg>
      <p class="text-wine text-lg ml-2">Regresar</p>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'ArrowBack',
  props: {
    route: {
      type: Function,
      default: () => (false),
    },
  },
  setup(props) {
    const router = useRouter()
    const goBack = () => {
      if (props.route()) {
        return
      }
      return router.go(-1)
    }

    return { goBack }
  },
}
</script>
