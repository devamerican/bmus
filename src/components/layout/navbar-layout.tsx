"use client"

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function NavbarLayout({ children }: { children: React.ReactNode }) {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
      <nav className={cn("sticky top-0 z-50 bg-white transition-all", scrolled && "border-b shadow-sm")}>
        {children}
      </nav>
  );
}