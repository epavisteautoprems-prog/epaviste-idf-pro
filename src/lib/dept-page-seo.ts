/**
 * Titres H1 visibles, meta title/description et blocs « communes » uniques par département.
 */

export type DeptPageSeo = {
  metaTitle: string;
  metaDescription: string;
  pageH1: string;
  /** Texte riche (plusieurs paragraphes) affiché sous la longue description */
  communesRichText: string;
};

export const DEPT_PAGE_SEO: Record<string, DeptPageSeo> = {
  "75": {
    metaTitle: "Épaviste Paris (75) | Enlèvement Épave Gratuit – Rachat Épave IDF",
    metaDescription:
      "Épaviste Paris 75 ✓ Enlèvement épave gratuit ✓ Rachat au meilleur prix ✓ Certificat VHU ✓ Tous arrondissements. Intervention rapide 7j/7.",
    pageH1: "Épaviste Paris (75) | Enlèvement Épave Gratuit Toute la Capitale",
    communesRichText: `Notre dispositif couvre l’intégralité des vingt arrondissements parisiens — du 1er au 20e — avec des équipes habituées aux cours étroites, parkings souterrains et zones de forte fréquentation piétonne. Nous intervenons également à la demande pour les riverains proches de la capitale : **Vincennes**, **Saint-Mandé** et **Issy-les-Moulineaux** font partie des secteurs où nous organisons fréquemment des enlèvements lorsque le véhicule est stationné en limite ou en accès direct depuis ces communes.

À Paris, chaque secteur impose son rythme : Marais et Champs-Élysées demandent des créneaux tôt le matin ; les quartiers pavillonnaires des arrondissements périphériques privilégient souvent une fin d’après-midi. Les parkings sous dalle des immeubles récents exigent une validation stricte du gabarit ; les portes cochères haussmaniennes, une manœuvre en biais du plateau. Nos délais moyens restent de **24 à 48 h** sur la capitale, avec possibilité d’accélération lorsque l’épave bloque une sortie de secours ou présente une fuite.

Pour aller plus loin sur les modalités économiques, consultez nos pages dédiées au **rachat d’épave** et à l’**enlèvement épave gratuit** : nous vous expliquons sans jargon quand la valorisation métallique ou pièces permet une reprise, et quand la filière VHU agréée avec gratuité du déplacement s’applique. Le certificat de destruction vous est remis lorsque le parcours réglementaire l’exige, pour votre dossier au SIV ou auprès de l’assurance.`,
  },
  "92": {
    metaTitle: "Épaviste Hauts-de-Seine (92) | Enlèvement Épave Gratuit – Rachat IDF",
    metaDescription:
      "Épaviste 92 ✓ Boulogne, Nanterre, Neuilly ✓ Enlèvement gratuit ✓ Rachat épave ✓ La Défense & petite couronne. Devis gratuit 7j/7.",
    pageH1:
      "Épaviste Hauts-de-Seine (92) | Enlèvement Épave Gratuit Boulogne, Nanterre, Neuilly",
    communesRichText: `Les **Hauts-de-Seine** concentrent une densité exceptionnelle de résidences haut de gamme, de bureaux et d’axes structurants vers **La Défense**. Nous couvrons notamment **Boulogne-Billancourt**, **Nanterre**, **Neuilly-sur-Seine**, **Levallois-Perret**, **Issy-les-Moulineaux**, **Clichy**, **Colombes**, **Asnières-sur-Seine**, **Courbevoie**, **Suresnes**, **Puteaux**, **Rueil-Malmaison**, **Saint-Cloud**, **Vanves**, **Clamart**, **Meudon**, **Châtenay-Malabry**, **Sceaux**, **Bagneux** et **Montrouge**, ainsi que l’ensemble des autres communes du département sur demande.

La proximité immédiate de Paris impose des **délais courts** — souvent sous 24 h — et une grande précision sur les accès parking sous dalle, rampes étroites et créneaux hors pics de livraison. Le rachat d’épave reste pertinent lorsque le véhicule conserve une valeur pièces ou occasion ; sinon, l’enlèvement gratuit via la filière agréée évite les frais cachés pour le particulier dans le cadre applicable.`,
  },
  "93": {
    metaTitle: "Épaviste Seine-Saint-Denis (93) | Enlèvement Épave Gratuit – Rachat IDF",
    metaDescription:
      "Épaviste 93 ✓ Saint-Denis, Montreuil, Aubervilliers ✓ Gratuit ✓ Rachat épave ✓ VHU agréé. Intervention rapide 7j/7 en petite couronne nord.",
    pageH1:
      "Épaviste Seine-Saint-Denis (93) | Enlèvement Épave Gratuit Saint-Denis, Aubervilliers",
    communesRichText: `Nous intervenons sur **Saint-Denis**, **Aubervilliers**, **Montreuil**, **Noisy-le-Sec**, **Bondy**, **Drancy**, **Aulnay-sous-Bois**, **Bobigny**, **Épinay-sur-Seine**, **Villepinte**, **Tremblay-en-France**, **Pantin**, **Les Lilas**, **Bagnolet** et **Rosny-sous-Bois**, en complétant selon vos besoins les autres villes du **93**.

La **Plaine Saint-Denis**, les grands ensembles et les zones logistiques génèrent une forte demande d’enlèvements rapides lorsque l’épave gêne livreurs ou accès communs. Nous combinons **réactivité** et **cadre légal VHU** : estimation honnête si rachat possible, sinon orientation claire vers la gratuité réglementaire du déplacement lorsque le véhicule n’a plus de valeur marchande.`,
  },
  "94": {
    metaTitle: "Épaviste Val-de-Marne (94) | Enlèvement Épave Gratuit – Rachat IDF",
    metaDescription:
      "Épaviste 94 ✓ Créteil, Vitry, Vincennes ✓ Enlèvement gratuit ✓ Rachat épave ✓ Certificat VHU. Marne & rocades, service 7j/7.",
    pageH1:
      "Épaviste Val-de-Marne (94) | Enlèvement Épave Gratuit Créteil, Vitry, Vincennes",
    communesRichText: `Notre couverture inclut **Créteil**, **Vitry-sur-Seine**, **Champigny-sur-Marne**, **Saint-Maur-des-Fossés**, **Ivry-sur-Seine**, **Villejuif**, **Vincennes**, **Maisons-Alfort**, **Alfortville**, **Charenton-le-Pont**, **Nogent-sur-Marne** et **Joinville-le-Pont**, ainsi que les autres communes du Val-de-Marne selon planning.

Les **bords de Marne**, les **rocades** et les parkings d’immeubles en pied d’immeuble demandent une organisation fine : photos d’accès, hauteur de parking, évitement des marchés et événements sur les axes centraux. Nous assurons **enlèvement gratuit** dans le cadre agréé ou **rachat** lorsque la valorisation le permet, avec **certificat de destruction** remis quand la filière l’impose.`,
  },
  "95": {
    metaTitle: "Épaviste Val-d'Oise (95) | Enlèvement Épave Gratuit – Rachat IDF",
    metaDescription:
      "Épaviste 95 ✓ Cergy, Argenteuil, Sarcelles ✓ Enlèvement épave gratuit ✓ Rachat ✓ VHU agréé. Grande couronne nord, devis gratuit.",
    pageH1:
      "Épaviste Val-d'Oise (95) | Enlèvement Épave Gratuit Cergy, Argenteuil, Sarcelles",
    communesRichText: `Nous desservons **Cergy**, **Argenteuil**, **Sarcelles**, **Garges-lès-Gonesse**, **Gonesse**, **Pontoise**, **Saint-Ouen-l'Aumône**, **Ermont**, **Eaubonne** et **Montmorency**, en complétant par les autres communes du département selon vos adresses.

Le **Val-d’Oise** mêle centralités denses et secteurs plus ruraux : les **délais** tiennent compte de la distance et du trafic sur l’**A15** ou la **N184**. Les **lotissements** et **longues allées privées** nécessitent une validation du gabarit camion ; les **zones commerciales**, une coordination pour ne pas bloquer les quais de livraison.`,
  },
  "91": {
    metaTitle: "Épaviste Essonne (91) | Enlèvement Épave Gratuit – Rachat IDF",
    metaDescription:
      "Épaviste 91 ✓ Évry, Massy, Corbeil ✓ Enlèvement gratuit ✓ Rachat épave ✓ VHU agréé. Couronne sud & plateau de Saclay, 7j/7.",
    pageH1: "Épaviste Essonne (91) | Enlèvement Épave Gratuit Évry, Massy, Corbeil",
    communesRichText: `Nous intervenons sur **Évry-Courcouronnes**, **Massy**, **Corbeil-Essonnes**, **Gif-sur-Yvette**, **Palaiseau**, **Longjumeau**, **Sainte-Geneviève-des-Bois**, **Brétigny-sur-Orge**, **Viry-Châtillon**, **Juvisy-sur-Orge** et **Ris-Orangis**, ainsi que sur l’ensemble des autres villes de l’**Essonne**.

L’**A6**, la **Francilienne** et les **campus** génèrent des épaves « fin de vie » après pannes coûteuses ou renouvellement de flotte. Nous gérons **parkings souterrains**, **zones d’activité** et **lotissements pavillonnaires** avec le même niveau d’explication sur **rachat** vs **destruction agréée**.`,
  },
  "78": {
    metaTitle: "Épaviste Yvelines (78) | Enlèvement Épave Gratuit – Rachat IDF",
    metaDescription:
      "Épaviste 78 ✓ Versailles, Saint-Germain ✓ Enlèvement gratuit ✓ Rachat épave ✓ VHU agréé. Ouest parisien & vallées, intervention rapide.",
    pageH1:
      "Épaviste Yvelines (78) | Enlèvement Épave Gratuit Versailles, Saint-Germain",
    communesRichText: `Nous couvrons **Versailles**, **Saint-Germain-en-Laye**, **Mantes-la-Jolie**, **Poissy**, **Sartrouville**, **Conflans-Sainte-Honorine**, **Les Mureaux**, **Rambouillet**, **Trappes**, **Guyancourt**, **Vélizy-Villacoublay**, **Chatou**, **Le Pecq** et **Marly-le-Roi**, ainsi que les autres communes des **Yvelines** selon planning.

Le **patrimoine**, les **centres historiques** et les **longues allées privées** appellent discrétion et respect des revêtements. Les **zones d’activités** et **logistique** voient des utilitaires en fin de vie : nous adaptons **plateau**, **horaires** et **documents** société ou particulier.`,
  },
  "77": {
    metaTitle: "Épaviste Seine-et-Marne (77) | Enlèvement Épave Gratuit – Rachat IDF",
    metaDescription:
      "Épaviste 77 ✓ Meaux, Melun, Chelles ✓ Enlèvement gratuit ✓ Rachat épave ✓ VHU agréé. Grande couronne est, devis gratuit 7j/7.",
    pageH1: "Épaviste Seine-et-Marne (77) | Enlèvement Épave Gratuit Meaux, Melun, Chelles",
    communesRichText: `Nous organisons des enlèvements sur **Meaux**, **Melun**, **Chelles**, **Lagny-sur-Marne**, **Torcy**, **Noisiel**, **Pontault-Combault**, **Roissy-en-Brie**, **Chessy**, **Provins**, **Fontainebleau** et **Dammarie-les-Lys**, et plus largement sur tout le **77**.

La **distance** et la **diversité des accès** — lotissements, zones touristiques, axes **A4** / **Francilienne** — nous obligent à une **estimation réaliste** des délais. Les **photos** et le **PTAC** pour utilitaires évitent les second passages ; le **rachat** ou la **gratuité réglementaire** est expliqué **avant** le déplacement.`,
  },
};

export function getDeptPageSeo(code: string): DeptPageSeo | undefined {
  return DEPT_PAGE_SEO[code];
}
