import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, Mail, MapPin, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-accent/20 pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-basque rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-basque bg-clip-text text-transparent">
                Zozki
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              La première plateforme de gaming qui unit les commerçants et les clients du Pays Basque 
              dans une expérience ludique et gratifiante.
            </p>
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-10 h-10 p-0"
                onClick={() => window.open('https://www.facebook.com/zozkiapp', '_blank')}
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-10 h-10 p-0"
                onClick={() => window.open('https://www.instagram.com/zozkiapp/', '_blank')}
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-10 h-10 p-0"
                onClick={() => window.open('https://twitter.com/zozkiapp', '_blank')}
              >
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#home" className="hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="#shops" className="hover:text-primary transition-colors">Pour les Commerces</a></li>
              <li><a href="#players" className="hover:text-primary transition-colors">Pour les Joueurs</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Inscription Commerce</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Aide & Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Devenir Partenaire</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a 
                  href="mailto:zozkicontact@gmail.com"
                  className="text-sm hover:text-primary transition-colors cursor-pointer"
                >
                  zozkicontact@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Pays Basque, France</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Smartphone className="w-4 h-4 text-primary" />
                <span className="text-sm">App iOS & Android</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">
            © 2024 Zozki. Tous droits réservés. Fait avec ❤️ au Pays Basque.
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link to="/politique-confidentialite" className="hover:text-primary transition-colors">
              Politique de Confidentialité
            </Link>
            <Link to="/cgu" className="hover:text-primary transition-colors">
              Conditions d'Utilisation
            </Link>
            <Link to="/mentions-legales" className="hover:text-primary transition-colors">
              Mentions Légales
            </Link>
          </div>
        </div>

        {/* Made with Love */}
        <div className="text-center mt-8 pt-8 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            Développé avec passion pour soutenir l'économie locale du Pays Basque 🏔️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;