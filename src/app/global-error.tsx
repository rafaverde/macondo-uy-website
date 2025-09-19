"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    Sentry.captureException(error);
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div
          style={{
            fontFamily: "sans-serif",
            height: "100vh",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            backgroundColor: "#222",
          }}
        >
          <h2>Se ha producido un error crítico.</h2>
          <p style={{ color: "#fff" }}>
            Nuestro equipo ya ha sido notificado. Intente recargar la página.
          </p>
        </div>
      </body>
    </html>
  );
}
