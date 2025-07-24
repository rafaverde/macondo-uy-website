"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";

import { ElementType, useState } from "react";
import { IconName, NAV_CTAS, NAV_LINKS } from "@/lib/constants";
import { WhatsappIcon } from "./icons/WhatsappIcon";

const iconMap: Partial<Record<IconName, ElementType>> = {
  Whatsapp: WhatsappIcon,
};

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" onClick={() => setIsOpen(true)}>
            <Menu size={20} />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="top"
          className="h-full items-center justify-center p-6 text-center md:hidden"
        >
          <SheetTitle hidden>Menu</SheetTitle>
          <SheetDescription hidden>Mobile Menu Navigation</SheetDescription>
          <nav className="mt-8 grid gap-6 text-lg font-medium">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-muted-foreground hover:text-foreground"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {link.title}
              </Link>
            ))}

            {NAV_CTAS.map((cta) => {
              const IconElement = iconMap[cta.iconName];

              return (
                <Button
                  key={cta.title}
                  asChild
                  className="mt-4 text-base"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  size="xl"
                >
                  <Link
                    href={cta.href}
                    target={cta.isExternal ? "_blank" : "_self"}
                    className="flex items-center gap-2"
                  >
                    {cta.title}
                    {IconElement && <IconElement size={30} />}
                  </Link>
                </Button>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
