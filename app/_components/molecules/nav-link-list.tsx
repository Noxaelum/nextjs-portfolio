import { NAV_LINK_VALUES } from "@/lib/values";
import { Button } from "../atoms/button";
import Link from "next/link";
import { useContext } from "react";
import { ViewContext } from "@/app/page";

export default function NavLinkList() {
  const visibleSection = useContext(ViewContext);

  return (
    <section className="inline-flex gap-4">
      {NAV_LINK_VALUES.map(({ link, text }) => (
        <Button
          asChild
          key={link}
          variant="nav-link"
          className={`${visibleSection === link.slice(1) ? "text-white" : "text-white/50"} hover:text-white`}
        >
          <Link href={link}>{text}</Link>
        </Button>
      ))}
    </section>
  );
}
