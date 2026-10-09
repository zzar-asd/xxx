export interface Fruit {
  id: number;
  name: string;
  origin: string;
  price: number;
  unit: string;
  stock: number;
  description: string;
  image: string;
  season: string;
}

export const fruits: Fruit[] = [
  {
    id: 1,
    name: '红富士苹果',
    origin: '山东烟台',
    price: 15.8,
    unit: '斤',
    stock: 200,
    description: '精选山东烟台红富士，果肉脆甜多汁，色泽鲜艳。富含膳食纤维和维生素C，是日常健康零食的理想选择。',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&h=600&fit=crop',
    season: '秋季',
  },
  {
    id: 2,
    name: '海南金煌芒果',
    origin: '海南三亚',
    price: 28.5,
    unit: '斤',
    stock: 150,
    description: '海南三亚热带阳光孕育的金煌芒果，果肉细腻无纤维，甜度高达18度以上。香气浓郁，口感丝滑如奶油。',
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600&h=600&fit=crop',
    season: '夏季',
  },
  {
    id: 3,
    name: '智利进口车厘子',
    origin: '智利',
    price: 89.9,
    unit: '斤',
    stock: 80,
    description: '智利原装进口JJ级车厘子，果径28-30mm，深紫红色果皮，果肉紧实脆甜。冷链运输，新鲜直达。',
    image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=600&h=600&fit=crop',
    season: '冬季',
  },
  {
    id: 4,
    name: '新疆吐鲁番葡萄',
    origin: '新疆吐鲁番',
    price: 22.0,
    unit: '斤',
    stock: 120,
    description: '吐鲁番盆地昼夜温差造就的无核白葡萄，甜度极高，皮薄肉嫩。自然晾晒的葡萄干更是闻名遐迩。',
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=600&h=600&fit=crop',
    season: '秋季',
  },
  {
    id: 5,
    name: '泰国山竹',
    origin: '泰国',
    price: 35.0,
    unit: '斤',
    stock: 100,
    description: '泰国进口5A级山竹，果壳紫红饱满，果肉洁白如雪，口感清甜微酸。被誉为"果中皇后"，清热降火。',
    image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=600&h=600&fit=crop',
    season: '夏季',
  },
  {
    id: 6,
    name: '陕西猕猴桃',
    origin: '陕西眉县',
    price: 18.5,
    unit: '斤',
    stock: 180,
    description: '陕西眉县徐香猕猴桃，果肉翠绿，口感酸甜适中，维生素C含量是柑橘的5-10倍。营养丰富，老少皆宜。',
    image: 'https://images.unsplash.com/photo-1585059895526-4b826ac40e0e?w=600&h=600&fit=crop',
    season: '秋季',
  },
];
