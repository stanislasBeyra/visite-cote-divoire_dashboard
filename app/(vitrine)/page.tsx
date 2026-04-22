import Link from "next/link";

const nav = [
  { href: "#decouvrir", label: "Découvrir" },
  { href: "#agenda", label: "Agenda" },
  { href: "#application", label: "Application" },
];

export default function VitrineHomePage() {
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-8">
          <Link
            href="/"
            className="font-serif text-lg italic tracking-tight text-foreground transition-opacity hover:opacity-80"
          >
            Abidjan J&apos;adore
          </Link>
          <nav className="hidden items-center gap-6 sm:flex" aria-label="Navigation principale">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/login"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              Connexion
            </Link>
            <Link
              href="/dashboard"
              className="border border-line px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-foreground transition-colors hover:bg-foreground/[0.04]"
            >
              Espace pro
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <section
          className="border-b border-line px-6 py-20 md:px-8 md:py-28"
          aria-labelledby="hero-title"
        >
          <div className="mx-auto max-w-5xl">
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
              Une vitrine pour explorer Abidjan et au-delà : lieux, idées de
              sorties et actualités. L&apos;application mobile complète
              l&apos;expérience sur le terrain.
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
                className="inline-flex h-12 items-center justify-center border border-line px-8 text-sm font-medium text-foreground transition-colors hover:bg-foreground/[0.04] dark:hover:bg-foreground/[0.06]"
              >
                L&apos;application
              </a>
            </div>
          </div>
        </section>

        <section
          id="decouvrir"
          className="scroll-mt-16 border-b border-line px-6 py-16 md:px-8 md:py-24"
          aria-labelledby="decouvrir-title"
        >
          <div className="mx-auto max-w-5xl">
            <h2
              id="decouvrir-title"
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted"
            >
              Découvrir
            </h2>
            <p className="mt-4 max-w-2xl text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              Des repères pour se repérer, des adresses pour prolonger la
              découverte.
            </p>
            <ul className="mt-12 grid gap-0 border border-line md:grid-cols-3">
              {[
                {
                  title: "Quartiers & lieux",
                  text: "Repères culturels, plages, marchés et adresses qui racontent la ville.",
                },
                {
                  title: "Gastronomie",
                  text: "Maquis, tables soignées et spécialités locales à ne pas manquer.",
                },
                {
                  title: "Escapades",
                  text: "La Côte d'Ivoire au-delà d'Abidjan : nature, patrimoine et itinéraires.",
                },
              ].map((card) => (
                <li
                  key={card.title}
                  className="border-b border-line p-8 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <h3 className="text-base font-medium text-foreground">
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

        <section
          id="agenda"
          className="scroll-mt-16 border-b border-line px-6 py-16 md:px-8 md:py-24"
          aria-labelledby="agenda-title"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                id="agenda-title"
                className="font-mono text-xs uppercase tracking-[0.2em] text-muted"
              >
                Agenda
              </h2>
              <p className="mt-4 max-w-lg text-2xl font-medium leading-snug tracking-tight md:text-3xl">
                Concerts, expositions, festivals : tout ce qui anime la
                destination.
              </p>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Les dates et détails seront portés par le catalogue et
              l&apos;application, au fil des saisons.
            </p>
          </div>
        </section>

        <section
          id="application"
          className="scroll-mt-16 px-6 py-16 md:px-8 md:py-24"
          aria-labelledby="app-title"
        >
          <div className="mx-auto max-w-5xl border border-line p-8 md:p-12">
            <h2
              id="app-title"
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted"
            >
              Application
            </h2>
            <p className="mt-4 max-w-2xl text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              Carte interactive, favoris et offres : tout le voyage dans la
              poche.
            </p>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
              L&apos;application mobile « Abidjan J&apos;adore » prolonge ce
              site. Les liens vers les stores seront ajoutés dès la mise en
              ligne des builds publics.
            </p>
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-line px-6 py-10 md:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-sm italic text-muted">
            Abidjan J&apos;adore · Visit CI
          </p>
          <p className="font-mono text-xs text-muted">2026 · Côte d&apos;Ivoire</p>
        </div>
      </footer>
    </>
  );
}
