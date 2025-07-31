import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PolitiqueConfidentialite = () => {
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
              Politique de Confidentialité
            </h1>
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground">
              Nous attachons une grande importance à la protection de vos données personnelles.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Données collectées</h2>
              <p className="text-muted-foreground">
                Zozki collecte des données personnelles (email, prénom, localisation, etc.) lors de l'inscription ou de l'utilisation des services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Finalité</h2>
              <p className="text-muted-foreground">
                Ces données servent à :<br />
                - Gérer les tirages au sort<br />
                - Améliorer l'expérience utilisateur<br />
                - Informer des nouveautés
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Conservation</h2>
              <p className="text-muted-foreground">
                Les données sont conservées pendant la durée strictement nécessaire à la finalité du traitement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Partage</h2>
              <p className="text-muted-foreground">
                Vos données ne sont jamais revendues. Elles peuvent être partagées avec des prestataires dans le cadre du bon fonctionnement de l'application.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Droits</h2>
              <p className="text-muted-foreground">
                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données personnelles. Pour cela, contactez-nous à contact@zozki.app
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;