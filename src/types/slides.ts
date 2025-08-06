export interface Slide {
  slidesFg: {
    caption: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    image: {
      node: {
        sourceUrl: string;
        altText: string;
      };
    };
    active: boolean;
    order: number;
  };
}

export interface SlidesResponse {
  slides: {
    nodes: Slide[];
  };
}
