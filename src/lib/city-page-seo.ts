/**
 * H1 visibles et meta title / description par page ville (slug = segment URL).
 */

export type CityPageSeo = {
  metaTitle: string;
  metaDescription: string;
  pageH1: string;
};

export const CITY_PAGE_SEO: Record<string, CityPageSeo> = {
  paris: {
    metaTitle:
      "Épaviste Paris | Enlèvement & Rachat Épave Gratuit 24h/24 – Paris (75)",
    metaDescription:
      "Épaviste Paris ✓ 20 arrondissements ✓ Enlèvement épave gratuit ✓ Rachat ✓ Certificat VHU ✓ 7j/7. Devis immédiat, intervention sous 24–48 h.",
    pageH1:
      "Épaviste Paris | Enlèvement & Rachat Épave Gratuit 24h/24 dans les 20 Arrondissements",
  },
  "boulogne-billancourt": {
    metaTitle:
      "Épaviste Boulogne-Billancourt | Enlèvement & Rachat Épave Gratuit 24h/24 – Hauts-de-Seine (92)",
    metaDescription:
      "Épaviste Boulogne 92 ✓ Enlèvement épave gratuit sous 24h ✓ Rachat ✓ VHU agréé ✓ Seine & périph. Devis gratuit, plateau adapté.",
    pageH1:
      "Épaviste Boulogne-Billancourt | Enlèvement Épave Gratuit 92 Sous 24h",
  },
  "saint-denis": {
    metaTitle:
      "Épaviste Saint-Denis | Enlèvement & Rachat Épave Gratuit 24h/24 – Seine-Saint-Denis (93)",
    metaDescription:
      "Épaviste Saint-Denis 93 ✓ Enlèvement épave gratuit rapide ✓ Rachat ✓ Plaine & centre ✓ Certificat. 7j/7, photos accès bienvenues.",
    pageH1: "Épaviste Saint-Denis (93) | Enlèvement Épave Gratuit Rapide",
  },
  argenteuil: {
    metaTitle:
      "Épaviste Argenteuil | Enlèvement & Rachat Épave Gratuit 24h/24 – Val-d'Oise (95)",
    metaDescription:
      "Épaviste Argenteuil 95 ✓ Enlèvement épave gratuit ✓ Rachat ✓ A15 & Seine ✓ VHU agréé. Intervention locale 7j/7, devis gratuit.",
    pageH1: "Épaviste Argenteuil (95) | Enlèvement Épave Gratuit Val-d'Oise",
  },
  montreuil: {
    metaTitle:
      "Épaviste Montreuil | Enlèvement & Rachat Épave Gratuit 24h/24 – Seine-Saint-Denis (93)",
    metaDescription:
      "Épaviste Montreuil 93 ✓ Enlèvement épave gratuit ✓ Rachat ✓ Parking & cours ✓ Certificat destruction. Réponse rapide 7j/7.",
    pageH1: "Épaviste Montreuil (93) | Enlèvement Épave Gratuit",
  },
  versailles: {
    metaTitle:
      "Épaviste Versailles | Enlèvement & Rachat Épave Gratuit 24h/24 – Yvelines (78)",
    metaDescription:
      "Épaviste Versailles 78 ✓ Enlèvement épave gratuit ✓ Rachat ✓ Centre historique ✓ VHU agréé. Créneaux discrets, devis gratuit.",
    pageH1: "Épaviste Versailles (78) | Enlèvement Épave Gratuit Yvelines",
  },
  nanterre: {
    metaTitle:
      "Épaviste Nanterre | Enlèvement & Rachat Épave Gratuit 24h/24 – Hauts-de-Seine (92)",
    metaDescription:
      "Épaviste Nanterre 92 ✓ Enlèvement épave gratuit ✓ Rachat ✓ La Défense & préfecture ✓ Certificat. Plateaux 7j/7, sous 24–48 h.",
    pageH1: "Épaviste Nanterre (92) | Enlèvement Épave Gratuit La Défense",
  },
  "vitry-sur-seine": {
    metaTitle:
      "Épaviste Vitry-sur-Seine | Enlèvement & Rachat Épave Gratuit 24h/24 – Val-de-Marne (94)",
    metaDescription:
      "Épaviste Vitry 94 ✓ Enlèvement épave gratuit ✓ Rachat ✓ Seine & rocades ✓ VHU agréé. Devis gratuit, intervention IDF 7j/7.",
    pageH1: "Épaviste Vitry-sur-Seine (94) | Enlèvement Épave Gratuit",
  },
  creteil: {
    metaTitle:
      "Épaviste Créteil | Enlèvement & Rachat Épave Gratuit 24h/24 – Val-de-Marne (94)",
    metaDescription:
      "Épaviste Créteil 94 ✓ Enlèvement épave gratuit ✓ Rachat ✓ Préfecture & lac ✓ Certificat. Service agréé, créneaux sous 24–48 h.",
    pageH1: "Épaviste Créteil (94) | Enlèvement Épave Gratuit Val-de-Marne",
  },
  "asnieres-sur-seine": {
    metaTitle:
      "Épaviste Asnières-sur-Seine | Enlèvement & Rachat Épave Gratuit 24h/24 – Hauts-de-Seine (92)",
    metaDescription:
      "Épaviste Asnières 92 ✓ Enlèvement épave gratuit ✓ Rachat ✓ Seine & Paris ✓ VHU agréé. Longue durée stationnement : on enlève vite.",
    pageH1: "Épaviste Asnières-sur-Seine (92) | Enlèvement Épave Gratuit",
  },
  chelles: {
    metaTitle:
      "Épaviste Chelles | Enlèvement & Rachat Épave Gratuit 24h/24 – Seine-et-Marne (77)",
    metaDescription:
      "Épaviste Chelles 77 ✓ Enlèvement épave gratuit ✓ Rachat ✓ VHU agréé ✓ A104/A4. Devis immédiat, intervention rapide 7j/7.",
    pageH1: "Épaviste Chelles (77) | Enlèvement Épave Gratuit Rapide",
  },
  melun: {
    metaTitle:
      "Épaviste Melun | Enlèvement & Rachat Épave Gratuit 24h/24 – Seine-et-Marne (77)",
    metaDescription:
      "Épaviste Melun 77 ✓ Enlèvement épave gratuit ✓ Rachat ✓ Certificat VHU ✓ Centre et périphérie. Intervention sous 24–48 h.",
    pageH1: "Épaviste Melun (77) | Enlèvement Épave Gratuit",
  },
  meaux: {
    metaTitle:
      "Épaviste Meaux | Enlèvement & Rachat Épave Gratuit 24h/24 – Seine-et-Marne (77)",
    metaDescription:
      "Épaviste Meaux 77 ✓ Enlèvement épave gratuit ✓ Rachat ✓ VHU agréé ✓ Devis gratuit. Intervention rapide sur Meaux et alentours.",
    pageH1: "Épaviste Meaux (77) | Enlèvement Épave Gratuit",
  },
  "mantes-la-jolie": {
    metaTitle:
      "Épaviste Mantes-la-Jolie | Enlèvement & Rachat Épave Gratuit 24h/24 – Yvelines (78)",
    metaDescription:
      "Épaviste Mantes-la-Jolie 78 ✓ Enlèvement gratuit ✓ Rachat épave ✓ Certificat VHU ✓ Vallée de Seine. Service 7j/7.",
    pageH1:
      "Épaviste Mantes-la-Jolie (78) | Enlèvement Épave Gratuit Yvelines",
  },
  "saint-germain-en-laye": {
    metaTitle:
      "Épaviste Saint-Germain-en-Laye | Enlèvement & Rachat Épave Gratuit 24h/24 – Yvelines (78)",
    metaDescription:
      "Épaviste Saint-Germain-en-Laye 78 ✓ Enlèvement gratuit ✓ Rachat ✓ Service agréé VHU ✓ Devis immédiat, intervention locale rapide.",
    pageH1:
      "Épaviste Saint-Germain-en-Laye (78) | Enlèvement Épave Gratuit",
  },
  poissy: {
    metaTitle:
      "Épaviste Poissy | Enlèvement & Rachat Épave Gratuit 24h/24 – Yvelines (78)",
    metaDescription:
      "Épaviste Poissy 78 ✓ Enlèvement épave gratuit ✓ Rachat ✓ VHU agréé ✓ Délais courts. Intervention 7j/7 en zone urbaine et pavillonnaire.",
    pageH1: "Épaviste Poissy (78) | Enlèvement Épave Gratuit",
  },
  "corbeil-essonnes": {
    metaTitle:
      "Épaviste Corbeil-Essonnes | Enlèvement & Rachat Épave Gratuit 24h/24 – Essonne (91)",
    metaDescription:
      "Épaviste Corbeil-Essonnes 91 ✓ Enlèvement épave gratuit ✓ Rachat ✓ Certificat VHU ✓ Service 7j/7, devis immédiat.",
    pageH1: "Épaviste Corbeil-Essonnes (91) | Enlèvement Épave Gratuit",
  },
  "evry-courcouronnes": {
    metaTitle:
      "Épaviste Évry-Courcouronnes | Enlèvement & Rachat Épave Gratuit 24h/24 – Essonne (91)",
    metaDescription:
      "Épaviste Évry-Courcouronnes 91 ✓ Enlèvement gratuit ✓ Rachat épave ✓ VHU agréé ✓ Intervention rapide et devis gratuit.",
    pageH1:
      "Épaviste Évry-Courcouronnes (91) | Enlèvement Épave Gratuit",
  },
  palaiseau: {
    metaTitle:
      "Épaviste Palaiseau | Enlèvement & Rachat Épave Gratuit 24h/24 – Essonne (91)",
    metaDescription:
      "Épaviste Palaiseau 91 ✓ Enlèvement épave gratuit ✓ Rachat ✓ VHU ✓ Devis immédiat. Intervention locale 24–48 h.",
    pageH1: "Épaviste Palaiseau (91) | Enlèvement Épave Gratuit",
  },
  "levallois-perret": {
    metaTitle:
      "Épaviste Levallois-Perret | Enlèvement & Rachat Épave Gratuit 24h/24 – Hauts-de-Seine (92)",
    metaDescription:
      "Épaviste Levallois-Perret 92 ✓ Enlèvement gratuit ✓ Rachat ✓ VHU agréé ✓ Zones denses. Intervention rapide 7j/7.",
    pageH1: "Épaviste Levallois-Perret (92) | Enlèvement Épave Gratuit",
  },
  "neuilly-sur-seine": {
    metaTitle:
      "Épaviste Neuilly-sur-Seine | Enlèvement & Rachat Épave Gratuit 24h/24 – Hauts-de-Seine (92)",
    metaDescription:
      "Épaviste Neuilly-sur-Seine 92 ✓ Enlèvement gratuit ✓ Rachat épave ✓ Certificat VHU ✓ Service local 7j/7.",
    pageH1: "Épaviste Neuilly-sur-Seine (92) | Enlèvement Épave Gratuit",
  },
  colombes: {
    metaTitle:
      "Épaviste Colombes | Enlèvement & Rachat Épave Gratuit 24h/24 – Hauts-de-Seine (92)",
    metaDescription:
      "Épaviste Colombes 92 ✓ Enlèvement épave gratuit ✓ Rachat ✓ Agréé VHU ✓ Devis immédiat et intervention sous 24–48 h.",
    pageH1: "Épaviste Colombes (92) | Enlèvement Épave Gratuit",
  },
  aubervilliers: {
    metaTitle:
      "Épaviste Aubervilliers | Enlèvement & Rachat Épave Gratuit 24h/24 – Seine-Saint-Denis (93)",
    metaDescription:
      "Épaviste Aubervilliers 93 ✓ Enlèvement épave gratuit ✓ Rachat ✓ VHU agréé ✓ Intervention rapide, devis gratuit.",
    pageH1: "Épaviste Aubervilliers (93) | Enlèvement Épave Gratuit",
  },
  pantin: {
    metaTitle:
      "Épaviste Pantin | Enlèvement & Rachat Épave Gratuit 24h/24 – Seine-Saint-Denis (93)",
    metaDescription:
      "Épaviste Pantin 93 ✓ Enlèvement gratuit ✓ Rachat épave ✓ Certificat VHU ✓ Service local 7j/7 et devis immédiat.",
    pageH1: "Épaviste Pantin (93) | Enlèvement Épave Gratuit",
  },
  "aulnay-sous-bois": {
    metaTitle:
      "Épaviste Aulnay-sous-Bois | Enlèvement & Rachat Épave Gratuit 24h/24 – Seine-Saint-Denis (93)",
    metaDescription:
      "Épaviste Aulnay-sous-Bois 93 ✓ Enlèvement épave gratuit ✓ Rachat ✓ VHU agréé ✓ Intervention rapide sous 24–48 h.",
    pageH1:
      "Épaviste Aulnay-sous-Bois (93) | Enlèvement Épave Gratuit",
  },
  "ivry-sur-seine": {
    metaTitle:
      "Épaviste Ivry-sur-Seine | Enlèvement & Rachat Épave Gratuit 24h/24 – Val-de-Marne (94)",
    metaDescription:
      "Épaviste Ivry-sur-Seine 94 ✓ Enlèvement gratuit ✓ Rachat épave ✓ VHU agréé ✓ Devis immédiat et intervention locale.",
    pageH1: "Épaviste Ivry-sur-Seine (94) | Enlèvement Épave Gratuit",
  },
  villejuif: {
    metaTitle:
      "Épaviste Villejuif | Enlèvement & Rachat Épave Gratuit 24h/24 – Val-de-Marne (94)",
    metaDescription:
      "Épaviste Villejuif 94 ✓ Enlèvement épave gratuit ✓ Rachat ✓ Certificat VHU ✓ Service rapide 7j/7.",
    pageH1: "Épaviste Villejuif (94) | Enlèvement Épave Gratuit",
  },
  "champigny-sur-marne": {
    metaTitle:
      "Épaviste Champigny-sur-Marne | Enlèvement & Rachat Épave Gratuit 24h/24 – Val-de-Marne (94)",
    metaDescription:
      "Épaviste Champigny-sur-Marne 94 ✓ Enlèvement gratuit ✓ Rachat épave ✓ VHU agréé ✓ Intervention rapide locale.",
    pageH1:
      "Épaviste Champigny-sur-Marne (94) | Enlèvement Épave Gratuit",
  },
  cergy: {
    metaTitle:
      "Épaviste Cergy | Enlèvement & Rachat Épave Gratuit 24h/24 – Val-d'Oise (95)",
    metaDescription:
      "Épaviste Cergy 95 ✓ Enlèvement épave gratuit ✓ Rachat ✓ VHU agréé ✓ Devis immédiat, intervention sous 24–48 h.",
    pageH1: "Épaviste Cergy (95) | Enlèvement Épave Gratuit",
  },
  sarcelles: {
    metaTitle:
      "Épaviste Sarcelles | Enlèvement & Rachat Épave Gratuit 24h/24 – Val-d'Oise (95)",
    metaDescription:
      "Épaviste Sarcelles 95 ✓ Enlèvement gratuit ✓ Rachat épave ✓ Certificat VHU ✓ Service local 7j/7.",
    pageH1: "Épaviste Sarcelles (95) | Enlèvement Épave Gratuit",
  },
  torcy: {
    metaTitle:
      "Épaviste Torcy | Enlèvement & Rachat Épave Gratuit 24h/24 – Seine-et-Marne (77)",
    metaDescription:
      "Épaviste Torcy 77 ✓ Enlèvement épave gratuit ✓ Rachat ✓ VHU agréé ✓ Intervention rapide en Marne-la-Vallée.",
    pageH1: "Épaviste Torcy (77) | Enlèvement Épave Gratuit",
  },
  noisiel: {
    metaTitle:
      "Épaviste Noisiel | Enlèvement & Rachat Épave Gratuit 24h/24 – Seine-et-Marne (77)",
    metaDescription:
      "Épaviste Noisiel 77 ✓ Enlèvement gratuit ✓ Rachat épave ✓ VHU agréé ✓ Devis immédiat et service local.",
    pageH1: "Épaviste Noisiel (77) | Enlèvement Épave Gratuit",
  },
  "lagny-sur-marne": {
    metaTitle:
      "Épaviste Lagny-sur-Marne | Enlèvement & Rachat Épave Gratuit 24h/24 – Seine-et-Marne (77)",
    metaDescription:
      "Épaviste Lagny-sur-Marne 77 ✓ Enlèvement gratuit ✓ Rachat ✓ VHU ✓ Intervention locale rapide 7j/7.",
    pageH1: "Épaviste Lagny-sur-Marne (77) | Enlèvement Épave Gratuit",
  },
  "pontault-combault": {
    metaTitle:
      "Épaviste Pontault-Combault | Enlèvement & Rachat Épave Gratuit 24h/24 – Seine-et-Marne (77)",
    metaDescription:
      "Épaviste Pontault-Combault 77 ✓ Enlèvement gratuit ✓ Rachat épave ✓ VHU agréé ✓ Devis et intervention rapide.",
    pageH1: "Épaviste Pontault-Combault (77) | Enlèvement Épave Gratuit",
  },
  sartrouville: {
    metaTitle:
      "Épaviste Sartrouville | Enlèvement & Rachat Épave Gratuit 24h/24 – Yvelines (78)",
    metaDescription:
      "Épaviste Sartrouville 78 ✓ Enlèvement épave gratuit ✓ Rachat ✓ VHU agréé ✓ Service local sous 24–48 h.",
    pageH1: "Épaviste Sartrouville (78) | Enlèvement Épave Gratuit",
  },
  "conflans-sainte-honorine": {
    metaTitle:
      "Épaviste Conflans-Sainte-Honorine | Enlèvement & Rachat Épave Gratuit 24h/24 – Yvelines (78)",
    metaDescription:
      "Épaviste Conflans-Sainte-Honorine 78 ✓ Enlèvement gratuit ✓ Rachat ✓ VHU agréé ✓ Devis immédiat et intervention rapide.",
    pageH1:
      "Épaviste Conflans-Sainte-Honorine (78) | Enlèvement Épave Gratuit",
  },
  "les-mureaux": {
    metaTitle:
      "Épaviste Les Mureaux | Enlèvement & Rachat Épave Gratuit 24h/24 – Yvelines (78)",
    metaDescription:
      "Épaviste Les Mureaux 78 ✓ Enlèvement épave gratuit ✓ Rachat ✓ Certificat VHU ✓ Service local 7j/7.",
    pageH1: "Épaviste Les Mureaux (78) | Enlèvement Épave Gratuit",
  },
  trappes: {
    metaTitle:
      "Épaviste Trappes | Enlèvement & Rachat Épave Gratuit 24h/24 – Yvelines (78)",
    metaDescription:
      "Épaviste Trappes 78 ✓ Enlèvement gratuit ✓ Rachat épave ✓ VHU agréé ✓ Intervention rapide et devis gratuit.",
    pageH1: "Épaviste Trappes (78) | Enlèvement Épave Gratuit",
  },
  massy: {
    metaTitle:
      "Épaviste Massy | Enlèvement & Rachat Épave Gratuit 24h/24 – Essonne (91)",
    metaDescription:
      "Épaviste Massy 91 ✓ Enlèvement épave gratuit ✓ Rachat ✓ VHU agréé ✓ Intervention rapide autour de Massy-Palaiseau.",
    pageH1: "Épaviste Massy (91) | Enlèvement Épave Gratuit",
  },
  longjumeau: {
    metaTitle:
      "Épaviste Longjumeau | Enlèvement & Rachat Épave Gratuit 24h/24 – Essonne (91)",
    metaDescription:
      "Épaviste Longjumeau 91 ✓ Enlèvement gratuit ✓ Rachat épave ✓ Certificat VHU ✓ Service local et devis immédiat.",
    pageH1: "Épaviste Longjumeau (91) | Enlèvement Épave Gratuit",
  },
  "juvisy-sur-orge": {
    metaTitle:
      "Épaviste Juvisy-sur-Orge | Enlèvement & Rachat Épave Gratuit 24h/24 – Essonne (91)",
    metaDescription:
      "Épaviste Juvisy-sur-Orge 91 ✓ Enlèvement gratuit ✓ Rachat ✓ VHU agréé ✓ Intervention 24–48 h.",
    pageH1: "Épaviste Juvisy-sur-Orge (91) | Enlèvement Épave Gratuit",
  },
  "ris-orangis": {
    metaTitle:
      "Épaviste Ris-Orangis | Enlèvement & Rachat Épave Gratuit 24h/24 – Essonne (91)",
    metaDescription:
      "Épaviste Ris-Orangis 91 ✓ Enlèvement épave gratuit ✓ Rachat ✓ VHU ✓ Devis gratuit et intervention locale rapide.",
    pageH1: "Épaviste Ris-Orangis (91) | Enlèvement Épave Gratuit",
  },
  fontainebleau: {
    metaTitle:
      "Épaviste Fontainebleau | Enlèvement & Rachat Épave Gratuit 24h/24 – Seine-et-Marne (77)",
    metaDescription:
      "Épaviste Fontainebleau 77 ✓ Enlèvement gratuit ✓ Rachat ✓ VHU agréé ✓ Service local 7j/7 et devis immédiat.",
    pageH1: "Épaviste Fontainebleau (77) | Enlèvement Épave Gratuit",
  },
  provins: {
    metaTitle:
      "Épaviste Provins | Enlèvement & Rachat Épave Gratuit 24h/24 – Seine-et-Marne (77)",
    metaDescription:
      "Épaviste Provins 77 ✓ Enlèvement épave gratuit ✓ Rachat ✓ VHU agréé ✓ Intervention locale rapide.",
    pageH1: "Épaviste Provins (77) | Enlèvement Épave Gratuit",
  },
  "dammarie-les-lys": {
    metaTitle:
      "Épaviste Dammarie-les-Lys | Enlèvement & Rachat Épave Gratuit 24h/24 – Seine-et-Marne (77)",
    metaDescription:
      "Épaviste Dammarie-les-Lys 77 ✓ Enlèvement gratuit ✓ Rachat épave ✓ VHU ✓ Devis immédiat et service 7j/7.",
    pageH1: "Épaviste Dammarie-les-Lys (77) | Enlèvement Épave Gratuit",
  },
  "bussy-saint-georges": {
    metaTitle:
      "Épaviste Bussy-Saint-Georges | Enlèvement & Rachat Épave Gratuit 24h/24 – Seine-et-Marne (77)",
    metaDescription:
      "Épaviste Bussy-Saint-Georges 77 ✓ Enlèvement gratuit ✓ Rachat ✓ VHU agréé ✓ Intervention rapide locale.",
    pageH1: "Épaviste Bussy-Saint-Georges (77) | Enlèvement Épave Gratuit",
  },
  guyancourt: {
    metaTitle:
      "Épaviste Guyancourt | Enlèvement & Rachat Épave Gratuit 24h/24 – Yvelines (78)",
    metaDescription:
      "Épaviste Guyancourt 78 ✓ Enlèvement épave gratuit ✓ Rachat ✓ Certificat VHU ✓ Intervention rapide et devis gratuit.",
    pageH1: "Épaviste Guyancourt (78) | Enlèvement Épave Gratuit",
  },
  "velizy-villacoublay": {
    metaTitle:
      "Épaviste Vélizy-Villacoublay | Enlèvement & Rachat Épave Gratuit 24h/24 – Yvelines (78)",
    metaDescription:
      "Épaviste Vélizy-Villacoublay 78 ✓ Enlèvement gratuit ✓ Rachat ✓ VHU agréé ✓ Intervention locale rapide.",
    pageH1:
      "Épaviste Vélizy-Villacoublay (78) | Enlèvement Épave Gratuit",
  },
  etampes: {
    metaTitle:
      "Épaviste Étampes | Enlèvement & Rachat Épave Gratuit 24h/24 – Essonne (91)",
    metaDescription:
      "Épaviste Étampes 91 ✓ Enlèvement épave gratuit ✓ Rachat ✓ VHU agréé ✓ Service local 7j/7.",
    pageH1: "Épaviste Étampes (91) | Enlèvement Épave Gratuit",
  },
  "les-ulis": {
    metaTitle:
      "Épaviste Les Ulis | Enlèvement & Rachat Épave Gratuit 24h/24 – Essonne (91)",
    metaDescription:
      "Épaviste Les Ulis 91 ✓ Enlèvement gratuit ✓ Rachat épave ✓ Certificat VHU ✓ Intervention rapide.",
    pageH1: "Épaviste Les Ulis (91) | Enlèvement Épave Gratuit",
  },
  "viry-chatillon": {
    metaTitle:
      "Épaviste Viry-Châtillon | Enlèvement & Rachat Épave Gratuit 24h/24 – Essonne (91)",
    metaDescription:
      "Épaviste Viry-Châtillon 91 ✓ Enlèvement gratuit ✓ Rachat ✓ VHU agréé ✓ Devis immédiat et service local.",
    pageH1: "Épaviste Viry-Châtillon (91) | Enlèvement Épave Gratuit",
  },
  courbevoie: {
    metaTitle:
      "Épaviste Courbevoie | Enlèvement & Rachat Épave Gratuit 24h/24 – Hauts-de-Seine (92)",
    metaDescription:
      "Épaviste Courbevoie 92 ✓ Enlèvement épave gratuit ✓ Rachat ✓ La Défense ✓ VHU agréé, intervention rapide.",
    pageH1: "Épaviste Courbevoie (92) | Enlèvement Épave Gratuit",
  },
  suresnes: {
    metaTitle:
      "Épaviste Suresnes | Enlèvement & Rachat Épave Gratuit 24h/24 – Hauts-de-Seine (92)",
    metaDescription:
      "Épaviste Suresnes 92 ✓ Enlèvement gratuit ✓ Rachat épave ✓ VHU agréé ✓ Devis et intervention locale rapide.",
    pageH1: "Épaviste Suresnes (92) | Enlèvement Épave Gratuit",
  },
  antony: {
    metaTitle:
      "Épaviste Antony | Enlèvement & Rachat Épave Gratuit 24h/24 – Hauts-de-Seine (92)",
    metaDescription:
      "Épaviste Antony 92 ✓ Enlèvement épave gratuit ✓ Rachat ✓ VHU agréé ✓ Service 7j/7 et devis immédiat.",
    pageH1: "Épaviste Antony (92) | Enlèvement Épave Gratuit",
  },
  villepinte: {
    metaTitle:
      "Épaviste Villepinte | Enlèvement & Rachat Épave Gratuit 24h/24 – Seine-Saint-Denis (93)",
    metaDescription:
      "Épaviste Villepinte 93 ✓ Enlèvement gratuit ✓ Rachat ✓ VHU agréé ✓ Intervention rapide près des axes logistiques.",
    pageH1: "Épaviste Villepinte (93) | Enlèvement Épave Gratuit",
  },
  bondy: {
    metaTitle:
      "Épaviste Bondy | Enlèvement & Rachat Épave Gratuit 24h/24 – Seine-Saint-Denis (93)",
    metaDescription:
      "Épaviste Bondy 93 ✓ Enlèvement épave gratuit ✓ Rachat ✓ Certificat VHU ✓ Devis immédiat, intervention locale.",
    pageH1: "Épaviste Bondy (93) | Enlèvement Épave Gratuit",
  },
  bagnolet: {
    metaTitle:
      "Épaviste Bagnolet | Enlèvement & Rachat Épave Gratuit 24h/24 – Seine-Saint-Denis (93)",
    metaDescription:
      "Épaviste Bagnolet 93 ✓ Enlèvement gratuit ✓ Rachat épave ✓ VHU agréé ✓ Service rapide 7j/7.",
    pageH1: "Épaviste Bagnolet (93) | Enlèvement Épave Gratuit",
  },
  "charenton-le-pont": {
    metaTitle:
      "Épaviste Charenton-le-Pont | Enlèvement & Rachat Épave Gratuit 24h/24 – Val-de-Marne (94)",
    metaDescription:
      "Épaviste Charenton-le-Pont 94 ✓ Enlèvement gratuit ✓ Rachat ✓ VHU agréé ✓ Intervention rapide locale.",
    pageH1: "Épaviste Charenton-le-Pont (94) | Enlèvement Épave Gratuit",
  },
  "joinville-le-pont": {
    metaTitle:
      "Épaviste Joinville-le-Pont | Enlèvement & Rachat Épave Gratuit 24h/24 – Val-de-Marne (94)",
    metaDescription:
      "Épaviste Joinville-le-Pont 94 ✓ Enlèvement gratuit ✓ Rachat épave ✓ Certificat VHU ✓ Service local 7j/7.",
    pageH1: "Épaviste Joinville-le-Pont (94) | Enlèvement Épave Gratuit",
  },
  "choisy-le-roi": {
    metaTitle:
      "Épaviste Choisy-le-Roi | Enlèvement & Rachat Épave Gratuit 24h/24 – Val-de-Marne (94)",
    metaDescription:
      "Épaviste Choisy-le-Roi 94 ✓ Enlèvement épave gratuit ✓ Rachat ✓ VHU agréé ✓ Intervention rapide.",
    pageH1: "Épaviste Choisy-le-Roi (94) | Enlèvement Épave Gratuit",
  },
  franconville: {
    metaTitle:
      "Épaviste Franconville | Enlèvement & Rachat Épave Gratuit 24h/24 – Val-d'Oise (95)",
    metaDescription:
      "Épaviste Franconville 95 ✓ Enlèvement gratuit ✓ Rachat épave ✓ VHU agréé ✓ Devis immédiat et service local.",
    pageH1: "Épaviste Franconville (95) | Enlèvement Épave Gratuit",
  },
  bezons: {
    metaTitle:
      "Épaviste Bezons | Enlèvement & Rachat Épave Gratuit 24h/24 – Val-d'Oise (95)",
    metaDescription:
      "Épaviste Bezons 95 ✓ Enlèvement gratuit ✓ Rachat ✓ Certificat VHU ✓ Intervention rapide et devis gratuit.",
    pageH1: "Épaviste Bezons (95) | Enlèvement Épave Gratuit",
  },
  taverny: {
    metaTitle:
      "Épaviste Taverny | Enlèvement & Rachat Épave Gratuit 24h/24 – Val-d'Oise (95)",
    metaDescription:
      "Épaviste Taverny 95 ✓ Enlèvement épave gratuit ✓ Rachat ✓ VHU agréé ✓ Service local sous 24–48 h.",
    pageH1: "Épaviste Taverny (95) | Enlèvement Épave Gratuit",
  },
  "herblay-sur-seine": {
    metaTitle:
      "Épaviste Herblay-sur-Seine | Enlèvement & Rachat Épave Gratuit 24h/24 – Val-d'Oise (95)",
    metaDescription:
      "Épaviste Herblay-sur-Seine 95 ✓ Enlèvement gratuit ✓ Rachat épave ✓ VHU agréé ✓ Intervention locale rapide.",
    pageH1:
      "Épaviste Herblay-sur-Seine (95) | Enlèvement Épave Gratuit",
  },
  "issy-les-moulineaux": {
    metaTitle:
      "Épaviste Issy-les-Moulineaux | Enlèvement & Rachat Épave Gratuit 24h/24 – Hauts-de-Seine (92)",
    metaDescription:
      "Épaviste Issy-les-Moulineaux 92 ✓ Enlèvement gratuit ✓ Rachat ✓ VHU agréé ✓ Parking sous-sol et accès complexes. Intervention rapide.",
    pageH1: "Épaviste Issy-les-Moulineaux (92) | Enlèvement Épave Gratuit",
  },
  clichy: {
    metaTitle:
      "Épaviste Clichy | Enlèvement & Rachat Épave Gratuit 24h/24 – Hauts-de-Seine (92)",
    metaDescription:
      "Épaviste Clichy 92 ✓ Enlèvement épave gratuit ✓ Rachat ✓ Certificat VHU ✓ Service local 7j/7. Devis immédiat.",
    pageH1: "Épaviste Clichy (92) | Enlèvement Épave Gratuit",
  },
  puteaux: {
    metaTitle:
      "Épaviste Puteaux | Enlèvement & Rachat Épave Gratuit 24h/24 – Hauts-de-Seine (92)",
    metaDescription:
      "Épaviste Puteaux 92 ✓ Enlèvement gratuit ✓ Rachat épave ✓ VHU agréé ✓ La Défense et alentours. Intervention rapide.",
    pageH1: "Épaviste Puteaux (92) | Enlèvement Épave Gratuit",
  },
  "rueil-malmaison": {
    metaTitle:
      "Épaviste Rueil-Malmaison | Enlèvement & Rachat Épave Gratuit 24h/24 – Hauts-de-Seine (92)",
    metaDescription:
      "Épaviste Rueil-Malmaison 92 ✓ Enlèvement gratuit ✓ Rachat ✓ VHU agréé ✓ Devis gratuit et intervention locale sous 24–48 h.",
    pageH1: "Épaviste Rueil-Malmaison (92) | Enlèvement Épave Gratuit",
  },
  bobigny: {
    metaTitle:
      "Épaviste Bobigny | Enlèvement & Rachat Épave Gratuit 24h/24 – Seine-Saint-Denis (93)",
    metaDescription:
      "Épaviste Bobigny 93 ✓ Enlèvement épave gratuit ✓ Rachat ✓ Certificat VHU ✓ Intervention rapide 7j/7.",
    pageH1: "Épaviste Bobigny (93) | Enlèvement Épave Gratuit",
  },
  drancy: {
    metaTitle:
      "Épaviste Drancy | Enlèvement & Rachat Épave Gratuit 24h/24 – Seine-Saint-Denis (93)",
    metaDescription:
      "Épaviste Drancy 93 ✓ Enlèvement gratuit ✓ Rachat épave ✓ VHU agréé ✓ Devis immédiat et service local.",
    pageH1: "Épaviste Drancy (93) | Enlèvement Épave Gratuit",
  },
  "rosny-sous-bois": {
    metaTitle:
      "Épaviste Rosny-sous-Bois | Enlèvement & Rachat Épave Gratuit 24h/24 – Seine-Saint-Denis (93)",
    metaDescription:
      "Épaviste Rosny-sous-Bois 93 ✓ Enlèvement gratuit ✓ Rachat ✓ VHU agréé ✓ Intervention rapide et devis gratuit.",
    pageH1: "Épaviste Rosny-sous-Bois (93) | Enlèvement Épave Gratuit",
  },
  "noisy-le-sec": {
    metaTitle:
      "Épaviste Noisy-le-Sec | Enlèvement & Rachat Épave Gratuit 24h/24 – Seine-Saint-Denis (93)",
    metaDescription:
      "Épaviste Noisy-le-Sec 93 ✓ Enlèvement épave gratuit ✓ Rachat ✓ Certificat VHU ✓ Service local sous 24–48 h.",
    pageH1: "Épaviste Noisy-le-Sec (93) | Enlèvement Épave Gratuit",
  },
  "maisons-alfort": {
    metaTitle:
      "Épaviste Maisons-Alfort | Enlèvement & Rachat Épave Gratuit 24h/24 – Val-de-Marne (94)",
    metaDescription:
      "Épaviste Maisons-Alfort 94 ✓ Enlèvement gratuit ✓ Rachat épave ✓ VHU agréé ✓ Intervention locale rapide.",
    pageH1: "Épaviste Maisons-Alfort (94) | Enlèvement Épave Gratuit",
  },
  alfortville: {
    metaTitle:
      "Épaviste Alfortville | Enlèvement & Rachat Épave Gratuit 24h/24 – Val-de-Marne (94)",
    metaDescription:
      "Épaviste Alfortville 94 ✓ Enlèvement gratuit ✓ Rachat ✓ Certificat VHU ✓ Devis immédiat et service 7j/7.",
    pageH1: "Épaviste Alfortville (94) | Enlèvement Épave Gratuit",
  },
  vincennes: {
    metaTitle:
      "Épaviste Vincennes | Enlèvement & Rachat Épave Gratuit 24h/24 – Val-de-Marne (94)",
    metaDescription:
      "Épaviste Vincennes 94 ✓ Enlèvement gratuit ✓ Rachat épave ✓ VHU agréé ✓ Intervention rapide aux portes de Paris.",
    pageH1: "Épaviste Vincennes (94) | Enlèvement Épave Gratuit",
  },
  "nogent-sur-marne": {
    metaTitle:
      "Épaviste Nogent-sur-Marne | Enlèvement & Rachat Épave Gratuit 24h/24 – Val-de-Marne (94)",
    metaDescription:
      "Épaviste Nogent-sur-Marne 94 ✓ Enlèvement gratuit ✓ Rachat ✓ VHU agréé ✓ Devis rapide et intervention locale.",
    pageH1: "Épaviste Nogent-sur-Marne (94) | Enlèvement Épave Gratuit",
  },
  ermont: {
    metaTitle:
      "Épaviste Ermont | Enlèvement & Rachat Épave Gratuit 24h/24 – Val-d'Oise (95)",
    metaDescription:
      "Épaviste Ermont 95 ✓ Enlèvement épave gratuit ✓ Rachat ✓ Certificat VHU ✓ Service local 7j/7.",
    pageH1: "Épaviste Ermont (95) | Enlèvement Épave Gratuit",
  },
  gonesse: {
    metaTitle:
      "Épaviste Gonesse | Enlèvement & Rachat Épave Gratuit 24h/24 – Val-d'Oise (95)",
    metaDescription:
      "Épaviste Gonesse 95 ✓ Enlèvement gratuit ✓ Rachat épave ✓ VHU agréé ✓ Intervention rapide et devis immédiat.",
    pageH1: "Épaviste Gonesse (95) | Enlèvement Épave Gratuit",
  },
  pontoise: {
    metaTitle:
      "Épaviste Pontoise | Enlèvement & Rachat Épave Gratuit 24h/24 – Val-d'Oise (95)",
    metaDescription:
      "Épaviste Pontoise 95 ✓ Enlèvement gratuit ✓ Rachat ✓ VHU agréé ✓ Service local sous 24–48 h.",
    pageH1: "Épaviste Pontoise (95) | Enlèvement Épave Gratuit",
  },
  "garges-les-gonesse": {
    metaTitle:
      "Épaviste Garges-lès-Gonesse | Enlèvement & Rachat Épave Gratuit 24h/24 – Val-d'Oise (95)",
    metaDescription:
      "Épaviste Garges-lès-Gonesse 95 ✓ Enlèvement gratuit ✓ Rachat épave ✓ VHU agréé ✓ Intervention rapide locale.",
    pageH1: "Épaviste Garges-lès-Gonesse (95) | Enlèvement Épave Gratuit",
  },
};

export function getCityPageSeo(slug: string): CityPageSeo | undefined {
  return CITY_PAGE_SEO[slug];
}
