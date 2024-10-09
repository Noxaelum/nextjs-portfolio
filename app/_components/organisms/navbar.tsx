import { Button } from "@/app/_components/atoms/button";
import { Jersey25 } from "@/lib/font";
import Link from "next/link";
import NavLinkList from "../molecules/nav-link-list";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex w-screen justify-between bg-sly-background/75 px-16 py-2 backdrop-blur">
      <Button asChild variant="nav-logo" size="nav-logo">
        <Link className={`${Jersey25.className}`} href="#">
          Sly Villafania
        </Link>
      </Button>
      <NavLinkList />
    </nav>
  );
}
