<template>
    
    
    <div class="callout row card form-control" style="margin-top: 5%; margin-left:27.7%;height: auto; width: 850px">
        
        <div class="mb-3">
            <h4 for="contenu">Quoi de neuf ?</h4>
            <textarea class="form-control " id="exampleFormControlTextarea1" style="width: 800px" rows="3"></textarea>
        </div>
        <div class="mb-3">
            <label for="urlImgArticle">Url de l'image chef</label>
            <input type="url" @focus="show = false" class="form-control" style="width: 800px" id="urlImgArticle" v-model="urlImgArticle" placeholder="url vers l'image">
        </div>

        <div class="mb-3">
            <input type="submit" class="classBtn tx bg-success" style="width: 800px" v-on:click="addArt" value="publier">
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
        },
        async logged() {
            let user = localStorage.getItem("user-info");
            if (user != null) {
                this.pseudo = JSON.parse(user).pseudo;
                return (true)
            }
            else {return(false) }

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
        margin-top: 15%;
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