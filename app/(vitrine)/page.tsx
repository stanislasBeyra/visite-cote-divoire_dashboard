import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { HeroCarousel } from "@/components/vitrine/hero-carousel";

const heroSlides = [
  {
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&auto=format&fit=crop&q=80",
    alt: "Abidjan — ville aux mille visages",
    caption: "Abidjan, ville aux mille visages",
    badge: "Découvrir",
  },
  {
    src: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1600&auto=format&fit=crop&q=80",
    alt: "Basilique Notre-Dame de la Paix, Yamoussoukro",
    caption: "Basilique de Yamoussoukro",
    badge: "UNESCO",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop&q=80",
    alt: "Plages d'Assinie",
    caption: "Plages d'Assinie",
    badge: "Évasion",
  },
  {
    src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&auto=format&fit=crop&q=80",
    alt: "Grand-Bassam historique",
    caption: "Grand-Bassam historique",
    badge: "Culture",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&auto=format&fit=crop&q=80",
    alt: "Région des 18 Montagnes",
    caption: "Les 18 Montagnes",
    badge: "Aventure",
  },
] as const;

const nav = [
  { href: "#decouvrir", label: "Découvrir" },
  { href: "#destinations", label: "Destinations" },
  { href: "#bons-plans", label: "Bons plans" },
  { href: "#agenda", label: "Agenda" },
  { href: "#partenaires", label: "Partenaires" },
  { href: "#application", label: "Application" },
];

const categories = [
  {
    title: "Bons plans",
    subtitle: "Offres",
    text: "Packages week-end, sorties premium, excursions et deals saisonniers validés par des prestataires locaux.",
  },
  {
    title: "Événements",
    subtitle: "Agenda",
    text: "Festivals, concerts, salons et rendez-vous culturels à travers Abidjan, Grand-Bassam, Man et l'intérieur du pays.",
  },
  {
    title: "Hébergement",
    subtitle: "Hôtels",
    text: "Sélection de lodges, hôtels business et resorts avec repères prix, zones et qualité d'expérience.",
  },
  {
    title: "Gastronomie",
    subtitle: "Restaurants",
    text: "Maquis iconiques, tables urbaines, circuits food et adresses qui racontent la cuisine ivoirienne.",
  },
] as const;

const destinations = [
  {
    name: "Abidjan",
    tagline: "La ville aux mille visages",
    text: "Plateau, Cocody, Treichville : business, gastronomie et culture urbaine à quelques minutes de la lagune.",
    tag: "Urbain",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&auto=format&fit=crop&q=80",
  },
  {
    name: "Grand-Bassam",
    tagline: "Patrimoine classé UNESCO",
    text: "Quartier France, plages, maisons coloniales et scène culturelle à 45 min d'Abidjan.",
    tag: "UNESCO",
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=900&auto=format&fit=crop&q=80",
  },
  {
    name: "Assinie",
    tagline: "Plages, lagunes et lodges",
    text: "Week-end évasion : sable blanc, cocotiers, sports nautiques et lodges éco-responsables.",
    tag: "Évasion",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
  },
  {
    name: "Yamoussoukro",
    tagline: "Capitale politique",
    text: "Basilique, lac aux crocodiles sacrés et Fondation Houphouët-Boigny en une journée.",
    tag: "Culture",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&auto=format&fit=crop&q=80",
  },
  {
    name: "Man & 18 Montagnes",
    tagline: "Cascades & ponts de lianes",
    text: "Randonnée, traditions Dan-Gouro et paysages spectaculaires dans l'ouest du pays.",
    tag: "Aventure",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&auto=format&fit=crop&q=80",
  },
  {
    name: "Parc de la Comoé",
    tagline: "Safari ivoirien",
    text: "Plus grand parc national du pays : éléphants, antilopes et savanes à perte de vue.",
    tag: "Nature",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&auto=format&fit=crop&q=80",
  },
] as const;

