import type { Metadata } from "next";
import MaintenanceClient from "./MaintenanceClient";

export const metadata: Metadata = {
  title: "ByNimer — Trustworthy AI, engineered from first principles",
  description:
    "ByNimer is an AI research and infrastructure company. We build Nimer Cortex, a grounded-memory reasoning core, and Nimer Gateway, an AI gateway for the Middle East.",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return <MaintenanceClient />;
}
