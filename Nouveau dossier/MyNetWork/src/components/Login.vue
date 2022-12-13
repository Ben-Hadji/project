<template>
    <h1>Login</h1>
    <div class="way">
        <input type="email" v-model="email" placeholder="your email" name="" id=""/>
        <input type="password" v-model="password" placeholder="choose password" name="" id=""/>
        <input type="button" v-on:click="login" value="submit">
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
            let result = await axios.get(
                'http://localhost:3000/utilisateurs?email='+this.email+'&password='+this.password
            )    

            if(result.status==200 && result.data.length>0){
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({name: 'Home'})
            }

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