const featuredDeals = [
  {
    title: "Week-end Évasion Assinie",
    region: "Assinie-Mafia",
    price: "195 000 FCFA",
    rating: "4,8",
    summary: "2 nuits en lodge + transfert lagune + petit-déjeuner.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop&q=80",
  },
  {
    title: "Découverte Yamoussoukro",
    region: "Yamoussoukro",
    price: "45 000 FCFA",
    rating: "4,6",
    summary: "Excursion 1 jour : Basilique, lac aux crocodiles et déjeuner.",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&auto=format&fit=crop&q=80",
  },
  {
    title: "Safari Comoé 3 jours",
    region: "Nord-Est",
    price: "350 000 FCFA",
    rating: "4,9",
    summary: "Immersion nature, safari 4x4 et campement en pleine brousse.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&auto=format&fit=crop&q=80",
  },
  {
    title: "Gastro Tour Abidjan",
    region: "Abidjan",
    price: "35 000 FCFA",
    rating: "4,7",
    summary: "5 dégustations ivoiriennes et transport climatisé inclus.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&auto=format&fit=crop&q=80",
  },
  {
    title: "Trekking Man & Montagnes",
    region: "Ouest",
    price: "280 000 FCFA",
    rating: "4,5",
    summary: "3 jours : Mont Tonkoui, pont de lianes, cascades et village Dan.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&auto=format&fit=crop&q=80",
  },
  {
    title: "Spa & Détente Sofitel",
    region: "Cocody",
    price: "95 000 FCFA",
    rating: "4,8",
    summary: "Massage 60 min, accès piscine et déjeuner 3 services.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&auto=format&fit=crop&q=80",
  },
] as const;

const events = [
  { title: "MASA 2026", place: "Palais de la Culture, Abidjan", period: "11–18 avril 2026", category: "Festival" },
  { title: "Popo Carnaval de Bonoua", place: "Bonoua", period: "5–19 avril 2026", category: "Culture" },
  { title: "FEMUA 2026", place: "Anoumabo, Abidjan", period: "20–25 mai 2026", category: "Concerts" },
  { title: "SITA 2026", place: "Sofitel Ivoire, Cocody", period: "5–8 mai 2026", category: "Tourisme" },
  { title: "Festival Jazz de Bassam", place: "Plage de Grand-Bassam", period: "12–14 juin 2026", category: "Concerts" },
  { title: "Fête des Ignames", place: "Bondoukou", period: "15–17 août 2026", category: "Culture" },
  { title: "Abissa 2026", place: "Grand-Bassam", period: "25 oct. – 2 nov. 2026", category: "Patrimoine" },
  { title: "Festival des Masques", place: "Man", period: "10–15 déc. 2026", category: "Culture" },
] as const;

const partners = [
  {
    name: "Sofitel Abidjan Hôtel Ivoire",
    tagline: "Luxe & bien-être",
    bio: "Hôtel 5* à Cocody : chambres vue lagune, spa, restaurants et événementiel.",
    location: "Cocody, Abidjan",
    kind: "Hôtellerie",
  },
  {
    name: "Riviera Hôtels & Resorts",
    tagline: "Hôtellerie lagune & littoral",
    bio: "Lodges Assinie, hôtels-villes et expériences lagunaires pour affaires et loisirs.",
    location: "Abidjan · Assinie",
    kind: "Hôtellerie",
  },
  {
    name: "Horizons CI Tours",
    tagline: "Excursions & circuits",
    bio: "Agence réceptive : Yamoussoukro, Comoé, Grand-Bassam UNESCO, trekking à Man.",
    location: "Abidjan (siège)",
    kind: "Agence",
  },
  {
    name: "Saveurs d'Abidjan",
    tagline: "Restaurants & gastronomie",
    bio: "Collectif de chefs et restaurateurs mettant en avant la cuisine ivoirienne.",
    location: "Grand Abidjan",
    kind: "Gastronomie",
  },
  {
    name: "Scène CI",
    tagline: "Festivals & culture",
    bio: "Agence événementielle : festivals, salons, carnavals et rendez-vous institutionnels.",
    location: "Abidjan",
    kind: "Événementiel",
  },
  {
    name: "Coucoue Lodge",
    tagline: "Lodge lagune",
    bio: "Établissement lodge en bord de lagune à Assinie, expériences pirogue et plage privée.",
    location: "Assinie-Mafia",
    kind: "Lodge",
  },
] as const;

