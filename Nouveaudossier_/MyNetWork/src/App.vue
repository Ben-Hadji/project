<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <Header/>
  <router-view/>
  
</template>

<script>
  import Header from './components/Header.vue';
  export default{
    name: 'App',
  }

</script>

<style>
    .logo{
        width: 50px;
    }

    .way input{
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px ;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid skyblue;
    }
    .template{
      background-image: 'https://pixabay.com/images/id-7563332/';
    }
    .way p{
        width: 300px;
        height: 40px;
        padding-left: 100px;
        display: block;
       
        margin-left: auto;
        margin-right: auto;
        margin-top: 10%;
        
    }
</style>