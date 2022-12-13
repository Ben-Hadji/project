<template>
    <h1>Welcome Home Chacal</h1>
</template>

<script>
    export default {
        name: 'Home',
        mounted(){
            let user = localStorage.getItem("user-infp");
            if(!user)
            {
                this.$router.push({name:'SignUp'})
            }
        }
    }
</script>