const testimonials = [
  {
    quote:
      "La traversée en pirogue au coucher du soleil vers Assinie est tout simplement magique. Le lodge était parfait, nous reviendrons.",
    author: "Aïcha M.",
    context: "Week-end Assinie · avril 2026",
  },
  {
    quote:
      "Safari Comoé exceptionnel : des éléphants à 20 mètres, un guide hyper pro. Organisation au top du début à la fin.",
    author: "Sébastien D.",
    context: "Safari Comoé 3 jours",
  },
  {
    quote:
      "Le gastro tour à Abidjan m'a fait découvrir des plats incroyables en une matinée. Parfait pour les premiers jours.",
    author: "Jean-Philippe K.",
    context: "Gastro Tour Abidjan",
  },
] as const;

const practicalTips = [
  "Paiement : Orange Money, MTN MoMo et Wave largement acceptés.",
  "Saison idéale : novembre à mars pour voyager plus confortablement.",
  "Santé : vaccin fièvre jaune recommandé ou obligatoire selon provenance.",
  "Transport : taxi orange, VTC (Yango/Heetch) et woro-woro selon budget.",
  "Langues : français officiel, dioula et baoulé très utiles selon la région.",
  "Lieux sacrés : toujours demander avant de photographier masques et rites.",
] as const;

const faqItems = [
  {
    q: "Quelle est la meilleure saison pour visiter la Côte d'Ivoire ?",
    a: "De novembre à mars : saison sèche, températures agréables et routes dégagées. Évitez juin-juillet, pic de pluies sur la façade atlantique.",
  },
  {
    q: "Faut-il un visa pour entrer en Côte d'Ivoire ?",
    a: "Plusieurs nationalités doivent faire une demande d'e-Visa en ligne. Vérifiez les conditions selon votre pays et conservez votre carnet de vaccination.",
  },
  {
    q: "Peut-on payer en mobile money partout ?",
    a: "Oui dans la plupart des commerces et hôtels (Wave, Orange Money, MoMo). Gardez tout de même du cash FCFA pour marchés, taxis et petits achats.",
  },
  {
    q: "Comment se déplacer dans Abidjan ?",
    a: "Taxis orange à compteur, VTC (Yango, Heetch) pour les longs trajets ou la nuit, et woro-woro pour les trajets courts à petit budget.",
  },
  {
    q: "Comment les opérateurs touristiques peuvent-ils publier ?",
    a: "Via l'espace pro du tableau de bord : gestion du catalogue, création d'offres, agenda des événements et suivi performance.",
  },
] as const;

