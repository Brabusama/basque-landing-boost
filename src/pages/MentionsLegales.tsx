import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MentionsLegales = () => {
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
              Mentions Légales
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <p className="text-muted-foreground mb-6">
                <strong>Éditeur du site :</strong> Lovable SAS – Projet Zozki<br />
                Adresse : [Adresse de Lovable SAS]<br />
                Email : contact@zozki.app<br />
                SIRET : [Numéro SIRET de Lovable SAS]<br />
                Directeur de la publication : [Nom du fondateur]
              </p>

              <p className="text-muted-foreground">
                <strong>Hébergeur :</strong><br />
                [Nom de l'hébergeur] – [Adresse de l'hébergeur]<br />
                Téléphone : [Téléphone de l'hébergeur]
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;