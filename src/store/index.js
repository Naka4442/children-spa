import { createStore } from "vuex";

const store = createStore({
    state(){
        return {
            auth : false,
            user : false,
            token : false
        }
    },
    actions : {
        async auth(ctx, data){
            let apiData = JSON.stringify({
                login: data.login,
                password : data.password
            });
            const res = await fetch("https://api.aprograms.site?class=User&action=auth", {
                method : "POST",
                headers : {
                    "Content-Type" : "appication/json;charset=utf-8"
                },
                body : apiData
            });
            let result = await res.json();
            if(result.Access_token){
                ctx.commit("setAuth", result.Access_token);
                ctx.commit("setUser", result.user);
                return result.Access_token;
            }
            else{
                return false;
            }
        }
    },
    mutations : {
        setAuth(state, token){
            state.auth = true;
            state.token = token;
        },
        setUser(state, user){
            state.user = user;
        }
    },
    getters : {
        getAuth(state){
            return state.auth;
        },
        getUser(state){
            return state.user;
        }
    }
});
export default store;