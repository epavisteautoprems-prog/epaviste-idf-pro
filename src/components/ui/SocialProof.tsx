import { SITE_CONFIG } from "@/lib/constants";

export function SocialProof() {
  return (
    <p className="text-sm text-gray-400">
      🚗 <span className="font-semibold text-white">{SITE_CONFIG.vehiclesCount.toLocaleString("fr-FR")}+</span>{" "}
      véhicules enlevés en Île-de-France
    </p>
  );
}
