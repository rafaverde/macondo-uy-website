import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/constants";
import { WhatsappIcon } from "./icons/WhatsappIcon";
import { Button } from "./ui/button";

export function FloatingWhatsappButton() {
  return (
    <div className="fixed right-6 bottom-6 transition-all duration-200 hover:right-6.5 hover:bottom-6.5">
      <Button
        asChild
        className="flex h-15 w-15 cursor-pointer items-center justify-center rounded-full bg-green-500 p-0 transition-all duration-200 hover:bg-green-700 md:h-18 md:w-18"
      >
        <Link
          href={WHATSAPP_LINK}
          target="_blank"
          aria-label="Hable conosotros en Whatsapp"
        >
          <WhatsappIcon className="!h-8 !w-8 text-white md:!h-10 md:!w-10" />
        </Link>
      </Button>
    </div>
  );
}
