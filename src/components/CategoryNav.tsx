const categories = ['Phones & Tablets', 'Electronics', 'Computing', 'Fashion', 'Shoes', 'Beauty', 'Home', 'Appliances', 'Accessories', 'Grocery'];

export function CategoryNav() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-soft">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {categories.map((category) => (
          <button key={category} className="whitespace-nowrap rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-orange hover:text-brand-orange">
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
