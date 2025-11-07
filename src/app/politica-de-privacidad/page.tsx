import { spanishDate } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Macondo",
  robots: {
    index: false,
  },
};

export default function PoliticaDePrivacidadPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-primary text-4xl font-bold">
          Política de Privacidad
        </h2>
        <p>
          <strong>Última actualización: </strong>
          {spanishDate}
        </p>

        <h3 className="mt-4 mb-2 text-lg font-bold">
          1. Identificación del Responsable
        </h3>
        <p>
          Bienvenido a Macondo. La dirección de nuestro sitio web es:{" "}
          <a href="https://www.macondo.com.uy">https://www.macondo.com.uy</a>.
        </p>
        <p>
          <strong>Razón Social:</strong> [Nombre Legal de la Agencia]
          <br />
          <strong>RUT:</strong> [Número de RUT]
          <br />
          <strong>Domicilio:</strong> [Dirección Física en Uruguay]
          <br />
          <strong>Email de contacto:</strong> [Email de Contacto para
          Privacidad]
        </p>
        <p>
          Esta política describe cómo recopilamos, usamos y protegemos su
          información personal en cumplimiento de la Ley Nº 18.331 de Protección
          de Datos Personales y Habeas Data de Uruguay.
        </p>

        <h3 className="mt-4 mb-2 text-lg font-bold">
          2. Qué datos personales recogemos y por qué
        </h3>
        <p>
          Recopilamos información sobre usted solo si tenemos una razón para
          hacerlo, por ejemplo, para proporcionar nuestros servicios, para
          comunicarnos con usted o para mejorar nuestro sitio web.
        </p>
        <ul>
          <li>
            <strong>Datos de Análisis (Google Analytics):</strong> Utilizamos
            Google Analytics (gestionado a través de Google Tag Manager) para
            recopilar información anónima sobre cómo los visitantes interactúan
            con nuestro sitio. Esto incluye qué páginas visita, cuánto tiempo
            pasa en el sitio y cómo llegó aquí. Usamos estos datos para mejorar
            la experiencia del usuario.
          </li>
          <li>
            <strong>Cookies de Marketing (Meta Pixel):</strong> Utilizamos el
            Píxel de Meta para medir la efectividad de nuestras campañas
            publicitarias en plataformas como Facebook e Instagram y para crear
            audiencias de remarketing.
          </li>
          <li>
            <strong>Formularios de Contacto (si aplica):</strong> Si nos
            contacta a través de un formulario, recopilaremos su nombre, correo
            electrónico y el mensaje que nos envíe, con el único fin de
            responder a su consulta.
          </li>
        </ul>

        <h3 className="mt-4 mb-2 text-lg font-bold">3. Política de Cookies</h3>
        <p>
          Este sitio web utiliza cookies. Una cookie es un pequeño archivo de
          texto que se almacena en su navegador. Para obtener información
          detallada sobre qué cookies utilizamos, por qué las usamos y cómo
          puede gestionarlas, por favor consulte nuestra{" "}
          <Link href="/politica-de-cookies">Política de Cookies</Link>.
        </p>

        <h3 className="mt-4 mb-2 text-lg font-bold">
          4. Con quién compartimos sus datos
        </h3>
        <p>
          No vendemos sus datos personales a nadie. Compartimos datos
          (principalmente de forma anónima o agregada) con los siguientes
          proveedores de servicios que nos ayudan a operar nuestro negocio:
        </p>
        <ul>
          <li>Google (para servicios de Analytics via GTM).</li>
          <li>Meta (para servicios de publicidad via Pixel).</li>
        </ul>

        <h3 className="mt-4 mb-2 text-lg font-bold">
          5. Sus derechos sobre sus datos
        </h3>
        <p>
          De acuerdo con la legislación uruguaya (Ley 18.331), usted tiene
          derecho a:
        </p>
        <ul>
          <li>
            <strong>Acceder</strong> a los datos que tenemos sobre usted.
          </li>
          <li>
            <strong>Rectificar</strong> cualquier información incorrecta o
            desactualizada.
          </li>
          <li>
            <strong>Suprimir (Cancelar)</strong> sus datos personales cuando ya
            no sean necesarios.
          </li>
          <li>
            <strong>Oponerse</strong> al procesamiento de sus datos para fines
            específicos (como el marketing directo).
          </li>
        </ul>
        <p>
          Para ejercer estos derechos, puede contactarnos en [Email de Contacto
          para Privacidad].
        </p>

        <h3 className="mt-4 mb-2 text-lg font-bold">
          6. Cambios a esta política
        </h3>
        <p>
          Podemos actualizar esta política de privacidad ocasionalmente. Le
          recomendamos revisarla periódicamente para estar informado sobre cómo
          protegemos su información.
        </p>
      </div>
    </main>
  );
}
