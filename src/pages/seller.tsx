import Head from 'next/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function SellerPage() {
  return (
    <>
      <Head>
        <title>Seller Dashboard — EZEAFIA</title>
      </Head>

      <Header />

      <main className="container py-8">
        <h1 className="text-3xl font-bold">Seller dashboard</h1>
        <div className="mt-6 grid gap-5 md:grid-cols-4">
          {[
            ['Sales', '₦420,000'],
            ['Orders', '184'],
            ['Revenue', '₦312,000'],
            ['Rating', '4.8 / 5']
          ].map(([label, value]) => (
            <div key={label} className="card p-5">
              <div className="text-sm text-slate-500">{label}</div>
              <div className="mt-2 text-2xl font-bold">{value}</div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
