<template>
    <div class="inline-block justify-end pl-3">
        <div @click="logoutUser" class="flex cursor-pointer justify-end">
            <span class="material-icons text-red" title="Cerrar sesión">
                logout
            </span>
        </div>
    </div>
</template>

<script setup>
import { logout } from '../api/auth'
import { auth } from "../store/auth";
import { useRouter } from 'vue-router'

const router = useRouter()
const store = auth();

const logoutUser = async () => {
    try {
        // await logout()
        await store.clearInfo()
        store.clearLocalStore()
        router.push({ name: 'Login' })

    } catch (error) {
        console.log('error: ', error)

    }
};


</script>
<style scoped>
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
</style>
  