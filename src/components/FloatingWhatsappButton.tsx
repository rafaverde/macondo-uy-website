import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/constants";
import { WhatsappIcon } from "./icons/WhatsappIcon";

export function FloatingWhatsappButton() {
  return (
    <div className="fixed right-6 bottom-6 transition-all duration-200 hover:right-6.5 hover:bottom-6.5">
      <Link href={WHATSAPP_LINK} target="_blank">
        <button className="cursor-pointer rounded-full bg-green-500 p-4 transition-all duration-200 hover:bg-green-700 md:p-5">
          <WhatsappIcon className="text-background h-8 w-8 md:h-10 md:w-10" />
        </button>
      </Link>
    </div>
  );
}
