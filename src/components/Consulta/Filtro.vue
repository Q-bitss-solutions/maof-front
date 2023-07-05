<template>
  <div class="flex justify-start items-center pb-10">
    <img src="../../assets/Filter.png" alt="filter" class="w-10 items-center" />
    <select-base label="Filtros" class="text-center w-48 mr-9" id="filtros" :options="filtro.listFiltros"
      v-model="filtro.tipoDocumento" @change="getDocsByType(filtro.tipoDocumento)" />
    <select-base ref="selectBase" label="" class="text-center w-48 ml-36" id="filtrosDocs" :options="filtro.listDocsFiltrados"
      v-if="filtro.listDocsFiltrados !== '' && (filtro.tipoDocumento !== '' && filtro.tipoDocumento !== '4')"
      v-model="filtro.filtroDocValue" />
    <button-base ref="buttonBase" label="Aplicar" class="border-gray text-black hover:bg-white hover:text-red" :class="buttonClass"
      v-if="filtro.listDocsFiltrados !== '' && (filtro.tipoDocumento !== '' && filtro.tipoDocumento !== '4')"
      @click="saveFiltro(filtro.filtroDocValue, filtro.tipoDocumento)" :disabled="filtro.filtroDocValue === ''" />
    <button-base label="Aplicar" class="ml-40 border-gray text-black hover:bg-white hover:text-red"
      v-if="filtro.tipoDocumento === '4'" @click="esperandoAccion()" />
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, nextTick, computed } from 'vue';
import SelectBase from "../../components/SelectBase.vue";
import ButtonBase from "../../components/ButtonBase.vue";

export default {
  props: {
    filtro: {
      type: Object,
      required: true,
    },
    getDocsByType: {
      type: Function,
      required: true,
    },
    saveFiltro: {
      type: Function,
      required: true,
    },
    esperandoAccion: {
      type: Function,
      required: false,
    },
  },
  components: {
    SelectBase,
    ButtonBase,
  },
  setup(props) {
    const selectBaseRef = ref(null);
    const buttonBaseRef = ref(null);

    const ajustarDistancia = () => {
      nextTick(() => {
        const selectBaseWidth = selectBaseRef.value?.$el.offsetWidth;
        if (!selectBaseWidth) return;

        const distancia = selectBaseWidth + 8; // Ajusta el valor según sea necesario

        // Actualizar la clase 'ml-[25rem]' con la distancia calculada
        if (buttonBaseRef.value) {
          buttonBaseRef.value.$el.style.marginLeft = `${distancia}px`;
        }
      });
    };

    onMounted(() => {
      ajustarDistancia();
      window.addEventListener('resize', ajustarDistancia);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', ajustarDistancia);
    });

    const buttonClass = computed(() => {
      return {
        'ml-[25rem]': props.filtro.tipoDocumento === '1',
        'ml-[3.7rem]': props.filtro.tipoDocumento !== '1' && props.filtro.filtroDocValue === '',
        'ml-[0rem]': props.filtro.tipoDocumento !== '1' && props.filtro.filtroDocValue !== '',
      };
    });

    return {
      selectBaseRef,
      buttonBaseRef,
      ajustarDistancia,
      buttonClass,
    };
  },
};
</script>

<style>
label[for="filtros"] {
  margin-top: 5px;
  width: 10px;
}

select[id="filtros"] {
  width: 300px;
}

select[id="filtrosDocs"] {
  width: fit-content;
}
</style>
