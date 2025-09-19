"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
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
      <div className="container mx-auto grid h-[calc(100vh-70px)] items-center justify-center gap-8 p-4">
        <div className="space-y-5">
          <h2 className="text-primary text-7xl font-bold">
            Ups. <br /> Algo salió mal.
          </h2>
          <p className="text-2xl">
            No se pudo cargar esta página. Inténtalo de nuevo.
          </p>

          <Button size="xl" className="mt-8" onClick={() => reset()}>
            <RefreshCcw /> Intentar otra vez
          </Button>
        </div>
      </div>
    </section>
  );
}
