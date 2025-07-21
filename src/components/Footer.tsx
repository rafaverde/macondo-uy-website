import Link from "next/link";
import Image from "next/image";

import macondoLogo from "@/assets/marca-macondo.svg";

import { Button } from "./ui/button";
import {
  ArrowRight,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  PhoneCall,
  Youtube,
} from "lucide-react";

export function Footer() {
  return (
    <footer>
      <div className="from-background to-foreground via-foreground bg-gradient-to-b from-50% px-4">
        <div className="bg-destructive text-primary-foreground z-50 container mx-auto space-y-6 rounded-4xl p-7 text-center md:p-14">
          <h2 className="text-2xl font-bold md:text-6xl">
            Ahora ya sabes que hay una agencia de marketing para emprendimientos
            como el tuyo
          </h2>
          <p>Tenemos un gran equipo y un precio que podés pagar.</p>

          <Button
            asChild
            size="lg"
            className="hover:bg-foreground transition-colors duration-500"
          >
            <Link href="#" target="_blank">
              Si, quiero conversar ahora
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>

      <div className="bg-foreground py-17">
        <div className="container mx-auto grid grid-rows-3 justify-center gap-8 px-4 md:grid-cols-3 md:grid-rows-1">
          <div className="text-background order-3 md:order-0">
            <Image
              src={macondoLogo}
              alt="Macondo Marketing e Comunicación Logo"
            />
            <p className="text-sm">
              Macondo Propaganda oferece servicios de Marketing Digital,
              desarrollo de Páginas Web, Identidad Visual y Estratégia Comercial
              para PYMES.
            </p>
            <p className="mt-5 text-xs">
              {new Date().getFullYear()} © Copyright Macondo Marketing e
              Comunicación
            </p>
          </div>
          <div className="text-background space-y-3">
            <h4 className="text-xs uppercase">Navegar</h4>
            <Link
              href="#"
              className="hover:text-primary flex items-center transition-all duration-300"
            >
              <ChevronRight className="text-primary" /> Portfolio
            </Link>

            <Link
              href="#"
              className="hover:text-primary flex items-center transition-all duration-300"
            >
              <ChevronRight className="text-primary" /> Nuestros Servicios
            </Link>

            <Link
              href="https://www.macondopropaganda.com"
              target="_blank"
              className="hover:text-primary mt-8 flex items-center transition-all duration-300"
            >
              <ChevronRight className="text-primary" /> Macondo
              <span className="text-primary"> Brasil</span>
            </Link>
          </div>
          <div className="text-background space-y-3">
            <h4 className="text-xs uppercase">Contacto y Redes Sociales</h4>
            <Link
              href="mailto:contacto@macondopropaganda.com.uy"
              className="hover:text-primary flex items-center justify-start gap-2 transition-colors duration-300"
            >
              <Mail size={20} className="text-primary" />
              contacto@macondopropaganda.com.uy
            </Link>

            <Link
              href="tel:095006439"
              className="hover:text-primary flex items-center justify-start gap-2 transition-colors duration-300"
            >
              <PhoneCall size={20} className="text-primary" />
              095006439
            </Link>

            <div className="text-primary flex items-center gap-2">
              <Link
                href="https://www.instagram.com/macondopropaganda"
                target="_blank"
                className="hover:text-destructive transition-colors duration-300"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.facebook.com/macondopropaganda"
                target="_blank"
                className="hover:text-destructive transition-colors duration-300"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://www.youtube.com/macondopropaganda"
                target="_blank"
                className="hover:text-destructive transition-colors duration-300"
              >
                <Youtube size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/macondopropaganda"
                target="_blank"
                className="hover:text-destructive transition-colors duration-300"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