export default function VitrineHomePage() {
  return (
    <>
      <RevealOnScroll />
      <header className="sticky top-0 z-40 border-b border-line bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8">
          <Link
            href="/"
            className="font-serif text-lg italic tracking-tight text-foreground transition-opacity hover:opacity-80"
          >
            Abidjan J&apos;adore
          </Link>
          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Navigation principale"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Link
            href="/dashboard"
            className="border border-line px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-foreground transition-colors hover:bg-foreground/[0.04]"
          >
            Espace pro
          </Link>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        {/* HERO */}
        <section
          className="ds-reveal border-b border-line px-6 py-20 md:px-8 md:py-28"
          aria-labelledby="hero-title"
        >
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Tourisme · Côte d&apos;Ivoire
              </p>
              <h1
                id="hero-title"
                className="mt-6 max-w-3xl text-4xl font-medium leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl"
              >
                La ville aux mille visages,{" "}
                <span className="font-serif font-normal italic">
                  à votre rythme
                </span>
                .
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                Une plateforme pour découvrir, planifier et réserver :
                événements, bons plans, lieux et conseils pratiques issus du
                catalogue de l&apos;application mobile Visit CI.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#decouvrir"
                  className="inline-flex h-12 items-center justify-center border border-foreground bg-foreground px-8 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                  Commencer la visite
                </a>
                <a
                  href="#application"
                  className="inline-flex h-12 items-center justify-center border border-line px-8 text-sm font-medium text-foreground transition-colors hover:bg-foreground/[0.04]"
                >
                  L&apos;application
                </a>
              </div>
            </div>
            <HeroCarousel slides={heroSlides} />
          </div>
          <div className="mx-auto mt-14 max-w-6xl">
            <div className="grid gap-0 border border-line sm:grid-cols-4">
              {[
                { label: "Événements référencés", value: "12+" },
                { label: "Bons plans actifs", value: "8+" },
                { label: "Lieux & adresses", value: "35+" },
                { label: "Partenaires pros", value: "5+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="ds-reveal ds-reveal-delay-1 border-b border-line p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-3xl font-medium tracking-tight text-foreground">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DECOUVRIR */}
        <section
          id="decouvrir"
          className="ds-reveal ds-reveal-delay-1 scroll-mt-16 border-b border-line px-6 py-16 md:px-8 md:py-24"
          aria-labelledby="decouvrir-title"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="decouvrir-title"
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted"
            >
              Découvrir
            </h2>
            <p className="mt-4 max-w-2xl text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              Tout l&apos;écosystème touristique local, structuré par
              thématiques.
            </p>
            <ul className="mt-12 grid gap-0 border border-line md:grid-cols-2">
              {categories.map((card) => (
                <li
                  key={card.title}
                  className="ds-reveal ds-reveal-delay-2 border-b border-line p-8 even:md:border-l md:last:border-b-0"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                    {card.subtitle}
                  </p>
                  <h3 className="mt-2 text-base font-medium text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {card.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* DESTINATIONS */}
        <section
          id="destinations"
          className="ds-reveal ds-reveal-delay-1 scroll-mt-16 border-b border-line px-6 py-16 md:px-8 md:py-24"
          aria-labelledby="destinations-title"
        >
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <h2
                  id="destinations-title"
                  className="font-mono text-xs uppercase tracking-[0.2em] text-muted"
                >
                  Destinations
                </h2>
                <p className="mt-4 max-w-2xl text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                  Six territoires à vivre, d&apos;Abidjan au grand Nord.
                </p>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted">
                Chaque destination rassemble lieux, offres, événements et
                conseils locaux, avec ses points forts saisonniers.
              </p>
            </div>
            <ul className="mt-10 grid gap-0 border border-line md:grid-cols-2 lg:grid-cols-3">
              {destinations.map((d) => (
                <li
                  key={d.name}
                  className="ds-reveal ds-reveal-delay-2 flex flex-col border-b border-line last:border-b-0 md:border-b lg:[&:nth-child(3n)]:border-r-0 lg:border-r"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-line">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={d.image}
                      alt={d.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <span className="mono absolute left-3 top-3 inline-flex border border-background/40 bg-background/15 px-2 py-0.5 text-[10px] uppercase tracking-wide text-background backdrop-blur">
                      {d.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium tracking-tight text-foreground">
                      {d.name}
                    </h3>
                    <p className="mt-1 font-serif text-sm italic text-muted">
                      {d.tagline}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {d.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* BONS PLANS */}
        <section
          id="bons-plans"
          className="ds-reveal ds-reveal-delay-1 scroll-mt-16 border-b border-line px-6 py-16 md:px-8 md:py-24"
          aria-labelledby="bons-plans-title"
        >
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2
                  id="bons-plans-title"
                  className="font-mono text-xs uppercase tracking-[0.2em] text-muted"
                >
                  Bons plans
                </h2>
                <p className="mt-4 max-w-2xl text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                  Des offres concrètes, prêtes à réserver sur mobile.
                </p>
              </div>
              <Link
                href="/dashboard/offres"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                Gérer les campagnes (espace pro) →
              </Link>
            </div>
            <ul className="mt-10 grid gap-0 border border-line md:grid-cols-2 lg:grid-cols-3">
              {featuredDeals.map((deal) => (
                <li
                  key={deal.title}
                  className="ds-reveal ds-reveal-delay-2 flex flex-col border-b border-line last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 md:[&:nth-child(odd)]:border-r lg:[&:nth-last-child(-n+3)]:border-b-0 lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(odd)]:border-r-0 lg:border-r"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <span className="mono absolute left-3 top-3 inline-flex border border-background/40 bg-background/15 px-2 py-0.5 text-[10px] uppercase tracking-wide text-background backdrop-blur">
                      {deal.region}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-base font-medium text-foreground">
                      {deal.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {deal.summary}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-6 text-xs">
                      <span className="mono text-muted">Note {deal.rating}</span>
                      <span className="mono text-foreground">{deal.price}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* AGENDA */}
        <section
          id="agenda"
          className="ds-reveal ds-reveal-delay-2 scroll-mt-16 border-b border-line px-6 py-16 md:px-8 md:py-24"
          aria-labelledby="agenda-title"
        >
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <h2
                  id="agenda-title"
                  className="font-mono text-xs uppercase tracking-[0.2em] text-muted"
                >
                  Agenda
                </h2>
                <p className="mt-4 max-w-lg text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                  Les rendez-vous culturels et festifs à ne pas manquer.
                </p>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-muted">
                Programme actualisé selon les publications partenaires et
                institutionnelles.
              </p>
            </div>
            <div className="mt-10 border border-line">
              {events.map((event) => (
                <article
                  key={event.title}
                  className="ds-reveal ds-reveal-delay-3 grid gap-2 border-b border-line px-5 py-4 last:border-b-0 md:grid-cols-[1.4fr_1fr_0.8fr]"
                >
                  <h3 className="text-sm font-medium text-foreground">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted">
                    {event.place} · {event.period}
                  </p>
                  <p className="mono text-xs uppercase tracking-[0.08em] text-muted md:text-right">
                    {event.category}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PARTENAIRES */}
        <section
          id="partenaires"
          className="ds-reveal ds-reveal-delay-2 scroll-mt-16 border-b border-line px-6 py-16 md:px-8 md:py-24"
          aria-labelledby="partenaires-title"
        >
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <h2
                  id="partenaires-title"
                  className="font-mono text-xs uppercase tracking-[0.2em] text-muted"
                >
                  Partenaires
                </h2>
                <p className="mt-4 max-w-2xl text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                  Les professionnels qui alimentent la plateforme.
                </p>
              </div>
              <Link
                href="/dashboard/catalogue"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                Voir le catalogue complet →
              </Link>
            </div>
            <ul className="mt-10 grid gap-0 border border-line md:grid-cols-2 lg:grid-cols-3">
              {partners.map((p) => (
                <li
                  key={p.name}
                  className="ds-reveal ds-reveal-delay-3 border-b border-line p-6 last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 md:[&:nth-child(odd)]:border-r lg:[&:nth-last-child(-n+3)]:border-b-0 lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(odd)]:border-r-0 lg:border-r"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                        {p.kind}
                      </p>
                      <h3 className="mt-2 text-base font-medium text-foreground">
                        {p.name}
                      </h3>
                      <p className="mt-1 font-serif text-sm italic text-muted">
                        {p.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {p.bio}
                  </p>
                  <p className="mt-4 text-xs text-muted">{p.location}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TEMOIGNAGES */}
        <section
          className="ds-reveal ds-reveal-delay-2 border-b border-line px-6 py-16 md:px-8 md:py-24"
          aria-labelledby="temoignages-title"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="temoignages-title"
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted"
            >
              Ils ont vécu l&apos;expérience
            </h2>
            <p className="mt-4 max-w-2xl text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              Des avis de voyageurs sur les offres du catalogue.
            </p>
            <ul className="mt-10 grid gap-0 border border-line md:grid-cols-3">
              {testimonials.map((t) => (
                <li
                  key={t.author}
                  className="ds-reveal ds-reveal-delay-3 border-b border-line p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <p className="font-serif text-xl italic leading-snug text-foreground">
                    “{t.quote}”
                  </p>
                  <div className="mt-6 flex items-center justify-between text-xs">
                    <span className="text-foreground">{t.author}</span>
                    <span className="mono text-muted">{t.context}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* GUIDE PRATIQUE */}
        <section
          id="guide"
          className="ds-reveal ds-reveal-delay-3 scroll-mt-16 border-b border-line px-6 py-16 md:px-8 md:py-24"
          aria-labelledby="guide-title"
        >
          <div className="mx-auto max-w-6xl border border-line p-8 md:p-12">
            <h2
              id="guide-title"
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted"
            >
              Guide pratique
            </h2>
            <p className="mt-4 max-w-3xl text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              Conseils voyageurs inspirés des fiches pratiques de
              l&apos;application.
            </p>
            <ul className="mt-8 grid gap-x-8 gap-y-3 md:grid-cols-2">
              {practicalTips.map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-3 text-sm text-muted"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 bg-foreground"
                    aria-hidden
                  />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* APPLICATION */}
        <section
          id="application"
          className="ds-reveal ds-reveal-delay-3 scroll-mt-16 border-b border-line px-6 py-16 md:px-8 md:py-24"
          aria-labelledby="app-title"
        >
          <div className="mx-auto grid max-w-6xl gap-0 border border-line md:grid-cols-[1.4fr_1fr]">
            <div className="p-8 md:p-12">
              <h2
                id="app-title"
                className="font-mono text-xs uppercase tracking-[0.2em] text-muted"
              >
                Application
              </h2>
              <p className="mt-4 max-w-2xl text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                Carte interactive, favoris, alertes et réservation : le voyage
                dans la poche.
              </p>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
                L&apos;expérience mobile couvre déjà l&apos;accueil dynamique,
                les bons plans, les événements, la carte et les profils pros.
                Cette vitrine web sert de porte d&apos;entrée marketing et SEO.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#"
                  aria-label="Telecharger sur l App Store"
                  className="inline-flex h-14 items-center gap-3 border border-foreground bg-foreground px-5 text-background transition-opacity hover:opacity-90"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    aria-hidden
                    fill="currentColor"
                  >
                    <path d="M16.365 1.43c0 1.14-.43 2.22-1.14 3.02-.77.87-2.02 1.54-3.02 1.45-.12-1.13.44-2.31 1.14-3.1.8-.9 2.15-1.57 3.02-1.37zM20.5 17.26c-.57 1.33-.85 1.92-1.59 3.09-.97 1.54-2.34 3.47-4.05 3.48-1.52.01-1.92-.99-3.99-.98-2.07.01-2.52.99-4.04.98-1.71-.02-2.99-1.73-3.96-3.27-2.71-4.29-3-9.32-1.33-12 .96-1.56 2.5-2.46 4.15-2.49 1.73-.03 2.75.95 4.15.95 1.37 0 2.2-.95 4.21-.95 1.52.03 3.13.83 4.28 2.25-3.76 2.06-3.15 7.44.15 8.94z" />
                  </svg>
                  <span className="flex flex-col items-start leading-tight">
                    <span className="mono text-[9px] uppercase tracking-[0.14em] opacity-80">
                      Telecharger sur
                    </span>
                    <span className="text-sm font-medium">App Store</span>
                  </span>
                </a>
                <a
                  href="#"
                  aria-label="Disponible sur Google Play"
                  className="inline-flex h-14 items-center gap-3 border border-line bg-surface px-5 text-foreground transition-colors hover:bg-foreground/[0.04]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    aria-hidden
                  >
                    <defs>
                      <linearGradient id="gp-blue" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#00C3FF" />
                        <stop offset="1" stopColor="#1A73E8" />
                      </linearGradient>
                      <linearGradient id="gp-red" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#FF3A44" />
                        <stop offset="1" stopColor="#C31162" />
                      </linearGradient>
                      <linearGradient id="gp-yellow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#FFCE00" />
                        <stop offset="1" stopColor="#FFA000" />
                      </linearGradient>
                      <linearGradient id="gp-green" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#00F076" />
                        <stop offset="1" stopColor="#009E3E" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M3.6 1.5c-.4.22-.6.66-.6 1.25v18.5c0 .59.2 1.03.6 1.25l10.08-10.5L3.6 1.5z"
                      fill="url(#gp-blue)"
                    />
                    <path
                      d="m3.6 1.5 10.08 10.5 3.52-3.38L4.77 1.64C4.3 1.36 3.9 1.34 3.6 1.5z"
                      fill="url(#gp-green)"
                    />
                    <path
                      d="M3.6 22.5c.3.16.7.14 1.17-.14l12.43-6.98L13.68 12 3.6 22.5z"
                      fill="url(#gp-red)"
                    />
                    <path
                      d="M17.2 8.62 13.68 12l3.52 3.38 3.1-1.73c1.11-.62 1.11-1.9 0-2.52l-3.1-1.51z"
                      fill="url(#gp-yellow)"
                    />
                  </svg>
                  <span className="flex flex-col items-start leading-tight">
                    <span className="mono text-[9px] uppercase tracking-[0.14em] text-muted">
                      Disponible sur
                    </span>
                    <span className="text-sm font-medium">Google Play</span>
                  </span>
                </a>
              </div>
            </div>
            <ul className="divide-y divide-line border-t border-line md:border-l md:border-t-0">
              {[
                { k: "Accueil", v: "Carrousel, catégories et tips pratiques" },
                { k: "Bons plans", v: "Offres, disponibilités et réservation" },
                { k: "Carte", v: "Lieux géolocalisés et itinéraires" },
                { k: "Favoris", v: "Sauvegarde, alertes et rappels" },
                { k: "Profils pros", v: "Fiches partenaires et publications" },
              ].map((f) => (
                <li
                  key={f.k}
                  className="flex items-center justify-between gap-4 px-6 py-4 text-sm"
                >
                  <span className="text-foreground">{f.k}</span>
                  <span className="text-muted">{f.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="ds-reveal ds-reveal-delay-3 border-b border-line px-6 py-16 md:px-8 md:py-24"
          aria-labelledby="faq-title"
        >
          <div className="mx-auto max-w-6xl">
            <h2
              id="faq-title"
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted"
            >
              FAQ
            </h2>
            <p className="mt-4 max-w-2xl text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              Les réponses rapides avant de préparer votre séjour.
            </p>
            <div className="mt-10 border border-line">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="ds-reveal ds-reveal-delay-4 group border-b border-line last:border-b-0"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-sm font-medium text-foreground hover:bg-hover">
                    <span>{item.q}</span>
                    <span
                      className="mono text-xs text-muted transition-transform group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section
          className="ds-reveal ds-reveal-delay-3 border-b border-line px-6 py-16 md:px-8 md:py-24"
          aria-labelledby="newsletter-title"
        >
          <div className="mx-auto grid max-w-6xl gap-8 border border-line p-8 md:grid-cols-[1.1fr_1fr] md:items-center md:p-12">
            <div>
              <h2
                id="newsletter-title"
                className="font-mono text-xs uppercase tracking-[0.2em] text-muted"
              >
                Newsletter
              </h2>
              <p className="mt-4 text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                Chaque mois, les meilleures idées pour vivre la Côte
                d&apos;Ivoire.
              </p>
              <p className="mt-3 max-w-lg text-sm text-muted">
                Bons plans du moment, nouveaux lieux, événements majeurs et
                conseils saisonniers. Pas de spam, désabonnement en un clic.
              </p>
            </div>
            <form
              className="flex flex-col gap-3 sm:flex-row"
              action="#"
              method="post"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                E-mail
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="vous@exemple.ci"
                className="h-12 flex-1 border border-line bg-background px-4 text-sm text-foreground outline-none placeholder:text-faint focus:border-foreground/30"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center border border-foreground bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                S&apos;inscrire
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* FOOTER PRO */}
      <footer className="mt-auto border-t border-line px-6 py-14 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 border-b border-line pb-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <p className="font-serif text-xl italic tracking-tight text-foreground">
                Abidjan J&apos;adore
              </p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                Plateforme officielle de promotion du tourisme en Côte
                d&apos;Ivoire — vitrine web et application mobile Visit CI.
              </p>
              <div className="mt-5 flex items-center gap-3">
                {["Instagram", "Facebook", "LinkedIn", "X"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    aria-label={s}
                    className="mono inline-flex h-9 items-center justify-center border border-line px-3 text-[11px] uppercase tracking-[0.08em] text-muted transition-colors hover:text-foreground"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                Découvrir
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="#destinations"
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    Destinations
                  </a>
                </li>
                <li>
                  <a
                    href="#bons-plans"
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    Bons plans
                  </a>
                </li>
                <li>
                  <a
                    href="#agenda"
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    Agenda
                  </a>
                </li>
                <li>
                  <a
                    href="#guide"
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    Guide pratique
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                Opérateurs
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link
                    href="/dashboard"
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    Espace pro
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/catalogue"
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    Catalogue
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/offres"
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    Campagnes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/aide"
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                Contact
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>Plateau, Abidjan · Côte d&apos;Ivoire</li>
                <li>
                  <a
                    href="mailto:contact@visitci.com"
                    className="transition-colors hover:text-foreground"
                  >
                    contact@visitci.com
                  </a>
                </li>
                <li>+225 00 00 00 00</li>
                <li>Support pro : 24h ouvrées</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-serif text-sm italic text-muted">
              © 2026 Abidjan J&apos;adore · Visit CI
            </p>
            <ul className="flex flex-wrap gap-4 text-xs text-muted">
              <li>
                <Link
                  href="/dashboard"
                  className="transition-colors hover:text-foreground"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Confidentialité
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Conditions d&apos;utilisation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-foreground"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
