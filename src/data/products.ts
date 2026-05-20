export interface Product {
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

export interface Category {
  id: number
  name: string
  icon: string
}

export const categories: Category[] = [
  { id: 1, name: '女装', icon: '👗' },
  { id: 2, name: '男装', icon: '👔' },
  { id: 3, name: '鞋靴', icon: '👟' },
  { id: 4, name: '箱包', icon: '👜' },
  { id: 5, name: '配饰', icon: '💍' },
  { id: 6, name: '运动', icon: '⚽' },
  { id: 7, name: '家居', icon: '🏠' },
  { id: 8, name: '数码', icon: '📱' }
]

export const products: Product[] = [
  {
    id: 1,
    name: '春季新款连衣裙',
    price: 299,
    originalPrice: 599,
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=elegant%20spring%20dress%20fashion%20product%20photo%20white%20background&image_size=square',
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
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=men%20business%20casual%20shirt%20fashion%20product%20photo%20white%20background&image_size=square',
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
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fashion%20sports%20shoes%20sneakers%20product%20photo%20white%20background&image_size=square',
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
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=leather%20handbag%20luxury%20fashion%20product%20photo%20white%20background&image_size=square',
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
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=silver%20necklace%20jewelry%20product%20photo%20white%20background&image_size=square',
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
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=sports%20wear%20tracksuit%20athletic%20product%20photo%20white%20background&image_size=square',
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
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=bedding%20set%20home%20textile%20product%20photo%20white%20background&image_size=square',
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
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=wireless%20bluetooth%20earphones%20tech%20product%20photo%20white%20background&image_size=square',
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
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=womens%20trench%20coat%20fashion%20product%20photo%20white%20background&image_size=square',
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
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=mens%20casual%20pants%20fashion%20product%20photo%20white%20background&image_size=square',
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
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=womens%20high%20heels%20fashion%20product%20photo%20white%20background&image_size=square',
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
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=travel%20luggage%20suitcase%20product%20photo%20white%20background&image_size=square',
    category: '箱包',
    description: '大容量旅行箱，轻便耐用，万向轮设计',
    sales: 432,
    stock: 35
  }
]

export const banners = [
  {
    id: 1,
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fashion%20shopping%20mall%20promotion%20banner%20spring%20sale%20elegant%20design&image_size=landscape_16_9',
    title: '春季新品上市'
  },
  {
    id: 2,
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=luxury%20fashion%20sale%20banner%20discount%20promotion%20elegant%20design&image_size=landscape_16_9',
    title: '大牌限时特惠'
  },
  {
    id: 3,
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=sports%20wear%20collection%20banner%20athletic%20fashion%20modern%20design&image_size=landscape_16_9',
    title: '运动专区'
  }
]
