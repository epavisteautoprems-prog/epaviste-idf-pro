import type { FAQ } from "@/types";

/** FAQ dédiées page enlèvement — alignées FAQPage schema */
export const FAQ_ENLEVEMENT_EPAVE: FAQ[] = [
  {
    question: "Pourquoi l’enlèvement d’épave peut-il être gratuit en Île-de-France ?",
    answer:
      "Lorsque le véhicule n’a plus de valeur marchande significative et est orienté vers la filière VHU agréée, le coût est absorbé par la chaîne réglementaire (valorisation matière, filière officielle). Le particulier ne règle pas le déplacement ni la manutention standard dans ce cadre — nous le confirmons avant engagement.",
  },
  {
    question: "Que comprend exactement l’enlèvement épave sans frais ?",
    answer:
      "Prise de rendez-vous, déplacement du plateau à votre adresse en IDF, chargement sécurisé, et orientation du véhicule vers le circuit agréé. Les documents utiles (dont le certificat de destruction lorsque la filière l’exige) vous sont expliqués et remis selon le parcours.",
  },
  {
    question: "Enlever une épave gratuitement : quels documents fournir ?",
    answer:
      "Carte grise (ou déclaration de perte/vol), pièce d’identité, justificatif de domicile. Sans carte grise, le numéro VIN et les démarches afférentes permettent souvent d’avancer : nous vous guidons selon votre situation.",
  },
  {
    question: "Intervention 24h/24 : comment ça marche concrètement ?",
    answer:
      "Nous sommes joignables 7j/7 de 7h à 22h pour planifier ou modifier un créneau. Le passage du camion est en général sous 24 à 48 h selon secteur et accès ; le jour même est parfois possible sur Paris et petite couronne.",
  },
  {
    question: "Puis-je avoir un enlèvement épave gratuit sans carte grise ?",
    answer:
      "Oui dans de nombreux cas, avec le VIN, une preuve de lien avec le véhicule et les déclarations adaptées. Chaque dossier est étudié au téléphone pour éviter un déplacement inutile.",
  },
  {
    question: "L’enlèvement gratuit couvre-t-il parking souterrain et cour étroite ?",
    answer:
      "Oui si le gabarit et la hauteur libre le permettent. Envoyez des photos de l’entrée et du véhicule : nous validons le matériel (plateau, treuil) avant de fixer la date.",
  },
  {
    question: "Quelle différence entre épave gratuite IDF et rachat d’épave ?",
    answer:
      "Le rachat suppose une valorisation (pièces, métaux, occasion). Sans marge réaliste, la filière agréée avec gratuité du déplacement pour vous est la voie logique. Nous tranchons honnêtement dès l’estimation.",
  },
  {
    question: "Après enlèvement, comment radier le véhicule au SIV ?",
    answer:
      "Le certificat de destruction, lorsqu’il s’applique, sert de pièce maîtresse avec les autres justificatifs. Nous vous indiquons les étapes à suivre sur les portails ou en préfecture selon votre cas.",
  },
];

