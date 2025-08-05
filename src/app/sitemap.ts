import { getAllProducts } from "@/lib/data";
import { getAllPortfolioSlugs } from "@/lib/data/portfolios";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.macondo.com.uy";

  const staticRoutes = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  const products = await getAllProducts();
  const productsRoutes = products.map((product) => ({
    url: `${siteUrl}/productos/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const portfolioCases = await getAllPortfolioSlugs();
  const portfolioRoutes = portfolioCases.map((caseItem) => ({
    url: `${siteUrl}/portfolio/${caseItem.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...productsRoutes, ...portfolioRoutes, ...staticRoutes];
}
