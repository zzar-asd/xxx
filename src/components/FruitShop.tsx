import { useState } from 'react';
import { fruits, Fruit } from '../data/fruits';

interface CartItem {
  fruit: Fruit;
  quantity: number;
}

export default function FruitShop() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('全部');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const seasons = ['全部', '春季', '夏季', '秋季', '冬季'];

  const filteredFruits = fruits.filter((fruit) => {
    const matchesSearch =
      fruit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fruit.origin.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSeason = selectedSeason === '全部' || fruit.season === selectedSeason;
    return matchesSearch && matchesSeason;
  });

  const addToCart = (fruit: Fruit) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.fruit.id === fruit.id);
      if (existing) {
        return prev.map((item) =>
          item.fruit.id === fruit.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { fruit, quantity: 1 }];
    });
  };

  const updateQuantity = (fruitId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(fruitId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.fruit.id === fruitId ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (fruitId: number) => {
    setCart((prev) => prev.filter((item) => item.fruit.id !== fruitId));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.fruit.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-green-700">🍎 鲜果优选</h1>
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-orange-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">新鲜水果，产地直供</h2>
          <p className="text-lg opacity-90">精选全球优质水果，从枝头到餐桌，锁住每一分新鲜</p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="搜索水果..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <div className="flex gap-2 flex-wrap">
            {seasons.map((season) => (
              <button
                key={season}
                onClick={() => setSelectedSeason(season)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedSeason === season
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {season}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFruits.map((fruit) => (
            <div key={fruit.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img src={fruit.image} alt={fruit.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-800">{fruit.name}</h3>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    {fruit.season}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{fruit.origin}</p>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{fruit.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-red-600">¥{fruit.price}</span>
                    <span className="text-sm text-gray-500">/{fruit.unit}</span>
                  </div>
                  <button
                    onClick={() => addToCart(fruit)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    加入购物车
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFruits.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">未找到匹配的水果</p>
          </div>
        )}
      </section>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsCartOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-bold text-gray-800">购物车</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">购物车是空的</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.fruit.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                      <img
                        src={item.fruit.image}
                        alt={item.fruit.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800">{item.fruit.name}</h4>
                        <p className="text-sm text-gray-500">¥{item.fruit.price}/{item.fruit.unit}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.fruit.id, item.quantity - 1)}
                            className="w-7 h-7 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.fruit.id, item.quantity + 1)}
                            className="w-7 h-7 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.fruit.id)}
                            className="ml-auto text-red-500 hover:text-red-700 transition-colors"
                          >
                            删除
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-4 border-t bg-gray-50">
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">合计</span>
                  <span className="text-2xl font-bold text-red-600">¥{cartTotal.toFixed(2)}</span>
                </div>
                <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                  去结算
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
