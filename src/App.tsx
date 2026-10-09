import { useState, useMemo } from 'react';
import { products, categories, Product, CartItem } from './data/products';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.flavor.some((f) =>
          f.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === '全部' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleCheckoutComplete = () => {
    setIsCheckoutOpen(false);
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brown-800 text-cream">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-brown-700 via-brown-800 to-brown-900" />
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-brown-500/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="max-w-2xl animate-fadeIn">
            <p className="text-gold font-serif text-sm sm:text-base tracking-[0.3em] uppercase mb-4">
              Specialty Coffee
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              每一杯，
              <br />
              <span className="text-gold">都是一次旅行</span>
            </h1>
            <p className="text-brown-200 text-base sm:text-lg leading-relaxed max-w-lg">
              我们精选全球优质产区的单品咖啡豆，以匠人之心烘焙，
              只为呈现咖啡最纯粹的风味。从种子到杯中，每一步都倾注热情。
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brown-800">
              精选咖啡
            </h2>
            <p className="text-brown-500 mt-1">
              {filteredProducts.length} 款咖啡可供选择
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-brown-700 text-cream shadow-lg shadow-brown-700/20'
                    : 'bg-brown-100 text-brown-600 hover:bg-brown-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">☕</div>
            <p className="text-brown-500 text-lg">未找到匹配的咖啡</p>
            <p className="text-brown-400 text-sm mt-2">
              试试其他关键词或分类
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onViewDetail={() => setSelectedProduct(product)}
                onAddToCart={() => addToCart(product)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-brown-800 text-brown-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl text-cream mb-4">MAISON DU CAFÉ</h3>
              <p className="text-sm leading-relaxed">
                精品咖啡烘焙工坊，致力于将世界各地最优质的咖啡豆带给每一位咖啡爱好者。
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg text-cream mb-4">联系我们</h4>
              <ul className="space-y-2 text-sm">
                <li>📍 上海市静安区南京西路1688号</li>
                <li>📞 021-8888-6666</li>
                <li>✉️ hello@maisonducafe.cn</li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg text-cream mb-4">营业时间</h4>
              <ul className="space-y-2 text-sm">
                <li>周一至周五：8:00 - 22:00</li>
                <li>周六至周日：9:00 - 23:00</li>
                <li className="text-gold">线上商城 24小时营业</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-brown-700 mt-8 pt-8 text-center text-sm">
            <p>© 2026 MAISON DU CAFÉ. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={() => {
            addToCart(selectedProduct);
            setSelectedProduct(null);
          }}
        />
      )}

      {/* Cart Sidebar */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        total={cartTotal}
        onCheckout={handleCheckout}
      />

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <Checkout
          items={cart}
          total={cartTotal}
          onClose={() => setIsCheckoutOpen(false)}
          onComplete={handleCheckoutComplete}
        />
      )}
    </div>
  );
}
