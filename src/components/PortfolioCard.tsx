import { PortfolioCase } from "@/types";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";

export function PortfolioCard({
  portfolioCase,
  isGrid = false,
}: {
  portfolioCase: PortfolioCase;
  isGrid?: boolean;
}) {
  const { title, slug, featuredImage, portfolioCategories } = portfolioCase;
  const category = portfolioCategories?.nodes[0];

  return (
    <Link href={`/portfolio/${slug}`} title={title} className="group block">
      <Card
        className={`h-full overflow-hidden border-none pt-0 transition-all duration-300 group-hover:shadow-lg ${isGrid && "pb-0"}`}
      >
        <CardHeader className="flex aspect-square overflow-hidden rounded-2xl border border-none p-0 shadow-none">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={featuredImage.node.sourceUrl}
              alt={featuredImage.node.altText}
              width={300}
              height={300}
              className="block h-full w-full object-cover"
            />

            {isGrid && (
              <div className="bg-primary/90 absolute top-0 left-0 flex h-full w-full translate-y-[-100%] flex-col items-center justify-center p-5 text-center text-white transition-all duration-500 group-hover:translate-y-0">
                <h3 className="text-xs font-light uppercase">
                  {category && category.name}
                </h3>
                <h4 className="text-2xl font-medium transition-all duration-300 group-hover:text-white/80">
                  {title}
                </h4>
              </div>
            )}
          </div>
        </CardHeader>
        {!isGrid && (
          <CardContent className="space-y-2">
            <h3 className="text-xs font-light uppercase">
              {category && category.name}
            </h3>
            <h4 className="group-hover:text-primary text-2xl transition-all duration-300">
              {title}
            </h4>
          </CardContent>
        )}
      </Card>
    </Link>
  );
}
