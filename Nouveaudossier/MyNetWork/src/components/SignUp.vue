<template>
    <h1>Sign Up</h1>
    <div class="register align-items-center">
        <input type="text" placeholder="your pseudo"/>
        <input type="email" placeholder="your email" name="" id=""/>
        <input type="password" placeholder="choose password" name="" id=""/>
        <input type="url" placeholder="profil url" name="" id=""/>
        <input type="button" value="submit">
    </div>
</template>

<script>
    export default {
        name: 'SignUp'
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

    .centre {
        margin-left: auto;
        margin-right: auto;
    }
</style>