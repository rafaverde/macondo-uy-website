// Slides
export interface SlideResponse {
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

// Products
export interface Product {
  id: string;
  title: string;
  slug: string;
  content: string;
  productsFg: {
    buttonText: string;
    neededDescription: string;
    price: string;
    subtitle: string;
    frontIcon: {
      node: {
        altText: string;
        sourceUrl: string;
      };
    };
  };
  productCategories?: {
    nodes: {
      name: string;
      slug: string;
    }[];
  };
}

export interface ProductsResponse {
  products: {
    nodes: Product[];
  };
}

// Portfolio
export interface PortifolioCase {
  id: string;
  title: string;
  slug: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  portfolioCategories?: {
    nodes: {
      name: string;
      slug: string;
    }[];
  };
  portfolioFg: {
    relatedProduct: {
      nodes: {
        id: string;
      }[];
    };
  };
}
