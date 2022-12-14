<template>
    
    <div class="way align-items-center">
        <input type="text" v-model="pseudo" placeholder="your pseudo"/>
        <input type="email" v-model="email" placeholder="your email" />
        <input type="password" v-model="password" placeholder="choose password" />
        <input type="url" v-model="urlImgProfil" placeholder="profil url" />
        <input type="button" v-on:click="signUp" value="submit">
        <p ><router-link to="/login">Login</router-link></p>
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
            
            if(this.pseudo !='' && this.email != '' && this.password != '' && this.urlImgProfil != ''){
                console.warn(result);
                if(result.status==201){
                    localStorage.setItem("user-info", JSON.stringify(result.data));
                    this.$router.push({name: 'Login'})
                }
            }
            else(console.warn('non'))
        }
    },
    mounted(){
            let user = localStorage.getItem("user-info");
            if(user != null)
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

    .register p{
        width: 300px;
        height: 40px;
        padding-left: 100px;
        display: block;
       
        margin-left: auto;
        margin-right: auto;
        
    }
</style>