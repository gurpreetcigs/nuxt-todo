<template>
    <div class="text-center inline-block mt-2">
        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-32">
            <img class="w-full" src="https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914__340.png" alt="Sunset in the mountains">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{{ list.name }}</div>
                <p class="text-gray-700 text-base">
                {{ list.description }}
                </p>
            </div>
            <div class="px-6 py-4">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tasks</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#todo</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#reminder</span>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    middleware: ['auth', 'valid-list'],
    asyncData({ store, params }){
        return { list: store.getters.getTaskById(params.id) }
    },
    computed:{
        ...mapGetters(['getTaskById']),
    },
    methods:{
        getTaskByIdMethod(id){
            return this.getTaskById(id)
        }
    }
}
</script>