import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

export function ProductoCard({ product }: { product: Product }) {
  const { title, slug, productsFg } = product;
  return (
    <Card className="flex h-full flex-col items-stretch justify-between gap-8 border border-white bg-transparent">
      <CardHeader className="flex flex-col items-center gap-2">
        {productsFg?.frontIcon?.node.sourceUrl && (
          <Image
            src={productsFg.frontIcon.node.sourceUrl}
            alt={productsFg.frontIcon.node.altText}
            width={96}
            height={96}
            className="block size-16 md:size-24"
          />
        )}

        <h3 className="text-center text-2xl font-medium text-white md:text-3xl">
          {title}
        </h3>
      </CardHeader>

      <CardContent className="text-center text-white">
        <p>{productsFg.subtitle}</p>
      </CardContent>

      <CardFooter className="justify-center">
        <Button
          asChild
          size="xl"
          className="hover:border-foreground border border-white"
        >
          <Link href={`/productos/${slug}`} title={title}>
            {productsFg.buttonText}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
