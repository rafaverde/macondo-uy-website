import { Product } from "@/types";
import { ProductoCard } from "../ProductoCard";
import { CircleX } from "lucide-react";

export function ProductosSection({ products }: { products: Product[] }) {
  return (
    <section
      id="servicios"
      className="bg-primary w-full scroll-mt-[50px] py-10"
    >
      <div className="container mx-auto p-4">
        <h2 className="mb-14 text-center text-2xl font-bold text-white md:text-4xl">
          Una solución para cada necesidad
        </h2>

        {products.length === 0 && (
          <div className="mx-auto mt-5 flex items-center justify-center gap-2 text-white contain-content">
            <CircleX />
            <p className="text-center md:max-w-2/3">
              Error de carga de datos, intente nuevamente más tarde.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductoCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
