import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

/**
 * Bloc éditorial SEO principal — mots-clés : épaviste île-de-france,
 * enlèvement épave gratuit idf, rachat épave, épaviste agréé idf, VHU, Paris.
 */
export function HomeSeoArticle() {
  return (
    <section className="bg-neutral-50 py-16 md:py-20" aria-labelledby="seo-home-title">
      <div className="mx-auto max-w-4xl px-4">
        <h2
          id="seo-home-title"
          className="text-3xl font-bold text-primary md:text-4xl"
        >
          Épaviste Île-de-France : enlèvement d’épave et rachat au meilleur prix
        </h2>
        <div className="prose prose-lg prose-neutral mt-8 max-w-none text-neutral-700">
          <p>
            Vous cherchez un <strong>épaviste Île-de-France</strong> capable
            d’intervenir rapidement sur Paris, la petite ou la grande couronne ?
            {SITE_CONFIG.name} est structuré pour répondre à cette exigence :
            une ligne téléphonique ouverte <strong>7j/7 de 7h à 22h</strong>, des
            équipes habituées aux contraintes urbaines d’Île-de-France, et un
            parcours <strong>VHU agréé</strong> qui sécurise à la fois votre
            temps et vos obligations administratives. Que votre véhicule soit en
            panne depuis des mois, déclaré sinistre total par l’assurance, ou
            simplement devenu trop coûteux à entretenir, nous vous proposons une
            prise en charge claire — avec, le cas échéant, un{" "}
            <Link href="/rachat-epave" className="text-secondary font-semibold">
              rachat épave Ile de France
            </Link>{" "}
            chiffré avant déplacement, ou un{" "}
            <Link
              href="/enlevement-epave-gratuit"
              className="text-secondary font-semibold"
            >
              enlèvement épave gratuit IDF
            </Link>{" "}
            lorsque la filière officielle s’applique sans contrepartie
            pécuniaire.
          </p>

          <h3 className="text-xl font-bold text-primary">
            Pourquoi l’enlèvement épave gratuit IDF est une réponse courante
          </h3>
          <p>
            Dans la région parisienne, le stationnement est rare et les
            copropriétés sont sensibles aux véhicules immobiles. Un{" "}
            <strong>enlèvement épave gratuit IDF</strong>, lorsqu’il est réalisé
            par un professionnel inscrit dans la filière des véhicules hors
            d’usage, évite de vous facturer le déplacement alors que le véhicule
            n’a plus de valeur marchande significative. Nous expliquons
            systématiquement la différence entre <strong>gratuité réglementaire</strong>{" "}
            et <strong>rachat</strong> : dès l’appel, vous savez à quoi vous
            attendre, sans surprise le jour J. Les délais typiques restent de{" "}
            <strong>24 à 48 heures</strong> sur l’ensemble des huit départements,
            avec possibilité d’accélérer selon les créneaux et l’accès camion.
          </p>

          <h3 className="text-xl font-bold text-primary">
            Rachat épave Ile de France : transparence sur le prix
          </h3>
          <p>
            Le <strong>rachat épave Ile de France</strong> repose sur des critères
            objectifs : année et modèle, état moteur et carrosserie, présence de
            pièces recherchées d’occasion, poids et cours des métaux. Nous
            refusons les promesses irréalistes au téléphone : une estimation
            sérieuse passe par quelques questions précises et, idéalement, des
            photos. Si la valorisation est insuffisante pour une reprise
            payante, nous basculons vers la solution d’
            <strong>enlèvement conforme</strong> sans vous faire payer le
            trajet — toujours dans le respect du cadre légal. Cette honnêteté
            est particulièrement importante à <Link href="/epaviste-paris">Paris</Link>,{" "}
            <Link href="/epaviste-hauts-de-seine-92">dans les Hauts-de-Seine</Link> ou{" "}
            <Link href="/epaviste-seine-saint-denis-93">en Seine-Saint-Denis</Link>, où
            chaque minute d’immobilisation du plateau a un coût opérationnel.
          </p>

          <h3 className="text-xl font-bold text-primary">
            Un épaviste Île-de-France pour huit départements
          </h3>
          <p>
            Couvrir toute l’<strong>Île-de-France</strong>, ce n’est pas seulement
            afficher une carte : c’est disposer de plannings flexibles, de
            véhicules adaptés aux entrées étroites des centres-villes et de la
            capacité à gérer les demandes urgentes (fuite de liquide, épave
            bloquant une sortie de secours, délai fourrière). Nos fiches{" "}
            <Link href="/epaviste-paris-75">épaviste Paris (75)</Link>,{" "}
            <Link href="/epaviste-yvelines-78">Yvelines</Link>,{" "}
            <Link href="/epaviste-val-de-marne-94">Val-de-Marne</Link> et autres
            départements détaillent les spécificités locales. Le fil conducteur
            reste identique : <strong>réponse rapide</strong>,{" "}
            <strong>documents expliqués</strong>,{" "}
            <Link href="/certificat-destruction" className="text-secondary font-semibold">
              certificat de destruction
            </Link>{" "}
            remis lorsque le véhicule suit la filière agréée, et accompagnement si
            la <Link href="/faq">FAQ</Link> ne suffit pas à lever vos doutes.
          </p>

          <h3 className="text-xl font-bold text-primary">
            Documents, assurance et voisinage : anticiper pour gagner du temps
          </h3>
          <p>
            Avant l’arrivée du plateau, rassemblez carte grise (ou déclaration de
            perte), pièce d’identité et justificatif de domicile. En cas de
            sinistre récent, gardez les références utiles de votre dossier
            assurance. Si l’épave est dans une cour ou un parking, prévenez le
            syndic ou les voisins lorsque l’intervention nécessite une manœuvre
            volumineuse : nous vous guidons sur les formulations et les horaires
            les moins gênants. Cette préparation accélère le passage et limite
            les reports de rendez-vous — un enjeu majeur lorsque vous optez pour
            un <strong>épaviste Île-de-France</strong> réactif.
          </p>

          <h3 className="text-xl font-bold text-primary">
            Épaves accidentées, sans CT ou sans clés : même interlocuteur
          </h3>
          <p>
            Beaucoup de conducteurs hésitent parce que le véhicule ne démarre
            plus, n’a plus de contrôle technique valide, ou parce que les clés
            ont été perdues. Ce sont pourtant des situations quotidiennes pour un{" "}
            <strong>épaviste Île-de-France</strong> équipé de plateau et de
            matériel de traction : l’absence de clé n’empêche pas un enlèvement
            sécurisé lorsque l’accès au véhicule est légitime. De même, une
            carrosserie fortement endommagée impose parfois des fixations
            spécifiques : nous précisons dès l’échange téléphonique si un treuil
            ou une dépanneuse adaptée est nécessaire. L’objectif est toujours le
            même : vous éviter une double intervention et un surcoût caché, tout
            en conservant la possibilité d’un{" "}
            <strong>rachat épave Ile de France</strong> lorsque les pièces ou la
            coque conservent une valeur résiduelle intéressante.
          </p>

          <h3 className="text-xl font-bold text-primary">
            Pourquoi choisir un service structuré plutôt qu’une annonce isolée
          </h3>
          <p>
            Les petites annonces peuvent sembler alléchantes, mais elles ne
            garantissent ni la traçabilité du véhicule ni la remise d’un
            document officiel pour votre dossier. Avec {SITE_CONFIG.name}, vous
            bénéficiez d’un interlocuteur identifié, d’un créneau confirmé par
            écrit si vous le souhaitez, et d’une explication sur la suite du VHU
            dans la filière agréée. C’est précisément ce cadre qui permet
            d’envisager sereinement un{" "}
            <strong>enlèvement épave gratuit IDF</strong> lorsque le modèle
            économique du rachat ne s’applique pas. En zone dense, la fiabilité
            du rendez-vous vaut souvent plus qu’une promesse de prix légèrement
            supérieure sur le papier — surtout lorsque l’épave occupe une place
            de parking payante ou génère des tensions en copropriété.
          </p>

          <h3 className="text-xl font-bold text-primary">
            Épaviste agréé IDF : ce que ça change pour vous
          </h3>
          <p>
            Le statut d’<strong>épaviste agréé IDF</strong> n’est pas un simple
            label marketing : il garantit que votre véhicule hors d’usage suit un
            circuit contrôlé, avec traçabilité environnementale et documents
            adaptés à la réception en centre VHU. Pour vous, propriétaire ou
            mandant, cela se traduit par une explication claire sur la{" "}
            <Link href="/epaviste-agree" className="text-secondary font-semibold">
              filière agréée préfecture
            </Link>
            , la possibilité de recevoir le{" "}
            <Link href="/certificat-destruction" className="text-secondary font-semibold">
              certificat de destruction
            </Link>{" "}
            lorsque la réglementation l’exige, et l’absence de «&nbsp;zone grise&nbsp;»
            sur la fin de vie du véhicule. Dans un contexte où les mairies, les
            syndics et les assurances demandent de plus en plus de preuves, faire
            appel à un <strong>épaviste agréé IDF</strong> évite les allers-retours
            administratifs et les risques liés à des opérateurs non inscrits.
          </p>

          <h3 className="text-xl font-bold text-primary">
            Enlèvement véhicule hors d’usage IDF : obligations et calendrier
          </h3>
          <p>
            Un <strong>enlèvement véhicule hors d’usage IDF</strong> répond à une
            double logique&nbsp;: libérer rapidement votre emplacement de
            stationnement ou votre terrain, et respecter vos obligations en tant
            que détenteur d’un VHU. Nous vous orientons vers la page dédiée{" "}
            <Link href="/vehicule-hors-usage" className="text-secondary font-semibold">
              véhicule hors d’usage
            </Link>{" "}
            pour les définitions précises, mais retenez l’essentiel&nbsp;: dès
            qu’un véhicule ne peut plus circuler légalement ou n’a plus d’usage
            économique réaliste, prolonger l’immobilité sur la voie publique ou
            dans des parties communes peut créer des tensions — d’où l’intérêt
            d’un <strong>enlèvement épave gratuit Ile de France</strong> lorsque
            la valorisation ne permet pas de rachat. Nous calons les créneaux en
            fonction des contraintes locales&nbsp;: rocades saturées le vendredi
            soir, livraisons le matin en zone d’activité, accès parking avant
            fermeture des barrières en résidence sécurisée.
          </p>

          <h3 className="text-xl font-bold text-primary">
            Épaviste Paris et petite couronne : une même exigence de réactivité
          </h3>
          <p>
            Être <strong>épaviste Paris</strong> ou intervenir en première
            couronne, c’est accepter des règles de circulation et de
            stationnement plus serrées qu’ailleurs. Nos équipes traitent chaque
            semaine des demandes en cave, en parking sous dalle ou en cour
            intérieure où le gabarit du plateau est le facteur limitant. Si vous
            êtes en capitale ou à la lisière, la fiche{" "}
            <Link href="/epaviste-paris" className="text-secondary font-semibold">
              épaviste Paris — 20 arrondissements
            </Link>{" "}
            détaille nos délais moyens et les pièces utiles&nbsp;; pour le
            département dans son ensemble,{" "}
            <Link href="/epaviste-paris-75" className="text-secondary font-semibold">
              épaviste Paris (75)
            </Link>{" "}
            complète la vue d’ensemble avec les communes riveraines souvent
            sollicitées. Partout en Île-de-France, la promesse reste cohérente&nbsp;:
            un <strong>rachat épave Île-de-France</strong> annoncé honnêtement,
            ou un parcours gratuit conforme lorsque le véhicule n’a plus de valeur
            marchande — jamais l’inverse pour «&nbsp;faire joli&nbsp;» au téléphone.
          </p>

          <h3 className="text-xl font-bold text-primary">
            Flottes, succession, sinistre : des dossiers fréquents en région
            parisienne
          </h3>
          <p>
            Au-delà du particulier avec une voiture familiale immobile, nous
            accompagnons des situations récurrentes en IDF&nbsp;: petites
            flottes d’artisans ou de livreurs qui remplacent plusieurs utilitaires
            d’un coup, successions avec véhicule laissé sur place pendant des mois,
            ou sinistres avec véhicule déclaré économiquement irréparable. Dans
            chaque cas, la structuration du dossier (personne physique ou morale,
            mandat, justificatifs) accélère la décision entre{" "}
            <strong>rachat épave Île-de-France</strong> et{" "}
            <strong>enlèvement épave gratuit Ile de France</strong>. Nous restons
            joignables sur la plage horaire affichée pour ajuster le créneau si
            le notaire, l’assureur ou le gestionnaire d’immeuble valide l’accès
            au dernier moment — flexibilité indispensable lorsque plusieurs
            parties doivent se coordonner.
          </p>

          <h3 className="text-xl font-bold text-primary">
            Passer à l’action : devis, appel ou formulaire
          </h3>
          <p>
            Que vous visiez un <strong>enlèvement épave gratuit IDF</strong> ou un{" "}
            <strong>rachat épave Ile de France</strong>, le point d’entrée est le
            même : le{" "}
            <a href={SITE_CONFIG.phoneHref} className="text-secondary font-semibold">
              téléphone
            </a>{" "}
            ou le{" "}
            <Link href="#devis" className="text-secondary font-semibold">
              formulaire en ligne
            </Link>
            . Nous vous rappelons en général sous trente minutes avec une
            proposition claire. Vous pouvez aussi consulter nos{" "}
            <Link href="/blog">guides sur le blog</Link> pour approfondir les
            étapes administratives avant de fixer un créneau. {SITE_CONFIG.name}{" "}
            s’engage sur la <strong>ponctualité</strong>, la{" "}
            <strong>conformité VHU</strong> et un discours sans jargon : parce
            qu’en Île-de-France, un projet d’enlèvement doit être réglé vite et
            proprement, sans friction inutile.
          </p>
        </div>
      </div>
    </section>
  );
}
