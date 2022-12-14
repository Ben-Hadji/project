<template>

    <div class="way align-items-center" style="margin-top:70px; margin-bottom=-60">
        <input type="text" v-model="pseudo" placeholder="your pseudo" />
        <input type="email" v-model="email" placeholder="your email" />
        <input type="password" v-model="password" placeholder="choose password" />
        <input type="url" v-model="urlImgProfil" placeholder="profil url" />
        <input type="button" v-on:click="signUp" value="submit">


        <div v-if="errors.length" class="alert alert-danger" role="alert">
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    const baseUrl = "http://localhost:3000/utilisateurs"
    export default {
        name: 'SignUp',

        data() {
            return {
                pseudo: '',
                email: '',
                password: '',
                urlImgProfil: '',
                errors: []
            }
        },
        methods: {
            async signUp() {
                this.errors = []
                let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                let regex = /^(http|https):\/\/[w\d]+\.[\w](\/[\w\d]+)?$/;
                let result = await axios.post(baseUrl, {
                    pseudo: this.pseudo,
                    email: this.email,
                    password: this.password,
                    urlImgProfil: this.urlImgProfil
                });
                if (this.pseudo == '') {
                    this.errors.push('Pseudo required.');
                }
                if (this.password == '') {
                    this.errors.push('Password required.');
                }
                if (this.email == '') {
                    this.errors.push('Pseudo required.');
                }
                if (this.urlImgProfil == '') {
                    this.errors.push('Password required.');
                }

                if (!this.errors.length) {
                    if (this.password.length < 5) { this.errors.push('Password must be at least 6 characters long '); }
                    if (this.pseudo.length < 3) { this.errors.push('Password must be at least 3 characters long '); }
                    if (!re.test(this.email)) { this.errors.push('email invalid'); }
                    /*if (!regex.test(this.urlImgProfil))  { this.errors.push('url invalid'); }*/
                    console.warn(result);
                    if (!this.errors.length) {
                        localStorage.setItem("user-info", JSON.stringify(result.data));
                        this.$router.push({ name: 'Login' })
                    }
                }
               
            },


        },
        mounted() {
            let user = localStorage.getItem("user-info");
            if (user != null) {
                this.$router.push({ name: 'Home' })
            }
        }
    }
</script>


<style>
    .logo {
        width: 50px;
    }

    .register input {
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid skyblue;
    }

    .register p {
        width: 300px;
        height: 40px;
        padding-left: 100px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
</style>