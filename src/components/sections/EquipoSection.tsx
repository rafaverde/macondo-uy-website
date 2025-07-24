import Link from "next/link";
import { Button } from "../ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import equipoImage from "@/assets/equipo.webp";

export function EquipoSection() {
  return (
    <section
      id="equipo"
      className="bg-background w-full scroll-mt-[50px] py-10"
    >
      <div className="container mx-auto grid items-center gap-7 p-4 md:grid-cols-2">
        <div className="space-y-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-primary text-2xl font-bold md:text-4xl">
              Un negocio, un equipo
            </h2>
            <p>
              Creativos, redactores, diseñadores, programadores, estrategas de
              marketing.  Un equipo multidisciplinario completo para cada
              cliente.
            </p>
          </div>

          <Button asChild size="xl">
            <Link href={WHATSAPP_LINK}>
              Me gusta, quiero hablar
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <div>
          <Image
            src={equipoImage}
            alt="Primer plano de personas trabajando en un proyecto de marketing, mostrando las manos de cuatro personas con bolígrafos apuntando sobre papel y computadoras portátiles."
            className="size-full rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
