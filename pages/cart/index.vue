<script setup>
    const cartStore = useCartStore()
    const route = useRouter()

    function backStore() {
        route.back()
    }

    function removeItemCart(produto) {
        cartStore.doRemoveItemCart(produto.id)
    }

</script>
<template>
    <LoaderComponent :display-loading="cartStore.loading"/>
    <div class="p-10">
        <button @click="backStore">
            <Icon name="ic:outline-arrow-back-ios" />
        </button>
        <div class="container mx-auto p-4">
        <h1 class="text-center text-2xl font-bold mb-4">Carrinho de Compras</h1>
        
        <div v-if="cartStore.cart?.length > 0">
            <div v-for="(produto, index) in cartStore.cart" :key="index">
                <div class="flex border-b p-4">
                    <img class="h-24 w-24 object-contain mr-4" :src="`http://localhost:8989/storage/${produto.imagem}`" :alt="produto.name">
                    <div class="flex flex-col justify-between flex-grow">
                        <span class="font-bold">{{ produto.name }}</span>
                        <span>R$ Preço Unitário</span>
                    </div>
                    <div class="flex items-center justify-between flex-grow">
                        <input type="number" class="form-input" value="Quantidade">
                        <span>R$ 0,00</span>
                    </div>
                    <button
                        @click="removeItemCart(produto)" 
                        class="ml-4 text-white font-bold py-2 px-2 rounded">
                        <Icon class="text-red-500 w-10 h-5 hover:text-red-700" name="ic:baseline-delete" />
                    </button>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="block max-w-full h-96 p-6 bg-white border border-gray-200 rounded-lg shadow">
                <div class="flex justify-center">
                    <span class="font-bold text-2xl">Ops no momento o seu carrinho está vazio. :(</span>
                </div>
            </div>                    
        </div>
        <div class="text-right p-4" v-if="cartStore.cart > 0">
            <div class="mb-2">Subtotal: R$ 0,00</div>
            <div class="mb-2">Envio: R$ 0,00</div>
            <div class="font-bold mb-4">Total: R$ 0,00</div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Finalizar Compra</button>
        </div>
    </div>
    </div>
</template>