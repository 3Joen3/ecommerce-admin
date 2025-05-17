"use client";

import Section from "../components/Section";
import Form from "./components/Form";
import TextAreaField from "./components/TextAreaField";
import TextField from "./components/TextField";
import MediaField from "./components/MediaField/MediaField";
import PriceField from "./components/PriceField"; 

import { ProductFormValues } from "@/lib/schemas/product-form";
import { productSchema } from "@/lib/schemas/product-form";

export default function ProductForm() {
  function onSubmit(data: ProductFormValues) {
    console.log("HI");
    console.log(data);
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
        <PriceField name="price" label="Price" currency="SEK" />
        <PriceField name="comparePrice" label="Compare price" currency="SEK" />
      </Section>

      <Section>
        <button type="submit" className="btn primary">
          Save
        </button>
      </Section>
    </Form>
  );
}
