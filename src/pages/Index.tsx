import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import CRMDiagram from "@/components/CRMDiagram";
import ContentCard from "@/components/ContentCard";
import { Calendar, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Main Hero Section */}
      <main className="container mx-auto px-6 py-12">
        {/* Hero Content with CRM Diagram */}
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Features */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Bezmaksas uzstādīšana un pielāgošana
            </h1>
            
            <div className="space-y-4 text-lg">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Beztermiņa līgums</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Nekādu papildu licenču par lietotājiem</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-muted-foreground">Pieredze ES fondu piesaistē</span>
              </div>
            </div>
          </div>

          {/* Right side - CRM Diagram */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <CRMDiagram />
          </div>
        </section>

        {/* Content Cards Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <ContentCard
            title="Komunikāciju kanāli"
            content="Visi komunikācijas kanāli vienuviet. Multikanālu rīks, kas apvieno dažādu komunikācijas kanālu zināas : Zvani, SMS, WhatsApp, e-pasti, Telegram. Integrācijas ar ML risinājumiem"
          />
          
          <ContentCard
            title="Darborganizācija"
            content="Organizē un plāno darbus un informē klientus. Kalendārs darbu plānošanai, atgādinājumu izsūtīšana SMS un WhatsApp, atskaites, klientu norēķini, utt"
          />
          
          <ContentCard
            title="Online klientu apkalpošana"
            content="Piesaisti klientus online. Online reģistrācija ar vai bez priekšapmaksas, utt."
          />
        </section>

        {/* Case Studies Section */}
        <section className="mb-16">
          <Card className="shadow-card">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    EV video vai bilde, ja nespējis uzņemt video
                  </h3>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Klientu atsauksmes</h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Case studie textsCase studie textsCase studie textsCase studie textsCase studie 
                      textsCase studie textsCase studie textsCase studie textsCase studie textsCase studie 
                      textsCase studie textsCase studie texts
                    </p>
                    <p className="text-muted-foreground">
                      Case studie textsCase studie textsCase studie textsCase studie textsCase studie 
                      textsCase studie textsCase studie textsCase studie texts
                    </p>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      Lasīt vairāk
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action Section */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto shadow-elegant bg-gradient-primary">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                Gatavs sākt darbu ar TGCallSoft?
              </h2>
              <p className="text-primary-foreground/90 mb-8 text-lg">
                Rezervē bezmaksas konsultāciju un uzzini, kā mūsu risinājums var uzlabot tavu biznesu.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-card text-foreground hover:bg-card/90 shadow-card"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Pieteikties sarunai
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Index;
