import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import { BarChart3, ArrowLeft, Euro, FileCheck, Target, Users2 } from "lucide-react";
import { Link } from "react-router-dom";

const ESFondiPage = () => {
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
              <BarChart3 className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">ES fondi</h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Projektu sagatavošana
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Mūsu eksperti palīdzēs sagatavot un iesniegt ES fondu projektus. Pilns atbalsts 
                  no idejas līdz projekta īstenošanai.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Projekta idejas izvērtēšana</li>
                  <li>• Dokumentācijas sagatavošana</li>
                  <li>• Budžeta plānošana</li>
                  <li>• Pieteikuma iesniegšana</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-primary" />
                  Projektu vadība
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Profesionāla projektu vadība un īstenošanas atbalsts. Nodrošināsim, 
                  ka projekts tiek īstenots atbilstoši plānam un prasībām.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Euro className="h-5 w-5 text-primary" />
                  Finansiālā pārvaldība
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Precīza finansiālā uzskaite un atskaišu sagatavošana ES fondu projektiem. 
                  Nodrošinām atbilstību visām finansiālajām prasībām.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-card bg-gradient-secondary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
                  Mūsu pieredze
                </h3>
                <p className="text-secondary-foreground/90 mb-6">
                  Vairāk nekā 10 gadu pieredze ES fondu projektu īstenošanā. Esam veiksmīgi 
                  piesaistījuši finansējumu dažādos sektoros un uzņēmumu izmēros.
                </p>
                <Button variant="outline" className="bg-white/20 border-white/40 text-white hover:bg-white/30">
                  Skatīt veiksmīgos projektus
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users2 className="h-5 w-5 text-primary" />
                  Mūsu ekspertu komanda
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Pieredzējuši ES fondu eksperti, kuri pārzina aktuālās prasības un 
                  tendences fondu piesaistē.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Sertificēti projektu vadītāji</li>
                  <li>• Finanšu eksperti</li>
                  <li>• Juridiskais atbalsts</li>
                  <li>• Tehniskā konsultācija</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Pieejamie fondi 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Aktuālā informācija par pieejamajiem ES fondiem un to iespējām.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• ERAF - Eiropas Reģionālās attīstības fonds</li>
                  <li>• ESF+ - Eiropas Sociālais fonds Plus</li>
                  <li>• ELFLA - Eiropas Lauksaimniecības fonds</li>
                  <li>• Horizon Europe - Pētniecības un inovāciju programma</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ESFondiPage;