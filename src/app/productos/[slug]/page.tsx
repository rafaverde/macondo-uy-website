import { PortfolioShowCaseSection } from "@/components/sections/PortfolioShowCaseSection";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";
import { getAllProducts, getProductBySlug } from "@/lib/data";
import { generateProductMetadata } from "@/lib/metadata";
import { Product } from "@/types";
import { ArrowRight, CircleQuestionMark } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface MetadataProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const product: Product | null = await getProductBySlug(params.slug);
  return generateProductMetadata(product);
}

export async function generateStaticParams() {
  const products = await getAllProducts();

  if (!products) {
    return [];
  }

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
  const { slug } = params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
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
