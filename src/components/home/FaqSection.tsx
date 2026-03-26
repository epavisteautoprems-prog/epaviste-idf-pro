"use client";

import { useState } from "react";
import type { FAQ } from "@/types";
import { FAQSchema } from "@/components/seo/FAQSchema";

const faqs: FAQ[] = [
  {
    question: "L’enlèvement d’épave est-il vraiment gratuit ?",
    answer:
      "Oui, totalement. En tant qu’épaviste agréé VHU, nous sommes tenus par la réglementation de reprendre les véhicules hors d’usage sans facturer le déplacement ni la prise en charge. Aucun frais ne vous sera demandé.",
  },
  {
    question: "Quels documents dois-je fournir ?",
    answer:
      "La carte grise du véhicule (ou à défaut, une déclaration de perte/vol), une pièce d’identité, et un justificatif de domicile. Sans carte grise, contactez-nous : des solutions existent.",
  },
  {
    question: "Quel est le délai d’intervention en Île-de-France ?",
    answer:
      "Nous intervenons généralement sous 24 à 48h dans tous les départements d’IDF. Selon les disponibilités, une intervention le jour même est possible.",
  },
  {
    question: "Qu’est-ce qu’un certificat de destruction VHU ?",
    answer:
      "C’est le document officiel attestant que votre véhicule a été remis à un centre agréé pour destruction. Il vous dégage de toute responsabilité et permet de radier le véhicule de la SIV.",
  },
  {
    question: "Peut-on enlever un véhicule sans carte grise ?",
    answer:
      "Oui, dans certaines conditions. Contactez-nous avec le numéro de châssis (VIN) : nous pourrons établir les démarches adaptées.",
  },
  {
    question: "Intervenez-vous le week-end ?",
    answer:
      "Absolument. Nous sommes disponibles 7j/7 de 7h à 22h, y compris les samedis, dimanches et jours fériés.",
  },
  {
    question: "Rachetez-vous toutes les épaves ?",
    answer:
      "Nous rachetons la grande majorité des véhicules : accidentés, en panne, sans CT, vieux modèles, etc. Le prix dépend de l’état, de l’année et de la cotation du marché des métaux.",
  },
  {
    question: "Comment est calculé le prix de rachat ?",
    answer:
      "Le prix dépend du poids du véhicule, de l’état général, des pièces récupérables, et des cours des métaux du moment. Nous vous donnons une estimation par téléphone avant tout déplacement.",
  },
  {
    question: "Couvrez-vous vraiment tout l’Île-de-France ?",
    answer:
      "Oui, nous intervenons dans les 8 départements : Paris (75), Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94) et Val-d’Oise (95).",
  },
  {
    question: "Le règlement est-il immédiat ?",
    answer:
      "En cas de rachat, le règlement se fait sur place le jour de l’enlèvement, en espèces ou par virement bancaire immédiat.",
  },
  {
    question: "Faut-il un certificat de non-gage pour enlever une épave ?",
    answer:
      "Ce n’est pas toujours obligatoire pour l’enlèvement, mais c’est fortement recommandé pour sécuriser la cession. Vous pouvez le générer en ligne sur le portail officiel SIV en quelques minutes.",
  },
  {
    question: "Comment enlever une voiture en panne dans un parking sous-sol ?",
    answer:
      "Indiquez la hauteur maximale, la pente de rampe et la largeur d’accès. Avec ces infos, nous validons le bon matériel (plateau/treuil) et évitons un second rendez-vous.",
  },
  {
    question: "Peut-on enlever une épave en copropriété avec barrière ?",
    answer:
      "Oui. Il faut simplement prévoir l’autorisation d’accès (gardien/syndic) et un créneau compatible avec les règles de la résidence.",
  },
  {
    question: "Quels papiers pour une épave en succession (propriétaire décédé) ?",
    answer:
      "Il faut en général un justificatif de succession (attestation notariale ou document équivalent), l’identité de l’héritier mandaté, et les documents du véhicule disponibles. Nous vous guidons selon votre cas.",
  },
  {
    question: "Peut-on céder un véhicule hors d’usage sans contrôle technique ?",
    answer:
      "Oui, pour une cession en filière VHU agréée, le contrôle technique n’est pas la condition principale. L’essentiel est de fournir les justificatifs d’identité et de propriété.",
  },
  {
    question: "Intervenez-vous pour un utilitaire léger (Kangoo, Berlingo, Partner) ?",
    answer:
      "Oui, nous enlevons aussi les utilitaires légers. Précisez le modèle, le PTAC et l’état de roulage pour une planification fiable.",
  },
  {
    question: "Combien de temps pour recevoir le certificat de destruction ?",
    answer:
      "Le délai varie selon traitement administratif, mais il est généralement transmis rapidement après la prise en charge par la filière agréée.",
  },
  {
    question: "Peut-on faire enlever une voiture sans batterie ni clés ?",
    answer:
      "Oui, c’est fréquent. Signalez-le simplement à l’avance pour que l’équipe prévoie le matériel adapté.",
  },
  {
    question: "Rachetez-vous une voiture accidentée non roulante en Île-de-France ?",
    answer:
      "Oui, selon la valeur résiduelle (pièces, métaux, état global). Si le rachat n’est pas pertinent, l’enlèvement gratuit reste possible dans le cadre VHU.",
  },
  {
    question: "Comment obtenir un rendez-vous épaviste le jour même à Paris ou petite couronne ?",
    answer:
      "Appelez avec les infos clés (adresse exacte, état, accès, photos). Les urgences de stationnement bloquant sont priorisées quand un créneau est disponible.",
  },
  {
    question: "Enlevez-vous les véhicules abandonnés sur parking privé d’entreprise ?",
    answer:
      "Oui, sous réserve de justificatifs de droit d’intervention (propriétaire, mandataire, gestionnaire du site).",
  },
  {
    question: "Peut-on enlever une épave avec carte grise barrée depuis longtemps ?",
    answer:
      "Souvent oui, mais il faut vérifier la cohérence administrative du dossier. Nous contrôlons la situation avant intervention pour éviter un refus le jour J.",
  },
  {
    question: "Intervenez-vous pour une épave de scooter ou deux-roues ?",
    answer:
      "Selon la configuration et la filière disponible, une prise en charge peut être possible. Contactez-nous avec photos et numéro de série.",
  },
  {
    question: "Y a-t-il des frais cachés (treuil, km, week-end) ?",
    answer:
      "Non, nous annonçons les conditions clairement avant validation. En filière VHU agréée, l’enlèvement particulier est généralement sans frais cachés.",
  },
  {
    question: "Comment préparer mon véhicule avant l’enlèvement d’épave ?",
    answer:
      "Retirez vos effets personnels, préparez les documents, vérifiez l’accès (barrière/clé/hauteur), et envoyez des photos pour sécuriser le premier passage.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-neutral-50 py-16 md:py-20">
      <FAQSchema faqs={faqs} />
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">
          Questions fréquentes sur l’enlèvement d’épave
        </h2>

        <div className="mt-10 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question} className="px-4 py-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <h3 className="text-base font-semibold text-primary md:text-lg">
                    {item.question}
                  </h3>
                  <span
                    className={`shrink-0 text-secondary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 text-neutral-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
