import { defineStore } from "pinia";

export const auth = defineStore("auth", {
  state: () => ({
    access: '',
    id_empleado:'',
    rol:'',
    refresh:'',
    nombre_completo:'',
  }),
  actions: {
    setInfo() {
     this.access = localStorage.getItem('access')
     this.id_empleado = localStorage.getItem('id_empleado')
     this.rol = localStorage.getItem('rol')
     this.refresh = localStorage.getItem('refresh')
     this.nombre_completo = localStorage.getItem('nombre_completo')
    },
    setToLocalStore(dataAuth) {
      localStorage.setItem('access', dataAuth.access)
      localStorage.setItem('id_empleado', dataAuth.id_empleado)
      localStorage.setItem('rol', dataAuth.rol)
      localStorage.setItem('refresh', dataAuth.refresh)
      localStorage.setItem('nombre_completo', dataAuth.nombre_completo)
    },
    clearInfo(){
      this.access =  ''
      this.id_empleado = ''
      this.rol = ''
      this.refresh = ''
      this.nombre_completo = ''
    },
    clearLocalStore(){
      localStorage.removeItem('access');
      localStorage.removeItem('id_empleado');
      localStorage.removeItem('rol');
      localStorage.removeItem('refresh');
      localStorage.removeItem('nombre_completo');
    }
  },
  getters: {
    getAuthData(state) {
      return {
        access: state.access,
        id_empleado: state.id_empleado,
        rol: state.rol,
        refresh: state.refresh,
        nombre_completo: state.nombre_completo,
      };
    }
  },
});
