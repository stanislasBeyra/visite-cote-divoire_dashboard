import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col bg-background">
      <header className="border-b border-line px-6 py-4">
        <Link
          href="/"
          className="font-serif text-lg italic tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          Abidjan J&apos;adore
        </Link>
      </header>
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-md border border-line bg-background p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
