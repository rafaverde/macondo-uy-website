import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import equipoImage from "@/assets/equipo.webp";
import { getAllTeamMembers } from "@/lib/data/teamMembers";
import { TeamMembersGrid } from "../TeamMembersGrid";

export async function EquipoSection() {
  const teamMembers = await getAllTeamMembers();

  console.log(teamMembers.length);

  return (
    <section
      id="equipo"
      className="bg-background w-full scroll-mt-[50px] py-10"
    >
      <div className="container mx-auto grid items-center gap-7 p-4 md:grid-cols-2">
        <div className="space-y-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-primary text-2xl font-bold md:text-4xl">
              Un emprendimiento, un equipo
            </h2>
            <p>
              Creativos, redactores, diseñadores, programadores, estrategas de
              marketing. Un equipo multidisciplinario completo para cada
              emprendimiento.
            </p>
          </div>

          <Button asChild size="xl">
            <Link href="https://wa.me/5559895006439?text=Hola.%20Quiero%20contarles%20lo%20que%20necesito%20y%20ver%20si%20pueden%20ayudarne.">
              Me gusta, quiero hablar
              <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="w-full">
          {!teamMembers || teamMembers.length === 0 ? (
            <Image
              src={equipoImage}
              alt="Primer plano de personas trabajando en un proyecto de marketing, mostrando las manos de cuatro personas con bolígrafos apuntando sobre papel y computadoras portátiles."
              className="size-full rounded-3xl"
            />
          ) : (
            <TeamMembersGrid teamMembers={teamMembers} />
          )}
        </div>
      </div>
    </section>
  );
}
