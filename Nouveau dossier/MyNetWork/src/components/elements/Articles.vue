<template>
     <!-- <div class="row container" v-for="article in articles" :accesskey="article.id">
        <h6>{{article.contenu}}</h6>
        <p>{{article.pseudo}}</p>
        <p>{{article.date}}</p>
        <img v-bind:src="article.urlImgArticle" alt="" width="30" class="d-inline-block align-text-top">
        <p>{{article.commentaires}}</p>
        
        
    </div> -->
    <div class="row container" v-for="article in articles" :accesskey="article.id">
       
       
        <div class="card yes " style="width: auto;">
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
            <img :src="article.urlImgArticle" alt="" class="img-fluid"/>
            <div class="card-body">
                <h3 class="card-title">{{article.contenu}}</h3>
                <img src='../../assets/like.svg' v-on:click="ilike" alt="" style="width:1.3em; height:auto; margin-left: 1%;"/><i>{{article.like}}  </i>
                <img src='../../assets/comment.svg' alt="" style="width:1.3em; height:auto; margin-left: 1%;"/>{{article.like}}<i></i>
                <p class="card-text">{{article.commentaires}}</p>
            </div>
        </div>
        <br/>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'Articles',
        data() {
            return {
                articles: []
                }
        },
        methods:{
            async ilike(){
                this.article.like++;
            }
        },
    

        async mounted() {
            let result = await axios.get("http://localhost:3000/articles");
            console.warn(result)
            this.articles = result.data;
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