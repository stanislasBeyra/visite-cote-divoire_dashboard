import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
  title: "Connexion",
};

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-medium tracking-tight text-foreground">
          Connexion
        </h1>
        <p className="mt-2 text-sm text-muted">
          Accédez à l&apos;espace administration (démo — aucune auth réelle).
        </p>
      </div>
      <form className="space-y-4" action="/dashboard" method="get">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="vous@exemple.ci"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Mot de passe</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
          />
        </div>
        <Button type="submit" className="w-full">
          Continuer vers le tableau de bord
        </Button>
      </form>
      <p className="text-center text-xs text-muted">
        <Link href="/" className="underline-offset-4 hover:underline">
          Retour à l&apos;accueil
        </Link>
      </p>
    </div>
  );
}
