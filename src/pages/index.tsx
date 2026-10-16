import Head from 'next/head';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroCarousel } from '@/components/HeroCarousel';
import { CategoryNav } from '@/components/CategoryNav';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

export default function HomePage() {
  const featured = products.slice(0, 8);

  return (
    <>
      <Head>
        <title>EZEAFIA — Nigeria’s Digital Market</title>
        <meta name="description" content="EZEAFIA BENBELLOS is a Nigerian digital marketplace connecting buyers to trusted sellers from Onitsha Main Market and beyond." />
      </Head>

      <Header />

      <main className="container py-6">
        <CategoryNav />
        <HeroCarousel />

        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold">🔥 What Nigerians are buying now</h2>
            <Link href="/search" className="text-sm font-medium text-brand-orange">See all</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-slate-100 p-6">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-2xl font-bold">💰 Shop with your budget</h3>
            <span className="badge">Budget</span>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {['₦10,000', '₦20,000', '₦50,000', '₦100,000', '₦250,000'].map((budget) => (
              <div key={budget} className="card p-4">
                <div className="text-sm text-slate-500">Budget</div>
                <div className="mt-2 text-xl font-bold">{budget}</div>
                <button className="btn-secondary mt-4 w-full">Shop</button>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-2xl font-bold">📍 From Onitsha Main Market to your door</h3>
            <span className="badge">Trusted sourcing</span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="card p-4">
                <div className="mb-3 h-40 overflow-hidden rounded-xl bg-slate-100">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                </div>
                <div className="text-sm text-slate-500">Onitsha Main Market</div>
                <h4 className="mt-2 text-lg font-semibold">{product.name}</h4>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xl font-bold">₦{product.price.toLocaleString()}</span>
                  <span className="badge">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
