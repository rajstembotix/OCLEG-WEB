import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageBanner } from "@/components/PageBanner";
import { ProductBlock } from "@/components/ProductBlock";
import { categories, getCategory, getAllCategorySlugs } from "@/data/catalog";

export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const category = getCategory(params.slug);
  return { title: category?.title ?? "Product" };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategory(params.slug);
  if (!category) notFound();

  return (
    <>
      <PageBanner kicker={`Section ${category.number}`} title={category.title} />
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {category.products.map((product, index) => (
          <ProductBlock
            key={product.id}
            product={product}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </>
  );
}
