<template>
    <h1>Hello c'est la Home Page'</h1>
   
    <div class="row container" v-for="article in articles" :accesskey="article.id">
        <h6>{{article.contenu}}</h6>
        <p>{{article.pseudo}}</p>
        <p>{{article.date}}</p>
        <img src="article.urlImgArticle" />
        <img v-bind:src="article.urlImgArticle" class="rounded float-left">
        <p>{{article.contenu}}</p>
        
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'Home',
        data() {
            return {
                articles: []
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
</style>