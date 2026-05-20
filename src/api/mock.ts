import Mock from 'mockjs'

const Random = Mock.Random

interface Product {
  id: number
  name: string
  price: number
  originalPrice: number
  image: string
  category: string
  description: string
  sales: number
  stock: number
}

interface Category {
  id: number
  name: string
  icon: string
}

const categories: Category[] = [
  { id: 1, name: '女装', icon: '👗' },
  { id: 2, name: '男装', icon: '👔' },
  { id: 3, name: '鞋靴', icon: '👟' },
  { id: 4, name: '箱包', icon: '👜' },
  { id: 5, name: '配饰', icon: '💍' },
  { id: 6, name: '运动', icon: '⚽' },
  { id: 7, name: '家居', icon: '🏠' },
  { id: 8, name: '数码', icon: '📱' }
]

const products: Product[] = [
  {
    id: 1,
    name: '春季新款连衣裙',
    price: 299,
    originalPrice: 599,
    image: 'https://via.placeholder.com/400x400/FF6B6B/FFFFFF?text=Dress',
    category: '女装',
    description: '优雅气质春季新款连衣裙，采用优质面料，舒适透气，修身显瘦',
    sales: 1234,
    stock: 50
  },
  {
    id: 2,
    name: '男士商务休闲衬衫',
    price: 199,
    originalPrice: 399,
    image: 'https://via.placeholder.com/400x400/4ECDC4/FFFFFF?text=Shirt',
    category: '男装',
    description: '经典商务休闲衬衫，纯棉面料，舒适透气，百搭款式',
    sales: 856,
    stock: 80
  },
  {
    id: 3,
    name: '时尚运动鞋',
    price: 499,
    originalPrice: 899,
    image: 'https://via.placeholder.com/400x400/95E1D3/FFFFFF?text=Shoes',
    category: '鞋靴',
    description: '潮流运动鞋，轻便舒适，减震防滑，适合日常穿搭',
    sales: 2345,
    stock: 120
  },
  {
    id: 4,
    name: '真皮手提包',
    price: 599,
    originalPrice: 1199,
    image: 'https://via.placeholder.com/400x400/F38181/FFFFFF?text=Bag',
    category: '箱包',
    description: '高品质真皮手提包，简约大气，容量充足',
    sales: 567,
    stock: 30
  },
  {
    id: 5,
    name: '纯银项链',
    price: 159,
    originalPrice: 359,
    image: 'https://via.placeholder.com/400x400/FCE38A/FFFFFF?text=Necklace',
    category: '配饰',
    description: '精致纯银项链，简约时尚，百搭饰品',
    sales: 3456,
    stock: 200
  },
  {
    id: 6,
    name: '运动套装',
    price: 399,
    originalPrice: 799,
    image: 'https://via.placeholder.com/400x400/AA96DA/FFFFFF?text=Sports',
    category: '运动',
    description: '专业运动套装，透气排汗，舒适贴身',
    sales: 789,
    stock: 60
  },
  {
    id: 7,
    name: '家居四件套',
    price: 259,
    originalPrice: 499,
    image: 'https://via.placeholder.com/400x400/FCBAD3/FFFFFF?text=Bedding',
    category: '家居',
    description: '亲肤舒适四件套，优质面料，柔软透气',
    sales: 1567,
    stock: 90
  },
  {
    id: 8,
    name: '无线蓝牙耳机',
    price: 199,
    originalPrice: 399,
    image: 'https://via.placeholder.com/400x400/A8D8EA/FFFFFF?text=Earphones',
    category: '数码',
    description: '高品质无线蓝牙耳机，降噪功能，长续航',
    sales: 4567,
    stock: 150
  },
  {
    id: 9,
    name: '女士风衣外套',
    price: 459,
    originalPrice: 899,
    image: 'https://via.placeholder.com/400x400/FFAAA5/FFFFFF?text=Coat',
    category: '女装',
    description: '经典女士风衣，英伦风格，修身显瘦',
    sales: 654,
    stock: 40
  },
  {
    id: 10,
    name: '男士休闲裤',
    price: 179,
    originalPrice: 359,
    image: 'https://via.placeholder.com/400x400/FFD3B6/FFFFFF?text=Pants',
    category: '男装',
    description: '舒适休闲裤，弹力面料，百搭款式',
    sales: 1234,
    stock: 100
  },
  {
    id: 11,
    name: '女士高跟鞋',
    price: 329,
    originalPrice: 599,
    image: 'https://via.placeholder.com/400x400/FF8B94/FFFFFF?text=Heels',
    category: '鞋靴',
    description: '优雅高跟鞋，真皮材质，舒适不累脚',
    sales: 876,
    stock: 55
  },
  {
    id: 12,
    name: '旅行拉杆箱',
    price: 499,
    originalPrice: 999,
    image: 'https://via.placeholder.com/400x400/7C83FD/FFFFFF?text=Luggage',
    category: '箱包',
    description: '大容量旅行箱，轻便耐用，万向轮设计',
    sales: 432,
    stock: 35
  }
]

