<template>
    <div class="max-w-6xl w-280 lg:max-w-6xl my-8">
        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
        </div>
        
        <div class=" shadow-lg border-r border-b border-l border-gray-400 ml-32 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal bg-gray-200">
            <div class="mb-8">
                <span @click="deleteTask(userDetail.id)" class="relative float-right cursor-pointer bg-white px-2 rounded border-black border">x</span>
                <p class="text-sm text-gray-600 flex items-center">
                    <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                    Members only
                </p>
                <!-- <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div> -->
                <p class="text-gray-700 text-base">{{ userDetail.description }}</p>
            </div>
            <div class="flex items-center cursor-pointer" @click="getDetails(userDetail.id)">
                <img class="w-10 h-10 rounded-full mr-4" src="https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914__340.png" alt="Avatar of Jonathan Reinink">
                <div class="text-sm">
                    <p class="text-gray-900 leading-none">{{ userDetail.name }}</p>
                    <p class="text-gray-600">Aug 18</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default { 
    name: 'card',
    props: [ 'userDetail' ],
    methods:{
        deleteTask(id){
            this.$emit('delete-item', id);
        },
        getDetails(id){
            this.$router.push({
                path: `/list/${id}/view`
            })
        }
    }
}
</script>