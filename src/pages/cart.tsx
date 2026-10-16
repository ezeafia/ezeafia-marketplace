import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { formatPrice } from '@/lib/format';

export default function CartPage() {
  const [cart, setCart] = useState(products.slice(0, 2));

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Head>
        <title>Cart — EZEAFIA</title>
      </Head>

      <Header />

      <main className="container py-8">
        <h1 className="text-3xl font-bold">Your cart</h1>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="card flex gap-4 p-4">
                <img src={item.image} alt={item.name} className="h-24 w-24 rounded-xl object-cover" />
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <button onClick={() => setCart((prev) => prev.filter((p) => p.id !== item.id))} className="text-sm text-slate-500">Remove</button>
                  </div>
                  <div className="mt-2 text-sm text-slate-500">{item.seller}</div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xl font-bold">{formatPrice(item.price)}</span>
                    <div className="flex items-center gap-2">
                      <button className="h-8 w-8 rounded-lg border">-</button>
                      <span>1</span>
                      <button className="h-8 w-8 rounded-lg border">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="card p-5">
            <h2 className="text-xl font-semibold">Order summary</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(total)}</span></div>
              <div className="flex justify-between"><span>Delivery</span><span>₦2,200</span></div>
              <div className="flex justify-between"><span>Discount</span><span>-₦500</span></div>
            </div>
            <div className="mt-5 flex items-center justify-between border-t pt-4 text-lg font-bold">
              <span>Total</span>
              <span>{formatPrice(total + 2200 - 500)}</span>
            </div>
            <button className="btn-primary mt-5 w-full">Proceed to checkout</button>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}
