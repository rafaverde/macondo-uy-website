export interface Testimonial {
  title: string; // Author's name
  content: string; // Testimonial content
  featuredImage: {
    // Avatar
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  testimoniosFg: {
    author_role: string;
    rating: number;
    company: string;
    companyLink: string;
  };
}

export interface TestimonialsResponse {
  testimonios: {
    nodes: Testimonial[];
  };
}
