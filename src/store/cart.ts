import { reactive, computed } from 'vue'
import type { Product } from '@/data/products'

export interface CartItem {
  product: Product
  quantity: number
}

const state = reactive<{ items: CartItem[] }>({
  items: []
})

export function useCart() {
  const items = computed(() => state.items)
  
  const totalCount = computed(() => {
    return state.items.reduce((sum, item) => sum + item.quantity, 0)
  })
  
  const totalPrice = computed(() => {
    return state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  })
  
  function addToCart(product: Product) {
    const existingItem = state.items.find(item => item.product.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      state.items.push({ product, quantity: 1 })
    }
  }
  
  function removeFromCart(productId: number) {
    const index = state.items.findIndex(item => item.product.id === productId)
    if (index > -1) {
      state.items.splice(index, 1)
    }
  }
  
  function updateQuantity(productId: number, quantity: number) {
    const item = state.items.find(item => item.product.id === productId)
    if (item) {
      if (quantity <= 0) {
        removeFromCart(productId)
      } else {
        item.quantity = quantity
      }
    }
  }
  
  function clearCart() {
    state.items = []
  }
  
  return {
    items,
    totalCount,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }
}
