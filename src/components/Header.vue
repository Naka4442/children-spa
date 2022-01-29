<template>
    <header>
        <div></div>
        <h2>{{title}}</h2>
        <div class="profile-info">
            <h3 class="profile-info-name">{{fullName}}</h3>
            <p @click="logout">Выход</p>
        </div>
    </header>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    props : {
        title : String
    },
    computed: {
        fullName(){
            return (this.$store.getters.getUser.name) ? `${this.$store.getters.getUser.name} ${this.$store.getters.getUser.secondname}` : this.$store.getters.getUser.login;
        }
    },
    methods : {
        logout(){
            this.$store.commit("logout");
            this.$router.push("/auth");
        }
    }
}
</script>
<style lang="scss" scoped>
    $green : #44CA41;
    header{
        width: 100%;
        height: 100px;
        background-color: $green;

        display: flex;
        justify-content: space-between;
        align-items: center;
        h2{
            margin : 0;
            font : {
                size: 30px;
                weight : 400;
            }
        }
        .profile-info{
            margin-right: 20px;
            h3{
                text-align: center;
                font : {
                    size : 25px;
                    weight: 500;
                }
                margin: 0;
            }
            p{
                font-size: 15px;
                cursor: pointer;
                margin: 0;
                text-align: center;
            }
        }
    }
</style>