<template>
  <view class="page">
    <scroll-view class="cart-content" scroll-y v-if="items.length > 0">
      <view class="cart-item" v-for="item in items" :key="item.product.id">
        <view class="item-checkbox" @click="toggleSelect(item.product.id)">
          <view class="checkbox" :class="{ checked: selectedIds.includes(item.product.id) }">
            <text v-if="selectedIds.includes(item.product.id)">✓</text>
          </view>
        </view>
        
        <view class="item-image" @click="goToDetail(item.product.id)">
          <image :src="item.product.image" mode="aspectFill" />
        </view>
        
        <view class="item-info">
          <text class="item-name">{{ item.product.name }}</text>
          <text class="item-desc">{{ item.product.description }}</text>
          <view class="item-bottom">
            <text class="item-price">¥{{ item.product.price }}</text>
            <view class="quantity-control">
              <view class="qty-btn" @click="decreaseQty(item.product.id)">
                <text>−</text>
              </view>
              <text class="qty-value">{{ item.quantity }}</text>
              <view class="qty-btn" @click="increaseQty(item.product.id)">
                <text>+</text>
              </view>
            </view>
          </view>
        </view>
        
        <view class="item-delete" @click="handleDelete(item.product.id)">
          <text>删除</text>
        </view>
      </view>
    </scroll-view>
    
    <view class="empty-cart" v-else>
      <text class="empty-icon">🛒</text>
      <text class="empty-text">购物车空空如也</text>
      <view class="empty-btn" @click="goShopping">
        <text>去购物</text>
      </view>
    </view>
    
    <view class="cart-footer" v-if="items.length > 0">
      <view class="footer-left">
        <view class="select-all" @click="toggleSelectAll">
          <view class="checkbox" :class="{ checked: isAllSelected }">
            <text v-if="isAllSelected">✓</text>
          </view>
          <text>全选</text>
        </view>
      </view>
      <view class="footer-right">
        <view class="total-section">
          <text class="total-label">合计:</text>
          <text class="total-price">¥{{ selectedTotal.toFixed(2) }}</text>
        </view>
        <view class="checkout-btn" :class="{ disabled: selectedIds.length === 0 }" @click="handleCheckout">
          <text>结算({{ selectedCount }})</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCart } from '@/store/cart'

const { items, totalCount, addToCart, updateQuantity, removeFromCart } = useCart()
const selectedIds = ref<number[]>([])

const isAllSelected = computed(() => {
  return items.value.length > 0 && selectedIds.value.length === items.value.length
})

const selectedCount = computed(() => {
  return selectedIds.value.reduce((sum, id) => {
    const item = items.value.find(i => i.product.id === id)
    return sum + (item?.quantity || 0)
  }, 0)
})

const selectedTotal = computed(() => {
  return selectedIds.value.reduce((sum, id) => {
    const item = items.value.find(i => i.product.id === id)
    return sum + (item?.product.price || 0) * (item?.quantity || 0)
  }, 0)
})

function toggleSelect(id: number) {
  const index = selectedIds.value.indexOf(id)
  if (index > -1) {
    selectedIds.value.splice(index, 1)
  } else {
    selectedIds.value.push(id)
  }
}

function toggleSelectAll() {
  if (isAllSelected.value) {
    selectedIds.value = []
  } else {
    selectedIds.value = items.value.map(item => item.product.id)
  }
}

function increaseQty(id: number) {
  const item = items.value.find(i => i.product.id === id)
  if (item && item.quantity < item.product.stock) {
    updateQuantity(id, item.quantity + 1)
  }
}

function decreaseQty(id: number) {
  const item = items.value.find(i => i.product.id === id)
  if (item && item.quantity > 1) {
    updateQuantity(id, item.quantity - 1)
  }
}

function handleDelete(id: number) {
  uni.showModal({
    title: '提示',
    content: '确定要删除这个商品吗？',
    success: (res) => {
      if (res.confirm) {
        removeFromCart(id)
        const index = selectedIds.value.indexOf(id)
        if (index > -1) {
          selectedIds.value.splice(index, 1)
        }
      }
    }
  })
}

function goToDetail(id: number) {
  uni.navigateTo({
    url: `/pages/detail/detail?id=${id}`
  })
}

function goShopping() {
  uni.switchTab({
    url: '/pages/index/index'
  })
}

function handleCheckout() {
  if (selectedIds.value.length === 0) {
    uni.showToast({
      title: '请选择商品',
      icon: 'none'
    })
    return
  }
  uni.showToast({
    title: '结算功能开发中',
    icon: 'none'
  })
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: #F5F5F5;
}

.cart-content {
  padding: 20rpx;
  padding-bottom: 140rpx;
  height: 100vh;
}

.cart-item {
  display: flex;
  background: #fff;
  border-radius: 12rpx;
  padding: 20rpx;
  margin-bottom: 20rpx;
  position: relative;
}

.item-checkbox {
  padding: 20rpx 10rpx;
}

.checkbox {
  width: 44rpx;
  height: 44rpx;
  border: 2rpx solid #ddd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24rpx;
  color: #fff;
  
  &.checked {
    background: #FF6B6B;
    border-color: #FF6B6B;
  }
}

.item-image {
  width: 180rpx;
  height: 180rpx;
  
  image {
    width: 100%;
    height: 100%;
    border-radius: 8rpx;
  }
}

.item-info {
  flex: 1;
  padding: 10rpx 20rpx;
  display: flex;
  flex-direction: column;
}

.item-name {
  font-size: 28rpx;
  font-weight: 600;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.item-desc {
  font-size: 24rpx;
  color: #999;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.item-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-price {
  font-size: 32rpx;
  font-weight: 700;
  color: #FF6B6B;
}

.quantity-control {
  display: flex;
  align-items: center;
  background: #F5F5F5;
  border-radius: 8rpx;
}

.qty-btn {
  width: 60rpx;
  height: 50rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32rpx;
  color: #666;
}

.qty-value {
  width: 60rpx;
  text-align: center;
  font-size: 28rpx;
}

.item-delete {
  position: absolute;
  top: 20rpx;
  right: 20rpx;
  font-size: 24rpx;
  color: #999;
}

.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
}

.empty-icon {
  font-size: 120rpx;
  margin-bottom: 30rpx;
}

.empty-text {
  font-size: 32rpx;
  color: #999;
  margin-bottom: 40rpx;
}

.empty-btn {
  padding: 20rpx 60rpx;
  background: #FF6B6B;
  border-radius: 40rpx;
  
  text {
    color: #fff;
    font-size: 28rpx;
  }
}

.cart-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx 30rpx;
  background: #fff;
  border-top: 1rpx solid #F0F0F0;
  padding-bottom: calc(20rpx + env(safe-area-inset-bottom));
}

.footer-left {
  display: flex;
  align-items: center;
}

.select-all {
  display: flex;
  align-items: center;
  font-size: 28rpx;
  color: #333;
}

.select-all .checkbox {
  margin-right: 12rpx;
}

.footer-right {
  display: flex;
  align-items: center;
}

.total-section {
  margin-right: 30rpx;
}

.total-label {
  font-size: 26rpx;
  color: #666;
}

.total-price {
  font-size: 36rpx;
  font-weight: 700;
  color: #FF6B6B;
}

.checkout-btn {
  padding: 20rpx 40rpx;
  background: #FF6B6B;
  border-radius: 40rpx;
  
  text {
    color: #fff;
    font-size: 28rpx;
  }
  
  &.disabled {
    background: #ccc;
  }
}
</style>
