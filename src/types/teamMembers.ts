export interface TeamMember {
  title: string;
  featuredImage: {
    node: {
      altText: string;
      sourceUrl: string;
      mediaDetails: {
        height: number;
        width: number;
      };
    };
  };
  teamMemberFg: {
    position: string;
  };
}

export interface TeamMemberResponse {
  teamMembers: {
    nodes: TeamMember[];
  };
}
