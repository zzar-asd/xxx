import { CartItem } from '../data/products';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
  total: number;
  onCheckout: () => void;
}

export default function Cart({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemove,
  total,
  onCheckout,
}: CartProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brown-900/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl animate-slideInRight flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-brown-100">
          <div>
            <h2 className="font-serif text-xl font-bold text-brown-800">购物车</h2>
            <p className="text-sm text-brown-500">{items.length} 种商品</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-brown-600 hover:text-brown-800 hover:bg-brown-100 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 bg-cream rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-brown-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className="text-brown-600 font-medium">购物车是空的</p>
              <p className="text-brown-400 text-sm mt-1">去挑选几款心仪的咖啡吧</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 bg-cream/50 rounded-xl border border-brown-100/50"
                >
                  {/* Product Image */}
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                  />

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-brown-800 text-sm truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-brown-500 mt-0.5">
                      {item.product.origin} · {item.product.weight}
                    </p>
                    <p className="text-brown-800 font-bold mt-1">
                      ¥{item.product.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-0 bg-white rounded-lg border border-brown-200">
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="w-8 h-8 flex items-center justify-center text-brown-600 hover:text-brown-800 hover:bg-brown-50 rounded-l-lg transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="w-8 h-8 flex items-center justify-center text-sm font-medium text-brown-800 border-x border-brown-200">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="w-8 h-8 flex items-center justify-center text-brown-600 hover:text-brown-800 hover:bg-brown-50 rounded-r-lg transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>

                      <button
                        onClick={() => onRemove(item.product.id)}
                        className="text-brown-400 hover:text-red-500 transition-colors p-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-brown-100 bg-cream/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-brown-600">合计</span>
              <span className="text-2xl font-bold text-brown-800">¥{total}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full py-3.5 bg-brown-700 text-cream rounded-full font-medium hover:bg-brown-800 transition-all duration-300 hover:shadow-lg hover:shadow-brown-700/20 active:scale-[0.98]"
            >
              去结算
            </button>
            <p className="text-center text-xs text-brown-400 mt-3">
              免费配送 · 7天无理由退换
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
