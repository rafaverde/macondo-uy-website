import "server-only";
import { cache } from "react";
import { client } from "../apollo";
import { SlidesResponse } from "@/types";
import { GET_ALL_SLIDES } from "@/graphql";

export const getAllSlides = cache(async () => {
  try {
    const { data } = await client.query<SlidesResponse>({
      query: GET_ALL_SLIDES,
      context: {
        fetchOptions: {
          next: { tags: ["slides"] },
        },
      },
    });

    return data.slides.nodes;
  } catch (error) {
    console.log("Erro ao buscar todos os slides", error);
    return [];
  }
});
