import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { formatPrice } from '@/lib/format';

export default function SearchPage() {
  const router = useRouter();
  const q = String(router.query.q || '');
  const filtered = q
    ? products.filter((p) => `${p.name} ${p.category}`.toLowerCase().includes(q.toLowerCase()))
    : products;

  return (
    <>
      <Head>
        <title>Search products — EZEAFIA</title>
      </Head>

      <Header />

      <main className="container py-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Search results</h1>
            <p className="text-slate-500">{q ? `Showing results for “${q}”` : 'Browse the EZEAFIA marketplace'}</p>
          </div>
          <Link href="/" className="btn-secondary">Back home</Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.length ? filtered.map((product) => <ProductCard key={product.id} product={product} />) : <p>No results found.</p>}
        </div>

        <div className="mt-8 card p-5">
          <h3 className="mb-3 text-xl font-semibold">Quick filters</h3>
          <div className="flex flex-wrap gap-2">
            {['Fashion', 'Electronics', 'Beauty', 'Home', 'Phones', 'Accessories'].map((item) => (
              <button key={item} className="badge bg-white">
                {item}
              </button>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
