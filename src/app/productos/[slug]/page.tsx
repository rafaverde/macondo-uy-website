import { PortfolioShowCaseSection } from "@/components/sections/PortfolioShowCaseSection";
import { Button } from "@/components/ui/button";
import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_SLUG } from "@/graphql";
import { client } from "@/lib/apollo";
import { WHATSAPP_LINK } from "@/lib/constants";
import { Product } from "@/types";
import { ArrowRight, CircleQuestionMark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  const { data } = await client.query({
    query: GET_ALL_PRODUCTS,
  });

  const products: Product[] = data.products.nodes;

  return products
    .filter((product) => product && product.slug)
    .map((product) => ({
      slug: product.slug,
    }));
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const { data } = await client.query({
    query: GET_PRODUCT_BY_SLUG,
    variables: { slug },
  });

  const product: Product = data.product;

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <>
      <section
        id="product"
        className="bg-background w-full scroll-mt-[50px] py-10"
      >
        <div className="container mx-auto grid gap-5 p-4 md:grid-cols-2">
          <div className="space-y-2 md:space-y-4">
            <h2 className="text-primary text-4xl font-bold md:text-6xl">
              {product.title}
            </h2>
            <h3 className="leading-snug font-medium md:text-xl">
              {product.productsFg.subtitle}
            </h3>

            <div
              dangerouslySetInnerHTML={{ __html: product.content }}
              className="cms-content"
            ></div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-10">
            <Image
              src={product.featuredImage.node.sourceUrl}
              alt={product.featuredImage.node.altText}
              width={570}
              height={380}
            />

            <div className="bg-primary shadow-primary flex w-fit items-start rounded-2xl px-7 py-5 text-2xl text-white shadow-md select-none md:text-3xl">
              <span className="text-xl">$U</span>
              <span className="font-medium">{product.productsFg.price}</span>
            </div>

            <Button asChild size="xl">
              <Link
                href={WHATSAPP_LINK}
                target="_blank"
                aria-label="Contáctanos vía WhatsApp"
              >
                Eso es lo que necesito <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="product" className="bg-foreground w-full py-10">
        <div className="container mx-auto flex flex-col items-center justify-center gap-5 p-4">
          <CircleQuestionMark className="text-primary" size={90} />
          <h2 className="text-primary text-center text-3xl font-bold md:text-4xl">
            ¿Por qué necesitas esto?
          </h2>
          <div
            className="w-2/3 text-center text-white"
            dangerouslySetInnerHTML={{
              __html: product.productsFg.neededDescription,
            }}
          ></div>

          <Button
            asChild
            size="xl"
            className="border-primary hover:border-border border hover:border"
          >
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              aria-label="Contáctanos vía WhatsApp"
            >
              Eso es lo que necesito <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <PortfolioShowCaseSection
        productId={product.id}
        categoryTitle={product.title}
      />
    </>
  );
}
