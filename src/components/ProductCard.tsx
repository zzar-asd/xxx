import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  index: number;
  onViewDetail: () => void;
  onAddToCart: () => void;
}

export default function ProductCard({
  product,
  index,
  onViewDetail,
  onAddToCart,
}: ProductCardProps) {
  const roastColor = {
    '浅烘焙': 'bg-amber-100 text-amber-800',
    '中烘焙': 'bg-orange-100 text-orange-800',
    '深烘焙': 'bg-brown-200 text-brown-800',
  }[product.roast] || 'bg-gray-100 text-gray-800';

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-brown-100/50 animate-slideInUp"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div
        className="relative h-56 sm:h-64 overflow-hidden cursor-pointer"
        onClick={onViewDetail}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-900/40 via-transparent to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${roastColor}`}>
            {product.roast}
          </span>
        </div>
        
        {/* Quick view overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-4 py-2 bg-white/90 text-brown-800 rounded-full text-sm font-medium backdrop-blur-sm">
            查看详情
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className="font-serif text-lg font-bold text-brown-800 cursor-pointer hover:text-brown-600 transition-colors line-clamp-1"
            onClick={onViewDetail}
          >
            {product.name}
          </h3>
          <div className="flex items-center gap-1 flex-shrink-0">
            <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.11L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-brown-600">{product.rating}</span>
          </div>
        </div>

        <p className="text-sm text-brown-500 mb-3">{product.origin} · {product.weight}</p>

        {/* Flavor Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.flavor.slice(0, 3).map((f) => (
            <span
              key={f}
              className="px-2 py-0.5 bg-cream-dark text-brown-600 text-xs rounded-md"
            >
              {f}
            </span>
          ))}
          {product.flavor.length > 3 && (
            <span className="px-2 py-0.5 text-brown-400 text-xs">
              +{product.flavor.length - 3}
            </span>
          )}
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-brown-800">¥{product.price}</span>
          </div>
          <button
            onClick={onAddToCart}
            className="flex items-center gap-2 px-4 py-2.5 bg-brown-700 text-cream rounded-full text-sm font-medium hover:bg-brown-800 transition-all duration-300 hover:shadow-lg hover:shadow-brown-700/20 active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            加入购物车
          </button>
        </div>
      </div>
    </div>
  );
}