const banners = [
  {
    id: 1,
    image: 'https://via.placeholder.com/750x360/FF6B6B/FFFFFF?text=Spring+Sale',
    title: '春季新品上市'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/750x360/4ECDC4/FFFFFF?text=Big+Discount',
    title: '大牌限时特惠'
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/750x360/95E1D3/FFFFFF?text=Sports+Zone',
    title: '运动专区'
  }
]

Mock.mock(/\/api\/categories/, 'get', () => {
  return {
    code: 200,
    message: 'success',
    data: categories
  }
})

Mock.mock(/\/api\/products/, 'get', (options: any) => {
  const url = new URL(options.url, 'http://localhost')
  const category = url.searchParams.get('category')
  
  let result = products
  if (category && category !== '全部') {
    result = products.filter(p => p.category === category)
  }
  
  return {
    code: 200,
    message: 'success',
    data: result
  }
})

Mock.mock(/\/api\/product\/\d+/, 'get', (options: any) => {
  const id = parseInt(options.url.match(/\/api\/product\/(\d+)/)?.[1] || '1')
  const product = products.find(p => p.id === id)
  
  return {
    code: 200,
    message: 'success',
    data: product || null
  }
})

Mock.mock(/\/api\/banners/, 'get', () => {
  return {
    code: 200,
    message: 'success',
    data: banners
  }
})

Mock.mock(/\/api\/home/, 'get', () => {
  return {
    code: 200,
    message: 'success',
    data: {
      banners: banners,
      categories: categories,
      products: products.slice(0, 8)
    }
  }
})

Mock.mock(/\/api\/cart\/add/, 'post', (options: any) => {
  return {
    code: 200,
    message: '添加成功',
    data: true
  }
})

Mock.mock(/\/api\/order\/create/, 'post', (options: any) => {
  return {
    code: 200,
    message: '订单创建成功',
    data: {
      orderId: Random.guid(),
      orderNo: 'ORD' + Random.date('yyyyMMddHHmmss')
    }
  }
})

export const api = {
  getCategories: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          code: 200,
          message: 'success',
          data: categories
        })
      }, 300)
    })
  },
  
  getProducts: (category?: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let result = products
        if (category && category !== '全部') {
          result = products.filter(p => p.category === category)
        }
        resolve({
          code: 200,
          message: 'success',
          data: result
        })
      }, 300)
    })
  },
  
  getProductById: (id: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = products.find(p => p.id === id)
        resolve({
          code: 200,
          message: 'success',
          data: product || null
        })
      }, 300)
    })
  },
  
  getBanners: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          code: 200,
          message: 'success',
          data: banners
        })
      }, 300)
    })
  },
  
  getHomeData: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          code: 200,
          message: 'success',
          data: {
            banners: banners,
            categories: categories,
            products: products.slice(0, 8)
          }
        })
      }, 300)
    })
  },
  
  addToCart: (productId: number, quantity: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          code: 200,
          message: '添加成功',
          data: true
        })
      }, 200)
    })
  },
  
  createOrder: (orderData: any) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          code: 200,
          message: '订单创建成功',
          data: {
            orderId: Random.guid(),
            orderNo: 'ORD' + Random.date('yyyyMMddHHmmss')
          }
        })
      }, 500)
    })
  }
}

export { products, categories, banners }
