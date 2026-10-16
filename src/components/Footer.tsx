import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="container grid gap-8 py-10 md:grid-cols-4">
        <div>
          <div className="text-xl font-black">EZEAFIA</div>
          <p className="mt-3 text-sm text-slate-600">Nigeria’s digital market connecting buyers with trusted sellers and real products.</p>
        </div>
        <div>
          <h4 className="font-bold">Customer service</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><Link href="/search">Search</Link></li>
            <li><Link href="/cart">Cart</Link></li>
            <li><Link href="/account">Account</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Sellers</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><Link href="/seller">Seller dashboard</Link></li>
            <li><Link href="/admin">Admin</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>WhatsApp: 09030748832</li>
            <li>Onitsha Main Market</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
