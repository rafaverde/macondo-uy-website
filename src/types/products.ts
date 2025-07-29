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
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
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
