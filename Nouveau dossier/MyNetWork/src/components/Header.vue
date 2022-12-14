<template>
    <div class="expand bg-warning">
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <img src="../assets/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
            <a class="navbar-brand" href="/">Home</a>
            <ul class="navbar-nav">
            </ul>
            <ul class="navbar-nav ms-auto">

                    
                <li v-if="pseudo != ''" class="nav-item d-flex align-items-baseline">
                    <span></span><img :src="article.urlImgArticle" alt="" class="img-fluid"/>
                    <a class="navbar-brand" href="/">{{pseudo}}</a>
                    <a class="navbar-brand" v-on:click="logout" href="/">logout</a>
                </li>
                <li v-else class="nav-item d-flex align-items-baseline">
                    <a class="navbar-brand" href="/sign-up">sign Up</a>
                    <a class="navbar-brand" href="/login">login</a>
                </li>
            </ul>
            
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        
        data(){
            return{
                pseudo: ''
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
            }
            
            
        }
    }
</script>