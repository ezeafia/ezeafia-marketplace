import Head from 'next/head';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

export default function AccountPage() {
  return (
    <>
      <Head>
        <title>Account — EZEAFIA</title>
      </Head>

      <Header />

      <main className="container py-8">
        <h1 className="text-3xl font-bold">My account</h1>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="card p-5"><h2 className="text-lg font-semibold">Orders</h2><p className="mt-2 text-slate-600">3 active orders</p></div>
          <div className="card p-5"><h2 className="text-lg font-semibold">Wishlist</h2><p className="mt-2 text-slate-600">8 saved products</p></div>
          <div className="card p-5"><h2 className="text-lg font-semibold">Wallet</h2><p className="mt-2 text-slate-600">₦25,000 balance</p></div>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-bold">Continue shopping</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
