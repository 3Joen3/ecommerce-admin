import Page from "@/ui/components/Page";
import ProductForm from "@/ui/forms/product-form/ProductForm";

export default function page() {
  return (
    <Page title="New Product">
      <ProductForm />
    </Page>
  );
}
