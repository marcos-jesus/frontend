<script setup>
import { useCartStore } from "~/services/CartStore"

const storeUser = useUserStore()
const cartStore = useCartStore()

const produtos = ref([])

async function addCart(produto) {
    const cart = {
        id: produto.id,
        name: produto.name,
        description: produto.description,
        imagem: produto.imagem
    }

    await cartStore.doAddCart(cart)
}

onBeforeMount(async () => {
    await storeUser.doGetProduct()
    produtos.value = storeUser.produtos
})

</script>
<template>
    <LoaderComponent :display-loading="storeUser.loading ? storeUser.loading : cartStore.loading"/>
    <div class="bg-gray-200 p-10 h-screen">
        <div class="bg-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
            <div 
                v-for="(produto, index) in produtos.products" :key="index"
                class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow
                dark:bg-gray-800 dark:border-gray-700"
            >
            <div class="h-32 w-full">
                <img class="p-8 rounded-t-lg object-contain h-full w-full" :src="`http://localhost:8989/storage/${produto.imagem}`" :alt="produto.imagem" />
            </div>

                <div class="px-5 pb-5">
                    <a href="#">
                        <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {{ produto.name }}
                        </h5>
                    </a>
                    <div class="flex items-center justify-between h-32">
                        <span class="text-sm font-semibold text-gray-900 dark:text-white">{{ produto.description }}</span>
                    </div>
                    <div class="flex">
                        <a href="#"
                            @click="addCart(produto,index)" 
                            class="w-full mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Adicionar ao Carrinho
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>