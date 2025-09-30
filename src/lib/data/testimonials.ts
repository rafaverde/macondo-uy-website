import { cache } from "react";
import { client } from "../apollo";
import { TestimonialsResponse } from "@/types";
import { GET_ALL_TESTIMONIALS } from "@/graphql/testimonials/queries";

export const getAllTestimonials = cache(async () => {
  try {
    const { data } = await client.query<TestimonialsResponse>({
      query: GET_ALL_TESTIMONIALS,
    });

    return data.testimonios.nodes;
  } catch (error) {
    console.error("Erro ao buscar depoimentos:", error);
    throw new Error("Não foi possível carregar os depoimentos.");
  }
});
