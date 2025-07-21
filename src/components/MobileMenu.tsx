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
import { WhatsappLogoIcon } from "@phosphor-icons/react";
import { useState } from "react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="top"
          className="h-full items-center justify-center p-6 text-center md:hidden"
        >
          <SheetTitle hidden>Menu</SheetTitle>
          <SheetDescription hidden>Mobile Menu Navigation</SheetDescription>
          <nav className="mt-8 grid gap-6 text-lg font-medium">
            <Link
              href="/#paraquien"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Para quién es Macondo
            </Link>
            <Link
              href="/#servicios"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Servicios y soluciones
            </Link>
            <Link
              href="/#trabajos"
              className="text-muted-foreground hover:text-foreground"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Nuestros trabajos
            </Link>
            <Button
              asChild
              className="mt-4"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Link
                href="https://wa.me/5584994667667"
                target="_blank"
                className="flex items-center gap-2"
              >
                Quiero Hablar
                <WhatsappLogoIcon size={30} color="#ffffff" />
              </Link>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
