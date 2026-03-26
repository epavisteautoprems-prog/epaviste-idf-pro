import type { FAQ, GeoCityData, GeoDeptData, Testimonial } from "@/types";
import { CITIES, DEPARTMENTS, DEPT_ROUTE_BY_SLUG } from "@/lib/constants";
import { CITY_LONG_DESCRIPTION } from "@/content/geo/cityLongDescription";
import { DEPT_LONG_DESCRIPTION } from "@/content/geo/deptLongDescription";

function citySlugsForDept(code: string): string[] {
  const map: Record<string, string[]> = {
    "75": ["paris"],
    "92": [
      "boulogne-billancourt",
      "nanterre",
      "asnieres-sur-seine",
    ],
    "93": ["saint-denis", "montreuil"],
    "94": ["vitry-sur-seine", "creteil"],
    "78": ["versailles"],
    "95": ["argenteuil"],
    "77": [],
    "91": [],
  };
  return map[code] ?? [];
}

function deptBase(
  code: string,
  slug: string,
  description: string,
  landmarks: string[],
  defaultPostal: string,
  specificFAQs: FAQ[],
  testimonials: Testimonial[],
): GeoDeptData {
  const d = DEPARTMENTS.find((x) => x.code === code)!;
  return {
    name: d.name,
    code,
    slug,
    routePath: DEPT_ROUTE_BY_SLUG[slug] ?? `/epaviste-${slug}`,
    description,
    longDescription: DEPT_LONG_DESCRIPTION[code] ?? "",
    cities: d.cities,
    citySlugs: citySlugsForDept(code),
    landmarks,
    defaultPostal,
    specificFAQs,
    testimonials,
  };
}

export const GEO_DEPARTMENTS: GeoDeptData[] = [
  deptBase(
    "75",
    "paris-75",
    "Enlèvement d’épave gratuit et rachat VHU sur Paris et ses 20 arrondissements, avec délais courts et certificat de destruction officiel.",
    [
      "Périphérique",
      "Boulevards des Maréchaux",
      "Avenue des Champs-Élysées",
      "Gare du Nord",
      "La Défense (périphérie)",
    ],
    "75001",
    [
      {
        question: "Intervenez-vous dans tous les arrondissements de Paris ?",
        answer:
          "Oui, nous couvrons l’ensemble des 20 arrondissements. Indiquez-nous l’adresse précise et les contraintes d’accès (porte cochère, cour, parking) pour calibrer le véhicule d’enlèvement.",
      },
      {
        question:
          "Peut-on enlever une épave en stationnement payant ou résidents ?",
        answer:
          "Oui, avec votre accord et les autorisations utiles. Nous vous conseillons sur la démarche auprès de la mairie ou du gestionnaire si une dérogation temporaire est nécessaire pour le plateau.",
      },
      {
        question: "Quel délai pour un enlèvement à Paris centre ?",
        answer:
          "Dans la majorité des cas sous 24 à 48 h, parfois le jour même selon les créneaux et l’accès. Les créneaux tôt le matin ou en fin de journée sont souvent les plus fluides.",
      },
      {
        question: "Gérez-vous les véhicules très accidentés en cave ou parking ?",
        answer:
          "Oui, après analyse des accès et du gabarit. Envoyez des photos et dimensions : nous validons la faisabilité et le matériel adapté (treuil, dépanneuse).",
      },
      {
        question: "Le certificat de destruction est-il obligatoire à Paris ?",
        answer:
          "Pour radier un VHU de la SIV et lever vos obligations, le circuit agréé avec certificat est la voie réglementaire. Nous vous remettons le document officiel après prise en charge.",
      },
    ],
    [
      {
        author: "Marc L.",
        city: "Paris 11e",
        date: "12 fév. 2025",
        text: "Enlèvement le lendemain de mon appel, équipe ponctuelle malgré la cour étroite. Certificat reçu le jour même.",
      },
      {
        author: "Sophie T.",
        city: "Paris 18e",
        date: "3 janv. 2025",
        text: "Voiture sans CT depuis des mois, zéro frais d’enlèvement. Très clair sur les papiers à fournir.",
      },
      {
        author: "Karim H.",
        city: "Paris 15e",
        date: "27 nov. 2024",
        text: "Rachat correct pour mon vieux break. Paiement sur place, professionnalisme au téléphone.",
      },
    ],
  ),
  deptBase(
    "77",
    "seine-et-marne-77",
    "Service épaviste sur la Seine-et-Marne : de la Brie au bassin parisien, enlèvement gratuit et accompagnement VHU.",
    [
      "Château de Fontainebleau",
      "Val d’Europe",
      "Autoroute A4",
      "Canal du Loing",
      "Marne (bords)",
    ],
    "77000",
    [
      {
        question: "Couvrez-vous l’ensemble de la Seine-et-Marne ?",
        answer:
          "Oui, de la grande couronne proche Paris aux secteurs plus éloignés. Le délai peut varier selon la distance et le planning, mais reste en général sous 24 à 48 h.",
      },
      {
        question: "Intervenez-vous près de Disneyland et Marne-la-Vallée ?",
        answer:
          "Oui, nous desservons ce bassin très demandeur. Indiquez l’adresse exacte et les horaires d’accès aux parkings ou zones privées.",
      },
      {
        question: "Puis-je faire enlever un utilitaire léger en épave ?",
        answer:
          "Oui dans la plupart des cas. Communiquez le PTAC, la longueur et l’état des pneus pour valider le bon type de plateau.",
      },
      {
        question: "Que se passe-t-il si le véhicule est sans clés ?",
        answer:
          "Ce n’est pas bloquant pour un enlèvement plateau. Précisez-le à l’appel pour adapter le matériel et l’accès au levage.",
      },
      {
        question: "Proposez-vous un rachat pour véhicule encore roulant ?",
        answer:
          "Oui, nous pouvons estimer une valeur de reprise selon l’état et la demande du marché. Sinon, l’enlèvement gratuit reste possible.",
      },
    ],
    [
      {
        author: "Julien P.",
        city: "Meaux",
        date: "8 mars 2025",
        text: "Camion venu à l’heure, épave partie en 20 minutes. Très bon suivi administratif.",
      },
      {
        author: "Élodie M.",
        city: "Fontainebleau",
        date: "21 déc. 2024",
        text: "Voiture en panne depuis des mois dans le jardin. Enlèvement sans surprise, équipe aimable.",
      },
      {
        author: "Bruno C.",
        city: "Torcy",
        date: "5 nov. 2024",
        text: "Rachat correct pour mon vieux diesel. Explications claires sur le prix.",
      },
    ],
  ),
  deptBase(
    "78",
    "yvelines-78",
    "Épaviste sur les Yvelines : Versailles, Saint-Germain, boucles de Seine et axes ouest, avec service 7j/7.",
    [
      "Château de Versailles",
      "Forêt de Rambouillet",
      "A13",
      "Saint-Germain-en-Laye centre",
      "La Défense (accès ouest)",
    ],
    "78000",
    [
      {
        question: "Intervenez-vous à Versailles intra-muros ?",
        answer:
          "Oui, en coordonnant les accès et gabarits. Les rues étroites nécessitent parfois un créneau tôt le matin : nous vous proposons les options adaptées.",
      },
      {
        question: "Peut-on enlever une épave sur parking privé en pente ?",
        answer:
          "Oui, après validation photo. Nous prévoyons le matériel de traction et l’ancrage nécessaires pour un levage sécurisé.",
      },
      {
        question: "Quel délai vers les communes proches de la N12 ?",
        answer:
          "Souvent sous 24 à 48 h. Les créneaux peuvent être affinés selon le trafic et vos disponibilités.",
      },
      {
        question: "Rachetez-vous les SUV et monospaces ?",
        answer:
          "Oui si la valorisation le permet. Sinon enlèvement gratuit dans le cadre agréé, sans frais pour vous.",
      },
      {
        question: "Comment se passe le certificat pour radier le véhicule ?",
        answer:
          "Il est émis après prise en charge par le réseau agréé. Nous vous remettons le document et conservons la traçabilité réglementaire.",
      },
    ],
    [
      {
        author: "Isabelle R.",
        city: "Versailles",
        date: "15 janv. 2025",
        text: "Intervention discrète tôt le matin, très appréciable en centre-ville. Certificat conforme.",
      },
      {
        author: "Nicolas V.",
        city: "Sartrouville",
        date: "2 déc. 2024",
        text: "Vieux monospace en panne : rachat honnête, enlèvement le jour J.",
      },
      {
        author: "Claire D.",
        city: "Poissy",
        date: "18 oct. 2024",
        text: "Sans carte grise, ils m’ont guidée étape par étape. Soulagement total.",
      },
    ],
  ),
  deptBase(
    "91",
    "essonne-91",
    "Épaviste dans l’Essonne : Massy, Évry-Courcouronnes, axes A6 et Francilienne, enlèvement et rachat VHU.",
    [
      "A6",
      "Francilienne",
      "Massy–Palaiseau",
      "Val d’Yerres",
      "Plateau de Saclay (périphérie)",
    ],
    "91000",
    [
      {
        question: "Intervenez-vous près de Saclay et des campus ?",
        answer:
          "Oui sur les secteurs essonniens adjacents. Précisez les horaires d’ouverture des barrières et parkings.",
      },
      {
        question: "Puis-je planifier un enlèvement le samedi ?",
        answer:
          "Oui, nous sommes disponibles 7j/7 entre 7h et 22h, y compris week-end et jours fériés.",
      },
      {
        question: "Enlevez-vous les véhicules électriques en fin de vie ?",
        answer:
          "Oui, avec précautions spécifiques. Indiquez le modèle et l’état de la batterie à l’appel.",
      },
      {
        question: "Que faire si l’épave bloque une voie privée commune ?",
        answer:
          "Contactez-nous avec l’accord des parties : nous planifions un enlèvement rapide pour rétablir la circulation.",
      },
      {
        question: "Le prix du rachat inclut-il le déplacement ?",
        answer:
          "Oui, le déplacement est inclus dans notre organisation ; aucun frais surprise ne vous est facturé dans le cadre d’un enlèvement agréé.",
      },
    ],
    [
      {
        author: "David F.",
        city: "Massy",
        date: "9 fév. 2025",
        text: "Épave depuis un an, partie en une matinée. Process simple et rapide.",
      },
      {
        author: "Aurélie B.",
        city: "Corbeil-Essonnes",
        date: "14 nov. 2024",
        text: "Très bon contact, explications sur le certificat et la radiation.",
      },
      {
        author: "Mehdi S.",
        city: "Savigny-sur-Orge",
        date: "30 sept. 2024",
        text: "Rachat correct, équipe efficace sur un parking étroit.",
      },
    ],
  ),
  deptBase(
    "92",
    "hauts-de-seine-92",
    "Épaviste Hauts-de-Seine : Boulogne, Nanterre, Asnières, proche Paris et La Défense, service immédiat.",
    [
      "La Défense",
      "Boulevard Périphérique (bord 92)",
      "Seine (quais)",
      "Parc de Saint-Cloud",
      "A86",
    ],
    "92000",
    [
      {
        question: "Intervenez-vous près de La Défense ?",
        answer:
          "Oui, nous desservons les communes limitrophes et les accès riverains, en respectant les règles locales de stationnement.",
      },
      {
        question: "Pouvez-vous enlever une épave en parking sous-terrain ?",
        answer:
          "Oui si hauteur et rampes le permettent. Indiquez la hauteur libre et envoyez une photo de l’entrée.",
      },
      {
        question: "Quel est le délai moyen dans le 92 ?",
        answer:
          "Souvent sous 24 à 48 h, parfois le jour même sur créneaux disponibles en milieu de journée.",
      },
      {
        question: "Gérez-vous les véhicules accidentés ?",
        answer:
          "Oui, nous adaptons le plateau et les fixations. Mentionnez les dégâts visibles et l’état des roues.",
      },
      {
        question: "Puis-je vous joindre le week-end ?",
        answer:
          "Oui, ligne disponible 7j/7 de 7h à 22h pour planifier ou urgences.",
      },
    ],
    [
      {
        author: "Jean-Pierre M.",
        city: "Boulogne-Billancourt",
        date: "6 janv. 2025",
        text: "Certificat remis le jour même, équipe soigneuse avec les voisins.",
      },
      {
        author: "Nadia B.",
        city: "Colombes",
        date: "22 déc. 2024",
        text: "Très réactifs, enlèvement après sinistre sans stress.",
      },
      {
        author: "Omar K.",
        city: "Courbevoie",
        date: "11 nov. 2024",
        text: "Prix honnête pour rachat, déplacement gratuit confirmé.",
      },
    ],
  ),
  deptBase(
    "93",
    "seine-saint-denis-93",
    "Épaviste Seine-Saint-Denis : Saint-Denis, Montreuil, Plaine, axes A1/A86, enlèvement 7j/7.",
    [
      "Plaine Saint-Denis",
      "A1",
      "A86",
      "Canal Saint-Denis",
      "Parc Georges-Valbon",
    ],
    "93000",
    [
      {
        question: "Intervenez-vous dans les quartiers denses du 93 ?",
        answer:
          "Oui, nous planifions gabarit et créneaux. Les photos d’accès sont utiles pour éviter les blocages.",
      },
      {
        question: "Puis-je faire enlever plusieurs épaves sur un même site ?",
        answer:
          "Oui, indiquez le nombre de véhicules et leurs états : nous optimisons le passage.",
      },
      {
        question: "Acceptez-vous les véhicules très anciens ?",
        answer:
          "Oui, l’âge n’est pas un obstacle à l’enlèvement agréé ; le rachat dépend de la valorisation possible.",
      },
      {
        question: "Comment prouver la gratuité au syndic ?",
        answer:
          "Nous fournissons les éléments de prise en charge conformes ; l’enlèvement VHU agréé n’implique pas de facturation au particulier dans les cas réglementaires concernés.",
      },
      {
        question: "Intervention possible en soirée ?",
        answer:
          "Oui entre 7h et 22h ; certaines missions peuvent être planifiées en fin de journée selon disponibilité.",
      },
    ],
    [
      {
        author: "Fatima K.",
        city: "Montreuil",
        date: "19 janv. 2025",
        text: "Rachat correct pour ma Clio en panne, équipe respectueuse.",
      },
      {
        author: "Léa G.",
        city: "Aubervilliers",
        date: "7 déc. 2024",
        text: "Enlèvement rapide dans une cour difficile d’accès. Très pro.",
      },
      {
        author: "Hugo P.",
        city: "Pantin",
        date: "28 oct. 2024",
        text: "Bon accompagnement sans carte grise, dossier bouclé.",
      },
    ],
  ),
  deptBase(
    "94",
    "val-de-marne-94",
    "Épaviste Val-de-Marne : Créteil, Vitry, bords de Marne, rocades, service complet VHU.",
    [
      "Bords de Marne",
      "A86",
      "A4",
      "Vincennes (limite)",
      "Créteil Préfecture",
    ],
    "94000",
    [
      {
        question: "Intervenez-vous le long de la Marne ?",
        answer:
          "Oui, sur les communes riveraines ; précisez les contraintes de stationnement et de pont.",
      },
      {
        question: "Puis-je obtenir un créneau le dimanche ?",
        answer:
          "Oui, nous sommes ouverts 7j/7 de 7h à 22h, sous réserve de disponibilité des équipes.",
      },
      {
        question: "Quid des deux-roues abandonnés ?",
        answer:
          "Traitement possible selon typologie et filière ; décrivez le véhicule pour orienter la solution.",
      },
      {
        question: "Le rachat est-il immédiat ?",
        answer:
          "En cas de rachat, le règlement se fait le jour de l’enlèvement sur place selon modalités annoncées.",
      },
      {
        question: "Couvrez-vous toutes les communes du 94 ?",
        answer:
          "Oui, l’ensemble du département est couvert par notre planning IDF.",
      },
    ],
    [
      {
        author: "Thomas R.",
        city: "Saint-Maur-des-Fossés",
        date: "10 janv. 2025",
        text: "Prix honnête, déplacement gratuit confirmé, très pro sur la Marne.",
      },
      {
        author: "Amina S.",
        city: "Alfortville",
        date: "2 fév. 2025",
        text: "Bon délai malgré un parking compliqué, merci !",
      },
      {
        author: "Julie N.",
        city: "Champigny-sur-Marne",
        date: "19 nov. 2024",
        text: "Certificat ok, équipe ponctuelle et polie.",
      },
    ],
  ),
  deptBase(
    "95",
    "val-d-oise-95",
    "Épaviste Val-d’Oise : Argenteuil, Cergy, axes A15/A115, agréé VHU et agréable au téléphone.",
    [
      "A15",
      "A115",
      "Oise (valleys)",
      "Cergy-Pontoise",
      "Montmorency forest (périphérie)",
    ],
    "95000",
    [
      {
        question: "Intervenez-vous à Argenteuil et Cergy ?",
        answer:
          "Oui, ces bassins sont couverts régulièrement ; indiquez l’adresse et les contraintes d’accès.",
      },
      {
        question: "Puis-je envoyer des photos par message ?",
        answer:
          "Oui, photos et plaque/VIN accélèrent l’estimation et la validation du plateau.",
      },
      {
        question: "Enlèvement possible si le véhicule n’a plus de batterie ?",
        answer:
          "Oui, nous prévoyons le déplacement sur plateau sans dépendre du démarrage.",
      },
      {
        question: "Proposez-vous un suivi pour l’assurance ?",
        answer:
          "Nous pouvons fournir les justificatifs utiles liés à la prise en charge et au certificat.",
      },
      {
        question: "Quels documents pour un particulier ?",
        answer:
          "Carte grise (ou déclaration de perte/vol), pièce d’identité, justificatif de domicile ; liste affinée selon votre cas.",
      },
    ],
    [
      {
        author: "Amina S.",
        city: "Argenteuil",
        date: "4 mars 2025",
        text: "Très bonne expérience, prix clair, enlèvement sans accroc.",
      },
      {
        author: "Patrick E.",
        city: "Sarcelles",
        date: "16 janv. 2025",
        text: "Réponse rapide, équipe sérieuse, je recommande.",
      },
      {
        author: "Yasmine O.",
        city: "Cergy",
        date: "2 déc. 2024",
        text: "Voiture accidentée enlevée sous 24h, parfait.",
      },
    ],
  ),
];

