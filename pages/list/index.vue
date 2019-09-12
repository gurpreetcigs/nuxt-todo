<template>
    <div class="container">
        <nuxt-link to="/list/add"  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-t-full rounded-r-full rounded-b-full rounded-l-full fixed bottom-0 right-0 mb-5 mr-5">+</nuxt-link>
        <card v-for="data in TASKS" :key="data.id" :user-detail="data" @delete-item="deleteTask"></card>
        
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

import card from '~/components/card.vue';
import { mapGetters, mapActions }from 'vuex';
import axios from 'axios';

export default { 
    middleware: ['auth'],
    asyncData () {
      return axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
      .then((res) => {
        return { title: res.title }
      })
    },
    name: 'list',
    components: {
        card
    },
    methods:{
        ...mapActions([
            'DELETE_TASK' // map `this.DELETE_TASK()` to `this.$store.dispatch('DELETE_TASK')`
        ]),
        deleteTask(id){
            console.log(id)
            this.DELETE_TASK(id)
        }
    },
    computed: {
        tasks() { 
            console.log(this.$store._actions);
            // return this.$store.getters.TASKS
        },
        ...mapGetters(['TASKS'])
    },
    transition (to, from) {
        if (!from) { return 'slide-left'; }
        else{ return 'slide-right'; }
    }
}
</script>
