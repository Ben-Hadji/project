<template>
    <div class="way" style="margin-top: 15%;" >
        <h3 style="justi">Login</h3>
        <input type="email" v-model="email" placeholder="your email" />
        <input type="password" v-model="password" placeholder="choose password" />
        <input type="button" v-on:click="login" value="Login">
        <p ><router-link to="/sign-up">Sign up</router-link></p>
    </div>
</template>

<script>
    import axios from 'axios'
    const baseUrl = "http://localhost:3000/utilisateurs"
    export default {
        name: 'Login',
    
    data(){
        return {
            email: '', 
            password: '',
        }
    },
    methods: {
        async login(){       
            if(!(this.mail=='' || this.password == '') ){  
                let result = await axios.get(
                    'http://localhost:3000/utilisateurs?email='+this.email+'&password='+this.password
                )   
                if(result.status==200 && result.data.length>0){
                    localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                    this.$router.push({name: 'Home'})
                }
            }
            console.warn('bizarre')

            

        },
        mounted(){
            let user = localStorage.getItem("user-info");
            if(user)
            {
                this.$router.push({name:'Home'})
            }
        }
    }
}
</script>


 <style>

</style>