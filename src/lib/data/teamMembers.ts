import { cache } from "react";
import { client } from "../apollo";
import { TeamMemberResponse } from "@/types";
import { GET_ALL_TEAM_MEMBERS } from "@/graphql";

export const getAllTeamMembers = cache(async () => {
  try {
    const { data } = await client.query<TeamMemberResponse>({
      query: GET_ALL_TEAM_MEMBERS,
    });

    return data.teamMembers.nodes;
  } catch (error) {
    console.error("Erro ao buscar equipe:", error);
    throw new Error("Não foi possível carregar os membros da equipe.");
  }
});
