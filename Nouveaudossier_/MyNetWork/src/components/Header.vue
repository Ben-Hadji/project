<template>
    <div class="expand bg-warning" style="margin-top:6%">
        <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <img src="https://icones8.fr/icon/84398/page-d%E2%80%99accueil" alt="" class="d-inline-block align-text-top">
            <a class="navbar-brand text-white" href="/">Home</a>
            <ul class="navbar-nav">
            </ul>
            <ul class="navbar-nav ms-auto">

                    
                <li v-if="pseudo != ''" class="nav-item d-flex align-items-baseline">
                    <a class="navbar-brand btn btn-secondary" href="/">{{pseudo}} <img :src="url" alt="" class="btn-md" style="width:25px;  height:25px; border-radius:50%" /> </a>
                    <a class="navbar-brand btn btn-danger btn-sm" v-on:click="logout" href="/">logout</a>
                </li>
                <li v-else class="nav-item d-flex align-items-baseline">
                    <a class="navbar-brand btn btn-primary btn-sm" href="/sign-up">sign Up</a>
                    <a class="navbar-brand btn btn-success btn-sm" href="/login">login</a>
                </li>
            </ul>
            
        </nav>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'Header',
        
        data(){
            return{
                pseudo: '',
                url: ''
            }
        },
        methods:{
            
            async logout(){
                localStorage.removeItem('user-info');

                //this.$router.push({name: 'Login'})

            }            
        },
        mounted(){
            let user = localStorage.getItem("user-info");

            if(user != null)  {
                this.pseudo = JSON.parse(user).pseudo;
                this.url = JSON.parse(user).urlImgProfil;
            }
            
            
        }
    }
</script>