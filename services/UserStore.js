import {defineStore} from 'pinia'
import api from '@/services/api'
import {route} from '@/services/routes-dictionary'


export const useUserStore = defineStore('user', {
    state() {
        return {
            loading: false,
            produtos: [],
        }
    },

    actions: {
        async doGetProduct() {
            this.loading = true
            const resp = await api.get(`${api.defaults.baseURL}${route.UserAllProduct}`)

            if (resp.status == 200) {
                this.loading = false
                this.produtos = resp.data
            }

            this.loading = false
        },

        async doAddProduct(product) {
            this.loading = true
            const resp = await api.post(`${api.defaults.baseURL}${route.UserProductAdd}`, product)

            if (resp.status === 201) {
                this.loading = false
            }

            this.loading = false
        }
    }
})