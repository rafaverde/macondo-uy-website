"use client";

import * as Sentry from "@sentry/nextjs";
import Image from "next/image";
import { useEffect } from "react";
import notFoundImage from "@/assets/404.webp";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RefreshCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);

    console.error(error);
  }, [error]);

  return (
    <section id="paraquien" className="bg-background w-full scroll-mt-[50px]">
      <div className="container mx-auto grid max-h-[calc(100vh-70px)] items-center justify-center gap-8 p-4 md:grid-cols-2">
        <div>
          <Image
            src={notFoundImage}
            alt="Erro 404, No se pudo cargar esta página."
            width={700}
            height={700}
          />
        </div>

        <div className="space-y-5">
          <h2 className="text-primary text-7xl font-bold">
            Ups. <br /> Algo salió mal.
          </h2>
          <p className="text-2xl">
            No se pudo cargar esta página. Inténtalo de nuevo.
          </p>

          <Button asChild size="xl" className="mt-8" onClick={() => reset()}>
            <Link href="/">
              <RefreshCcw /> Intentar otra vez
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
