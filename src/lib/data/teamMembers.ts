import { cache } from "react";
import { client } from "../apollo";
import { TeamMember, TeamMemberResponse } from "@/types";
import { GET_ALL_TEAM_MEMBERS } from "@/graphql";

export const getAllTeamMembers = cache(async () => {
  try {
    const { data } = await client.query<TeamMemberResponse>({
      query: GET_ALL_TEAM_MEMBERS,
      fetchPolicy: "no-cache",
    });

    let teamMembers: TeamMember[] = data.teamMembers.nodes;

    for (let i = teamMembers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [teamMembers[i], teamMembers[j]] = [teamMembers[j], teamMembers[i]];
    }

    return teamMembers;
  } catch (error) {
    console.error("Erro ao buscar equipe:", error);
    throw new Error("Não foi possível carregar os membros da equipe.");
  }
});
