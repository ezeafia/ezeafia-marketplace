import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange text-base font-black text-white">EZ</div>
          <div>
            <div className="text-lg font-black tracking-wide">EZEAFIA</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Market</div>
          </div>
        </Link>

        <div className="hidden flex-1 justify-center md:flex">
          <form action="/search" method="get" className="w-full max-w-2xl">
            <input
              type="text"
              name="q"
              defaultValue=""
              placeholder="Search products, brands, sellers..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-orange"
            />
          </form>
        </div>

        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link href="/account" className="hidden sm:inline">Account</Link>
          <Link href="/cart" className="hidden sm:inline">Cart</Link>
          <Link href="/seller" className="btn-secondary">Sell</Link>
        </nav>
      </div>
    </header>
  );
}
