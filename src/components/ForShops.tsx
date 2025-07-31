import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Heart, Star, MapPin, Gift, Store } from "lucide-react";

const ForShops = () => {
  const features = [
    {
      icon: Users,
      title: "Nouveaux Clients",
      description: "Attirez de nouveaux clients grâce à notre communauté active de joueurs locaux",
      color: "bg-primary"
    },
    {
      icon: TrendingUp,
      title: "Augmentation des Ventes",
      description: "Boostez vos ventes avec des offres attractives et des récompenses engageantes",
      color: "bg-secondary"
    },
    {
      icon: Heart,
      title: "Fidélisation Client",
      description: "Créez des relations durables avec vos clients grâce à notre système de récompenses",
      color: "bg-primary-soft"
    }
  ];

  const benefits = [
    "📍 Visibilité locale accrue",
    "🎯 Ciblage de clients qualifiés", 
    "💰 Augmentation du chiffre d'affaires",
    "⭐ Amélioration de votre e-réputation",
    "🤝 Renforcement du lien communautaire",
    "📊 Statistiques détaillées sur votre activité"
  ];

  return (
    <section id="shops" className="py-20 bg-gradient-to-br from-background via-accent/30 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Store className="w-4 h-4 mr-2 text-primary" />
            <span className="text-primary font-medium">Pour les Commerces</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Attirez plus de clients et 
            <span className="text-primary"> fidélisez</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rejoignez le réseau de commerces partenaires et découvrez comment Zozki peut transformer 
            votre activité en créant de l'engagement autour de votre établissement.
          </p>
        </div>

        {/* Features Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Pourquoi rejoindre Zozki ?
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-3 bg-card rounded-lg hover:bg-accent/50 transition-colors">
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
            <Button size="lg" className="bg-secondary hover:bg-secondary-soft text-white">
              <MapPin className="w-5 h-5 mr-2" />
              Devenir Partenaire
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-mountain rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Gift className="w-8 h-8 text-white/60" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Offre de Lancement</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Star className="w-5 h-5 mr-3 text-yellow-300" />
                  <span>Installation gratuite</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 mr-3 text-yellow-300" />
                  <span> premier mois offerts</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 mr-3 text-yellow-300" />
                  <span>Support dédié</span>
                </li>
              </ul>
              <p className="text-white/80 text-sm">
                Profitez de notre offre de lancement pour les premiers commerces partenaires du Pays Basque
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForShops;
