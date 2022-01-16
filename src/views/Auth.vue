<template>
    <section class="auth">
        <div class="auth-wrapper">
            <div class="auth-form" v-if="step === 1">
                <p>Привет, дорогой друг! Если ты сюда попал, то скорее всего ты хочешь пройти некоторые тесты. Для этого необходимо войти под логином и паролем, который тебе выдал преподаватель (Александр). Если что пиши ему в дискорд (Naked#7429).</p>
                <button @click="step++">Далее</button>
            </div>
            <div class="auth-form" v-else-if="step === 2">
                <div class="auth-inputs">
                    <input type="text" placeholder="Логин">
                    <input type="password" placeholder="Пароль">
                </div>
                <button>Вход</button>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data(){
        return {
            step : 1
        }
    }
}
</script>
<style lang="scss" scoped>
    .auth{
        width: 100%;
        height: 100vh;
        background : {
            image: url("../assets/images/pirat/auth.png");
            size: cover;
            position: center;
        }
        .auth-wrapper{
            widows: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            .auth-form{
                width: 1000px;
                height: 500px;
                background-color: rgba(0, 0, 0, 0.5);
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                p{
                    width: 80%;
                    height: 80%;
                    color: white;
                    font-size: 36px;
                    text-align: center;
                    margin: 0;
                    display: flex;
                    align-items: center;
                }
                .auth-inputs{
                    display: flex;
                    width: 100%;
                    height: 400px;

                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 50px;
                }
                input{
                    width: 760px;
                    height: 100px;
                    background: rgba(255, 255, 255, 0.5);
                    box-shadow: 0px 0px 5px #05FF00;
                    border-radius: 10px;
                    border: none;
                    outline: none;
                    font-size: 36px;

                    padding-left: 40px;
                }
                button{
                    width: 400px;
                    height: 80px;
                    background-color: #44CA41;
                    color: white;
                    border: none;
                    outline: none;
                    border-radius: 10px;
                    font-size: 36px;
                    cursor: pointer
                }
            }
        }
    }
</style>