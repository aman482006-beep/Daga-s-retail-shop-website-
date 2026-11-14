"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function AppFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isVisitHub = pathname === "/visit-hub" || pathname === "/visit-hub/";

  if (isVisitHub) {
    return <main className="flex-1">{children}</main>;
  }

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileStickyBar />
      <WhatsAppButton variant="floating" sourceContext="global_floating_button" />
    </>
  );
}
