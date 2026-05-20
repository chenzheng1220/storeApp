<template>
  <view class="page">
    <view class="user-header">
      <view class="user-info">
        <view class="avatar">
          <text>👤</text>
        </view>
        <view class="user-detail">
          <text class="user-name">登录/注册</text>
          <text class="user-id">点击登录享更多优惠</text>
        </view>
      </view>
      <view class="header-arrow">
        <text>›</text>
      </view>
    </view>
    
    <view class="order-section">
      <view class="section-header">
        <text class="section-title">我的订单</text>
        <view class="section-more">
          <text>全部订单</text>
          <text class="arrow">›</text>
        </view>
      </view>
      <view class="order-tabs">
        <view class="order-tab" v-for="tab in orderTabs" :key="tab.key" @click="handleOrderTab(tab.key)">
          <view class="tab-icon">{{ tab.icon }}</view>
          <text class="tab-name">{{ tab.name }}</text>
          <view class="tab-badge" v-if="tab.count > 0">
            <text>{{ tab.count }}</text>
          </view>
        </view>
      </view>
    </view>
    
    <view class="menu-section">
      <view class="menu-item" v-for="item in menuItems" :key="item.key" @click="handleMenu(item.key)">
        <text class="menu-icon">{{ item.icon }}</text>
        <text class="menu-name">{{ item.name }}</text>
        <text class="menu-arrow">›</text>
      </view>
    </view>
    
    <view class="menu-section">
      <view class="menu-item" v-for="item in menuItems2" :key="item.key" @click="handleMenu(item.key)">
        <text class="menu-icon">{{ item.icon }}</text>
        <text class="menu-name">{{ item.name }}</text>
        <text class="menu-arrow">›</text>
      </view>
    </view>
    
    <view class="bottom-space"></view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const orderTabs = [
  { key: 'unpaid', name: '待付款', icon: '💳', count: 2 },
  { key: 'unship', name: '待发货', icon: '📦', count: 0 },
  { key: 'unreceive', name: '待收货', icon: '🚚', count: 1 },
  { key: 'uncomment', name: '待评价', icon: '⭐', count: 3 },
  { key: 'refund', name: '退换/售后', icon: '🔄', count: 0 }
]

const menuItems = [
  { key: 'coupon', name: '优惠券', icon: '🎫' },
  { key: 'points', name: '积分商城', icon: '🏆' },
  { key: 'address', name: '收货地址', icon: '📍' },
  { key: 'service', name: '客服中心', icon: '💬' }
]

const menuItems2 = [
  { key: 'settings', name: '设置', icon: '⚙️' },
  { key: 'about', name: '关于我们', icon: 'ℹ️' }
]

function handleOrderTab(key: string) {
  uni.showToast({
    title: `点击了${key}`,
    icon: 'none'
  })
}

function handleMenu(key: string) {
  uni.showToast({
    title: `点击了${key}`,
    icon: 'none'
  })
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  background: #F5F5F5;
}

.user-header {
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
  padding: 60rpx 30rpx 40rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-info {
  display: flex;
  align-items: center;
}

.avatar {
  width: 120rpx;
  height: 120rpx;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50rpx;
}

.user-detail {
  margin-left: 24rpx;
}

.user-name {
  font-size: 32rpx;
  font-weight: 600;
  color: #fff;
  display: block;
}

.user-id {
  font-size: 24rpx;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 8rpx;
  display: block;
}

.header-arrow {
  font-size: 40rpx;
  color: rgba(255, 255, 255, 0.8);
}

.order-section {
  background: #fff;
  margin: 20rpx;
  border-radius: 12rpx;
  padding: 20rpx;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20rpx;
}

.section-title {
  font-size: 30rpx;
  font-weight: 600;
  color: #333;
}

.section-more {
  display: flex;
  align-items: center;
  font-size: 26rpx;
  color: #999;
}

.section-more .arrow {
  font-size: 32rpx;
  margin-left: 8rpx;
}

.order-tabs {
  display: flex;
  justify-content: space-around;
}

.order-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.tab-icon {
  font-size: 44rpx;
}

.tab-name {
  font-size: 24rpx;
  color: #666;
  margin-top: 12rpx;
}

.tab-badge {
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
    font-size: 20rpx;
    color: #fff;
  }
}

.menu-section {
  background: #fff;
  margin: 20rpx;
  border-radius: 12rpx;
  overflow: hidden;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 30rpx;
  border-bottom: 1rpx solid #F5F5F5;
  
  &:last-child {
    border-bottom: none;
  }
}

.menu-icon {
  font-size: 36rpx;
  margin-right: 20rpx;
}

.menu-name {
  flex: 1;
  font-size: 28rpx;
  color: #333;
}

.menu-arrow {
  font-size: 32rpx;
  color: #ccc;
}

.bottom-space {
  height: 120rpx;
}
</style>
