"use client";

import { GoogleTagManager } from "@next/third-parties/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import macondoIcon from "@/assets/marca-macondo-isotipo.svg";
import Image from "next/image";

const CONSENT_KEY = "@macondo:cookies-consent";

export default function CookieConsent() {
  const [isConsentGranted, setIsConsentGranted] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    // Verificamos a escolha anterior do user
    const storedConsent = localStorage.getItem(CONSENT_KEY);

    if (storedConsent === "true") {
      setIsBannerVisible(false);
      setIsConsentGranted(true);
    } else if (storedConsent === "false") {
      setIsBannerVisible(false);
    } else {
      setIsBannerVisible(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, "true");
    setIsConsentGranted(true);
    setIsBannerVisible(false);
  }

  function handleDecline() {
    localStorage.setItem(CONSENT_KEY, "false");
    setIsBannerVisible(false);
    setIsConsentGranted(false);
  }

  return (
    <>
      {isConsentGranted && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
      )}

      <aside
        className={`fixed bottom-0 z-[100] w-full ${isBannerVisible ? "translate-y-0" : "translate-y-full"} transition-transform duration-700 ease-in-out`}
      >
        <div className="bg-secondary text-secondary-foreground m-4 rounded-lg p-6 shadow md:mb-6">
          <div className="container mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <Image src={macondoIcon} width={80} alt="" />
            <div className="flex-grow">
              <h3 className="text-primary text-lg font-bold">
                Utilizamos cookies.
              </h3>
              <p className="text-sm">
                Utilizamos cookies para analizar el tráfico del sitio web y
                optimizar tu experiencia. Al aceptar, tus datos se recopilarán
                de forma anónima. Obtén más información sobre nuestra{" "}
                <Link
                  href="/politica-de-cookies"
                  className="hover:text-primary underline"
                >
                  Política de cookies
                </Link>{" "}
                y nuestra{" "}
                <Link
                  href="/politica-de-privacidade"
                  className="hover:text-primary underline"
                >
                  Política de privacidad.
                </Link>
              </p>
            </div>
            <div className="mt-4 flex flex-shrink-0 gap-3 md:mt-0">
              <Button
                variant="outline"
                onClick={handleDecline}
                size="lg"
                className="cursor-pointer"
              >
                Rechazar
              </Button>
              <Button
                variant="default"
                size="lg"
                onClick={handleAccept}
                className="cursor-pointer"
              >
                Aceptar
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
