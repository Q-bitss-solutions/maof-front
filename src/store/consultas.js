import { defineStore } from "pinia";

export const consultas = defineStore("consultas", {
  state: () => ({
    filtros: {
      pendientes: [],
      pagados: [],
      total: [],
    },
    busqueda:[]
  }),
  actions: {
    addPendientes(pendientes) {
      this.filtros.pendientes = pendientes;
    },
    addPagados(pagados) {
      this.filtros.pagados = pagados;
    },
    addTotal(total) {
      this.filtros.total = total;
    },
    addBusqueda(busquedaResult) {
      this.busqueda = busquedaResult;
    },
  },
  getters: {
    // getters para el módulo 1
  },
});
