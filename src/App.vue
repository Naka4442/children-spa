<template>
  <router-view />
</template>

<script>
export default {
  name: 'children-spa',
  components: {
    
  },
  beforeMount(){
        let token = localStorage.getItem("token");
        if(token){
            this.$router.push("/cabinet");
        }
        else{
            this.$router.push("/auth");
        }
    }
}
</script>
