import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CGU = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour à l'accueil
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-basque bg-clip-text text-transparent">
              Conditions Générales d'Utilisation
            </h1>
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground">
              L'utilisation du site et de l'application Zozki implique l'acceptation pleine et entière des présentes conditions générales d'utilisation.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Objet</h2>
              <p className="text-muted-foreground">
                Zozki est une application de loterie locale développée par Lovable SAS, visant à dynamiser le commerce de proximité. En participant, les utilisateurs acceptent les règles des tirages et le fonctionnement de l'application.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Inscription et compte</h2>
              <p className="text-muted-foreground">
                Les utilisateurs doivent fournir des informations exactes et s'engagent à ne pas usurper l'identité d'autrui.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Utilisation des services</h2>
              <p className="text-muted-foreground">
                L'utilisateur s'engage à ne pas détourner les fonctionnalités de l'application à des fins frauduleuses.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Propriété intellectuelle</h2>
              <p className="text-muted-foreground">
                Tout le contenu de Zozki (textes, images, logos, etc.) est protégé. Toute reproduction sans autorisation est interdite.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Responsabilité</h2>
              <p className="text-muted-foreground">
                Lovable SAS ne saurait être tenue responsable des dommages directs ou indirects liés à l'usage de l'application.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Modifications</h2>
              <p className="text-muted-foreground">
                Lovable SAS se réserve le droit de modifier les CGU à tout moment. Les utilisateurs seront notifiés des changements.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CGU;