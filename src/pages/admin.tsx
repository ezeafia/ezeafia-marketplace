import Head from 'next/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function AdminPage() {
  return (
    <>
      <Head>
        <title>Admin Dashboard — EZEAFIA</title>
      </Head>

      <Header />

      <main className="container py-8">
        <h1 className="text-3xl font-bold">Admin dashboard</h1>
        <div className="mt-6 grid gap-5 md:grid-cols-4">
          {[
            ['Users', '12,430'],
            ['Sellers', '1,240'],
            ['Orders', '4,120'],
            ['Revenue', '₦28.6M']
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