export function getGeoDepartmentByRoute(route: string): GeoDeptData | undefined {
  const normalized = route.startsWith("/") ? route : `/${route}`;
  return GEO_DEPARTMENTS.find((d) => d.routePath === normalized);
}

export function getGeoDepartmentByCode(code: string): GeoDeptData | undefined {
  return GEO_DEPARTMENTS.find((d) => d.code === code);
}

const CITY_LONG: Record<
  string,
  {
    longDescription: string;
    roads: string[];
    specificFAQs: FAQ[];
    testimonials: Testimonial[];
    defaultPostal: string;
  }
> = {
  paris: {
    defaultPostal: "75001",
    roads: [
      "Périphérique",
      "A1 (accès nord)",
      "A6 (accès sud)",
      "Bd Haussmann",
      "Seine (quais)",
    ],
    longDescription: `Paris exige une organisation fine : chaque enlèvement d’épave doit concilier accès, gabarit plateau et respect du voisinage. Nous intervenons dans tous les arrondissements pour retirer véhicules accidentés, sans contrôle technique ou en fin de vie, avec un processus conforme au statut d’épaviste agréé VHU. Après votre appel, nous validons l’adresse, les photos utiles et les documents ; nous planifions un créneau qui limite la gêne (souvent tôt le matin ou en fin d’après-midi). Lorsque le rachat est possible, nous annonçons une fourchette réaliste ; sinon, l’enlèvement reste pris en charge sans vous facturer le déplacement dans le cadre légal applicable. Nous remettons le certificat de destruction pour votre dossier de radiation. En ville dense, la transparence et la ponctualité font la différence : nous y tenons.`,
    specificFAQs: [
      {
        question: "Comment se passe l’accès aux cours parisiennes étroites ?",
        answer:
          "Nous dimensionnons le plateau et parfois décalons l’horaire pour manœuvrer en sécurité. Une photo du portail et de la cour suffit souvent à valider.",
      },
      {
        question: "Pouvez-vous stationner temporairement pour charger ?",
        answer:
          "Nous organisons l’opération pour minimiser l’immobilisation ; si besoin, nous vous guidons sur les autorisations ponctuelles.",
      },
      {
        question: "Intervenez-vous près des gares ?",
        answer:
          "Oui, avec une attention particulière aux zones très fréquentées et aux règles locales.",
      },
    ],
    testimonials: [
      {
        author: "Michel D.",
        city: "Paris 15e",
        date: "18 janv. 2025",
        text: "Enlèvement rapide, équipe professionnelle, très bon suivi.",
      },
      {
        author: "Laura P.",
        city: "Paris 20e",
        date: "5 déc. 2024",
        text: "Voiture en panne depuis des mois : partie en moins de 24h.",
      },
      {
        author: "Samir A.",
        city: "Paris 10e",
        date: "2 nov. 2024",
        text: "Explications claires sur le certificat, je recommande.",
      },
    ],
  },
  "boulogne-billancourt": {
    defaultPostal: "92100",
    roads: ["A13", "Pont de Sèvres", "Bd de la République", "Rte de la Reine"],
    longDescription: `Boulogne-Billancourt combine proximité immédiate de Paris et circulation locale intense. Les épaves bloquent vite des places résidentielles ou des accès livreurs. Nous planifions des enlèvements avec plateau adapté aux rues arborées et aux carrefours denses. Le rachat est étudié si la carrosserie ou la mécanique conserve de la valeur ; sinon, l’enlèvement gratuit dans le cadre agréé s’applique. Nous connaissons les points sensibles autour du trapèze et des bords de Seine : une bonne géolocalisation et quelques photos accélèrent la mission. Certificat de destruction remis pour clôturer votre dossier sans ambiguïté.`,
    specificFAQs: [
      {
        question: "Intervenez-vous près du métro Marcel Sembat ?",
        answer:
          "Oui, tout Boulogne est couvert ; indiquez les contraintes de stationnement.",
      },
      {
        question: "Puis-je choisir un créneau en soirée ?",
        answer:
          "Oui entre 7h et 22h ; les fins de journée sont souvent possibles.",
      },
    ],
    testimonials: [
      {
        author: "Jean-Pierre M.",
        city: "Boulogne-Billancourt",
        date: "6 janv. 2025",
        text: "Certificat remis le jour même, impeccable.",
      },
      {
        author: "Chloé W.",
        city: "Boulogne-Billancourt",
        date: "12 nov. 2024",
        text: "Rachat honnête, équipe soigneuse.",
      },
      {
        author: "Eric N.",
        city: "Boulogne-Billancourt",
        date: "3 oct. 2024",
        text: "Enlèvement sans stress, très réactifs.",
      },
    ],
  },
  "saint-denis": {
    defaultPostal: "93200",
    roads: ["A1", "A86", "Rue de la République", "Canal"],
    longDescription: `Saint-Denis et la Plaine constituent un hub où l’enlèvement rapide d’épaves évite tensions de stationnement et problèmes de copropriété. Nous intervenons sur les quartiers centraux, les zones d’équipements et les abords des axes majeurs. Les véhicules sans carte grise ou immobiles depuis longtemps sont gérés avec un protocole clair. Nous privilégions la communication sur l’accès (cours, barrières) pour éviter les reports. Après prise en charge, vous recevez le certificat de destruction officiel. Notre objectif : une opération propre, rapide, et conforme à la filière VHU.`,
    specificFAQs: [
      {
        question: "Intervenez-vous près de la basilique ?",
        answer:
          "Oui, en coordonnant les accès étroits et les flux touristiques.",
      },
      {
        question: "Gérez-vous les parkings d’immeubles ?",
        answer:
          "Oui si hauteur et rampes le permettent ; indiquez les dimensions.",
      },
    ],
    testimonials: [
      {
        author: "Nadia B.",
        city: "Saint-Denis",
        date: "22 déc. 2024",
        text: "Appel le matin, enlèvement l’après-midi, top.",
      },
      {
        author: "Ibrahim Z.",
        city: "Saint-Denis",
        date: "15 nov. 2024",
        text: "Très bonne explication des démarches, merci.",
      },
      {
        author: "Camille L.",
        city: "Saint-Denis",
        date: "8 oct. 2024",
        text: "Équipe efficace, enlèvement sans bruit superflu.",
      },
    ],
  },
  argenteuil: {
    defaultPostal: "95100",
    roads: ["A15", "N314", "Bords de Seine", "Val d’Argent"],
    longDescription: `Argenteuil, grande ville du Val-d’Oise, voit passer de nombreux véhicules en fin de vie sur emprises privées et parkings de résidence. Nous assurons des interventions rapides le long de la Seine et vers les quartiers surélevés, avec plateau adapté. Le rachat est étudié honnêtement ; sinon, enlèvement gratuit dans le cadre agréé. Nous vous guidons sur les justificatifs et les cas sans carte grise. Le certificat de destruction finalise votre situation administrative. À Argenteuil, notre priorité est la fiabilité : horaire, accès, et respect des riverains.`,
    specificFAQs: [
      {
        question: "Couvrez-vous le secteur Val d’Argent ?",
        answer:
          "Oui, indiquez l’adresse précise et les éventuelles barrières.",
      },
      {
        question: "Délai moyen depuis Argenteuil centre ?",
        answer:
          "Souvent sous 24 à 48 h selon planning et accès.",
      },
    ],
    testimonials: [
      {
        author: "Amina S.",
        city: "Argenteuil",
        date: "4 mars 2025",
        text: "Très bonne expérience, je recommande.",
      },
      {
        author: "Steve H.",
        city: "Argenteuil",
        date: "21 janv. 2025",
        text: "Rachat clair, pas de mauvaise surprise.",
      },
      {
        author: "Nora J.",
        city: "Argenteuil",
        date: "9 déc. 2024",
        text: "Enlèvement rapide, équipe sympa.",
      },
    ],
  },
  montreuil: {
    defaultPostal: "93100",
    roads: ["A3", "Bd Chanzy", "Rue de Paris", "Périphérique proche"],
    longDescription: `Montreuil, collée à Paris, connaît des contraintes de stationnement fortes. Les épaves occupent des places rares et compliquent la vie des copropriétés. Nous intervenons avec des plateaux compacts si nécessaire et des créneaux calibrés pour éviter le bruit inutile. Le processus VHU agréé vous garantit traçabilité et certificat de destruction. Nous gérons les véhicules non roulants et les accès difficiles aux parkings. À Montreuil, une bonne coordination à l’appel suffit pour transformer une situation bloquée en dossier réglé en 24–48 h.`,
    specificFAQs: [
      {
        question: "Pouvez-vous passer dans les petites rues de Bas Montreuil ?",
        answer:
          "Oui, nous validons le gabarit ; parfois un mini-report d’horaire aide la manœuvre.",
      },
      {
        question: "Et les parkings souterrains ?",
        answer:
          "Possible si hauteur suffisante ; communiquez la hauteur libre.",
      },
    ],
    testimonials: [
      {
        author: "Fatima K.",
        city: "Montreuil",
        date: "19 janv. 2025",
        text: "Rachat correct pour ma Clio, très pro.",
      },
      {
        author: "Gilles R.",
        city: "Montreuil",
        date: "30 nov. 2024",
        text: "Enlèvement sans frais, conforme à ce qui était dit.",
      },
      {
        author: "Inès M.",
        city: "Montreuil",
        date: "14 oct. 2024",
        text: "Très réactifs, bon contact au téléphone.",
      },
    ],
  },
  versailles: {
    defaultPostal: "78000",
    roads: ["A13", "Route de Saint-Germain", "Av. de Paris", "N12"],
    longDescription: `Versailles mêle patrimoine, commerce et quartiers résidentiels. Les enlèvements d’épaves doivent limiter la gêne et respecter la circulation locale. Nous planifions des créneaux adaptés aux rues à sens unique et aux zones à fort passage. Le rachat est envisagé lorsque le véhicule conserve de la valeur ; sinon, enlèvement gratuit dans le cadre agréé. Nous vous remettons le certificat de destruction pour votre tranquillité administrative. À Versailles, la discrétion et la ponctualité sont aussi importantes que la conformité réglementaire.`,
    specificFAQs: [
      {
        question: "Intervenez-vous près du château ?",
        answer:
          "Oui, en respectant les contraintes locales ; créneaux tôt le matin souvent préférables.",
      },
      {
        question: "Gérez-vous les épaves en sous-sol ?",
        answer:
          "Oui si accès autorisé et hauteur suffisante.",
      },
    ],
    testimonials: [
      {
        author: "Thomas R.",
        city: "Versailles",
        date: "10 janv. 2025",
        text: "Prix honnête, déplacement gratuit confirmé.",
      },
      {
        author: "Hélène C.",
        city: "Versailles",
        date: "22 déc. 2024",
        text: "Service irréprochable, certificat ok.",
      },
      {
        author: "Paul G.",
        city: "Versailles",
        date: "3 nov. 2024",
        text: "Très bonne organisation, rien à redire.",
      },
    ],
  },
  nanterre: {
    defaultPostal: "92000",
    roads: ["A86", "A14", "La Défense (accès)", "Rue de Suresnes"],
    longDescription: `Nanterre, préfecture des Hauts-de-Seine, concentre université, affaires et habitat dense. Les épaves gênent cours et parkings étudiants comme résidences. Nous assurons des interventions rapides avec accès camion optimisé vers les quartiers Pablo Picasso ou universitaires. Le rachat est chiffré avant déplacement si pertinent ; sinon service gratuit agréé. Certificat de destruction remis. Nanterre exige réactivité : nous alignons nos plannings en conséquence.`,
    specificFAQs: [
      {
        question: "Intervenez-vous près de la préfecture ?",
        answer:
          "Oui, en veillant aux restrictions de stationnement ; précisez l’entrée exacte.",
      },
      {
        question: "Délai depuis Nanterre université ?",
        answer:
          "Souvent sous 24–48 h, parfois plus vite selon créneaux.",
      },
    ],
    testimonials: [
      {
        author: "Sarah L.",
        city: "Nanterre",
        date: "11 fév. 2025",
        text: "Enlèvement rapide près de la fac, super efficace.",
      },
      {
        author: "Kevin T.",
        city: "Nanterre",
        date: "19 déc. 2024",
        text: "Bon prix de rachat pour mon vieux SUV.",
      },
      {
        author: "Mélanie D.",
        city: "Nanterre",
        date: "7 nov. 2024",
        text: "Très clairs sur les papiers, merci.",
      },
    ],
  },
  "vitry-sur-seine": {
    defaultPostal: "94400",
    roads: ["A86", "N19", "Bords de Seine", "Av. du Général de Gaulle"],
    longDescription: `Vitry-sur-Seine mêle zones industrielles, quartiers résidentiels et rives de Seine. Les épaves se retrouvent sur parkings techniques et en lotissements. Nous adaptons le plateau aux accès parfois étroits et planifions des enlèvements sans perturber l’activité locale. Le circuit VHU agréé garantit gratuité lorsque pas de rachat, et certificat de destruction systématique. Vitry demande de la rigueur logistique : nous la fournissons.`,
    specificFAQs: [
      {
        question: "Intervenez-vous côté Port à l’Anglais ?",
        answer:
          "Oui, précisez les accès et autorisations le cas échéant.",
      },
      {
        question: "Gérez-vous les utilitaires légers ?",
        answer:
          "Oui, sous réserve de gabarit compatible plateau.",
      },
    ],
    testimonials: [
      {
        author: "Marc-Antoine P.",
        city: "Vitry-sur-Seine",
        date: "28 janv. 2025",
        text: "Épave partie vite, très pro.",
      },
      {
        author: "Sonia E.",
        city: "Vitry-sur-Seine",
        date: "9 déc. 2024",
        text: "Bon accompagnement, certificat reçu.",
      },
      {
        author: "Rudy F.",
        city: "Vitry-sur-Seine",
        date: "21 oct. 2024",
        text: "Rien à dire, service nickel.",
      },
    ],
  },
  creteil: {
    defaultPostal: "94000",
    roads: ["A86", "N406", "Lac de Créteil", "Rue du Métropolitain"],
    longDescription: `Créteil, préfecture du Val-de-Marne, structure un bassin dense autour du lac et des axes rocadiers. Les épaves bloquent des places convoitées et des accès aux équipements. Nous intervenons sur l’ensemble de la ville avec créneaux flexibles. Le rachat est expliqué clairement ; sinon enlèvement gratuit agréé. Nous remettons le certificat de destruction pour votre radiation. Créteil bénéficie d’une couverture IDF prioritaire : délais courts, exécution nette.`,
    specificFAQs: [
      {
        question: "Intervenez-vous près du lac ?",
        answer:
          "Oui, en respectant la signalisation locale et vos accès privés.",
      },
      {
        question: "Week-end possible ?",
        answer:
          "Oui 7j/7 entre 7h et 22h.",
      },
    ],
    testimonials: [
      {
        author: "Fatima K.",
        city: "Créteil",
        date: "19 janv. 2025",
        text: "Rachat correct pour ma vieille Clio en panne.",
      },
      {
        author: "Olivier Q.",
        city: "Créteil",
        date: "2 déc. 2024",
        text: "Enlèvement rapide, équipe sérieuse.",
      },
      {
        author: "Yasmin V.",
        city: "Créteil",
        date: "17 oct. 2024",
        text: "Très bon suivi, je recommande.",
      },
    ],
  },
  "asnieres-sur-seine": {
    defaultPostal: "92600",
    roads: ["A86", "Bd Voltaire", "Quais de Seine", "Rue des Bourguignons"],
    longDescription: `Asnières-sur-Seine, entre Paris et la Défense, voit circuler énormément de véhicules ; les épaves y restent parfois des mois sur emprise privée. Nous planifions des enlèvements avec accès optimisés aux quartiers riverains et aux axes vers Colombes. Le rachat est étudié ; sinon gratuité réglementaire. Certificat de destruction fourni. À Asnières, la proximité des grands axes nous permet souvent d’intervenir très vite une fois l’accès validé.`,
    specificFAQs: [
      {
        question: "Intervenez-vous côté Bécon ?",
        answer:
          "Oui, toute la ville est couverte.",
      },
      {
        question: "Puis-je obtenir un devis rapide ?",
        answer:
          "Oui par téléphone avec marque, année, état et photos.",
      },
    ],
    testimonials: [
      {
        author: "Jean-Pierre M.",
        city: "Asnières-sur-Seine",
        date: "6 janv. 2025",
        text: "Certificat remis le jour même, impeccable.",
      },
      {
        author: "Nathalie U.",
        city: "Asnières-sur-Seine",
        date: "27 nov. 2024",
        text: "Enlèvement sans surprise, très pro.",
      },
      {
        author: "Damien Y.",
        city: "Asnières-sur-Seine",
        date: "8 oct. 2024",
        text: "Bon rapport qualité/prix sur le rachat.",
      },
    ],
  },
  clichy: {
    defaultPostal: "92110",
    roads: ["Porte de Clichy", "Boulevard Victor Hugo", "Quais de Seine", "A86"],
    longDescription:
      "À Clichy, la contrainte principale est la densité de circulation et le stationnement serré. Nos équipes planifient des créneaux courts et efficaces pour retirer les VHU en résidence, cour ou voie privée autorisée. Nous privilégions la transparence entre rachat et enlèvement gratuit.",
    specificFAQs: [
      { question: "Intervenez-vous vers Porte de Clichy ?", answer: "Oui, avec adaptation aux pics de circulation locaux." },
      { question: "Peut-on enlever une épave sans contrôle technique ?", answer: "Oui, c'est une situation fréquente en VHU." },
      { question: "Le certificat est-il fourni ?", answer: "Oui selon le parcours agréé, avec explication des étapes." },
    ],
    testimonials: [
      { author: "Anissa R.", city: "Clichy", date: "22 fév. 2025", text: "Rapide et propre, rien à redire." },
      { author: "Pascal M.", city: "Clichy", date: "14 déc. 2024", text: "Très pros sur les documents." },
      { author: "Yohan K.", city: "Clichy", date: "5 oct. 2024", text: "Intervention bien coordonnée." },
    ],
  },
  puteaux: {
    defaultPostal: "92800",
    roads: ["La Défense", "Quai de Dion Bouton", "Pont de Puteaux", "D913"],
    longDescription:
      "Puteaux nécessite des interventions compatibles avec les contraintes de La Défense et des résidences verticales. Nous anticipons l'accès camion, l'horaire et la logistique de chargement pour éviter les blocages. Le service couvre enlèvement agréé, rachat et certificat de destruction.",
    specificFAQs: [
      { question: "Intervenez-vous près de La Défense ?", answer: "Oui, avec planification adaptée aux règles locales d'accès." },
      { question: "Délai d'intervention à Puteaux ?", answer: "En général 24-48 h selon créneau disponible." },
      { question: "Rachat pour SUV accidenté possible ?", answer: "Oui, selon valeur résiduelle pièces/métaux." },
    ],
    testimonials: [
      { author: "Rania B.", city: "Puteaux", date: "11 fév. 2025", text: "Équipe efficace et rassurante." },
      { author: "Jérôme L.", city: "Puteaux", date: "30 nov. 2024", text: "Très bon timing d'intervention." },
      { author: "Inès T.", city: "Puteaux", date: "7 oct. 2024", text: "Service clair du début à la fin." },
    ],
  },
  "rueil-malmaison": {
    defaultPostal: "92500",
    roads: ["A86", "N13", "D913", "Bords de Seine"],
    longDescription:
      "Rueil-Malmaison combine zones pavillonnaires et axes très circulés. Nous intervenons rapidement sur toute la commune pour retirer les véhicules hors d'usage en accès privé ou parking collectif. L'accompagnement administratif est inclus pour simplifier la clôture du dossier.",
    specificFAQs: [
      { question: "Intervention possible en lotissement à Rueil ?", answer: "Oui, avec vérification accès et manœuvre plateau." },
      { question: "Proposez-vous un devis téléphone immédiat ?", answer: "Oui, avec marque, état et photos pour chiffrage fiable." },
      { question: "Service disponible le week-end ?", answer: "Oui, nous planifions aussi les créneaux weekend." },
    ],
    testimonials: [
      { author: "Mélissa C.", city: "Rueil-Malmaison", date: "9 mars 2025", text: "Intervention rapide et polie." },
      { author: "Kamel D.", city: "Rueil-Malmaison", date: "18 janv. 2025", text: "Très bon rachat de mon utilitaire." },
      { author: "Nora A.", city: "Rueil-Malmaison", date: "12 nov. 2024", text: "Processus simple et efficace." },
    ],
  },
  bobigny: {
    defaultPostal: "93000",
    roads: ["A86", "N186", "A3", "Avenue Jean Jaurès"],
    longDescription:
      "Bobigny est un nœud majeur de Seine-Saint-Denis. Nous y retirons les épaves rapidement pour particuliers et professionnels, avec un discours clair sur rachat vs enlèvement gratuit. Les accès en copropriété sont validés avant intervention pour éviter les reports.",
    specificFAQs: [
      { question: "Intervenez-vous dans toute la ville de Bobigny ?", answer: "Oui, tous quartiers couverts selon planning." },
      { question: "Peut-on enlever plusieurs véhicules le même jour ?", answer: "Oui, nous organisons des passages groupés." },
      { question: "Quelles pièces fournir ?", answer: "Carte grise ou équivalent, pièce d'identité et justificatif." },
    ],
    testimonials: [
      { author: "Hafid G.", city: "Bobigny", date: "1 mars 2025", text: "Très réactifs et carrés." },
      { author: "Camille S.", city: "Bobigny", date: "20 déc. 2024", text: "Rien à redire sur le service." },
      { author: "Naël T.", city: "Bobigny", date: "15 oct. 2024", text: "Ponctuels et transparents." },
    ],
  },
  drancy: {
    defaultPostal: "93700",
    roads: ["A3", "N2", "A86", "Avenue Henri Barbusse"],
    longDescription:
      "Drancy connaît un fort volume de demandes d'enlèvement VHU, notamment en zones résidentielles denses. Nous adaptons le gabarit du plateau et le créneau pour limiter la gêne locale. Le parcours reste conforme avec remise des justificatifs utiles.",
    specificFAQs: [
      { question: "Intervenez-vous rapidement à Drancy ?", answer: "Oui, généralement sous 24-48 h." },
      { question: "Le déplacement est-il facturé ?", answer: "Non dans les cas réglementaires d'enlèvement VHU gratuit." },
      { question: "Rachat possible pour voiture en panne ?", answer: "Oui, selon estimation des éléments valorisables." },
    ],
    testimonials: [
      { author: "Aïssatou M.", city: "Drancy", date: "26 fév. 2025", text: "Service rapide et sérieux." },
      { author: "Nabil R.", city: "Drancy", date: "6 janv. 2025", text: "Très bon suivi client." },
      { author: "Luna P.", city: "Drancy", date: "9 oct. 2024", text: "Intervention sans stress." },
    ],
  },
  "rosny-sous-bois": {
    defaultPostal: "93110",
    roads: ["A86", "A3", "N302", "Boulevard de la Boissière"],
    longDescription:
      "Rosny-sous-Bois est un secteur stratégique entre habitat dense et pôles commerciaux. Nos équipes y retirent les épaves avec délais courts, estimation rapide et orientation claire vers rachat ou filière gratuite agréée.",
    specificFAQs: [
      { question: "Intervenez-vous autour de Rosny 2 ?", answer: "Oui, avec adaptation aux contraintes de stationnement." },
      { question: "Puis-je envoyer des photos pour devis ?", answer: "Oui, cela accélère fortement l'estimation." },
      { question: "Le service couvre les parkings privés ?", answer: "Oui avec autorisation d'accès." },
    ],
    testimonials: [
      { author: "Sonia D.", city: "Rosny-sous-Bois", date: "18 fév. 2025", text: "Rdv tenu, travail propre." },
      { author: "Kévin O.", city: "Rosny-sous-Bois", date: "4 déc. 2024", text: "Rachat correct et rapide." },
      { author: "Mariam H.", city: "Rosny-sous-Bois", date: "17 oct. 2024", text: "Très bon accompagnement." },
    ],
  },
  "noisy-le-sec": {
    defaultPostal: "93130",
    roads: ["A3", "N3", "D115", "Boulevard Michelet"],
    longDescription:
      "À Noisy-le-Sec, nous intervenons sur secteurs résidentiels et axes urbains pour retirer les VHU dans un délai maîtrisé. L'équipe détaille les documents requis et confirme un créneau réaliste avant déplacement.",
    specificFAQs: [
      { question: "Intervenez-vous en centre-ville de Noisy-le-Sec ?", answer: "Oui, avec créneaux ajustés au trafic local." },
      { question: "Enlèvement possible sans batterie ?", answer: "Oui, plateau et treuil permettent la prise en charge." },
      { question: "Puis-je réserver un samedi ?", answer: "Oui selon disponibilités." },
    ],
    testimonials: [
      { author: "Imen B.", city: "Noisy-le-Sec", date: "2 mars 2025", text: "Très bonne réactivité." },
      { author: "Ali C.", city: "Noisy-le-Sec", date: "29 déc. 2024", text: "Service clair et efficace." },
      { author: "Flora M.", city: "Noisy-le-Sec", date: "22 oct. 2024", text: "Aucun frais surprise." },
    ],
  },
  "maisons-alfort": {
    defaultPostal: "94700",
    roads: ["A86", "N19", "D6", "Avenue du Général Leclerc"],
    longDescription:
      "Maisons-Alfort mêle zones résidentielles et circulation soutenue vers Paris. Nous y assurons enlèvement épave gratuit et rachat selon état avec suivi administratif complet. Les créneaux sont optimisés pour limiter l'immobilisation.",
    specificFAQs: [
      { question: "Intervenez-vous à Charentonneau ?", answer: "Oui, tous les secteurs de Maisons-Alfort sont couverts." },
      { question: "Rachat possible pour véhicule ancien ?", answer: "Oui selon potentiel de valorisation." },
      { question: "Certificat de destruction fourni ?", answer: "Oui selon parcours réglementaire VHU." },
    ],
    testimonials: [
      { author: "Yasmine T.", city: "Maisons-Alfort", date: "27 fév. 2025", text: "Service fiable et rapide." },
      { author: "Alexis G.", city: "Maisons-Alfort", date: "12 janv. 2025", text: "Très pro sur la paperasse." },
      { author: "Sami L.", city: "Maisons-Alfort", date: "3 nov. 2024", text: "Intervention nickel." },
    ],
  },
  alfortville: {
    defaultPostal: "94140",
    roads: ["A86", "Quais de Seine", "D148", "Pont d'Ivry"],
    longDescription:
      "Alfortville présente de nombreux accès contraints en copropriété et quartiers denses. Nous organisons l'enlèvement d'épaves avec contrôle accès et délai court. Le service inclut explication claire des démarches VHU et assurance.",
    specificFAQs: [
      { question: "Intervenez-vous côté quais ?", answer: "Oui, avec planification adaptée au trafic." },
      { question: "Enlèvement possible en parking couvert ?", answer: "Oui selon hauteur et manœuvre disponibles." },
      { question: "Quel délai en moyenne ?", answer: "Souvent 24-48 h." },
    ],
    testimonials: [
      { author: "Fatou N.", city: "Alfortville", date: "5 mars 2025", text: "Très bonne prise en charge." },
      { author: "Pierre A.", city: "Alfortville", date: "10 déc. 2024", text: "Rapides et efficaces." },
      { author: "Kenza S.", city: "Alfortville", date: "19 oct. 2024", text: "Super service client." },
    ],
  },
  vincennes: {
    defaultPostal: "94300",
    roads: ["Porte de Vincennes", "Avenue de Paris", "Cours Marigny", "D120"],
    longDescription:
      "Vincennes exige des interventions propres en environnement résidentiel dense. Nos équipes retirent les épaves rapidement, avec discrétion et clarté sur le parcours administratif jusqu'au certificat.",
    specificFAQs: [
      { question: "Intervenez-vous près du château de Vincennes ?", answer: "Oui, sur toute la commune et ses abords." },
      { question: "Rachat possible à Vincennes ?", answer: "Oui, après estimation selon état du véhicule." },
      { question: "Comment obtenir un devis immédiat ?", answer: "Par téléphone avec les infos véhicule et photos." },
    ],
    testimonials: [
      { author: "Mathilde R.", city: "Vincennes", date: "28 fév. 2025", text: "Très ponctuels, très pro." },
      { author: "Karim E.", city: "Vincennes", date: "9 janv. 2025", text: "Rachat rapide et transparent." },
      { author: "Nina P.", city: "Vincennes", date: "1 nov. 2024", text: "Service impeccable." },
    ],
  },
  "nogent-sur-marne": {
    defaultPostal: "94130",
    roads: ["A4", "D86", "Grande Rue", "Bords de Marne"],
    longDescription:
      "Nogent-sur-Marne combine quartiers résidentiels et secteurs bords de Marne. Nous planifions des enlèvements VHU rapides et propres, avec maîtrise des accès en zone pavillonnaire et stationnement contraint.",
    specificFAQs: [
      { question: "Intervenez-vous sur les bords de Marne ?", answer: "Oui, avec adaptation aux conditions d'accès locales." },
      { question: "Peut-on enlever un véhicule immobilisé depuis longtemps ?", answer: "Oui, c'est un cas courant de prise en charge." },
      { question: "Le service est-il sans engagement ?", answer: "Oui, le devis reste sans engagement." },
    ],
    testimonials: [
      { author: "Lila H.", city: "Nogent-sur-Marne", date: "4 mars 2025", text: "Intervention rapide et claire." },
      { author: "Tom B.", city: "Nogent-sur-Marne", date: "15 déc. 2024", text: "Très bon contact client." },
      { author: "Sofiane M.", city: "Nogent-sur-Marne", date: "25 oct. 2024", text: "Processus simple et net." },
    ],
  },
  massy: {
    defaultPostal: "91300",
    roads: ["A10", "A6", "N188", "Massy-Palaiseau"],
    longDescription:
      "Massy est un secteur clé du sud francilien, avec forte rotation de véhicules autour des gares et zones d'activité. Nous y intervenons rapidement pour enlèvement VHU et rachat selon état. Les délais sont optimisés grâce à une couverture locale régulière.",
    specificFAQs: [
      { question: "Intervenez-vous près de la gare TGV ?", answer: "Oui, en tenant compte des contraintes de circulation." },
      { question: "Puis-je faire enlever un utilitaire à Massy ?", answer: "Oui, sous réserve de gabarit compatible." },
      { question: "Quel est le délai typique ?", answer: "Généralement 24-48 h." },
    ],
    testimonials: [
      { author: "Yacine P.", city: "Massy", date: "10 mars 2025", text: "Efficace et très réactif." },
      { author: "Hélène V.", city: "Massy", date: "19 janv. 2025", text: "Super suivi administratif." },
      { author: "Riad A.", city: "Massy", date: "8 nov. 2024", text: "Intervention propre et ponctuelle." },
    ],
  },
  sartrouville: {
    defaultPostal: "78500",
    roads: ["A14", "N192", "Quai de Seine", "D308"],
    longDescription:
      "Sartrouville présente un mix de quartiers résidentiels et d'axes très fréquentés. Nous assurons un enlèvement d'épave rapide avec organisation des accès en amont, pour éviter les imprévus le jour J.",
    specificFAQs: [
      { question: "Intervenez-vous dans tous les quartiers de Sartrouville ?", answer: "Oui, couverture complète de la commune." },
      { question: "Peut-on obtenir un devis en quelques minutes ?", answer: "Oui par téléphone avec les infos essentielles." },
      { question: "Le service inclut les papiers VHU ?", answer: "Oui, nous accompagnons sur les documents nécessaires." },
    ],
    testimonials: [
      { author: "Nadia S.", city: "Sartrouville", date: "1 mars 2025", text: "Très bon service global." },
      { author: "Julien C.", city: "Sartrouville", date: "22 déc. 2024", text: "Rapide, professionnel." },
      { author: "Leïla T.", city: "Sartrouville", date: "30 oct. 2024", text: "Aucune mauvaise surprise." },
    ],
  },
  "conflans-sainte-honorine": {
    defaultPostal: "78700",
    roads: ["N184", "D48", "Quais de Seine", "Centre Conflans"],
    longDescription:
      "Conflans-Sainte-Honorine demande des interventions adaptées aux zones résidentielles et axes de transit. Nous retirons les épaves avec délais courts, transparence sur coûts et accompagnement administratif complet.",
    specificFAQs: [
      { question: "Intervenez-vous aussi en périphérie de Conflans ?", answer: "Oui, selon zone et accessibilité." },
      { question: "Rachat possible pour véhicule non roulant ?", answer: "Oui si la valorisation le justifie." },
      { question: "Intervention week-end ?", answer: "Oui, selon créneaux disponibles." },
    ],
    testimonials: [
      { author: "Amel K.", city: "Conflans-Sainte-Honorine", date: "27 fév. 2025", text: "Très bon accompagnement." },
      { author: "Romain D.", city: "Conflans-Sainte-Honorine", date: "11 janv. 2025", text: "Service rapide et net." },
      { author: "Inaya M.", city: "Conflans-Sainte-Honorine", date: "28 oct. 2024", text: "Je recommande fortement." },
    ],
  },
  torcy: {
    defaultPostal: "77200",
    roads: ["A104", "A4", "D199", "RER A Torcy"],
    longDescription:
      "À Torcy, nous intervenons rapidement pour retirer les véhicules hors d'usage en quartier résidentiel, parking de résidence ou zone d'activité. Le service inclut estimation, enlèvement et gestion des documents VHU.",
    specificFAQs: [
      { question: "Intervenez-vous près du centre commercial Bay 2 ?", answer: "Oui, avec créneaux adaptés à la circulation locale." },
      { question: "Quel délai à Torcy ?", answer: "La plupart des demandes sont traitées sous 24-48 h." },
      { question: "Enlèvement gratuit possible ?", answer: "Oui selon cadre réglementaire et état du véhicule." },
    ],
    testimonials: [
      { author: "Khaled S.", city: "Torcy", date: "6 mars 2025", text: "Super réactivité." },
      { author: "Élodie B.", city: "Torcy", date: "16 déc. 2024", text: "Très pros et ponctuels." },
      { author: "Hakim O.", city: "Torcy", date: "31 oct. 2024", text: "Service efficace du début à la fin." },
    ],
  },
  "pontault-combault": {
    defaultPostal: "77340",
    roads: ["N104", "N4", "D21", "Gare d'Émerainville-Pontault"],
    longDescription:
      "Pontault-Combault couvre de vastes secteurs pavillonnaires. Nous y planifions des enlèvements d'épave rapides avec contrôle accès en amont et explications claires sur rachat ou parcours gratuit agréé.",
    specificFAQs: [
      { question: "Intervenez-vous en lotissement à Pontault ?", answer: "Oui, avec vérification de l'accès camion." },
      { question: "Rachat possible pour voiture ancienne ?", answer: "Oui, selon état et valeur résiduelle." },
      { question: "Puis-je réserver un créneau urgent ?", answer: "Oui, selon disponibilités du jour." },
    ],
    testimonials: [
      { author: "Sabrina L.", city: "Pontault-Combault", date: "2 mars 2025", text: "Rapides et efficaces." },
      { author: "Nassim T.", city: "Pontault-Combault", date: "5 janv. 2025", text: "Très bon service." },
      { author: "Julie R.", city: "Pontault-Combault", date: "4 nov. 2024", text: "Dossier bouclé sans stress." },
    ],
  },
  "lagny-sur-marne": {
    defaultPostal: "77400",
    roads: ["A4", "D934", "D418", "Centre Lagny"],
    longDescription:
      "Lagny-sur-Marne nécessite une logistique propre entre centre-ville historique et quartiers périphériques. Nous retirons les VHU avec créneaux réalistes et accompagnement administratif complet.",
    specificFAQs: [
      { question: "Intervenez-vous en centre ancien de Lagny ?", answer: "Oui, avec adaptation aux contraintes de circulation." },
      { question: "Le devis est-il gratuit ?", answer: "Oui, toujours sans engagement." },
      { question: "Service 7j/7 ?", answer: "Oui, selon créneaux disponibles." },
    ],
    testimonials: [
      { author: "Myriam C.", city: "Lagny-sur-Marne", date: "8 mars 2025", text: "Intervention très pro." },
      { author: "Loïc D.", city: "Lagny-sur-Marne", date: "21 déc. 2024", text: "Très bon suivi client." },
      { author: "Amina G.", city: "Lagny-sur-Marne", date: "6 nov. 2024", text: "Service impeccable." },
    ],
  },
  "issy-les-moulineaux": {
    defaultPostal: "92130",
    roads: ["Périphérique Ouest", "Quai de Stalingrad", "D7", "Pont d'Issy"],
    longDescription:
      "Issy-les-Moulineaux concentre des résidences denses, des parkings en sous-sol et des zones tertiaires. Nous y organisons des enlèvements d'épaves précis, avec validation gabarit/hauteur en amont. Le rachat est étudié selon l'état réel du véhicule ; sinon enlèvement gratuit via filière VHU agréée.",
    specificFAQs: [
      { question: "Intervenez-vous en parking souterrain à Issy ?", answer: "Oui, après validation de la hauteur libre et des accès rampe." },
      { question: "Quel délai moyen dans Issy-les-Moulineaux ?", answer: "Le plus souvent sous 24-48 h selon disponibilité des équipes." },
      { question: "Rachat possible pour véhicule de société ?", answer: "Oui, avec justificatifs entreprise et estimation préalable." },
    ],
    testimonials: [
      { author: "Sébastien P.", city: "Issy-les-Moulineaux", date: "3 mars 2025", text: "Intervention ultra carrée en sous-sol." },
      { author: "Lina O.", city: "Issy-les-Moulineaux", date: "8 janv. 2025", text: "Très bon suivi administratif." },
      { author: "Mehdi A.", city: "Issy-les-Moulineaux", date: "19 nov. 2024", text: "Rachat cohérent, équipe ponctuelle." },
    ],
  },
  "garges-les-gonesse": {
    defaultPostal: "95140",
    roads: ["A1", "D170", "D84", "Avenue de Stalingrad"],
    longDescription:
      "Garges-lès-Gonesse demande des interventions rapides en environnement urbain dense. Nous assurons enlèvement VHU, rachat possible et suivi administratif sans friction.",
    specificFAQs: [
      { question: "Intervenez-vous sur tous les secteurs de Garges ?", answer: "Oui, selon planning et accessibilité." },
      { question: "Puis-je obtenir un rendez-vous sous 24h ?", answer: "Souvent oui, selon disponibilité du jour." },
      { question: "Le service est-il agréé VHU ?", answer: "Oui, nous suivons la filière conforme." },
    ],
    testimonials: [
      { author: "Samia H.", city: "Garges-lès-Gonesse", date: "4 mars 2025", text: "Très bon service global." },
      { author: "Nabil A.", city: "Garges-lès-Gonesse", date: "9 déc. 2024", text: "Intervention rapide et pro." },
      { author: "Siham K.", city: "Garges-lès-Gonesse", date: "20 oct. 2024", text: "Je recommande." },
    ],
  },
  chelles: {
    defaultPostal: "77500",
    roads: ["A104", "A4", "N34", "Gare de Chelles"],
    longDescription:
      "Chelles est un hub de l’est francilien avec un trafic soutenu autour de la gare et des quartiers résidentiels. Nous retirons les épaves rapidement avec adaptation aux parkings de copropriété et accès étroits. Rachat possible selon état ; sinon enlèvement gratuit agréé et certificat de destruction.",
    specificFAQs: [
      { question: "Intervenez-vous autour de la gare de Chelles ?", answer: "Oui, avec créneaux adaptés aux heures de pointe et contraintes de stationnement." },
      { question: "Puis-je obtenir un enlèvement sous 24h ?", answer: "Souvent oui selon planning ; sinon 24–48 h sur la majorité des demandes." },
      { question: "Rachat possible pour une voiture non roulante ?", answer: "Oui si la valorisation pièces/métaux le permet après estimation." },
    ],
    testimonials: [
      { author: "Nora B.", city: "Chelles", date: "14 fév. 2025", text: "Prise en charge rapide, zéro surprise." },
      { author: "David K.", city: "Chelles", date: "21 déc. 2024", text: "Intervention efficace en parking résidentiel." },
      { author: "Sami R.", city: "Chelles", date: "9 nov. 2024", text: "Très pro sur les documents VHU." },
    ],
  },
  melun: {
    defaultPostal: "77000",
    roads: ["A5", "N105", "Quais de Seine", "Avenue Thiers"],
    longDescription:
      "Melun combine centre ancien et périphérie active ; nos équipes y enlèvent les véhicules hors d’usage avec organisation précise et délais courts. Nous expliquons clairement la différence entre rachat et enlèvement gratuit selon l’état du véhicule.",
    specificFAQs: [
      { question: "Intervenez-vous en hypercentre de Melun ?", answer: "Oui, avec analyse d’accès et horaires pour limiter la gêne." },
      { question: "Faut-il la carte grise obligatoirement ?", answer: "Non dans certains cas ; nous guidons avec VIN et déclaration adaptée." },
      { question: "Le certificat est-il remis rapidement ?", answer: "Oui selon le parcours VHU, avec suivi des étapes administratives." },
    ],
    testimonials: [
      { author: "Anaïs T.", city: "Melun", date: "8 janv. 2025", text: "Épave retirée dès le lendemain." },
      { author: "Moussa C.", city: "Melun", date: "12 déc. 2024", text: "Très bon accompagnement au téléphone." },
      { author: "Pauline F.", city: "Melun", date: "30 oct. 2024", text: "Service propre, ponctuel et clair." },
    ],
  },
  meaux: {
    defaultPostal: "77100",
    roads: ["A140", "N3", "A4", "Centre Meaux"],
    longDescription:
      "À Meaux, nous intervenons sur les quartiers résidentiels, zones commerciales et communes voisines pour enlèvement épave gratuit ou rachat. Notre priorité : créneau respecté, chargement sécurisé et dossier administratif net.",
    specificFAQs: [
      { question: "Intervenez-vous aussi en périphérie de Meaux ?", answer: "Oui sur l’ensemble du bassin meldois et communes proches." },
      { question: "Peut-on enlever une épave sans batterie ?", answer: "Oui, plateau et treuil permettent l’enlèvement sans démarrage." },
      { question: "Délai moyen d’intervention ?", answer: "En général sous 24–48 h selon disponibilité." },
    ],
    testimonials: [
      { author: "Karine L.", city: "Meaux", date: "20 janv. 2025", text: "Intervention rapide et sérieuse." },
      { author: "Ilyes N.", city: "Meaux", date: "4 déc. 2024", text: "Rachat honnête, très satisfait." },
      { author: "Baptiste G.", city: "Meaux", date: "17 oct. 2024", text: "Certificat reçu sans délai." },
    ],
  },
  "mantes-la-jolie": {
    defaultPostal: "78200",
    roads: ["A13", "N13", "Pont de Limay", "D983"],
    longDescription:
      "Mantes-la-Jolie est un secteur stratégique des Yvelines nord. Nous gérons les enlèvements d’épaves en ville et périphérie avec organisation logistique adaptée aux axes de vallée de Seine.",
    specificFAQs: [
      { question: "Couvrez-vous Mantes et Limay ?", answer: "Oui, interventions régulières sur tout le secteur mantois." },
      { question: "Rachat possible après accident ?", answer: "Oui selon état réel du véhicule et potentiel de valorisation." },
      { question: "Intervention week-end ?", answer: "Oui, 7j/7 sur créneaux disponibles." },
    ],
    testimonials: [
      { author: "Yassine D.", city: "Mantes-la-Jolie", date: "16 fév. 2025", text: "Parfait, enlèvement en 24h." },
      { author: "Hugo V.", city: "Mantes-la-Jolie", date: "6 janv. 2025", text: "Professionnels et ponctuels." },
      { author: "Leïla S.", city: "Mantes-la-Jolie", date: "1 nov. 2024", text: "Très clair du début à la fin." },
    ],
  },
  "saint-germain-en-laye": {
    defaultPostal: "78100",
    roads: ["N13", "A14", "RN184", "Centre historique"],
    longDescription:
      "Saint-Germain-en-Laye exige des interventions propres et discrètes. Nous retirons les véhicules hors d’usage en respectant le voisinage et les contraintes de circulation locale.",
    specificFAQs: [
      { question: "Intervenez-vous dans les résidences privées ?", answer: "Oui avec autorisation d’accès et validation du gabarit." },
      { question: "Délais dans Saint-Germain ?", answer: "Souvent 24–48 h, parfois plus rapide selon planning." },
      { question: "Peut-on avoir un devis immédiat ?", answer: "Oui par téléphone avec photos et informations clés." },
    ],
    testimonials: [
      { author: "Clara R.", city: "Saint-Germain-en-Laye", date: "13 fév. 2025", text: "Intervention discrète, très pro." },
      { author: "Romain P.", city: "Saint-Germain-en-Laye", date: "24 déc. 2024", text: "Équipe sérieuse et efficace." },
      { author: "Inès M.", city: "Saint-Germain-en-Laye", date: "10 oct. 2024", text: "Excellent suivi administratif." },
    ],
  },
  poissy: {
    defaultPostal: "78300",
    roads: ["A13", "D190", "Pont de Poissy", "N184"],
    longDescription:
      "Poissy combine habitat dense et pôles économiques ; nous intervenons rapidement pour enlever les épaves en parking, rue autorisée ou résidence sécurisée.",
    specificFAQs: [
      { question: "Intervenez-vous près des zones d’activité ?", answer: "Oui, particuliers et professionnels sont couverts." },
      { question: "Enlèvement sans contrôle technique ?", answer: "Oui, le CT n’est pas requis pour un enlèvement VHU." },
      { question: "Paiement immédiat en cas de rachat ?", answer: "Oui selon modalités annoncées avant intervention." },
    ],
    testimonials: [
      { author: "Mehdi A.", city: "Poissy", date: "18 janv. 2025", text: "Rapide et sans frais cachés." },
      { author: "Aurore C.", city: "Poissy", date: "3 déc. 2024", text: "Bon service client, je recommande." },
      { author: "Nicolas E.", city: "Poissy", date: "9 oct. 2024", text: "Très pro sur les délais." },
    ],
  },
  "corbeil-essonnes": {
    defaultPostal: "91100",
    roads: ["N7", "A6", "D446", "Quais de Seine"],
    longDescription:
      "Corbeil-Essonnes est un secteur clé du 91. Nous y assurons enlèvement épave gratuit et rachat avec une organisation efficace sur quartiers résidentiels et zones artisanales.",
    specificFAQs: [
      { question: "Intervention possible en copropriété ?", answer: "Oui, avec autorisation et accès validés." },
      { question: "Délai moyen d’enlèvement ?", answer: "Majoritairement 24–48 h selon planning." },
      { question: "Faut-il être présent au chargement ?", answer: "Oui, ou prévoir un mandataire selon votre dossier." },
    ],
    testimonials: [
      { author: "Lina G.", city: "Corbeil-Essonnes", date: "15 fév. 2025", text: "Très efficace, dossier bouclé vite." },
      { author: "Omar J.", city: "Corbeil-Essonnes", date: "28 nov. 2024", text: "Intervention propre et rapide." },
      { author: "Cédric B.", city: "Corbeil-Essonnes", date: "4 oct. 2024", text: "Top sur le rachat." },
    ],
  },
  "evry-courcouronnes": {
    defaultPostal: "91000",
    roads: ["A6", "N104", "RN7", "Boulevard de l'Europe"],
    longDescription:
      "Évry-Courcouronnes concentre habitat, campus et zones économiques. Nous retirons les véhicules hors d’usage avec réactivité et accompagnement administratif complet.",
    specificFAQs: [
      { question: "Intervenez-vous près du centre commercial ?", answer: "Oui, en adaptant les horaires au trafic local." },
      { question: "Peut-on enlever plusieurs véhicules ?", answer: "Oui, nous planifions des passages groupés." },
      { question: "Rachat utilitaire possible ?", answer: "Oui selon état et valorisation possible." },
    ],
    testimonials: [
      { author: "Sofiane K.", city: "Évry-Courcouronnes", date: "7 fév. 2025", text: "Service rapide et fiable." },
      { author: "Manon D.", city: "Évry-Courcouronnes", date: "20 déc. 2024", text: "Très bon suivi client." },
      { author: "Adrien T.", city: "Évry-Courcouronnes", date: "29 oct. 2024", text: "Rien à redire, parfait." },
    ],
  },
  palaiseau: {
    defaultPostal: "91120",
    roads: ["N118", "A10", "D36", "Plateau de Saclay"],
    longDescription:
      "Palaiseau et ses quartiers mixtes nécessitent des créneaux bien calibrés. Nous gérons enlèvement épave et rachat avec validation d’accès avant passage du plateau.",
    specificFAQs: [
      { question: "Intervenez-vous côté Lozère ?", answer: "Oui, sur l’ensemble des quartiers de Palaiseau." },
      { question: "Le déplacement est-il gratuit ?", answer: "Oui dans le cadre réglementaire applicable au VHU." },
      { question: "Puis-je avoir un créneau samedi ?", answer: "Oui, selon disponibilité 7j/7." },
    ],
    testimonials: [
      { author: "Camille N.", city: "Palaiseau", date: "22 janv. 2025", text: "Intervention impeccable." },
      { author: "Jules R.", city: "Palaiseau", date: "11 déc. 2024", text: "Rapide et très pro." },
      { author: "Hajar S.", city: "Palaiseau", date: "2 oct. 2024", text: "Bon contact, très sérieux." },
    ],
  },
  "levallois-perret": {
    defaultPostal: "92300",
    roads: ["Périphérique", "Quai Charles Pasqua", "Pont de Levallois", "Rue Anatole France"],
    longDescription:
      "Levallois-Perret impose des interventions précises en zone dense. Nous retirons les épaves en créneaux courts avec accès validés et chargement sécurisé.",
    specificFAQs: [
      { question: "Enlèvement possible en parking sous-sol ?", answer: "Oui si hauteur et rampe sont compatibles." },
      { question: "Intervenez-vous vite à Levallois ?", answer: "Souvent sous 24–48 h selon le planning." },
      { question: "Rachat possible pour véhicule ancien ?", answer: "Oui, estimation selon état et pièces valorisables." },
    ],
    testimonials: [
      { author: "Pierre H.", city: "Levallois-Perret", date: "9 fév. 2025", text: "Très rapide et efficace." },
      { author: "Sarah M.", city: "Levallois-Perret", date: "5 déc. 2024", text: "Équipe professionnelle." },
      { author: "Rachid B.", city: "Levallois-Perret", date: "14 oct. 2024", text: "Parfait du début à la fin." },
    ],
  },
  "neuilly-sur-seine": {
    defaultPostal: "92200",
    roads: ["Avenue Charles de Gaulle", "Porte Maillot", "Pont de Neuilly", "Boulevard Bineau"],
    longDescription:
      "À Neuilly-sur-Seine, nous assurons des interventions discrètes et fiables pour l’enlèvement des véhicules hors d’usage en résidence ou voie privée autorisée.",
    specificFAQs: [
      { question: "Intervenez-vous dans les parkings privés ?", answer: "Oui, avec validation préalable des accès." },
      { question: "Quel délai à Neuilly ?", answer: "Généralement 24–48 h selon disponibilité." },
      { question: "Aidez-vous pour les papiers ?", answer: "Oui, avec accompagnement complet selon votre dossier." },
    ],
    testimonials: [
      { author: "Aïcha L.", city: "Neuilly-sur-Seine", date: "17 fév. 2025", text: "Intervention propre et ponctuelle." },
      { author: "Vincent C.", city: "Neuilly-sur-Seine", date: "26 nov. 2024", text: "Service haut niveau." },
      { author: "Emma D.", city: "Neuilly-sur-Seine", date: "15 oct. 2024", text: "Très rassurant et efficace." },
    ],
  },
  colombes: {
    defaultPostal: "92700",
    roads: ["A86", "Boulevard de Valmy", "Pont de Colombes", "Rue Saint-Denis"],
    longDescription:
      "Colombes connaît une forte demande d’enlèvement épave. Nos équipes interviennent rapidement sur l’ensemble des quartiers, avec options de rachat lorsque possible.",
    specificFAQs: [
      { question: "Intervenez-vous à Petit-Colombes ?", answer: "Oui, couverture de toute la commune." },
      { question: "Voiture non roulante acceptée ?", answer: "Oui, même sans démarrage ni batterie." },
      { question: "Certificat destruction fourni ?", answer: "Oui selon la filière VHU appliquée." },
    ],
    testimonials: [
      { author: "Mina F.", city: "Colombes", date: "3 fév. 2025", text: "Intervention très rapide." },
      { author: "Yohan T.", city: "Colombes", date: "10 déc. 2024", text: "Rachat honnête et clair." },
      { author: "Leïna P.", city: "Colombes", date: "20 oct. 2024", text: "Service fiable, je recommande." },
    ],
  },
  aubervilliers: {
    defaultPostal: "93300",
    roads: ["A86", "Porte de la Villette", "Avenue Jean Jaurès", "Canal Saint-Denis"],
    longDescription:
      "Aubervilliers combine zones denses et axes logistiques. Nous gérons les enlèvements d’épaves rapidement, avec adaptation aux accès complexes et forte circulation.",
    specificFAQs: [
      { question: "Intervenez-vous aux Quatre-Chemins ?", answer: "Oui, toute la ville est couverte." },
      { question: "Peut-on enlever un utilitaire ?", answer: "Oui, sous réserve de gabarit compatible." },
      { question: "Service le week-end ?", answer: "Oui, plages d’intervention 7j/7." },
    ],
    testimonials: [
      { author: "Nassim H.", city: "Aubervilliers", date: "12 fév. 2025", text: "Très pro et très rapide." },
      { author: "Sonia K.", city: "Aubervilliers", date: "18 déc. 2024", text: "Parfait sur les papiers." },
      { author: "Yacine M.", city: "Aubervilliers", date: "6 oct. 2024", text: "Intervention nickel." },
    ],
  },
  pantin: {
    defaultPostal: "93500",
    roads: ["A3", "Porte de Pantin", "Canal de l'Ourcq", "Avenue Jean Lolive"],
    longDescription:
      "Pantin est un secteur urbain à forte rotation de stationnement. Nous enlevons les véhicules hors d’usage avec réactivité et processus clair de bout en bout.",
    specificFAQs: [
      { question: "Intervenez-vous autour du canal ?", answer: "Oui, avec créneaux adaptés au trafic local." },
      { question: "Rachat possible sur véhicule accidenté ?", answer: "Oui après estimation des éléments valorisables." },
      { question: "Avez-vous besoin des clés ?", answer: "Pas toujours ; nous analysons votre cas avant intervention." },
    ],
    testimonials: [
      { author: "Rima B.", city: "Pantin", date: "4 fév. 2025", text: "Service ultra efficace." },
      { author: "Kévin L.", city: "Pantin", date: "9 déc. 2024", text: "Aucun frais surprise." },
      { author: "Maya G.", city: "Pantin", date: "13 oct. 2024", text: "Très bons conseils." },
    ],
  },
  "aulnay-sous-bois": {
    defaultPostal: "93600",
    roads: ["A3", "N2", "A104", "Boulevard de Strasbourg"],
    longDescription:
      "Aulnay-sous-Bois couvre des secteurs très variés. Nous intervenons rapidement pour enlever les épaves en pavillonnaire comme en résidence collective.",
    specificFAQs: [
      { question: "Intervenez-vous au Vieux-Pays ?", answer: "Oui, avec couverture de tous les quartiers." },
      { question: "Enlèvement gratuit en 93 ?", answer: "Oui selon cadre réglementaire et état du véhicule." },
      { question: "Combien de temps pour un rendez-vous ?", answer: "Souvent 24–48 h." },
    ],
    testimonials: [
      { author: "Dounia S.", city: "Aulnay-sous-Bois", date: "5 fév. 2025", text: "Intervention rapide et propre." },
      { author: "Mourad A.", city: "Aulnay-sous-Bois", date: "15 déc. 2024", text: "Très bon suivi client." },
      { author: "Léo T.", city: "Aulnay-sous-Bois", date: "7 oct. 2024", text: "Sérieux et ponctuels." },
    ],
  },
  "ivry-sur-seine": {
    defaultPostal: "94200",
    roads: ["Périphérique", "A4", "Quais de Seine", "Avenue de Verdun"],
    longDescription:
      "Ivry-sur-Seine nécessite des interventions rapides à la frontière de Paris. Nous gérons enlèvement VHU et rachat avec accès parking et parties communes anticipés.",
    specificFAQs: [
      { question: "Intervenez-vous près du périphérique ?", answer: "Oui, avec optimisation de créneau pour fluidifier le passage." },
      { question: "Rachat d’épave possible à Ivry ?", answer: "Oui selon valeur résiduelle du véhicule." },
      { question: "Documents nécessaires ?", answer: "Carte grise ou équivalent, pièce d’identité et justificatif." },
    ],
    testimonials: [
      { author: "Hicham N.", city: "Ivry-sur-Seine", date: "2 fév. 2025", text: "Très réactifs, bravo." },
      { author: "Élodie C.", city: "Ivry-sur-Seine", date: "29 nov. 2024", text: "Dossier géré parfaitement." },
      { author: "Samir P.", city: "Ivry-sur-Seine", date: "5 oct. 2024", text: "Service clair et net." },
    ],
  },
  villejuif: {
    defaultPostal: "94800",
    roads: ["N7", "A6b", "Avenue de Paris", "Avenue de Stalingrad"],
    longDescription:
      "Villejuif est un secteur dense du 94 où la réactivité est clé. Nous assurons enlèvement épave gratuit et rachat avec une logistique adaptée aux accès urbains.",
    specificFAQs: [
      { question: "Intervenez-vous près des hôpitaux ?", answer: "Oui, avec respect strict des accès et contraintes locales." },
      { question: "Enlèvement le dimanche possible ?", answer: "Oui selon disponibilités, service 7j/7." },
      { question: "Délais habituels ?", answer: "24–48 h en moyenne." },
    ],
    testimonials: [
      { author: "Myriam K.", city: "Villejuif", date: "1 fév. 2025", text: "Intervention rapide et rassurante." },
      { author: "Hamza L.", city: "Villejuif", date: "3 déc. 2024", text: "Très bons échanges, top." },
      { author: "Coralie B.", city: "Villejuif", date: "12 oct. 2024", text: "Efficace et sans surprise." },
    ],
  },
  "champigny-sur-marne": {
    defaultPostal: "94500",
    roads: ["A4", "N4", "D145", "Bords de Marne"],
    longDescription:
      "À Champigny-sur-Marne, nous planifions des enlèvements d’épaves rapides sur quartiers pavillonnaires et secteurs denses, avec suivi administratif complet.",
    specificFAQs: [
      { question: "Intervenez-vous sur les bords de Marne ?", answer: "Oui, avec adaptation aux contraintes de stationnement." },
      { question: "Rachat possible sur véhicule très ancien ?", answer: "Oui, selon état et potentiel de valorisation." },
      { question: "Certificat de destruction fourni ?", answer: "Oui, selon parcours VHU conforme." },
    ],
    testimonials: [
      { author: "Nina G.", city: "Champigny-sur-Marne", date: "6 fév. 2025", text: "Intervention très pro." },
      { author: "Bilal T.", city: "Champigny-sur-Marne", date: "14 déc. 2024", text: "Rapide et transparent." },
      { author: "Lydie H.", city: "Champigny-sur-Marne", date: "16 oct. 2024", text: "Service impeccable." },
    ],
  },
  cergy: {
    defaultPostal: "95000",
    roads: ["A15", "N184", "Boulevard de l'Oise", "Cergy-Préfecture"],
    longDescription:
      "Cergy est un pôle majeur du Val-d’Oise. Nous y assurons enlèvement d’épaves gratuit et rachat avec forte disponibilité et process clair.",
    specificFAQs: [
      { question: "Intervenez-vous à Cergy-le-Haut ?", answer: "Oui, tous les quartiers sont couverts." },
      { question: "Peut-on planifier un créneau urgent ?", answer: "Oui selon planning, priorité aux situations bloquantes." },
      { question: "Rachat sur utilitaire possible ?", answer: "Oui après estimation technique." },
    ],
    testimonials: [
      { author: "Amine R.", city: "Cergy", date: "11 fév. 2025", text: "Service rapide et pro." },
      { author: "Julie M.", city: "Cergy", date: "7 déc. 2024", text: "Très bon suivi et bon prix." },
      { author: "Rayan E.", city: "Cergy", date: "18 oct. 2024", text: "Intervention parfaite." },
    ],
  },
  sarcelles: {
    defaultPostal: "95200",
    roads: ["A1", "N16", "D316", "Avenue du 8 Mai 1945"],
    longDescription:
      "Sarcelles connaît une forte densité urbaine et des besoins fréquents d’enlèvement VHU. Nous intervenons vite avec un cadre réglementaire clair.",
    specificFAQs: [
      { question: "Intervenez-vous sur tout Sarcelles ?", answer: "Oui, village et grands ensembles inclus." },
      { question: "Puis-je faire enlever une épave sans CT ?", answer: "Oui, c’est une situation courante." },
      { question: "Comment obtenir un devis rapide ?", answer: "Appelez avec plaque, état du véhicule et photos." },
    ],
    testimonials: [
      { author: "Farah S.", city: "Sarcelles", date: "8 fév. 2025", text: "Très rapide et rassurant." },
      { author: "Mouslim D.", city: "Sarcelles", date: "1 déc. 2024", text: "Aucun frais caché, top." },
      { author: "Lucas C.", city: "Sarcelles", date: "2 oct. 2024", text: "Excellent service global." },
    ],
  },
};

