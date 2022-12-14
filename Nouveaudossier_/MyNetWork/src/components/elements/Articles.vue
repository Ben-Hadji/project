<template>
     
    <div class="row " v-for="article in articles" :accesskey="article.id" style="margin-left: 30%; margin-top: 6%; margin-bottom:-4%">


        <div class="card " style="width: auto; height: auto;">
            <div class="card-header extend">
                <ul class="nav nav-tabs justify-content-between card-header-tabs">
                    <li class="nav-item">
                        <h6>{{article.pseudo}}</h6>
                    </li>
                    <li class="nav-item">
                        <p>posté le {{article.date}}</p>
                    </li>
                </ul>
            </div>
            <div>
                <img :src="article.urlImgArticle" alt="" class="img-fluid" style="width:800px; height:400px" />
            </div>

            <div class="card-body">
                <h3 class="card-title">{{article.contenu}}</h3>
                <img src='../../assets/like.svg' v-on:click="ilike" alt="" style="width:1.3em; height:auto; margin-left: 1%;" /><i>{{article.like}}  </i>
                <img src='../../assets/comment.svg' alt="" style="width:1.3em; height:auto; margin-left: 1%;" />{{article.commentaires.lenght}}<i></i>
            </div>
            <div class="card-header bg-light extend" >
                <ul class="nav nav-tabs  justify-content-between card-header-tabs" v-for="(comment, index) in article.commentaires">
                    <li class="nav-item">
                        <h6>{{comment.auteur}}</h6>
                    </li>
                    <li class="nav-item">
                        le {{comment.dt}}
                    </li>
                    <div><p class="text-start">{{comment.contenu}}</p></div>
                    

                </ul>
                
            </div>
            <div v-if="pseudo != ''" class="bg-white form-control">
                <div class="mb-3">
                    <h5 for="contenu" style="margin-top:1rem">Ajouter un commentaire</h5>
                    <textarea class="form-control " id="exampleFormControlTextarea1" style="margin-bottom: 0.2rem; height: auto;" rows="3"></textarea>
                    <input type="submit" class="classBtn tx bg-success" style="width: auto" v-on:click="addArt">
                </div>
            </div>

            <br />
        </div>
        
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'Articles',
        data() {
            return {
                comment: '',
                articles: [],
                pseudo: ''
                }
        },
        methods:{
            async ilike(){
                this.article.like++;
            }
        },
    

        async mounted() {
            let result = await axios.get("http://localhost:3000/articles");
            ///console.warn(result)
            this.articles = result.data;
            console.warn(this.articles[1].commentaires.length)
            let user = localStorage.getItem("user-info");
            if (user != null) {
                this.pseudo = JSON.parse(user).pseudo;
            } 
        }
   
    }

</script>


<style>
    .img {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px;
        width: 150px;
    }

    .yes{
        margin-bottom: 4px;
    }
</style>