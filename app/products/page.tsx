import NavLink from "@/ui/components/NavLink";
import Page from "@/ui/components/Page";

export default function page() {
  return (
    <Page title="Products">
      <NavLink title="Add Product" href="products/new" />
    </Page>
  );
}
