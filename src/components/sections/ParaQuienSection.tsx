import { Store, Lightbulb, Rocket } from "lucide-react";
import { ElementType } from "react";

const ICON_NAMES = ["Store", "Lightbulb", "Rocket"];
type IconName = (typeof ICON_NAMES)[number];

interface BoxInfo {
  iconName: IconName;
  title: string;
  description: string;
}

const boxInfosData: BoxInfo[] = [
  {
    iconName: "Store",
    title: "PYMES",
    description:
      "Pequeños emprendimientos de cualquier segmento de mercado que necesiten mejorar su marketing y comunicación para potenciar sus ventas.",
  },
  {
    iconName: "Lightbulb",
    title: "Emprendedores",
    description:
      "Personas o equipos que tengan una idea de negocio lista para lanzar al mercado y necesiten una agencia de marketing para construir sus canales de comunicación digital y su estrategia comercial.",
  },
  {
    iconName: "Rocket",
    title: "Emprendimientos en crecimiento",
    description:
      "Negocios que ya están vendiendo y que necesiten mejorar su marketing y comunicación para potenciar sus ventas.",
  },
];

const iconMap: Record<IconName, ElementType> = {
  Store: Store,
  Lightbulb: Lightbulb,
  Rocket: Rocket,
};

export function ParaQuienSection() {
  return (
    <section
      id="paraquien"
      className="bg-background w-full scroll-mt-[50px] py-10"
    >
      <div className="container mx-auto p-4">
        <h2 className="text-primary text-center text-2xl font-bold md:text-4xl">
          Para quién es Macondo
        </h2>

        <div className="mt-7 flex flex-col gap-10 md:mt-14 md:flex-row">
          {boxInfosData.map((box, index) => {
            const IconComponent = iconMap[box.iconName];

            return (
              <div
                key={index}
                className="flex flex-col items-center gap-3 md:flex-1"
              >
                <div className="border-destructive flex h-24 w-24 items-center justify-center rounded-full border-3">
                  {IconComponent && (
                    <IconComponent className="text-destructive h-12 w-12" />
                  )}
                </div>
                <h3 className="text-primary text-center text-2xl md:text-4xl">
                  {box.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {box.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
