// Links e contatos principais
export const WHATSAPP_LINK = "https://bit.ly/macondouy";
export const EMAIL_ADDRESS = "contacto@macondopropaganda.com.uy";
export const PHONE_NUMBER = "+59895006439";
export const PHONE_LINK = `tel:${PHONE_NUMBER}`;

// Links de navegação Menu
export const NAV_LINKS = [
  { href: "/#paraquien", title: "Para quién es Macondo" },
  {
    href: "/#servicios",
    title: "Servicios y soluciones",
    isOnFooter: true,
  },
  {
    href: "/#trabajos",
    title: "Nuestros trabajos",
    isOnFooter: true,
  },
];

// Tipagem de ícones das Redes Sociais
export type IconName =
  | "Whatsapp"
  | "Instagram"
  | "Facebook"
  | "Youtube"
  | "Linkedin";

// CTAs Interface
export interface NavCtaProps {
  title: string;
  href: string;
  isExternal: boolean;
  iconName: IconName;
}

// Botões CTAs do Menu
export const NAV_CTAS: NavCtaProps[] = [
  {
    href: `${WHATSAPP_LINK}`,
    title: "Quiero Hablar",
    iconName: "Whatsapp",
    isExternal: true,
  },
];

// Redes Sociais Interface
export interface SocialLinkProps {
  href: string;
  title?: string;
  iconName: IconName;
}

// Links Redes Sociais
export const SOCIAL_LINKS: SocialLinkProps[] = [
  {
    href: "https://www.instagram.com/macondopropaganda",
    title: "Instagram",
    iconName: "Instagram",
  },
  {
    href: "https://www.facebook.com/macondopropaganda",
    title: "Facebook",
    iconName: "Facebook",
  },
  {
    href: "https://www.youtube.com/@macondopropaganda",
    title: "Youtube",
    iconName: "Youtube",
  },
  {
    href: "https://www.linkedin.com/company/macondopropaganda/",
    title: "Linkedin",
    iconName: "Linkedin",
  },
  {
    href: WHATSAPP_LINK,
    title: "Whatsapp",
    iconName: "Whatsapp",
  },
];
