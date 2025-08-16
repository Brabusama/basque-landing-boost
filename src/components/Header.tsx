import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/a11157bf-f745-4705-8a36-1897de46210f.png" 
              alt="Zozki Logo" 
              className="h-24 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">ZOZKI</span>
              <span className="text-xs text-muted-foreground">Pays Basque</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#shops" className="text-foreground hover:text-primary transition-colors">
              Pour les Commerces
            </a>
            <a href="#players" className="text-foreground hover:text-primary transition-colors">
              Pour les Joueurs
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <Globe className="w-4 h-4 mr-2" />
              FR
            </Button>
            <Button className="md:hidden" variant="ghost" size="sm">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;