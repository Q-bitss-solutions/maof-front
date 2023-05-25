<template>
  <main class="px-4 mt-10">
    <arrow-back />
    <title-bar title="Usuarios y Roles MAOF" subtitle="Inicio" />
    <section class="px-4">
      <button-base label="Alta de Usuarios MAOF" @click="goToNewUserAndRols" class="mb-3 mr-0 ml-auto" />
      <table-base :options="featureOptions" :headers="headers" :data="userAndRols" />
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import TableBase from '../../components/UsersAndRolsMAOF/TableUsers.vue'
import { fetchUser, deleteUser } from './../../api/users'
import ArrowBack from '../../components/ArrowBack.vue'
import ButtonBase from '../../components/ButtonBase.vue'
import { useRouter } from 'vue-router'
import TitleBar from '../../components/TitleBar.vue'
import Swal from 'sweetalert2'

export default {
  name: 'UsersRolesMAOFIndex',
  components: {
    TableBase,
    ArrowBack,
    ButtonBase,
    TitleBar,
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
                  userAndRolStatus.estatus_empleado = 2
                  await deleteUser(userAndRol.empleado_maof, userAndRolStatus)
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
          if (userAndRol.estatus_empleado === 'Desactivado') {
            Swal.fire({
              title: `Estás seguro que desea activar al usuario "${userAndRol.nombre_completo}"?`,
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: '¡Si, Activar!',
              reverseButtons: true,
            }).then(async (result) => {
              if (result.isConfirmed) {
                try {
                  userAndRolStatus.estatus_empleado = 0
                  await deleteUser(userAndRol.id, userAndRolStatus)
                  await getUserAndRols()
                  Swal.fire(
                    '¡Activo!',
                    'El usuario se activó',
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
