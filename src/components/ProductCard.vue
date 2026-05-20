<template>
  <view class="product-card" @click="goToDetail">
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
</template>

<script setup lang="ts">
import type { Product } from '@/data/products'

defineProps<{
  product: Product
}>()

function goToDetail() {
  uni.navigateTo({
    url: `/pages/detail/detail?id=${(this as any).product.id}`
  })
}
</script>

<style lang="scss" scoped>
.product-card {
  background: #fff;
  border-radius: 8rpx;
  overflow: hidden;
  margin-bottom: 20rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);
}

.product-image {
  width: 100%;
  height: 320rpx;
  overflow: hidden;
  
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
</style>
