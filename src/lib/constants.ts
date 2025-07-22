import { WhatsappLogoIcon } from "@phosphor-icons/react";

// Links e contatos principais
export const WHATSAPP_LINK = "https://bit.ly/macondouy";
export const EMAIL_ADDRESS = "contacto@macondopropaganda.com.uy";
export const PHONE_NUMBER = "+59895006439";
export const PHONE_LINK = `tel:${PHONE_NUMBER}`;

// Links de navegação Menu
export const NAV_LINKS = [
  { href: "/#paraquien", title: "Para quién es Macondo" },
  { href: "/#servicios", title: "Servicios y soluciones" },
  { href: "/#trabajos", title: "Nuestros trabajos" },
];

// Botões CTAs do Menu
export const NAV_CTAS = [
  {
    href: `${WHATSAPP_LINK}`,
    title: "Quiero Hablar",
    icon: WhatsappLogoIcon,
    isExternal: true,
  },
];