function fallbackPostalByDept(dept: string): string {
  const map: Record<string, string> = {
    "75": "75001",
    "77": "77000",
    "78": "78000",
    "91": "91000",
    "92": "92000",
    "93": "93000",
    "94": "94000",
    "95": "95000",
  };
  return map[dept] ?? "75001";
}

function slugSeed(slug: string): number {
  return slug.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
}

function pickBySlug<T>(slug: string, items: T[]): T {
  return items[slugSeed(slug) % items.length];
}

function cityFallbackLongDescription(c: (typeof CITIES)[number]): string {
  const urgencyAngles = [
    "les véhicules bloqués en résidence",
    "les épaves laissées en stationnement longue durée",
    "les véhicules non roulants après panne ou sinistre",
    "les situations urgentes qui empêchent l'accès parking",
  ];
  const proofAngles = [
    "validation d'accès avant déplacement",
    "créneau confirmé et respecté",
    "communication claire sur les documents à préparer",
    "accompagnement sur la différence rachat vs enlèvement gratuit",
  ];
  const processAngles = [
    "chargement sécurisé sur plateau et traçabilité VHU",
    "prise en charge administrative jusqu'au certificat de destruction",
    "évaluation réaliste de la valeur de reprise quand le rachat est possible",
    "organisation adaptée aux parkings couverts et voies étroites",
  ];

  const urgency = pickBySlug(c.slug, urgencyAngles);
  const proof = pickBySlug(`${c.slug}-proof`, proofAngles);
  const process = pickBySlug(`${c.slug}-process`, processAngles);
  const topNeighborhoods = c.neighborhoods.slice(0, 3).join(", ");

  return `A ${c.name}, nous intervenons chaque semaine sur ${topNeighborhoods} pour traiter ${urgency}. Notre equipe priorise ${proof} afin de limiter les reports et les immobilisations inutiles. Selon l'etat du vehicule, nous proposons soit une reprise, soit un enlèvement gratuit via la filiere VHU agreee. Chaque dossier suit un parcours clair: ${process}. Vous gardez une vision nette des etapes, des delais et des justificatifs remis.`;
}

