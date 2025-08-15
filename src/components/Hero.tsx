import { Button } from "@/components/ui/button";
import { Play, Store, Smartphone, Download } from "lucide-react";
import basqueLandscape from "@/assets/basque-landscape.jpg";
import fortuneWheel from "@/assets/fortune-wheel.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${basqueLandscape})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 animate-float">
        <div className="w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-32 left-10 animate-bounce-gentle">
        <div className="w-12 h-12 bg-secondary/30 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-sm font-medium">🎯 Nouveau au Pays Basque</span>
            </div>
            
            <h1 className="text-[8rem] lg:text-[16rem] xl:text-[20rem] font-heading font-black mb-6 leading-none tracking-tighter">
              <span className="bg-gradient-to-r from-primary via-yellow-400 to-secondary bg-clip-text text-transparent drop-shadow-2xl [text-shadow:0_0_30px_rgba(239,68,68,0.5)]">
                ZOZKI
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-4 text-white/90 font-body font-light">
              Une façon amusante et gratifiante de soutenir 
            </p>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 font-body font-light">
              les commerces locaux du <span className="text-primary-soft font-semibold">Pays Basque</span>
            </p>
            
            <p className="text-lg mb-8 text-white/80 max-w-lg font-body">
              Découvrez une nouvelle façon de gagner tout en soutenant vos commerces locaux favoris.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary-soft text-white shadow-glow">
                <Play className="w-5 h-5 mr-2" />
                Rejoindre l'Aventure
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                <Store className="w-5 h-5 mr-2" />
                Pour les Commerçants
              </Button>
            </div>

            {/* App Downloads */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="ghost" className="text-white/80 hover:text-white justify-start p-0">
                <div className="flex items-center">
                  <Smartphone className="w-5 h-5 mr-2" />
                  <div className="text-left">
                    <div className="text-xs">Télécharger sur</div>
                    <div className="text-sm font-semibold">iOS</div>
                  </div>
                </div>
              </Button>
              <Button variant="ghost" className="text-white/80 hover:text-white justify-start p-0">
                <div className="flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  <div className="text-left">
                    <div className="text-xs">Télécharger sur</div>
                    <div className="text-sm font-semibold">Android</div>
                  </div>
                </div>
              </Button>
            </div>
          </div>

          {/* Fortune Wheel Visual */}
          <div className="relative flex justify-center animate-fade-in">
            <div className="relative">
              <img 
                src={fortuneWheel} 
                alt="Roue de la Fortune Zozki"
                className="w-80 h-80 animate-spin [animation-duration:20s] object-contain"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(239,68,68,0.4)) brightness(1.1) contrast(1.2) saturate(1.3)',
                  background: 'none',
                  mixBlendMode: 'normal'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-1 h-12 bg-white/30 rounded-full">
          <div className="w-1 h-4 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;