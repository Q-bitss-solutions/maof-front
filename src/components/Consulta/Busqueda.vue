<template>
    <div class="flex justify-start items-center pt-10">
      <img src="../../assets/Search.png" alt="filter" class="w-10 items-center" />
      <h1 class="text-center font-bold text-lg">Búsqueda</h1>
      <button-base label="Criterio de búsqueda" class="ml-5 border-gray text-black hover:bg-white hover:text-red" @click="showBusqueda" />
    </div>
    <div class="flex justify-center">
      <!-- Form Busqueda -->
      <form-consulta-busqueda @submit="saveBusqueda" class="mt-20" v-if="showBusquedaValue" />
    </div>
  </template>
  
  <script>
  import ButtonBase from "../../components/ButtonBase.vue";
  import FormConsultaBusqueda from "../../components/Consulta/FormConsultaBusqueda.vue";
  
  export default {
    components: {
      ButtonBase,
      FormConsultaBusqueda,
    },
    props: {
      showBusquedaValue: {
        type: Boolean,
        required: true,
      },
      showBusqueda: {
        type: Function,
        required: true,
      },
      saveBusqueda: {
        type: Function,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  </style>
  