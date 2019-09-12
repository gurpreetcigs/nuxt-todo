<template>
    <div class="container">
        <form  @submit.stop.prevent="loginUser" method="POST" class="py-32 px-32">
            <div class="md:flex md:items-center mb-6" >
                <div class="md:w-1/6">
                    <label :class=" $v.name.$error ?'text-red-500': 'text-gray-500'"  class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Username
                    </label>
                </div>
                <div class="md:w-5/6 border-red-600" >
                    <input :class=" $v.name.$error ?'bg-red-200 border-red-200': 'bg-gray-200 border-gray-200'" class="appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" v-model.trim="$v.name.$model">
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/6">
                    <label :class=" $v.password.$error ?'text-red-500': 'text-gray-500'" class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Password
                    </label>
                </div>
                <div class="md:w-5/6">
                    <input  :class=" $v.password.$error ?'bg-red-200 border-red-200': 'bg-gray-200 border-gray-200'"  class="appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="password" v-model.trim="$v.password.$model">
                </div>
            </div>
            <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right">
                Login
            </button>
        </form>
    </div>
</template>

<style scoped>

    .container {
    transition: all .5s cubic-bezier(.55,0,.1,1);
    }
    .page-enter-active, .page-leave-active {
    transition: opacity .5s
    }
    .page-enter, .page-leave-active {
    opacity: 0
    }


    .slide-left-enter,
    .slide-right-leave-active {
    opacity: 0;
    transform: translate(30px, 0);
    }
    .slide-left-leave-active,
    .slide-right-enter {
    opacity: 0;
    transform: translate(-30px, 0);
    }   
</style>

<script>
import { mapActions, mapGetters }from 'vuex';
import { required } from 'vuelidate/lib/validators'
const Cookie = process.client ? require('js-cookie') : undefined

export default { 
    middleware: ['isLogged'],
    layout: 'guest',
    transition (to, from) {
        if (!from) { return 'slide-left'; }
        else{ return 'slide-right'; }
    },
    data(){
        return{
            name: '',
            password: ''
        }
    },
    validations: {
        name: {
            required
        },
        password: {
            required
        }
    },
    methods:{
        ...mapActions('auth',[
            'SET_AUTH', // map `this.SET_TASK()` to `this.$store.dispatch('SET_TASK')`,
        ]), 
        loginUser(e){
            this.$v.$touch();
            console.log(this.$v);
            if(!this.$v.$invalid){
                const auth = 'someStringGotFromApiServiceWithAjax'

                this.SET_AUTH(auth) // mutating to store for client rendering
                Cookie.set('auth', auth) // saving token in cookie for server rendering
                    // this.SET_AUTH(auth)
                setTimeout(() => { // we simulate the async request with timeout.
                   
                    this.$router.push({
                        path: '/list'
                    })
                }, 1000)  
            } 
        }
    },
    computed:{
        ...mapGetters(['TASKS']),
        // getPageNumber(){
        //     return page;
        // }
    }
}
</script>
