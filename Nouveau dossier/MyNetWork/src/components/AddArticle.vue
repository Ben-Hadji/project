<template>
    
    
        <div class="card yes " style="width: auto;">
            <div class="mb-3">
                <label for="contenu">Contenu</label>
                <input type=" txt" @focus="show = false" class="form-control register" id="contenu" v-model="contenu" placeholder="exprimez vous">
            </div>
            <div class="mb-3">
                <label for="urlImgArticle">Url de l'image chef</label>
                <input type="url" @focus="show = false" class="form-control" id="urlImgArticle" v-model="urlImgArticle" placeholder="url vers l'image">
            </div>
            <div class="mb-3">
                <input type="submit" :class="classBtn" v-on:click="addArt">
            </div>
            <div class="alert alert-danger" v-if="show">
                <div v-for="message in messages">{{ message }}</div>
            </div>
        </div>
  
</template>

<script>
    import axios from 'axios'
    const baseUrl = "http://localhost:3000/article"
    export default {
        name: 'AddArticle',
    
    data(){
        return {
            pseudo: '',
            contenu: '',
            urlImgArticle: ''
        }
    },
    methods: {
        async addArt(){
            let result = await axios.post(baseUrl, {
           
            contenu: this.contenu, 
            urlImgArticle: this.urlImgArticle

            });
            
            if(this.pseudo !='' && this.contenu != '' && this.urlImgArticle != ''){

                console.warn(result);
                if(result.status==201){
                    localStorage.setItem("user-info", JSON.stringify(result.data));
                    console.log('succes')
                }
            }
            else(console.warn('non'))
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
    .yes{
        margin-right: 5%;
        margin-top: 10%;
    }
    .register p{
        width: 300px;
        height: 40px;
        padding-left: 100px;
        display: block;
       
        margin-left: auto;
        margin-right: auto;
        
    }

    .txt {
        width: 300px;
        height: 40px;
        padding-left: 100px;
        display: block;
       
        margin-left: auto;
        margin-right: auto;
    }
</style>