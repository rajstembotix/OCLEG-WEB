import type { Product, SpecTable } from "@/data/catalog";

export function SpecTableView({ table }: { table: SpecTable }) {
  return (
    <div className="mt-5 overflow-x-auto">
      <table className="min-w-full border-collapse text-sm">
        <thead>
          <tr className="bg-brand-red text-white">
            {table.columns.map((col) => (
              <th
                key={col}
                className="border border-red-900/30 px-3 py-2.5 text-left font-semibold"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i} className={i % 2 ? "bg-red-50/80" : "bg-white"}>
              {row.map((cell, j) => (
                <td key={j} className="border border-neutral-200 px-3 py-2.5">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ProductBlock({
  product,
  reverse = false,
}: {
  product: Product;
  reverse?: boolean;
}) {
  return (
    <article
      id={product.id}
      className="scroll-mt-28 border-b border-brand-line py-12 last:border-b-0"
    >
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <div className={reverse ? "lg:order-2" : ""}>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red">
            {product.code}
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-wide text-brand-dark md:text-3xl">
            {product.name}
          </h2>
          <h3 className="mt-6 font-display text-lg font-semibold uppercase tracking-wide text-brand-red">
            Specification
          </h3>
          <ul className="mt-3 space-y-2">
            {product.specifications.map((item) => (
              <li
                key={item}
                className="spec-bullet flex gap-3 text-[15px] leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
          {product.table && <SpecTableView table={product.table} />}
          <h3 className="mt-6 font-display text-lg font-semibold text-brand-red">
            Application
          </h3>
          <p className="spec-bullet mt-2 flex gap-3 text-[15px] leading-relaxed">
            {product.application}
          </p>
        </div>
        <div
          className={`grid gap-6 ${product.images.length > 1 ? "sm:grid-cols-2" : ""} ${
            reverse ? "lg:order-1" : ""
          }`}
        >
          {product.images.map((src, idx) => (
            <div
              key={src}
              className="product-photo flex flex-col items-center justify-between border border-brand-line bg-white p-6"
            >
              <div className="flex h-full w-full items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={product.imageLabels?.[idx] || product.name}
                  className="max-h-[440px] w-full object-contain"
                />
              </div>
              {product.imageLabels?.[idx] && (
                <div className="mt-3 w-full border-t border-brand-line/70 pt-2.5 text-center">
                  <p className="font-display text-sm font-semibold tracking-wide text-brand-dark">
                    {product.imageLabels[idx]}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