function cityFallbackFaqs(c: (typeof CITIES)[number]): FAQ[] {
  const q1 = `Intervenez-vous sur tous les secteurs de ${c.name} ?`;
  const q2 = `Comment accelerer un enlèvement d'epave a ${c.name} ?`;
  const q3 = "Quelle difference entre rachat et enlevement gratuit ?";
  const n1 = c.neighborhoods[0] ?? "le centre-ville";
  const n2 = c.neighborhoods[1] ?? "les quartiers residentiels";
  const road = c.neighborhoods[2] ?? "les axes principaux";
  return [
    {
      question: q1,
      answer: `Oui. Nous couvrons l'ensemble de la commune, notamment ${n1}, ${n2} et ${road}, avec adaptation selon les acces et les regles de stationnement.`,
    },
    {
      question: q2,
      answer:
        "Envoyez la plaque, 3-4 photos (face, arriere, cote, acces) et precisez si le vehicule est en sous-sol ou non roulant. Cela permet de valider le bon plateau des le premier passage.",
    },
    {
      question: q3,
      answer:
        "Le rachat depend de la valeur residuelle (etat, demande pieces, metaux). Si la reprise n'est pas pertinente, l'enlevement gratuit reste possible dans le cadre VHU reglementaire.",
    },
  ];
}

