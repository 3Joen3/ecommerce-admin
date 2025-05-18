"use server";

import { ProductFormValues } from "../schemas/product-form";
import { backendUrl } from "./utils";

const productsUrl = `${backendUrl}/products`;

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

  data.media.forEach((file) => formData.append("media", file));

  return formData;
}
