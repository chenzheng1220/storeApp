<template>
  <view class="page">
    <view class="category-container">
      <scroll-view class="category-sidebar" scroll-y>
        <view 
          class="sidebar-item" 
          :class="{ active: activeCategory === '全部' }"
          @click="selectCategory('全部')"
        >
          <text>📦 全部</text>
        </view>
        <view 
          class="sidebar-item" 
          :class="{ active: activeCategory === cat.name }"
          v-for="cat in categories" 
          :key="cat.id"
          @click="selectCategory(cat.name)"
        >
          <text>{{ cat.icon }} {{ cat.name }}</text>
        </view>
      </scroll-view>
      
      <scroll-view class="category-content" scroll-y>
        <view class="content-header">
          <text class="content-title">{{ activeCategory }}</text>
          <text class="product-count">共 {{ filteredProducts.length }} 件商品</text>
        </view>
        
        <view class="product-grid" v-if="filteredProducts.length > 0">
          <view class="product-item" v-for="product in filteredProducts" :key="product.id" @click="goToDetail(product.id)">
            <view class="product-image">
              <image :src="product.image" mode="aspectFill" />
            </view>
            <text class="product-name">{{ product.name }}</text>
            <view class="product-price">
              <text class="current-price">¥{{ product.price }}</text>
              <text class="original-price">¥{{ product.originalPrice }}</text>
            </view>
          </view>
        </view>
        
        <view class="empty-state" v-else>
          <text>🎪</text>
          <text class="empty-text">该分类暂无商品</text>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { api } from '@/api/mock'

const categories = ref<any[]>([])
const allProducts = ref<any[]>([])
const activeCategory = ref('全部')
const loading = ref(true)

const filteredProducts = computed(() => {
  if (activeCategory.value === '全部') {
    return allProducts.value
  }
  return allProducts.value.filter(p => p.category === activeCategory.value)
})

onMounted(async () => {
  try {
    const [categoriesRes, productsRes]: any[] = await Promise.all([
      api.getCategories(),
      api.getProducts()
    ])
    
    if (categoriesRes.code === 200) {
      categories.value = categoriesRes.data
    }
    if (productsRes.code === 200) {
      allProducts.value = productsRes.data
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

function selectCategory(name: string) {
  activeCategory.value = name
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

.category-container {
  display: flex;
  height: 100vh;
}

.category-sidebar {
  width: 200rpx;
  background: #F8F8F8;
}

.sidebar-item {
  padding: 30rpx 20rpx;
  text-align: center;
  font-size: 28rpx;
  color: #666;
  border-left: 6rpx solid transparent;
  
  &.active {
    background: #fff;
    color: #FF6B6B;
    border-left-color: #FF6B6B;
    font-weight: 600;
  }
}

.category-content {
  flex: 1;
  background: #fff;
}

.content-header {
  padding: 30rpx;
  border-bottom: 1rpx solid #F0F0F0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content-title {
  font-size: 32rpx;
  font-weight: 600;
  color: #333;
}

.product-count {
  font-size: 24rpx;
  color: #999;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20rpx;
  padding: 20rpx;
}

.product-item {
  background: #fff;
  border-radius: 8rpx;
  overflow: hidden;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.04);
}

.product-image {
  width: 100%;
  height: 280rpx;
  
  image {
    width: 100%;
    height: 100%;
  }
}

.product-name {
  font-size: 26rpx;
  color: #333;
  padding: 16rpx;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-price {
  padding: 0 16rpx 16rpx;
  display: flex;
  align-items: baseline;
  
  .current-price {
    font-size: 30rpx;
    font-weight: 700;
    color: #FF6B6B;
  }
  
  .original-price {
    font-size: 22rpx;
    color: #ccc;
    text-decoration: line-through;
    margin-left: 10rpx;
  }
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400rpx;
  
  text:first-child {
    font-size: 80rpx;
    margin-bottom: 20rpx;
  }
}

.empty-text {
  color: #999;
  font-size: 28rpx;
}
</style>