function cityFallbackTestimonials(c: (typeof CITIES)[number]): Testimonial[] {
  const n1 = c.neighborhoods[0] ?? "Centre";
  const n2 = c.neighborhoods[1] ?? "Quartier Nord";
  const dateBySlug = `${(slugSeed(c.slug) % 27) + 1} janv. 2025`;
  return [
    {
      author: "Client local",
      city: c.name,
      date: dateBySlug,
      text: `Intervention rapide a ${n1}, equipe ponctuelle et explications claires sur les documents.`,
    },
    {
      author: "Habitante du secteur",
      city: c.name,
      date: "2024",
      text: `Vehicule en panne en parking a ${n2}, enlèvement bien organise et sans mauvaise surprise.`,
    },
    {
      author: "Professionnel local",
      city: c.name,
      date: "2024",
      text: "Estimation coherente, passage confirme a l'heure et suivi administratif propre.",
    },
  ];
}

export const GEO_CITIES: GeoCityData[] = CITIES.flatMap((c) => {
  const extra = CITY_LONG[c.slug] ?? {
    defaultPostal: fallbackPostalByDept(c.dept),
    roads: ["A86", "A1", "A4", "N104"],
    longDescription: cityFallbackLongDescription(c),
    specificFAQs: cityFallbackFaqs(c),
    testimonials: cityFallbackTestimonials(c),
  };
  const dept = DEPARTMENTS.find((d) => d.code === c.dept);
  const deptSlug = dept?.slug ?? "";
  return [
    {
      name: c.name,
      slug: c.slug,
      deptCode: c.dept,
      deptName: dept?.name ?? "",
      deptSlug,
      deptRoutePath: DEPT_ROUTE_BY_SLUG[deptSlug] ?? "/",
      population: c.population,
      description: c.description,
      neighborhoods: c.neighborhoods,
      roads: extra.roads,
      longDescription:
        CITY_LONG_DESCRIPTION[c.slug] ?? extra.longDescription,
      specificFAQs: extra.specificFAQs,
      testimonials: extra.testimonials,
      defaultPostal: extra.defaultPostal,
    },
  ];
});

export function getGeoCity(slug: string): GeoCityData | undefined {
  return GEO_CITIES.find((x) => x.slug === slug);
}
