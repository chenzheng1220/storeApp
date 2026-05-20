<template>
  <view class="page">
    <view class="header">
      <view class="header-content">
        <text class="logo">王府井奥莱</text>
        <view class="search-box" @click="handleSearch">
          <text class="search-icon">🔍</text>
          <text class="search-placeholder">搜索商品</text>
        </view>
      </view>
    </view>
    
    <scroll-view class="content" scroll-y :enhanced="true" :show-scrollbar="false">
      <swiper class="banner-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :circular="true">
        <swiper-item v-for="banner in banners" :key="banner.id">
          <image :src="banner.image" mode="aspectFill" class="banner-image" />
        </swiper-item>
      </swiper>
      
      <view class="category-section">
        <view class="section-title">
          <text class="title-text">分类</text>
        </view>
        <view class="category-grid">
          <view class="category-item" v-for="cat in categories" :key="cat.id" @click="goToCategory(cat.name)">
            <view class="category-icon">{{ cat.icon }}</view>
            <text class="category-name">{{ cat.name }}</text>
          </view>
        </view>
      </view>
      
      <view class="product-section">
        <view class="section-header">
          <view class="section-title">
            <text class="title-text">热门商品</text>
          </view>
          <view class="section-more" @click="goToMore">
            <text>更多</text>
            <text class="arrow">›</text>
          </view>
        </view>
        <view class="product-list">
          <view v-for="product in products" :key="product.id" class="product-card" @click="goToDetail(product.id)">
            <view class="product-image">
              <image :src="product.image" mode="aspectFill" />
            </view>
            <view class="product-info">
              <text class="product-name">{{ product.name }}</text>
              <text class="product-desc">{{ product.description }}</text>
              <view class="product-price">
                <text class="current-price">¥{{ product.price }}</text>
                <text class="original-price">¥{{ product.originalPrice }}</text>
              </view>
              <view class="product-sales">
                <text>已售 {{ product.sales }}</text>
              </view>
            </view>
          </view>
        </view>
      </view>
      
      <view class="bottom-space"></view>
    </scroll-view>
    
    <view class="loading" v-if="loading">
      <text>加载中...</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { api } from '@/api/mock'

const loading = ref(true)
const banners = ref<any[]>([])
const categories = ref<any[]>([])
const products = ref<any[]>([])

onMounted(async () => {
  try {
    const res: any = await api.getHomeData()
    if (res.code === 200) {
      banners.value = res.data.banners
      categories.value = res.data.categories
      products.value = res.data.products
    }
  } catch (error) {
    console.error('获取数据失败:', error)
    uni.showToast({
      title: '数据加载失败',
      icon: 'none'
    })
  } finally {
    loading.value = false
  }
})

function handleSearch() {
  uni.showToast({
    title: '搜索功能开发中',
    icon: 'none'
  })
}

function goToCategory(name: string) {
  uni.switchTab({
    url: '/pages/category/category'
  })
}

function goToMore() {
  uni.showToast({
    title: '更多商品',
    icon: 'none'
  })
}

function goToDetail(id: number) {
  uni.navigateTo({
    url: `/pages/detail/detail?id=${id}`
  })
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: #F5F5F5;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
  padding-top: var(--status-bar-height);
}

.header-content {
  display: flex;
  align-items: center;
  padding: 20rpx 30rpx;
}

.logo {
  font-size: 36rpx;
  font-weight: 700;
  color: #fff;
  margin-right: 30rpx;
}

.search-box {
  flex: 1;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 40rpx;
  padding: 16rpx 24rpx;
}

.search-icon {
  font-size: 28rpx;
  margin-right: 12rpx;
}

.search-placeholder {
  font-size: 26rpx;
  color: #999;
}

.content {
  padding-top: calc(var(--status-bar-height) + 100rpx);
  height: 100vh;
}

.banner-swiper {
  width: 100%;
  height: 360rpx;
}

.banner-image {
  width: 100%;
  height: 100%;
}

.category-section {
  background: #fff;
  margin-top: 20rpx;
  padding: 30rpx;
}

.section-title {
  margin-bottom: 20rpx;
}

.title-text {
  font-size: 32rpx;
  font-weight: 600;
  color: #333;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20rpx;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.category-icon {
  width: 100rpx;
  height: 100rpx;
  background: #F5F5F5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40rpx;
}

.category-name {
  font-size: 24rpx;
  color: #666;
  margin-top: 12rpx;
}

.product-section {
  padding: 20rpx 30rpx;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20rpx;
}

.section-more {
  display: flex;
  align-items: center;
  font-size: 26rpx;
  color: #999;
}

.arrow {
  font-size: 32rpx;
  margin-left: 8rpx;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20rpx;
}

.product-card {
  background: #fff;
  border-radius: 8rpx;
  overflow: hidden;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);
}

.product-image {
  width: 100%;
  height: 320rpx;
  
  image {
    width: 100%;
    height: 100%;
  }
}

.product-info {
  padding: 20rpx;
}

.product-name {
  font-size: 28rpx;
  font-weight: 600;
  color: #333;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-desc {
  font-size: 24rpx;
  color: #999;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 10rpx;
}

.product-price {
  display: flex;
  align-items: baseline;
  margin-top: 16rpx;
  
  .current-price {
    font-size: 32rpx;
    font-weight: 700;
    color: #FF6B6B;
  }
  
  .original-price {
    font-size: 24rpx;
    color: #ccc;
    text-decoration: line-through;
    margin-left: 12rpx;
  }
}

.product-sales {
  font-size: 22rpx;
  color: #999;
  margin-top: 10rpx;
}

.bottom-space {
  height: 120rpx;
}

.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 20rpx 40rpx;
  border-radius: 8rpx;
  z-index: 999;
}
</style>
