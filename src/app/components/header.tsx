import Image from "next/image";
import macondoLogo from "../../assets/marca-macondo.svg";

export function Header() {
  return (
    <header className="bg-background shadow sticky z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Image src={macondoLogo} alt="" />
        <nav>
          <ul className="flex items-center gap-5">
            <li>Para quién es Macondo</li>
            <li>Servicios y soluciones</li>
            <li>Nuestros trabajos</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
