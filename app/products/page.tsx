import Page from "@/ui/components/Page";
import Section from "@/ui/components/Section";
import ProductListItem from "@/ui/components/ProductListItem";
import NavLink from "@/ui/components/NavLink";

import { getProducts } from "@/lib/api/products";

export default async function page() {
  const products = await getProducts();

  return (
    <Page title="Products">
      <Section>
        <div className="grid gap-4 grid-cols-4">
          {products.map((product) => (
            <ProductListItem
              key={product.id}
              id={product.id}
              title={product.title}
              thumbnailUrl={product.thumbnailUrl}
            />
          ))}
        </div>
      </Section>
      <NavLink title="Add Product" href="products/new" />
    </Page>
  );
}
