<template>
    <div class="expand bg-warning">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img src="../assets/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
            <a class="navbar-brand" href="#">Navbar</a>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="navbar-brand" href="#">Navbar</a>
                </li>
            </ul>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item d-flex align-items-baseline">
                    <a class="navbar-brand" v-on:click="logout" href="#">logout</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        methods:{
            async logout(){
                localStorage.clear();
                this.$router.push({name: 'Login'})
            }
        }
    }
</script>