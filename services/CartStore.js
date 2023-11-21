import {defineStore} from 'pinia'
import api from '@/services/api'
import {route} from '@/services/routes-dictionary'

export const useCartStore = defineStore('cart', {
    state() {
        return {
            cart: [],
            countCart: 0,
            loading: false,
        }
    },

    actions: {
        async doAddCart(product) {
            this.loading = true
            const resp = await api.post(`${api.defaults.baseURL}${route.AddCart}`, product)

            if (resp.status === 201) {
                await this.doGetCart()
            }

            this.loading = false
        },

        async doGetCart() {
            this.loading = true
            const resp = await api.get(`${api.defaults.baseURL}${route.GetCart}`)

            if (resp.status === 200) {
                this.cart = resp.data.cart

                if (this.cart.length > 0) {
                    this.countCart = this.cart.length
                } else {
                    this.countCart = 0
                }
                
                this.loading = false
            }

            this.loading = false
        },

        async doRemoveItemCart(id) {
            this.loading = true
            const resp = await api.delete(`${api.defaults.baseURL}${route.DeleteItemCart}${id}`)

            if (resp.status === 200) {
                await this.doGetCart()
            }

            this.loading = false
        }
    }
})