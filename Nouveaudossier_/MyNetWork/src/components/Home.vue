<template>
    
    <div class="extend">
        <div class="row">
            
            <div class="col-8">
                <div v-if="pseudo != ''" class="container">
                    <AddArticle/>
                </div>
                <Articles/>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import Login from './Login.vue';
    import AddArticle from './AddArticle.vue';
    import Articles from './elements/Articles.vue'
    export default {
        name: 'Home',
        data(){
            return{
                pseudo: ''
            }
        },

        components: {
    Header,
    Login,
    Articles,
    AddArticle
},
        mounted(){
            let user = localStorage.getItem("user-info");
            if(user != null)  {
                this.pseudo = JSON.parse(user).pseudo;
            } 
        }
    }
</script>