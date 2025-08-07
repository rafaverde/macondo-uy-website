import "server-only";
import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_SLUG } from "@/graphql";
import { notFound } from "next/navigation";
import { cache } from "react";
import { client } from "../apollo";
import { ProductsResponse, SingleProductResponse } from "@/types";

export const getAllProducts = cache(async () => {
  try {
    const { data } = await client.query<ProductsResponse>({
      query: GET_ALL_PRODUCTS,
      context: {
        fetchOptions: {
          next: { tags: ["products"] },
        },
      },
    });

    return data.products.nodes;
  } catch (error) {
    console.log("Erro ao buscar todos os produtos.", error);
    return notFound();
  }
});

export const getProductBySlug = cache(async (slug: string) => {
  try {
    const { data } = await client.query<SingleProductResponse>({
      query: GET_PRODUCT_BY_SLUG,
      variables: { slug },
      context: {
        fetchOptions: {
          next: { tags: ["products"] },
        },
      },
    });

    return data.product;
  } catch (error) {
    console.log("Erro ao buscar o produto.", error);
    return null;
  }
});
