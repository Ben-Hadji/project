<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <router-view/>
</template>

<script>
  import SignUp from './components/SignUp.vue';
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

    .way p{
        width: 300px;
        height: 40px;
        padding-left: 100px;
        display: block;
       
        margin-left: auto;
        margin-right: auto;
        
    }
</style>