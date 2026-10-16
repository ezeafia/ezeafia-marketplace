import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { products } from '@/data/products';
import { formatPrice } from '@/lib/format';

export default function ProductDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const product = products.find((item) => item.slug === slug) ?? products[0];

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <>
      <Head>
        <title>{product.name} — EZEAFIA</title>
      </Head>

      <Header />

      <main className="container py-8">
        <div className="mb-4 text-sm text-slate-500">
          <Link href="/" className="text-brand-orange">Home</Link> / Product
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <div className="card overflow-hidden p-4">
              <img src={product.image} alt={product.name} className="h-[480px] w-full rounded-xl object-cover" />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[product.image, product.image, product.image].map((img, i) => (
                <div key={i} className="card overflow-hidden p-2">
                  <img src={img} alt={`${product.name} ${i + 1}`} className="h-28 w-full rounded-lg object-cover" />
                </div>
              ))}
            </div>
          </div>

          <aside className="card p-5">
            <div className="badge mb-3">Real product video</div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-3 flex items-center gap-3 text-sm text-slate-600">
              <span>⭐ 4.8</span>
              <span>•</span>
              <span>142 reviews</span>
            </div>

            <div className="mt-5 flex items-end gap-3">
              <span className="text-4xl font-black">{formatPrice(product.price)}</span>
              <span className="text-lg text-slate-500 line-through">₦{(product.price * 1.2).toLocaleString()}</span>
            </div>

            <div className="mt-4 rounded-xl bg-slate-50 p-3 text-sm">
              <div className="font-medium">Seller: {product.seller}</div>
              <div className="mt-1 text-slate-600">Verified seller • Onitsha Main Market</div>
            </div>

            <div className="mt-5 space-y-3">
              <button className="btn-primary w-full">Add to cart</button>
              <button className="btn-secondary w-full">Make an offer</button>
            </div>

            <div className="mt-6 space-y-2 text-sm text-slate-600">
              <div>📦 Nationwide delivery</div>
              <div>💬 Ask the seller</div>
              <div>🔄 Resell this product</div>
            </div>
          </aside>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card p-5">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="mt-3 text-slate-700">{product.description}</p>
          </div>
          <div className="card p-5">
            <h2 className="text-xl font-semibold">Why shoppers trust it</h2>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>• Real product video available</li>
              <li>• Verified seller profile</li>
              <li>• Transparent pricing</li>
              <li>• Return-friendly process</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
