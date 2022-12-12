

<template>
    <nav class="nav">
        <router-link to="/">Accueil</router-link>
        <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
</template>

<script>
export default {
    name: 'App',
    components: {

    }
}
</script>