// Links e contatos principais
export const WHATSAPP_LINK =
  "https://wa.me/+59895006439?text=Hola.%20Necesito%20mejorar%20el%20marketing%20de%20mi%20negocio.%20%C2%BFPodemos%20conversar%3F";
export const EMAIL_ADDRESS = "contacto@macondo.com.uy";
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
  | "Linkedin"
  | "Pinterest";

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
    href: "https://instagram.com/macondouy",
    title: "Instagram",
    iconName: "Instagram",
  },
  {
    href: "https://www.facebook.com/macondouy",
    title: "Facebook",
    iconName: "Facebook",
  },
  {
    href: "https://www.youtube.com/@MacondoUY",
    title: "Youtube",
    iconName: "Youtube",
  },
  {
    href: "https://www.linkedin.com/company/macondouy",
    title: "Linkedin",
    iconName: "Linkedin",
  },
  {
    href: "https://pinterest.com/macondouy",
    title: "Pinterest",
    iconName: "Pinterest",
  },
  {
    href: WHATSAPP_LINK,
    title: "Whatsapp",
    iconName: "Whatsapp",
  },
];

// Grid do portfolio
export const JOBS_PER_PAGE = 6;

// Dados Legais Empresa
interface BusinessDataProps {
  legalName: string;
  RUT: string;
  address: string;
  email?: string;
}

export const BUSINESS_LEGAL_DATA: BusinessDataProps = {
  legalName: "Gerardo Carvalho Ponte",
  RUT: "217825410-018",
  address: "Asamblea 4313, Apto 003",
  email: "carvalhogerardo79@gmail.com",
};
