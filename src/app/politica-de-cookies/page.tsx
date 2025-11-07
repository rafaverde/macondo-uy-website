import { spanishDate } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies | Macondo",
  robots: {
    index: false,
  },
};

export default function PoliticaDeCookiesPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-primary text-4xl font-bold">Política de Cookies</h2>
        <p>
          <strong>Última actualización:</strong> {spanishDate}
        </p>

        <h3 className="mt-4 mb-2 text-lg font-bold">
          1. ¿Qué son las cookies?
        </h3>
        <p>
          Las cookies son pequeños archivos de texto que los sitios web que
          visita guardan en su dispositivo (computadora, tableta, teléfono
          móvil). Se utilizan ampliamente para que los sitios web funcionen, o
          funcionen de manera más eficiente, así como para proporcionar
          información a los propietarios del sitio.
        </p>

        <h3 className="mt-4 mb-2 text-lg font-bold">
          2. ¿Cómo usamos las cookies?
        </h3>
        <p>Nuestro sitio web utiliza cookies para los siguientes propósitos:</p>
        <ul>
          <li>
            <strong>Cookies Esenciales:</strong> Necesarias para el
            funcionamiento básico del sitio. Por ejemplo, la cookie que guarda
            su preferencia de consentimiento (si aceptó o rechazó las cookies).
          </li>
          <li>
            <strong>Cookies de Análisis (o Rendimiento):</strong> Nos permiten
            reconocer y contar el número de visitantes y ver cómo se mueven por
            el sitio. Usamos Google Analytics para esto, lo que nos ayuda a
            Obtener mejorar la forma en que funciona nuestro sitio web.
          </li>
          <li>
            <strong>Cookies de Marketing (o Publicidad):</strong> Registran su
            visita al sitio, las páginas que ha visitado y los enlaces que ha
            seguido. Usamos esta información (a través del Meta Píxel) para que
            la publicidad que vea en otras plataformas (como Facebook o
            Instagram) sea más relevante para sus intereses.
          </li>
        </ul>

        <h3 className="mt-4 mb-2 text-lg font-bold">
          3. Cookies que utilizamos
        </h3>
        <p>
          A continuación, se detallan las principales cookies que utilizamos. Es
          posible que su navegador reciba cookies de otros servicios, ya que
          utilizamos Google Tag Manager para gestionar nuestras etiquetas.
        </p>
        <div className="my-6 w-full">
          <table className="w-full table-auto border-spacing-4 border text-center">
            <thead className="border">
              <tr className="border">
                <th className="border p-4">Cookie</th>
                <th className="border">Propósito</th>
                <th className="border">Proveedor</th>
                <th className="border">Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border bg-gray-200">
                <td className="border p-4">_ga, _gid</td>
                <td className="border">Análisis estadístico de visitas</td>
                <td className="border">Google Analytics</td>
                <td className="border">2 años</td>
              </tr>
              <tr className="border">
                <td className="border p-4">_fbp</td>
                <td className="border">
                  Marketing y seguimiento de publicidad
                </td>
                <td className="border">Meta (Facebook)</td>
                <td className="border">3 meses</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-4 mb-2 text-lg font-bold">
          4. Cómo gestionar sus preferencias de cookies
        </h3>
        <p>
          Usted puede aceptar o rechazar el uso de cookies no esenciales.
          Utilizamos un banner de consentimiento que le permite tomar esta
          decisión en su primera visita y cambiarla en cualquier momento.
        </p>
        <p>
          Además, la mayoría de los navegadores web permiten cierto control de
          la mayoría de las cookies a través de la configuración del navegador.
        </p>
        <p>
          Para más información sobre cómo manejamos sus datos, visite nuestra{" "}
          <Link href="/politica-de-privacidad">Política de Privacidad</Link>.
        </p>
      </div>
    </main>
  );
}
