export interface Product {
  id: number;
  name: string;
  origin: string;
  category: string;
  roast: string;
  price: number;
  weight: string;
  description: string;
  flavor: string[];
  image: string;
  rating: number;
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const categories = ['全部', '浅烘焙', '中烘焙', '深烘焙'];

export const products: Product[] = [
  {
    id: 1,
    name: '耶加雪菲 · 科契尔',
    origin: '埃塞俄比亚',
    category: '浅烘焙',
    roast: '浅烘焙',
    price: 128,
    weight: '227g',
    description: '来自埃塞俄比亚耶加雪菲产区的科契尔处理站，采用水洗处理法。这款咖啡以其令人惊叹的花香和柑橘风味著称，入口如品一杯花果茶，余韵悠长带有蜂蜜般的甘甜。适合手冲或虹吸壶冲泡，充分展现其精致的风味层次。',
    flavor: ['茉莉花香', '柠檬', '蜂蜜', '佛手柑'],
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=600&fit=crop',
    rating: 4.9,
    stock: 50,
  },
  {
    id: 2,
    name: '薇拉 · 甜蜜波浪',
    origin: '哥伦比亚',
    category: '中烘焙',
    roast: '中烘焙',
    price: 98,
    weight: '227g',
    description: '产自哥伦比亚薇拉省海拔1700米以上的高地，由小农户精心种植。中度烘焙完美平衡了这款咖啡的焦糖甜感与坚果香气，口感丝滑圆润，带有太妃糖和牛奶巧克力的风味，是日常饮用的绝佳选择。',
    flavor: ['焦糖', '榛果', '太妃糖', '红苹果'],
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=600&h=600&fit=crop',
    rating: 4.7,
    stock: 80,
  },
  {
    id: 3,
    name: '肯尼亚 AA · 浆果之韵',
    origin: '肯尼亚',
    category: '浅烘焙',
    roast: '浅烘焙',
    price: 148,
    weight: '227g',
    description: '肯尼亚最高等级AA豆，来自涅里产区的精选批次。采用72小时水洗发酵，赋予其浓郁的黑醋栗和番茄般的酸质。入口饱满而多汁，如同品尝一杯混合浆果果汁，余韵带有红酒般的优雅单宁感。',
    flavor: ['黑醋栗', '番茄', '葡萄柚', '红糖'],
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=600&h=600&fit=crop',
    rating: 4.8,
    stock: 35,
  },
  {
    id: 4,
    name: '安提瓜 · 火山之礼',
    origin: '危地马拉',
    category: '中烘焙',
    roast: '中烘焙',
    price: 108,
    weight: '227g',
    description: '生长在安提瓜火山环绕的肥沃土壤中，海拔1500米。火山矿物质赋予这款咖啡独特的巧克力风味和微妙的烟熏气息。中度烘焙保留了其丰富的body，口感醇厚如丝绒，带有可可和烤杏仁的迷人风味。',
    flavor: ['黑巧克力', '烟熏', '烤杏仁', '橙皮'],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=600&h=600&fit=crop',
    rating: 4.6,
    stock: 60,
  },
  {
    id: 5,
    name: '瑰夏 · 翡翠庄园',
    origin: '巴拿马',
    category: '浅烘焙',
    roast: '浅烘焙',
    price: 298,
    weight: '150g',
    description: '来自巴拿马波奎特产区翡翠庄园的传奇瑰夏品种，被誉为"咖啡中的香槟"。极其精致的茉莉花香与热带水果风味交织，入口如同品尝一杯高级花茶，带有芒果、百香果和蜂蜜的复杂层次。每一口都是味觉的奢华享受。',
    flavor: ['茉莉', '芒果', '百香果', '蜂蜜'],
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&h=600&fit=crop',
    rating: 5.0,
    stock: 20,
  },
  {
    id: 6,
    name: '黄金曼特宁 · 陈年醇香',
    origin: '印度尼西亚',
    category: '深烘焙',
    roast: '深烘焙',
    price: 88,
    weight: '227g',
    description: '苏门答腊林东产区的黄金曼特宁，采用传统的湿刨法处理。深度烘焙激发出其标志性的草本气息和醇厚口感，低酸度、高body，带有雪松、烟草和黑巧克力的深沉风味。适合意式浓缩或法压壶冲泡，是喜欢浓郁口感人士的不二之选。',
    flavor: ['雪松', '烟草', '黑巧克力', '草本'],
    image: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&h=600&fit=crop',
    rating: 4.5,
    stock: 100,
  },
];
