import { Product } from '../data/products';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
  onAddToCart: () => void;
}

export default function ProductDetail({ product, onClose, onAddToCart }: ProductDetailProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brown-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-brown-600 hover:text-brown-800 hover:bg-white transition-all shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 sm:h-80 md:h-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/30 to-transparent md:bg-gradient-to-r" />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-cream-dark text-brown-600 text-xs font-medium rounded-full">
                  {product.roast}
                </span>
                <span className="px-3 py-1 bg-cream-dark text-brown-600 text-xs font-medium rounded-full">
                  {product.origin}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brown-800 mb-2">
                {product.name}
              </h2>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold' : 'text-brown-200'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.11L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-sm text-brown-500">{product.rating}</span>
                </div>
                <span className="text-sm text-brown-400">·</span>
                <span className="text-sm text-brown-500">库存 {product.stock} 件</span>
              </div>

              <p className="text-brown-600 leading-relaxed mb-6 text-sm sm:text-base">
                {product.description}
              </p>

              {/* Flavor Profile */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-brown-700 mb-3">风味描述</h4>
                <div className="flex flex-wrap gap-2">
                  {product.flavor.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1.5 bg-cream border border-brown-200 text-brown-700 text-sm rounded-lg"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 bg-cream rounded-xl">
                  <p className="text-xs text-brown-500">规格</p>
                  <p className="font-semibold text-brown-800">{product.weight}</p>
                </div>
                <div className="p-3 bg-cream rounded-xl">
                  <p className="text-xs text-brown-500">烘焙度</p>
                  <p className="font-semibold text-brown-800">{product.roast}</p>
                </div>
              </div>

              {/* Price & Action */}
              <div className="mt-auto pt-4 border-t border-brown-100">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-brown-800">¥{product.price}</span>
                    <span className="text-sm text-brown-500 ml-2">/{product.weight}</span>
                  </div>
                  <button
                    onClick={onAddToCart}
                    className="flex items-center gap-2 px-6 py-3 bg-brown-700 text-cream rounded-full font-medium hover:bg-brown-800 transition-all duration-300 hover:shadow-lg hover:shadow-brown-700/20 active:scale-95"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    加入购物车
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
