import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const siteName = "Abidjan J'adore";
const themeStorageKey = "abj-theme";

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s · ${siteName}`,
  },
  description:
    "Découvrir Abidjan et la Côte d'Ivoire : événements, adresses et inspirations pour vivre la destination autrement.",
  keywords: [
    "Abidjan",
    "Côte d'Ivoire",
    "tourisme",
    "Visit CI",
    "événements",
    "sorties",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-theme="light"
      data-density="normal"
      data-typo="mixed"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full scroll-smooth antialiased`}
    >
      {/* suppressHydrationWarning : extensions (ex. gestionnaires de mots de passe) injectent des attributs sur <html>/<body> avant React. */}
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-foreground font-sans"
      >
        <Script id="theme-init" strategy="beforeInteractive">{`
          (function () {
            try {
              var root = document.documentElement;
              var stored = localStorage.getItem("${themeStorageKey}");
              var next = stored === "dark" ? "dark" : "light";
              root.setAttribute("data-theme", next);
              root.classList.toggle("dark", next === "dark");
            } catch (e) {}
          })();
        `}</Script>
        <Script id="strip-ext-attrs" strategy="afterInteractive">{`
          (function () {
            try {
              var strip = function (root) {
                if (!root || !root.querySelectorAll) return;
                var nodes = root.querySelectorAll("[bis_skin_checked], [bis_register], [__processed_]");
                for (var i = 0; i < nodes.length; i++) {
                  var el = nodes[i];
                  for (var j = el.attributes.length - 1; j >= 0; j--) {
                    var name = el.attributes[j].name;
                    if (name.indexOf("bis_") === 0 || name.indexOf("__processed_") === 0) {
                      el.removeAttribute(name);
                    }
                  }
                }
              };
              strip(document);
              var mo = new MutationObserver(function (muts) {
                for (var i = 0; i < muts.length; i++) {
                  var m = muts[i];
                  if (m.type === "attributes" && m.target && m.target.removeAttribute) {
                    var n = m.attributeName || "";
                    if (n.indexOf("bis_") === 0 || n.indexOf("__processed_") === 0) {
                      m.target.removeAttribute(n);
                    }
                  } else if (m.type === "childList") {
                    m.addedNodes.forEach(function (n) {
                      if (n.nodeType === 1) strip(n);
                    });
                  }
                }
              });
              mo.observe(document.documentElement, {
                subtree: true,
                childList: true,
                attributes: true,
              });
            } catch (e) {}
          })();
        `}</Script>
        {children}
      </body>
    </html>
  );
}
