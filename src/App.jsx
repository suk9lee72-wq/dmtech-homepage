export default function App() {
  const products = [
    "ESC",
    "Chamber Parts",
    "Quartz Parts",
    "Vacuum Components",
    "Gas Line Parts",
    "RF Components",
    "Wafer Fabrication",
    "Clean Room",
    "Equipment Maintenance",
    "Industrial Materials",
    "Advanced Equipment Parts Supply",
  ];

  return (
    <div className="min-h-screen bg-[#f5f7f8] text-[#1f2933] font-sans">
      <header className="sticky top-0 z-50 border-b border-[#d9e1e7] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <img
            src="https://github.com/suk9lee72-wq/dmtech-homepage/blob/main/public/logo.png?raw=true"
            alt="DMTech"
            className="h-7 w-auto md:h-9"
          />

          <nav className="flex items-center gap-5 text-[13px] font-semibold text-[#26323f] md:gap-7 md:text-[14px]">
            <a href="#">About</a>
            <a href="#">Products</a>
            <a href="#">Industries</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </nav>

          <button className="rounded-sm border border-[#0077a3] bg-[#0077a3] px-5 py-2 text-sm font-bold text-white hover:bg-[#005f82]">
            RFQ
          </button>
        </div>
      </header>

      <section className="border-b border-[#d9e1e7] bg-white">
        <div className="h-[3px] w-full bg-gradient-to-r from-[#fcb316] via-[#6d9a45] to-[#0077a3]" />

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-5 inline-flex rounded-sm border border-[#d9e1e7] bg-[#f5f7f8] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#667085]">
              Semiconductor Parts Sourcing
            </div>

            <h1 className="max-w-3xl text-[44px] font-bold leading-[1.03] tracking-[-0.05em] text-[#17212b] md:text-[72px]">
              Semiconductor Parts Sourcing
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#667085]">
              DMTech supports sourcing for semiconductor equipment parts, ESC,
              chamber parts, vacuum systems, RF components, quartz parts, and
              industrial materials.
            </p>

            <div className="mt-9 flex overflow-hidden rounded-sm border border-[#d9e1e7] bg-white shadow-[0_10px_26px_rgba(15,23,42,0.06)]">
              <input
                type="text"
                placeholder="Search products or part number"
                className="flex-1 px-5 py-4 text-sm outline-none placeholder:text-[#98a2b3]"
              />

              <button className="border-l border-[#d9e1e7] bg-[#0077a3] px-6 text-sm font-bold text-white hover:bg-[#005f82]">
                Search
              </button>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button className="rounded-sm bg-[#0077a3] px-6 py-3 text-sm font-bold text-white hover:bg-[#005f82]">
                View Products
              </button>

              <button className="rounded-sm border border-[#0077a3] bg-white px-6 py-3 text-sm font-bold text-[#0077a3] hover:bg-[#eef6fa]">
                Request Quote
              </button>
            </div>
          </div>

          <div className="rounded-md border border-[#d9e1e7] bg-[#f5f7f8] p-3 shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
              alt="Semiconductor"
              className="h-[430px] w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-[#0077a3]">
              Products
            </p>

            <h2 className="text-4xl font-bold tracking-[-0.04em] text-[#17212b]">
              Product Categories
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#667085]">
            기존 프로토타입 구조는 유지하고, NXP 스타일 기반 제조업
            느낌만 적용한 버전.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <div
              key={item}
              className="group rounded-md border border-[#d9e1e7] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition-all duration-200 hover:-translate-y-1 hover:border-[#0077a355] hover:shadow-[0_16px_34px_rgba(15,23,42,0.08)]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-sm bg-[#eef6fa] text-[#0077a3]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                  <path d="M8 4v16M16 4v16" />
                </svg>
              </div>

              <h3 className="text-[19px] font-bold text-[#17212b]">
                {item}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#667085]">
                Semiconductor manufacturing support and sourcing inquiry.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#17212b] px-5 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-[#fcb316]">
              Request Quote
            </p>

            <h2 className="text-4xl font-bold tracking-[-0.04em]">
              Send us your RFQ
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-[#cbd5df]">
              Please include manufacturer, part number, condition, quantity, and
              delivery schedule.
            </p>
          </div>

          <div className="rounded-md border border-white/10 bg-white p-6 text-[#17212b] shadow-[0_16px_40px_rgba(0,0,0,0.18)]">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="rounded-sm border border-[#d9e1e7] px-4 py-3 text-sm outline-none focus:border-[#0077a3]"
                placeholder="Name / Company"
              />

              <input
                className="rounded-sm border border-[#d9e1e7] px-4 py-3 text-sm outline-none focus:border-[#0077a3]"
                placeholder="Email"
              />
            </div>

            <input
              className="mt-4 w-full rounded-sm border border-[#d9e1e7] px-4 py-3 text-sm outline-none focus:border-[#0077a3]"
              placeholder="Part Number"
            />

            <textarea
              className="mt-4 h-32 w-full rounded-sm border border-[#d9e1e7] px-4 py-3 text-sm outline-none focus:border-[#0077a3]"
              placeholder="Message"
            />

            <button className="mt-4 w-full rounded-sm bg-[#0077a3] px-6 py-3 text-sm font-bold text-white hover:bg-[#005f82]">
              Request Quote
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#111820] px-5 py-8 text-sm text-[#cbd5df]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 md:flex-row">
          <p>© DMTech. Semiconductor Parts Sourcing.</p>
          <p>OEM · Refurbished · Second Source · Global RFQ</p>
        </div>
      </footer>
    </div>
  );
}