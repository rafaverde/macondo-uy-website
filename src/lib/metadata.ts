import { PortfolioCase, Product } from "@/types";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export function generateProductMetadata(product: Product | null): Metadata {
  if (!product) {
    return {
      title: "Producto no encontrado",
      description: "Este producto ha sido eliminado o no existe.",
    };
  }

  const imageUrl = product.featuredImage?.node?.sourceUrl;

  return {
    title: product.title,
    description: product.productsFg.subtitle,
    openGraph: {
      title: product.title,
      description: product.productsFg.subtitle,
      url: `${siteUrl}/productos/${product.slug}`,
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
  };
}

export function generatePortfolioMetadata(
  portfolioCase: PortfolioCase | null,
): Metadata {
  if (!portfolioCase) {
    return {
      title: "Caso no encontrado",
      description: "Este caso ha sido eliminado o no existe.",
    };
  }

  const imageUrl = portfolioCase.featuredImage?.node?.sourceUrl;
  console.log(portfolioCase);

  return {
    title: portfolioCase.title,
    description: portfolioCase.portfolioFg.jobTitle,
    openGraph: {
      title: portfolioCase.title,
      description: portfolioCase.portfolioFg.jobTitle,
      url: `${siteUrl}/portfolio/${portfolioCase.slug}`,
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
  };
}
