import type { Metadata } from "next";
import MaintenanceClient from "./MaintenanceClient";

export const metadata: Metadata = {
  title: "Nimer — Building something bigger",
  description:
    "Nimer is upgrading into the AI Gateway for the Middle East. Halal AI Mode, streaming, virtual keys and a redesigned dashboard — coming soon.",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return <MaintenanceClient />;
}
