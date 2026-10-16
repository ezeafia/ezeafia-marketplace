const banners = [
  {
    title: 'SHOP DIRECT FROM THE MARKET',
    subtitle: 'Quality products from trusted Nigerian sellers.',
    cta: 'SHOP NOW'
  },
  {
    title: 'REAL PRODUCTS. REAL SELLERS. REAL VIDEOS.',
    subtitle: 'See the product before you buy.',
    cta: 'EXPLORE PRODUCTS'
  },
  {
    title: 'FROM ONITSHA MAIN MARKET TO YOUR DOOR',
    subtitle: 'Trusted sourcing and nationwide delivery.',
    cta: 'SHOP MARKETPLACE'
  }
];

export function HeroCarousel() {
  return (
    <section className="mt-6 grid gap-4 md:grid-cols-3">
      {banners.map((banner) => (
        <div key={banner.title} className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-orange-100 p-6 shadow-soft">
          <div className="badge mb-4">Featured</div>
          <h2 className="text-2xl font-black leading-tight">{banner.title}</h2>
          <p className="mt-3 text-sm text-slate-600">{banner.subtitle}</p>
          <button className="btn-primary mt-5">{banner.cta}</button>
        </div>
      ))}
    </section>
  );
}
