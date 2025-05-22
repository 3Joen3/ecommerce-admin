"use client";

import Form from "../components/Form";
import DetailsFormSection from "./DetailsFormSection";
import VariantsFormSection from "./VariantsFormSection";
import Submit from "../components/Submit";
import FormSectionSelector from "./FormSectionSelector";

import { ProductFormValues } from "@/lib/schemas/product-form";
import { productSchema } from "@/lib/schemas/product-form";
import { createProduct } from "@/lib/api/products";
import { useState } from "react";


export default function ProductForm() {
  const [currentSection, setCurrentSection] = useState<string>("info");

  async function onSubmit(data: ProductFormValues) {
    await createProduct(data);
  }

  return (
    <Form
      schema={productSchema}
      onSubmit={onSubmit}
      className="flex flex-col gap-10 w-3/5"
    >
      <FormSectionSelector
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />

      {currentSection === "details" ? (
        <DetailsFormSection />
      ) : (
        <VariantsFormSection />
      )}
      <Submit />
    </Form>
  );
}
