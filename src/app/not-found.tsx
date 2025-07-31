import Image from "next/image";
import notFoundImage from "@/assets/404.webp";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section id="paraquien" className="bg-background w-full scroll-mt-[50px]">
      <div className="container mx-auto grid max-h-[calc(100vh-70px)] items-center justify-center gap-8 p-4 md:grid-cols-2">
        <div>
          <Image
            src={notFoundImage}
            alt="Erro 404, página no encontrada."
            width={700}
            height={700}
          />
        </div>

        <div className="space-y-5">
          <h2 className="text-primary text-7xl font-bold">
            Ups. <br /> Algo salió mal.
          </h2>
          <p className="text-2xl">
            La página que estás buscando no existe o se ha movido.
          </p>

          <Button asChild size="xl" className="mt-8">
            <Link href="/">
              <ArrowLeft /> Volver arriba
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
