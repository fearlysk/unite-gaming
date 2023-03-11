<template>
    <div v-if="route.name === 'login'">
        <h1>Login</h1>
        <router-link to="/registration">Нет аккаунта? Зарегистрируйтесь!</router-link>
        <router-link to="/">На главную</router-link>
    </div>
    <div v-else-if="route.name === 'registration'">
        <h1>Registration</h1>
        <router-link to="/">На главную</router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: "AuthView",
    setup() {
        const route = useRoute();
        return {
            route
        }
    }
})

</script>

<style lang="scss" scoped>
    h1 {
        color: #FFFFFF;
    }
</style>
