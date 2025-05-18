"use client";

import Form from "./components/Form";
import Section from "../components/Section";
import TextField from "./components/TextField";
import TextAreaField from "./components/TextAreaField";
import MediaField from "./components/MediaField/MediaField";
import PriceField from "./components/PriceField";
import Submit from "./components/Submit";

import { ProductFormValues } from "@/lib/schemas/product-form";
import { productSchema } from "@/lib/schemas/product-form";
import { createProduct } from "@/lib/api/products";

export default function ProductForm() {
  async function onSubmit(data: ProductFormValues) {
    await createProduct(data);
  }

  return (
    <Form
      schema={productSchema}
      onSubmit={onSubmit}
      className="flex flex-col gap-10 w-3/5"
    >
      <Section>
        <TextField label="Title" placeholder="Röd t-shirt" name="title" />
        <TextAreaField
          label="Description"
          placeholder="Supersnygg tisha i färgen röd!"
          name="description"
        />
        <MediaField name="media" />
      </Section>

      <Section>
        <PriceField name="variants[0].price" label="Price" currency="SEK" />
        <PriceField
          name="variants[0].comparePrice"
          label="Compare price"
          currency="SEK"
        />
      </Section>

      <Section>
        <Submit />
      </Section>
    </Form>
  );
}
