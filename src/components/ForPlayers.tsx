import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Gift, MapPin, Sparkles, Trophy, Calendar } from "lucide-react";
import fortuneWheel from "/lovable-uploads/0802f00e-9ab9-448c-a2ff-80adb21e51dd.png";

const ForPlayers = () => {
  const features = [
    {
      icon: Gamepad2,
      title: "Jeux Amusants",
      description: "Participez à des jeux passionnants chaque jour et découvrez de nouveaux défis",
      gradient: "from-primary to-primary-soft"
    },
    {
      icon: Gift,
      title: "Récompenses Exclusives",
      description: "Gagnez des prix, des réductions et des cadeaux chez vos commerces favoris",
      gradient: "from-secondary to-secondary-soft"
    },
    {
      icon: MapPin,
      title: "Soutien Local",
      description: "Chaque participation aide les commerces locaux du Pays Basque à prospérer",
      gradient: "from-primary-soft to-secondary"
    },
    {
      icon: Sparkles,
      title: "Surprises Quotidiennes",
      description: "Découvrez de nouveaux commerces et des offres spéciales chaque jour",
      gradient: "from-secondary-soft to-primary"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Achetez dans un commerce partenaire",
      description: "Faites vos achats habituels chez nos commerçants locaux",
      icon: "🛍️"
    },
    {
      number: "2", 
      title: "Scannez votre ticket",
      description: "Utilisez l'app Zozki pour scanner votre reçu d'achat",
      icon: "📱"
    },
    {
      number: "3",
      title: "Tournez la roue et gagnez !",
      description: "Tentez votre chance à la roue de la fortune et remportez des prix",
      icon: "🎁"
    }
  ];

  return (
    <section id="players" className="py-20 bg-gradient-to-br from-accent/20 via-background to-accent/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full mb-6">
            <Gamepad2 className="w-4 h-4 mr-2 text-secondary" />
            <span className="text-secondary font-medium">Pour les Joueurs</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Gagnez en soutenant vos 
            <span className="text-secondary"> commerces favoris</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformez vos achats quotidiens en moments de plaisir et de gains. 
            Plus vous jouez, plus vous soutenez l'économie locale du Pays Basque.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-accent/10">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-center text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How it Works */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Comment ça marche ?</h3>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-basque rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl">{step.icon}</span>
                      <h4 className="text-xl font-semibold">{step.title}</h4>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual */}
            <div className="relative flex justify-center">
              <div className="relative">
                <img 
                  src={fortuneWheel} 
                  alt="Roue de la Fortune"
                  className="w-64 h-64 relative z-10"
                  style={{
                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
                    background: 'transparent',
                    mixBlendMode: 'multiply'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-basque rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
          
          <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h3 className="text-3xl font-bold mb-4">Commencer à jouer maintenant !</h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Rejoignez des milliers de joueurs qui gagnent chaque jour en soutenant les commerces du Pays Basque
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Calendar className="w-5 h-5 mr-2" />
              Télécharger l'App
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <MapPin className="w-5 h-5 mr-2" />
              Voir les Commerces Partenaires
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForPlayers;