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
			this.$store.commit("getUserFromStorage");
            this.$router.push("/cabinet");
        }
        else{
            this.$router.push("/auth");
        }
    }
}
</script>
