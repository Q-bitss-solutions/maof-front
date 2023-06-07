import { defineStore } from "pinia";

export const consultas = defineStore("consultas", {
  state: () => ({
    filtros: {
      pendientes: {},
      pagados: {},
      total: {},
    },
  }),
  actions: {
      addPendientes(pendientes) {
        this.filtros.pendientes = pendientes;
      },
      addPagados(pagados) {
        this.filtros.pagados = pagados;
      },
  },
  getters: {
    // getters para el módulo 1
  },
});
