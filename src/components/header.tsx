"use client";

import Image from "next/image";
import Link from "next/link";

import macondoLogo from "@/assets/marca-macondo.svg";
import macondoIcon from "@/assets/marca-macondo-isotipo.svg";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ElementType, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";
import { type IconName, NAV_CTAS, NAV_LINKS } from "@/lib/constants";
import { WhatsappIcon } from "./icons/WhatsappIcon";

const iconMap: Partial<Record<IconName, ElementType>> = {
  Whatsapp: WhatsappIcon,
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="top"
      className={`bg-background sticky top-0 z-50 ${isScrolled ? "h-[50px]" : "h-[70px]"} shadow transition-all duration-300`}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        {isScrolled ? (
          <Link href="#top">
            <Image
              src={macondoIcon}
              alt="Macondo Marketing & Comunicación Logo"
              className={`w-auto transition-all duration-300 ${isScrolled ? "h-[30px] opacity-100" : "h-[0px] opacity-0"}`}
            />
          </Link>
        ) : (
          <Link href="/">
            <Image
              src={macondoLogo}
              alt="Macondo Marketing & Comunicación Logo"
              className={`w-auto transition-all duration-300 ${isScrolled ? "h-[0px] opacity-0" : "h-[70px] opacity-100"}`}
            />
          </Link>
        )}
        <div className="hidden md:flex">
          <NavigationMenu title="Menu de navegação">
            <NavigationMenuList>
              {NAV_LINKS.map((link) => (
                <NavigationMenuItem key={link.title}>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      "group hover:text-primary inline-flex items-center justify-center rounded-md bg-transparent font-medium transition-colors duration-300 hover:bg-transparent focus:bg-transparent focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                      isScrolled ? "py-1 text-sm" : "py-2 text-base",
                    )}
                  >
                    <Link href={link.href}>{link.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              {NAV_CTAS.map((cta) => {
                const IconElement = iconMap[cta.iconName];

                return (
                  <NavigationMenuItem key={cta.title}>
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        "group bg-transparent hover:bg-transparent focus:bg-transparent",
                      )}
                    >
                      <Link
                        href={cta.href}
                        target={cta.isExternal ? "_blank" : "_self"}
                      >
                        <Button
                          className="hover:bg-foreground cursor-pointer transition-colors duration-500"
                          size={isScrolled ? "sm" : "lg"}
                        >
                          {cta.title}
                          {IconElement && (
                            <IconElement
                              size={30}
                              className="text-background"
                            />
                          )}
                        </Button>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
