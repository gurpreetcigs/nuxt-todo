<template>
    <div class="container">
        <form  @submit.stop.prevent="addTask" method="POST" class="py-32 px-32">
            <div class="md:flex md:items-center mb-6" >
                <div class="md:w-1/6">
                    <label :class=" $v.name.$error ?'text-red-500': 'text-gray-500'"  class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Name
                    </label>
                </div>
                <div class="md:w-5/6 border-red-600" >
                    <input :class=" $v.name.$error ?'bg-red-200 border-red-200': 'bg-gray-200 border-gray-200'" class="appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" v-model.trim="$v.name.$model">
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/6">
                    <label :class=" $v.description.$error ?'text-red-500': 'text-gray-500'" class="block font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Description
                    </label>
                </div>
                <div class="md:w-5/6">
                    <input  :class=" $v.description.$error ?'bg-red-200 border-red-200': 'bg-gray-200 border-gray-200'"  class="appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" v-model.trim="$v.description.$model">
                </div>
            </div>
            <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right">
                Save
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

export default { 
    middleware: ['auth'],
    transition (to, from) {
        if (!from) { return 'slide-left'; }
        else{ return 'slide-right'; }
    },
    data(){
        return{
            name: '',
            description: ''
        }
    },
    validations: {
        name: {
            required
        },
        description: {
            required
        }
    },
    methods:{
        ...mapActions([
            'SET_TASK', // map `this.SET_TASK()` to `this.$store.dispatch('SET_TASK')`,
        ]), 
        addTask(e){
            this.$v.$touch();
            console.log(this.$v);
            if(!this.$v.$invalid){
                let task = {
                    'id': this.TASKS.length + 1, 
                    'name': this.name, 
                    'description': this.description
                };
                // console.log(task);
                this.SET_TASK(task)
                
                this.name  = '';
                this.description = '';

                this.$router.push({
                    path: '/list'
                })              
            } 
        }
    },
    computed:{
        ...mapGetters(['TASKS'])
    }
}
</script>
