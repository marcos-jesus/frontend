<script setup>
    const storeUser = useUserStore()
    const fileInput = ref(null);
    const product = reactive({
        name: '',
        description: '',
        imagem: ''
    })

    function handleFileUpload() {
        const file = fileInput.value.files[0]
        product.imagem = file
    }

    async function addProduct() {
        await storeUser.doAddProduct(product)
        product = []
    }

</script>
<template>
    <LoadingComponent :display-loading="storeUser.loadingUser" />
    <div class="p-10">
        <input type="text"
            v-model="product.name"
            placeholder="Nome"
            class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400
            dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
        <input type="text"
            v-model="product.description"
            placeholder="Descrição"
            class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 
            dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
        <div class="flex items-center justify-center w-full mt-5">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Clique para upload</span> ou selecione e arraste</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" @change="handleFileUpload" ref="fileInput" />
            </label>
        </div>

        <button
            @click="addProduct()" 
            type="button" 
            class="mt-5 flex justify-center text-white bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 
                focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            <span>Enviar</span>
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
    </div>
</template>