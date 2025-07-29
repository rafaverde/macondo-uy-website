import { PortfolioCase } from "@/types";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";

export function PortfolioCard({
  portfolioCase,
}: {
  portfolioCase: PortfolioCase;
}) {
  const { title, slug, featuredImage, portfolioCategories } = portfolioCase;
  const category = portfolioCategories?.nodes[0];

  return (
    <Link href={`/portfolio/${slug}`} title={title} className="group block">
      <Card className="h-full overflow-hidden border-none pt-0 transition-all duration-300 group-hover:shadow-lg">
        <CardHeader className="flex aspect-square overflow-hidden rounded-2xl border border-none p-0 shadow-none">
          <div className="h-full w-full">
            <Image
              src={featuredImage.node.sourceUrl}
              alt={featuredImage.node.altText}
              width={300}
              height={300}
              className="block h-full w-full object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <h3 className="text-xs font-light uppercase">
            {category && category.name}
          </h3>
          <h4 className="group-hover:text-primary text-2xl transition-all duration-300">
            {title}
          </h4>
        </CardContent>
      </Card>
    </Link>
  );
}
