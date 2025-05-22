"use server";

import { get, post } from "./utils";
import { Product } from "../types/Product";
import { ProductFormValues } from "../schemas/product-form";

const endpoint = "products";

export async function getProducts(): Promise<Product[]> {
  const products = await get<Product[]>(endpoint);
  return products;
}

export async function createProduct(data: ProductFormValues) {
  var formData = convertToFormData(data);
  await post(endpoint, formData, true);
}

function convertToFormData(data: ProductFormValues): FormData {
  var formData = new FormData();

  formData.append("title", data.title);
  formData.append("description", data.description);

  appendVariantPricing(formData, data);
  appendImages(formData, data);

  return formData;
}

function appendVariantPricing(formData: FormData, data: ProductFormValues) {
  data.variants.forEach((v, index) => {
    formData.append(
      `variants[${index}].price`,
      data.variants[index].price.toString()
    );
    formData.append(
      `variants[${index}].comparePrice`,
      data.variants[index].comparePrice.toString()
    );
  });
}

function appendImages(formData: FormData, data: ProductFormValues) {
  data.images.forEach((file, i) => {
    formData.append(`images[${i}].Image`, file, file.name);
    formData.append(`images[${i}].TempId`, i.toString());
    formData.append(`images[${i}].AltText`, file.name);
  });
}