export const FAQ_RACHAT_EPAVE: FAQ[] = [
  {
    question: "Comment est calculé le prix de rachat d’une épave en IDF ?",
    answer:
      "Année, modèle, kilométrage, état moteur et carrosserie, pièces recherchées d’occasion, poids et cours des métaux, distance d’intervention. Nous annonçons une fourchette réaliste avant déplacement.",
  },
  {
    question: "Quelle fourchette de prix pour une voiture accidentée ou sans CT ?",
    answer:
      "Très variable : une citadine très endommagée peut se rapprocher de zéro euro côté reprise, tandis qu’un véhicule avec moteur et boîte sains peut rester attractif pour les pièces. Les photos et le VIN affinent le chiffrage.",
  },
  {
    question: "Rachat vs destruction simple : quels avantages ?",
    answer:
      "Le rachat vous laisse une contrepartie immédiate si le marché le permet. La destruction agréée sans rachat clôt le dossier sans frais de déplacement pour vous lorsque la valorisation est nulle. Nous vous expliquons la meilleure option.",
  },
  {
    question: "Le paiement est-il vraiment immédiat le jour de l’enlèvement ?",
    answer:
      "Oui en cas d’accord sur un rachat : règlement sur place selon modalités annoncées (espèces ou virement instantané). Aucune surprise après chargement.",
  },
  {
    question: "Quels véhicules rachetez-vous en Île-de-France ?",
    answer:
      "Berlines, breaks, SUV, monospaces, utilitaires légers, certains deux-roues selon typologie. État : accidenté, en panne, sans CT, ancien ou récent selon la marge pièces/métaux.",
  },
  {
    question: "Puis-je vendre mon épave si je suis en succession ou en société ?",
    answer:
      "Oui avec les justificatifs de représentation (héritiers, gérant, mandat). Nous listons les pièces utiles pour que la cession soit claire et traçable.",
  },
  {
    question: "Estimation épave gratuite : que devez-vous nous envoyer ?",
    answer:
      "Photos des quatre angles, tableau de bord avec km, moteur si accessible, état des pneus et précision si le véhicule roule encore. La plaque ou le VIN accélère la réponse.",
  },
  {
    question: "Le déplacement est-il déduit du prix de rachat ?",
    answer:
      "Notre proposition intègre déjà la logistique IDF : le montant annoncé tient compte du trajet et du gabarit. Pas de frais cachés « découverts » au chargement.",
  },
];

export const FAQ_EPAVISTE_AGREE: FAQ[] = [
  {
    question: "Qu’est-ce qu’un agrément VHU exactement ?",
    answer:
      "C’est l’habilitation à traiter des véhicules hors d’usage dans le cadre réglementaire français, avec traçabilité et filière de destruction/recyclage contrôlée.",
  },
  {
    question: "Que risque-t-on avec un épaviste non agréé ?",
    answer:
      "Traçabilité incertaine, documents non reconnus, risques pour la radiation SIV et, dans les cas graves, responsabilité si le véhicule réapparaît en circulation ou est mal traité.",
  },
  {
    question: "Comment vérifier qu’un opérateur est bien agréé ?",
    answer:
      "Demandez des explications sur la filière, les documents remis après prise en charge et la cohérence avec le certificat de destruction. Nous détaillons volontiers notre fonctionnement.",
  },
  {
    question: "L’agrément change-t-il le délai d’intervention ?",
    answer:
      "Non : les délais restent comparables (souvent 24–48 h en IDF). La différence se situe dans la conformité et les preuves que vous conservez.",
  },
  {
    question: "Les entreprises doivent-elles aussi passer par un agréé ?",
    answer:
      "Pour les VHU et la fin de vie des véhicules de flotte, la filière agréée est le référentiel attendu pour la conformité et les audits. Nous adaptons les justificatifs aux personnes morales.",
  },
  {
    question: "L’agrément garantit-il la gratuité du déplacement ?",
    answer:
      "La gratuité pour le particulier s’applique dans les cas réglementaires où le véhicule est pris en charge sans rachat. Sinon, un rachat peut inclure la logistique dans l’offre — tout est annoncé avant passage.",
  },
  {
    question: "Quel lien avec la préfecture ?",
    answer:
      "Le cadre national des VHU et des opérateurs habilités s’inscrit dans la réglementation française ; l’agrément matérialise l’adhésion à ces règles. Nous restons transparents sur les étapes.",
  },
  {
    question: "Puis-je refuser une offre après diagnostic au téléphone ?",
    answer:
      "Oui, sans engagement. Nous préférons un refus clair à une promesse non tenue sur place.",
  },
];

