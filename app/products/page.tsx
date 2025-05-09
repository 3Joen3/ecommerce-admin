import NavLink from "@/components/NavLink";
import Page from "@/components/Page";

export default function page() {
  return (
    <Page title="Products">
      <NavLink title="Add Product" href="products/new" />
    </Page>
  );
}
