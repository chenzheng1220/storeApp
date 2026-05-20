<template>
  <view class="page">
    <scroll-view class="content" scroll-y v-if="product">
      <swiper class="image-swiper" :indicator-dots="true" :circular="true">
        <swiper-item>
          <image :src="product.image" mode="aspectFill" class="product-image" />
        </swiper-item>
      </swiper>
      
      <view class="product-info">
        <view class="price-row">
          <text class="current-price">¥{{ product.price }}</text>
          <text class="original-price">¥{{ product.originalPrice }}</text>
          <text class="discount">省¥{{ product.originalPrice - product.price }}</text>
        </view>
        
        <text class="product-name">{{ product.name }}</text>
        <text class="product-desc">{{ product.description }}</text>
        
        <view class="sales-row">
          <text class="sales">已售 {{ product.sales }}</text>
          <text class="stock">库存 {{ product.stock }} 件</text>
        </view>
      </view>
      
      <view class="detail-section">
        <view class="section-header">
          <text class="section-title">商品详情</text>
        </view>
        <view class="detail-content">
          <view class="detail-item">
            <text class="detail-label">品牌</text>
            <text class="detail-value">王府井奥莱</text>
          </view>
          <view class="detail-item">
            <text class="detail-label">分类</text>
            <text class="detail-value">{{ product.category }}</text>
          </view>
          <view class="detail-item">
            <text class="detail-label">产地</text>
            <text class="detail-value">中国</text>
          </view>
        </view>
      </view>
      
      <view class="bottom-space"></view>
    </scroll-view>
    
    <view class="empty-state" v-else>
      <text>商品不存在</text>
    </view>
    
    <view class="action-bar" v-if="product">
      <view class="action-left">
        <view class="action-item" @click="goHome">
          <text>🏠</text>
          <text>首页</text>
        </view>
        <view class="action-item" @click="goCart">
          <text>🛒</text>
          <text>购物车</text>
          <view class="cart-badge" v-if="cartCount > 0">
            <text>{{ cartCount }}</text>
          </view>
        </view>
      </view>
      <view class="action-right">
        <view class="btn-cart" @click="handleAddCart">
          <text>加入购物车</text>
        </view>
        <view class="btn-buy" @click="handleBuy">
          <text>立即购买</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { api } from '@/api/mock'
import { useCart } from '@/store/cart'

const { addToCart, totalCount } = useCart()
const product = ref<any>(null)
const loading = ref(true)

const cartCount = computed(() => totalCount.value)

onMounted(async () => {
  try {
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1] as any
    const id = parseInt(currentPage.options?.id || '1')
    
    const res: any = await api.getProductById(id)
    if (res.code === 200) {
      product.value = res.data
    }
  } catch (error) {
    console.error('获取商品详情失败:', error)
    uni.showToast({
      title: '加载失败',
      icon: 'none'
    })
  } finally {
    loading.value = false
  }
})

function goHome() {
  uni.switchTab({
    url: '/pages/index/index'
  })
}

function goCart() {
  uni.switchTab({
    url: '/pages/cart/cart'
  })
}

function handleAddCart() {
  if (product.value) {
    addToCart(product.value)
    uni.showToast({
      title: '已加入购物车',
      icon: 'success'
    })
  }
}

function handleBuy() {
  if (product.value) {
    addToCart(product.value)
    uni.showToast({
      title: '结算功能开发中',
      icon: 'none'
    })
  }
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: #F5F5F5;
}

.content {
  height: 100vh;
}

.image-swiper {
  width: 100%;
  height: 750rpx;
  background: #fff;
}

.product-image {
  width: 100%;
  height: 100%;
}

.product-info {
  background: #fff;
  padding: 30rpx;
  margin-bottom: 20rpx;
}

.price-row {
  display: flex;
  align-items: baseline;
}

.current-price {
  font-size: 48rpx;
  font-weight: 700;
  color: #FF6B6B;
}

.original-price {
  font-size: 28rpx;
  color: #999;
  text-decoration: line-through;
  margin-left: 20rpx;
}

.discount {
  font-size: 24rpx;
  color: #FF6B6B;
  background: rgba(255, 107, 107, 0.1);
  padding: 6rpx 12rpx;
  border-radius: 6rpx;
  margin-left: 16rpx;
}

.product-name {
  font-size: 32rpx;
  font-weight: 600;
  color: #333;
  margin-top: 20rpx;
  display: block;
}

.product-desc {
  font-size: 28rpx;
  color: #666;
  margin-top: 16rpx;
  display: block;
  line-height: 1.6;
}

.sales-row {
  display: flex;
  justify-content: space-between;
  margin-top: 24rpx;
  padding-top: 20rpx;
  border-top: 1rpx solid #F5F5F5;
}

.sales, .stock {
  font-size: 26rpx;
  color: #999;
}

.detail-section {
  background: #fff;
  padding: 30rpx;
}

.section-header {
  margin-bottom: 20rpx;
}

.section-title {
  font-size: 30rpx;
  font-weight: 600;
  color: #333;
}

.detail-content {
  background: #F9F9F9;
  border-radius: 8rpx;
  padding: 20rpx;
}

.detail-item {
  display: flex;
  padding: 16rpx 0;
  border-bottom: 1rpx solid #F0F0F0;
  
  &:last-child {
    border-bottom: none;
  }
}

.detail-label {
  width: 140rpx;
  font-size: 28rpx;
  color: #999;
}

.detail-value {
  flex: 1;
  font-size: 28rpx;
  color: #333;
}

.bottom-space {
  height: 160rpx;
}

.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  color: #999;
  font-size: 32rpx;
}

.action-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 20rpx 30rpx;
  background: #fff;
  border-top: 1rpx solid #F0F0F0;
  padding-bottom: calc(20rpx + env(safe-area-inset-bottom));
}

.action-left {
  display: flex;
}

.action-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40rpx;
  position: relative;
  
  text:first-child {
    font-size: 36rpx;
  }
  
  text:last-child {
    font-size: 22rpx;
    color: #666;
    margin-top: 4rpx;
  }
}

.cart-badge {
  position: absolute;
  top: -8rpx;
  right: -16rpx;
  min-width: 32rpx;
  height: 32rpx;
  background: #FF4757;
  border-radius: 16rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8rpx;
  
  text {
    font-size: 20rpx !important;
    color: #fff !important;
    margin-top: 0 !important;
  }
}

.action-right {
  flex: 1;
  display: flex;
  margin-left: 20rpx;
}

.btn-cart {
  flex: 1;
  padding: 24rpx;
  background: #FFB366;
  border-radius: 8rpx;
  margin-right: 16rpx;
  
  text {
    color: #fff;
    font-size: 28rpx;
    font-weight: 500;
    text-align: center;
    display: block;
  }
}

.btn-buy {
  flex: 1;
  padding: 24rpx;
  background: #FF6B6B;
  border-radius: 8rpx;
  
  text {
    color: #fff;
    font-size: 28rpx;
    font-weight: 500;
    text-align: center;
    display: block;
  }
}
</style>