export const FAQ_VHU: FAQ[] = [
  {
    question: "Qu’est-ce qu’un véhicule hors d’usage (VHU) ?",
    answer:
      "Un véhicule en fin de vie ou économiquement irréparable, à confier à la filière agréée plutôt qu’à une revente informelle — avec statut et obligations associées pour le titulaire.",
  },
  {
    question: "Quelles obligations pour le propriétaire d’un VHU en IDF ?",
    answer:
      "Ne pas laisser le véhicule en situation irrégulière sur la voie publique ; le faire traiter par un professionnel agréé et conserver les justificatifs de sortie du parcours (certificat de destruction le cas échéant).",
  },
  {
    question: "Sanctions si je n’enlève pas mon épave ?",
    answer:
      "Risque de fourrière, amendes ou relances selon les cas, tensions en copropriété. Anticiper avec un enlèvement planifié évite l’escalade.",
  },
  {
    question: "Le certificat de destruction est-il obligatoire pour tout VHU ?",
    answer:
      "Il est central pour radier un véhicule détruit dans la filière agréée. Selon le parcours (rachat, épave sans titre complet), nous précisons ce qui s’applique à votre dossier.",
  },
  {
    question: "Un véhicule sans CT est-il forcément un VHU ?",
    answer:
      "Pas toujours : il peut être réparable. Mais une immobilisation prolongée sans perspective réaliste de remise en route mène souvent vers la filière VHU — nous aidons à trancher.",
  },
  {
    question: "Puis-je céder un VHU à un particulier ?",
    answer:
      "Les risques de revente informelle sont élevés (traçabilité, radiation). La filière professionnelle agréée sécurise la chaîne.",
  },
  {
    question: "VHU et assurance après sinistre : que prévoir ?",
    answer:
      "Conservez les échanges avec l’assureur et les références de dossier. Nous fournissons les justificatifs de prise en charge utiles pour clôturer.",
  },
  {
    question: "Intervenez-vous sur véhicule électrique ou hybride ?",
    answer:
      "Oui, avec questions sur la batterie et l’état du véhicule pour prévoir les précautions et le bon traitement en aval.",
  },
];

export const FAQ_CERTIFICAT_DESTRUCTION: FAQ[] = [
  {
    question: "À quoi sert le certificat de destruction VHU ?",
    answer:
      "Il atteste de la remise du véhicule à un opérateur habilité et est la pièce clé pour la radiation au SIV et la levée de responsabilité dans le parcours destruction.",
  },
  {
    question: "Quand le certificat est-il remis ?",
    answer:
      "Après prise en charge conforme dans la filière agréée, selon le calendrier du parcours. Nous vous expliquons la temporalité exacte pour votre cas.",
  },
  {
    question: "Le certificat suffit-il seul pour radier le véhicule ?",
    answer:
      "Il complète généralement d’autres démarches sur le SIV. Conservez-le précieusement en numérique et papier.",
  },
  {
    question: "L’assurance a-t-elle besoin du certificat ?",
    answer:
      "Souvent oui pour clôturer un dossier sinistre ou stopper la prime. Transmettez une copie lisible dès réception.",
  },
  {
    question: "Différence entre certificat et simple bon d’enlèvement ?",
    answer:
      "Le certificat officiel répond aux attentes administratives ; un bon informel ne remplace pas ce document pour la radiation.",
  },
  {
    question: "Puis-je obtenir un certificat si j’ai vendu l’épave à un amateur ?",
    answer:
      "Le certificat de destruction est lié à la filière agréée. Une cession informelle ne garantit pas le même niveau de preuve : privilégiez l’opérateur habilité.",
  },
  {
    question: "Délais administratifs après réception du certificat ?",
    answer:
      "Variables selon les périodes et portails. Numérisez le document immédiatement et suivez les instructions du SIV.",
  },
  {
    question: "Que faire en cas de perte du certificat ?",
    answer:
      "Contactez-nous avec les références du dossier : nous vous orientons vers les possibilités de duplicata ou de traçabilité selon le parcours effectué.",
  },
];
