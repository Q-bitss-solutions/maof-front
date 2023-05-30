<template>
  <main class="px-4 mt-10">
    <div class="flex justify-between">
      <arrow-back />
      <home-page />
    </div>
    <title-bar title="Consulta MAOF" subtitle="Inicio" />
    <section class="px-4">
      <div class="flex justify-center">
        <div class="px-10 text-green">
          <p class=" text-center">4</p>
          <h1 class=" text-center">Pendientes</h1>
        </div>
        <div class="px-10 text-red">
          <p class=" text-center">2</p>
          <h1 class=" text-center">Pagadas</h1>
        </div>
        <div class="px-10">
          <p class=" text-center">6</p>
          <h1 class=" text-center">Total</h1>
        </div>
      </div>
      <div class="flex flex-col mt-20">
        <div class="flex justify-start items-center pb-10">
          <img src="../../assets/Filter.png" alt="filter" class=" w-10 items-center ">
          <!-- <h1 class="text-center pl-5">
            Filtros
          </h1> -->
          <select-base label="Filtros" class="text-center w-48 " id="filtros"/>
        </div>
        <div class="flex justify-start items-center pt-10">
          <img src="../../assets/Search.png" alt="filter" class=" w-10 items-center">
          <h1 class="text-center font-bold text-lg">
            Busqueda
          </h1>
          <!-- <select-base label="Filtros" class="text-center w-48" id="filtros"/> -->
          <button-base label="Criterio de búsqueda" class="ml-5 border-gray text-black hover:bg-white hover:text-red"/>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import TableBase from '../../components/UsersAndRolsMAOF/TableUsers.vue'
import { fetchUser, deleteUser } from './../../api/users'
import ArrowBack from '../../components/ArrowBack.vue'
import HomePage from '../../components/HomePage.vue'
import SelectBase from '../../components/SelectBase.vue'
import ButtonBase from '../../components/ButtonBase.vue'
import { useRouter } from 'vue-router'
import TitleBar from '../../components/TitleBar.vue'
import Swal from 'sweetalert2'

export default {
  name: 'UsersRolesMAOFIndex',
  components: {
    TableBase,
    ArrowBack,
    HomePage,
    ButtonBase,
    TitleBar,
    SelectBase,
  },
  setup() {
    const router = useRouter()
    const headers = [
      {
        label: 'Id',
        field: 'empleado_maof',
      },
      {
        label: 'Nombre',
        field: 'nombre_completo',
      },
      {
        label: 'Unidad MAOF',
        field: 'unidad_maof',
      },
      {
        label: 'Correo',
        field: 'correo_electronico',
      },
      {
        label: 'Rol MAOF',
        field: 'rol_maof',
      },
      {
        label: 'Estatus',
        field: 'estatus_empleado',
      },
    ]
    const userAndRols = ref([])
    const userAndRolStatus = ref({ estatus_empleado: '' })
    const getUserAndRols = async () => {
      const { data } = await fetchUser()
      userAndRols.value = data
    }
    const featureOptions = [
      {
        label: 'Editar',
        action: (userAndRol) => {
          console.log(userAndRol);
          router.push({
            name: 'EditUsersRolesMAOF',
            params: {
              userRolMAOFId: userAndRol.empleado_maof,
            }
          })
        }
      },
      {
        label: 'Estatus',
        action: async (userAndRol) => {
          if (userAndRol.estatus_empleado === 'Inactivo') {
            Swal.fire({
              title: `Estás seguro que deseas activar al usuario "${userAndRol.nombre_completo}"?`,
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: '¡Si, Inactivar!',
              reverseButtons: true,
            }).then(async (result) => {
              if (result.isConfirmed) {
                try {
                  await deleteUser(userAndRol.empleado_maof)
                  await getUserAndRols()
                  Swal.fire(
                    '¡Inactivo!',
                    'El usuario se inactivó',
                    'success'
                  )
                } catch (error) {
                  Swal.fire(
                    'Error',
                    `${error.response.data.detail}`,
                    'error'
                  )
                }
              }
            })
          }
          if (userAndRol.estatus_empleado === 'Activo') {
            Swal.fire({
              title: `Estás seguro que desea inactivar al usuario "${userAndRol.nombre_completo}"?`,
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: '¡Si, Inactivar!',
              reverseButtons: true,
            }).then(async (result) => {
              if (result.isConfirmed) {
                try {
                  await deleteUser(userAndRol.empleado_maof)
                  await getUserAndRols()
                  Swal.fire(
                    '¡Inactivo!',
                    'El usuario se inactivó',
                    'success'
                  )
                } catch (error) {
                  Swal.fire(
                    'Error',
                    `${error.response.data.detail}`,
                    'error'
                  )
                }
              }
            })
          }
        },
      },
    ]
    const goToNewUserAndRols = () => router.push({ name: 'NewUsersRolesMAOF' })

    getUserAndRols()

    return {
      userAndRols,
      userAndRolStatus,
      featureOptions,
      headers,
      goToNewUserAndRols,
    }
  },
}
</script>

<style >
label[for=filtros] {
  margin-top: 5px;
  width: 10px;
}
select[id=filtros] {
  width: 300px;
}
</style>
