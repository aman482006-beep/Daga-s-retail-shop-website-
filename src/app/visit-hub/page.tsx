import type { Metadata } from "next";
import VisitHub from "@/components/VisitHub";

export const metadata: Metadata = {
  title: "DAGAS SHOP Visit Hub | Reviews, WhatsApp & Store Details",
  description: "Rate your DAGAS SHOP visit, ask about kidswear on WhatsApp, check offers and get directions to our Sultanpete showroom in Bengaluru.",
  robots: { index: true, follow: true },
};

export default function VisitHubPage() {
  return <VisitHub />;
}
