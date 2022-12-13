<template>
    <h1>Sign Up</h1>
    <div class="register align-items-center">
        <input type="text" v-model="pseudo" placeholder="your pseudo"/>
        <input type="email" v-model="email" placeholder="your email" name="" id=""/>
        <input type="password" v-model="password" placeholder="choose password" name="" id=""/>
        <input type="url" v-model="urlImgProfil" placeholder="profil url" name="" id=""/>
        <input type="button" v-on:click="signUp" value="submit">
    </div>
</template>

<script>
    import axios from 'axios'
    const baseUrl = "http://localhost:3000/utilisateurs"
    export default {
        name: 'SignUp',
    
    data(){
        return {
            pseudo: '',
            email: '', 
            password: '',
            urlImgProfil: ''
        }
    },
    methods: {
        async signUp(){
            let result = await axios.post(baseUrl, {
            pseudo: this.pseudo,
            email: this.email, 
            password: this.password,
            urlImgProfil: this.urlImgProfil});
            
            console.warn(result);
            if(result.status==201){
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({name: 'Home'})
            }
        }
    },
    mounted(){
            let user = localStorage.getItem("user-infp");
            if(user)
            {
                this.$router.push({name:'Home'})
            }
        }
}
</script>


<style>
    .logo{
        width: 50px;
    }

    .register input{
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px ;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid skyblue;
    }

    .centre {
        margin-left: auto;
        margin-right: auto;
    }
</style>