<template>
  <div class="flex justify-start items-center pb-10">
    <img src="../../assets/Filter.png" alt="filter" class="w-10 items-center" />
    <select-base label="Filtros" class="text-center w-48 mr-9" id="filtros" :options="filtro.listFiltros"
      v-model="filtro.tipoDocumento" @change="getDocsByType(filtro.tipoDocumento)" />
    <select-base label="" class="text-center w-48 ml-36" id="filtrosDocs" :options="filtro.listDocsFiltrados"
      v-if="filtro.listDocsFiltrados !== '' && (filtro.tipoDocumento !== '' && filtro.tipoDocumento !== '4')"
      v-model="filtro.filtroDocValue" />
    <button-base label="Aplicar" class="border-gray text-black hover:bg-white hover:text-red" :class="{
      ' ml-32': filtro.tipoDocumento === '1',
      ' ml-[3.7rem]':
        filtro.tipoDocumento !== '1' && filtro.filtroDocValue === '',
      ' ml-[0rem]':
        filtro.tipoDocumento !== '1' && filtro.filtroDocValue !== '',
    }" v-if="filtro.listDocsFiltrados !== '' && (filtro.tipoDocumento !== '' && filtro.tipoDocumento !== '4')"
      @click="saveFiltro(filtro.filtroDocValue, filtro.tipoDocumento)" :disabled="filtro.filtroDocValue === ''" />
    <button-base label="Aplicar" class="ml-40 border-gray text-black hover:bg-white hover:text-red"
      v-if="filtro.tipoDocumento === '4'" @click="esperandoAccion()" />
  </div>
</template>
  
<script>
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
  