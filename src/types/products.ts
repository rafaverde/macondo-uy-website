export interface Product {
  id: string;
  title: string;
  slug: string;
  content: string;
  productsFg: {
    buttonText: string;
    neededDescription: string;
    priceFrom: boolean;
    price: string;
    fee: number;
    subtitle: string;
    cta: string | null;

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

export interface SingleProductResponse {
  product: Product;
}
