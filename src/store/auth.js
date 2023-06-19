import { defineStore } from "pinia";

export const auth = defineStore("auth", {
  state: () => ({
    access: '',
    id_empleado:'',
    rol:'',
    refresh:'',
  }),
  actions: {
    setInfo() {
     this.access = localStorage.getItem('access')
     this.id_empleado = localStorage.getItem('id_empleado')
     this.rol = localStorage.getItem('rol')
     this.refresh = localStorage.getItem('refresh')
    },
    setToLocalStore(dataAuth) {
      localStorage.setItem('access', dataAuth.access)
      localStorage.setItem('id_empleado', dataAuth.id_empleado)
      localStorage.setItem('rol', dataAuth.rol)
      localStorage.setItem('refresh', dataAuth.refresh)
    }
  },
  getters: {
    getAuthData() {
      return {
        access: this.access,
        id_empleado: this.id_empleado,
        rol: this.rol,
        refresh: this.refresh
      };
    }
  },
});
