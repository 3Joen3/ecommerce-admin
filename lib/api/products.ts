"use server";

import { ProductFormValues } from "../schemas/product-form";
import { Product } from "../types/Product";
import { backendUrl } from "./utils";

const productsUrl = `${backendUrl}/products`;

export async function getAllProducts(): Promise<Product[]> {
  try {
    const response = await fetch(productsUrl);

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const data = (await response.json()) as Product[];
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function createProduct(data: ProductFormValues) {
  try {
    var formData = convertToFormData(data);

    const response = await fetch(productsUrl, {
      method: "POST",
      body: formData,
    });
  } catch (error) {
    console.log("Error occurred when trying to create product.", error);
  }
}

function convertToFormData(data: ProductFormValues): FormData {
  var formData = new FormData();

  formData.append("title", data.title);
  formData.append("description", data.description);

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

  data.images.forEach((file, i) => {
    formData.append(`images[${i}].Image`, file);
    formData.append(`images[${i}].TempId`, i.toString());
    formData.append(`images[${i}].AltText`, file.name);
  });

  return formData;
}
