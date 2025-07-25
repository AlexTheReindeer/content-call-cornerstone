import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import { MessageSquare, ArrowLeft, Phone, Mail, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const KomunikacijaPage = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" size="sm" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Atpakaļ uz sākumu
            </Button>
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-full bg-primary/10">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Komunikāciju kanāli</h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Zvani un SMS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Apstrādājiet visus ienākošos un izejošos zvanus vienā sistēmā. Automātiska zvanu ierakstīšana, 
                  SMS izsūtīšana un saņemšana, kā arī detalizēta zvanu analītika.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  WhatsApp un Telegram
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tiešā integrācija ar populārākajiem ziņojumu servisiem. Automatizēti atbildes scenāriji, 
                  multimediju saturs un grupas ziņojumi.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  E-pasta integrācija
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pilna e-pasta klientu integrācija ar automatizētiem atbildes veidnēm, pielikumu pārvaldību 
                  un vienotā iesūtnē ar citiem komunikācijas kanāliem.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-card bg-gradient-secondary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
                  Mākslīgā intelekta risinājumi
                </h3>
                <p className="text-secondary-foreground/90 mb-6">
                  Izmantojiet ML algoritmus klientu pieprasījumu analīzei un automatizētai atbildēšanai. 
                  Sentiment analīze, automatizēta kategorizēšana un viedās atbildes.
                </p>
                <Button variant="outline" className="bg-white/20 border-white/40 text-white hover:bg-white/30">
                  Uzzināt vairāk par AI
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Centralizēta iesūtne</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Visi komunikācijas kanāli vienā vietā. Vienotā saskarne ļauj jūsu komandai efektīvi 
                  pārvaldīt visas klientu sarunas neatkarīgi no komunikācijas kanāla.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Vienota komunikācijas vēsture</li>
                  <li>• Komandas sadarbības rīki</li>
                  <li>• Automatizēta pieprasījumu maršrutēšana</li>
                  <li>• Reāllaika paziņojumi</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default KomunikacijaPage;