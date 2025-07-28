import { GET_ALL_PRODUCTS, GET_PRODUCT_BY_SLUG } from "@/graphql/queries";
import { client } from "@/lib/apollo";
import { Product } from "@/lib/types";

export async function generateStaticParams() {
  const { data } = await client.query({
    query: GET_ALL_PRODUCTS,
  });

  const products: Product[] = data.products.nodes;

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const { data } = await client.query({
    query: GET_PRODUCT_BY_SLUG,
    variables: { slug },
  });

  const product: Product = data.product;

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }
  console.log(product);

  return (
    <section
      id="paraquien"
      className="bg-background w-full scroll-mt-[50px] py-10"
    >
      <div className="container mx-auto p-4">
        <h2 className="text-primary text-center text-2xl font-bold md:text-4xl">
          {product.title}
        </h2>
      </div>
    </section>
  );
}
