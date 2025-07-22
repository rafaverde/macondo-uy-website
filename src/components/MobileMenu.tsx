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

import { useState } from "react";
import { NAV_CTAS, NAV_LINKS } from "@/lib/constants";

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
              const IconElement = cta.icon;

              return (
                <Button
                  key={cta.title}
                  asChild
                  className="mt-4"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <Link
                    href={cta.href}
                    target={cta.isExternal ? "_blank" : "_self"}
                    className="flex items-center gap-2"
                  >
                    {cta.title}
                    <IconElement size={30} color="#ffffff" />
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
