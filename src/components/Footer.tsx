import Link from "next/link";
import Image from "next/image";

import macondoLogo from "@/assets/marca-macondo.svg";

import { Button } from "./ui/button";
import { ArrowRight, ChevronRight, Mail, PhoneCall } from "lucide-react";
import {
  EMAIL_ADDRESS,
  IconName,
  NAV_LINKS,
  PHONE_LINK,
  PHONE_NUMBER,
  SOCIAL_LINKS,
  WHATSAPP_LINK,
} from "@/lib/constants";
import { ElementType } from "react";
import { FacebookIcon } from "./icons/FacebookIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { WhatsappIcon } from "./icons/WhatsappIcon";
import { PinterestIcon } from "./icons/PinterestIcon";

const iconMap: Record<IconName, ElementType> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Youtube: YoutubeIcon,
  Linkedin: LinkedinIcon,
  Whatsapp: WhatsappIcon,
  Pinterest: PinterestIcon,
};

export function Footer() {
  return (
    <footer>
      <div className="from-background to-foreground via-foreground bg-gradient-to-b from-50% px-4">
        <div className="bg-destructive text-primary-foreground z-50 container mx-auto space-y-6 rounded-4xl p-7 text-center md:p-14">
          <h2 className="text-2xl font-bold md:text-6xl">
            Ahora ya sabes que hay una agencia de marketing para emprendimientos
            como el tuyo
          </h2>

          <Button asChild size="xl" className="mt-5">
            <Link href={WHATSAPP_LINK} target="_blank">
              Si, quiero conversar ahora
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>

      <div className="bg-foreground py-16">
        <div className="container mx-auto grid grid-rows-3 justify-center gap-8 px-4 md:grid-cols-3 md:grid-rows-1">
          <div className="text-background order-3 md:order-0">
            <Image
              src={macondoLogo}
              alt="Macondo Marketing e Comunicación Logo"
            />
            <p className="text-sm">
              Macondo ofrece servicios de Marketing, desarrollo de páginas web,
              identidad visual y estrategia comercial para PYMES.
            </p>
            <p className="mt-5 text-xs">
              {new Date().getFullYear()} © Copyright Macondo Marketing y
              Comunicación
            </p>
          </div>

          <div className="text-background space-y-3">
            <h4 className="text-xs uppercase">Navegar</h4>

            {NAV_LINKS.map((link) => {
              if (link.isOnFooter) {
                return (
                  <Link
                    key={link.title + link.href}
                    href={link.href}
                    className="hover:text-primary flex items-center gap-1 transition-all duration-300"
                  >
                    <ChevronRight className="text-primary" /> {link.title}
                  </Link>
                );
              }
            })}

            <Link
              href="https://www.macondopropaganda.com"
              target="_blank"
              className="hover:text-primary mt-8 flex items-center gap-1 transition-all duration-300"
            >
              <ChevronRight className="text-primary" /> Macondo{" "}
              <span className="text-primary"> Brasil</span>
            </Link>
          </div>

          <div className="text-background space-y-3">
            <h4 className="text-xs uppercase">Contacto y Redes Sociales</h4>
            <Link
              href={`mailto:${EMAIL_ADDRESS}`}
              className="hover:text-primary flex items-center justify-start gap-2 transition-colors duration-300"
            >
              <Mail size={20} className="text-primary" />
              {EMAIL_ADDRESS}
            </Link>

            <Link
              href={PHONE_LINK}
              className="hover:text-primary flex items-center justify-start gap-2 transition-colors duration-300"
            >
              <PhoneCall size={20} className="text-primary" />
              {PHONE_NUMBER}
            </Link>

            <div className="text-primary flex items-center gap-2">
              {SOCIAL_LINKS.map((link) => {
                const IconElement = iconMap[link.iconName];

                return (
                  <Link
                    key={link.title + link.href}
                    href={link.href}
                    title={link.title}
                    target="_blank"
                    className="hover:text-destructive h-7 w-7 transition-colors duration-300"
                  >
                    {IconElement && <IconElement />}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
