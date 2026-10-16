import Link from 'next/link';
import { formatPrice } from '@/lib/format';

export function ProductCard({ product }: { product: any }) {
  return (
    <article className="card overflow-hidden">
      <div className="relative">
        <img src={product.image} alt={product.name} className="h-52 w-full object-cover" />
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-[10px] font-bold uppercase text-slate-700">{product.badge}</div>
      </div>

      <div className="p-4">
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{product.seller}</div>
        <h3 className="mt-2 text-lg font-semibold leading-snug">{product.name}</h3>

        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="text-xl font-black">{formatPrice(product.price)}</div>
            <div className="text-xs text-slate-500 line-through">₦{(product.price * 1.2).toLocaleString()}</div>
          </div>
          <span className="badge">{product.rating} ★</span>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <Link href={`/products/${product.slug}`} className="btn-primary flex-1">View</Link>
          <button className="btn-secondary">Offer</button>
        </div>
      </div>
    </article>
  );
}
