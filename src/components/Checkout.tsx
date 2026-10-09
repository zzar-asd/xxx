import { useState } from 'react';
import { CartItem } from '../data/products';

interface CheckoutProps {
  items: CartItem[];
  total: number;
  onClose: () => void;
  onComplete: () => void;
}

export default function Checkout({ items, total, onClose, onComplete }: CheckoutProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    payment: 'wechat',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  if (step === 'success') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-brown-900/60 backdrop-blur-sm" />
        <div className="relative w-full max-w-md bg-white rounded-3xl p-8 text-center animate-scaleIn shadow-2xl">
          <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-sage-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-serif text-2xl font-bold text-brown-800 mb-2">
            下单成功！
          </h2>
          <p className="text-brown-500 mb-2">
            感谢您的购买，我们将尽快为您发货。
          </p>
          <p className="text-sm text-brown-400 mb-6">
            订单号：MDC{Date.now().toString().slice(-8)}
          </p>
          <div className="p-4 bg-cream rounded-xl mb-6">
            <p className="text-sm text-brown-600">
              预计 2-3 个工作日送达
            </p>
          </div>
          <button
            onClick={onComplete}
            className="w-full py-3.5 bg-brown-700 text-cream rounded-full font-medium hover:bg-brown-800 transition-all duration-300"
          >
            继续购物
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-brown-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl animate-scaleIn">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-brown-100">
          <h2 className="font-serif text-xl font-bold text-brown-800">确认订单</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-brown-600 hover:text-brown-800 hover:bg-brown-100 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6">
          {/* Order Items */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-brown-700 mb-3">商品清单</h3>
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-3 p-3 bg-cream/50 rounded-xl"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-brown-800 truncate">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-brown-500">x{item.quantity}</p>
                  </div>
                  <p className="text-sm font-bold text-brown-800">
                    ¥{item.product.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-brown-700 mb-1.5">
                  收货人
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="请输入姓名"
                  className="w-full px-4 py-3 bg-cream border border-brown-200 rounded-xl text-sm text-brown-800 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brown-700 mb-1.5">
                  联系电话
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="请输入手机号码"
                  className="w-full px-4 py-3 bg-cream border border-brown-200 rounded-xl text-sm text-brown-800 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brown-700 mb-1.5">
                  收货地址
                </label>
                <textarea
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="请输入详细地址"
                  rows={2}
                  className="w-full px-4 py-3 bg-cream border border-brown-200 rounded-xl text-sm text-brown-800 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brown-700 mb-1.5">
                  支付方式
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'wechat', label: '微信支付', icon: '💚' },
                    { id: 'alipay', label: '支付宝', icon: '💙' },
                  ].map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, payment: method.id })}
                      className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                        formData.payment === method.id
                          ? 'border-gold bg-gold/10 text-brown-800'
                          : 'border-brown-200 text-brown-600 hover:border-brown-300'
                      }`}
                    >
                      <span className="mr-2">{method.icon}</span>
                      {method.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Total */}
            <div className="p-4 bg-cream rounded-xl mb-6">
              <div className="flex justify-between text-sm text-brown-600 mb-2">
                <span>商品金额</span>
                <span>¥{total}</span>
              </div>
              <div className="flex justify-between text-sm text-brown-600 mb-2">
                <span>运费</span>
                <span className="text-sage-dark">免运费</span>
              </div>
              <div className="border-t border-brown-200 pt-2 mt-2 flex justify-between">
                <span className="font-semibold text-brown-800">应付总额</span>
                <span className="text-xl font-bold text-brown-800">¥{total}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-brown-700 text-cream rounded-full font-medium hover:bg-brown-800 transition-all duration-300 hover:shadow-lg hover:shadow-brown-700/20 active:scale-[0.98]"
            >
              确认支付 ¥{total}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
