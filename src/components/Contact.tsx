import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import basquePattern from "@/assets/basque-pattern.jpg";

const Contact = () => {
  const { toast } = useToast();

  const handlePartnerClick = () => {
    toast({
      title: "Demande reçue !",
      description: "Nous vous contacterons bientôt pour devenir partenaire Zozki.",
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${basquePattern})` }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 mr-2 text-primary" />
            <span className="text-primary font-medium">Contactez-nous</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Rejoignez la communauté 
            <span className="text-primary"> Zozki</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une question ? Une suggestion ? Notre équipe basque est là pour vous accompagner 
            dans votre aventure Zozki.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="hover:shadow-soft transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">Écrivez-nous directement</p>
                <a 
                  href="mailto:zozkicontact@gmail.com" 
                  className="text-primary hover:text-primary-soft transition-colors font-medium"
                >
                  zozkicontact@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-soft transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Localisation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-2">Fièrement basé au</p>
                <p className="font-medium">Pays Basque</p>
                <p className="text-sm text-muted-foreground">France 🇫🇷</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-soft transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary-soft rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-2">Disponible</p>
                <p className="font-medium">Lun - Ven</p>
                <p className="text-sm text-muted-foreground">9h - 18h</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl">Envoyer un message</CardTitle>
                <p className="text-muted-foreground">
                  Que vous soyez un commerçant intéressé ou un futur joueur, nous sommes là pour vous aider.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Prénom</label>
                    <Input placeholder="Votre prénom" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nom</label>
                    <Input placeholder="Votre nom" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="votre@email.com" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Sujet</label>
                  <Input placeholder="Sujet de votre message" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Dites-nous comment nous pouvons vous aider..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button size="lg" className="w-full bg-gradient-basque hover:opacity-90 text-white">
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-accent/50 to-accent/20 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4">Prêt à commencer l'aventure ?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Rejoignez dès maintenant la révolution du commerce local au Pays Basque avec Zozki.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-soft" onClick={handlePartnerClick}>
                Devenir Commerçant Partenaire
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;