import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import { Calendar, ArrowLeft, Clock, Users, FileText, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const DarborganizacijaPage = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" size="sm" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Uz sākumu
            </Button>
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-full bg-primary/10">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Darborganizācija</h1>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-lg text-muted-foreground mb-4">
            Nezaudē ienākumus, taupi laiku un ģenerē jaunus darījumus – šie ir trīs galvenie mūsu plānošanas moduļa motīvi.
          </p>
          <p className="text-muted-foreground">
            Mūsu on-line kalendārs ir ērti pielāgojams visdažādākajiem mērķiem un vajadzībām. Kā lielākas komandas ar standartizētiem procesiem, tā mazāki kolektīvi vai pat individuāli specialist – katrs atradīs kādas ērtības mūsu kalendārā.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Atgādinājumi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automatizē atgādinājuma sūtīšanu WhatsApp, SMS vai veic robotzvanus un minimizē zaudējumus, kas rodas klientiem vai partneriem aizmirstot par plānoto tikšanos. Darot to automātiski nevis "ar roku", tu ietaupīsi savu vai darbinieku laiku, kā arī izslēgsi kļūdu iespējamību.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Online pieraksti
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dod iespēju savam klientiem jebkurā laikā pierakstīties uz apmeklējumu – atver tiešsaistes rezervācijas sistēmu. Rezervācijas sistēmā būs iespējams pierakstīties uz tiem brīvajiem laikiem un tiem pakalpojumiem, ko uzskatāt par nepieciešamu. Pārbaudi pieteicēja identitāti vai pieprasi avansā maksājumu, lai izskaustu viltus pierakstus.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-card bg-gradient-secondary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary-foreground mb-4 flex items-center gap-2">
                  <CreditCard className="h-6 w-6" />
                  Norēķini un finanses
                </h3>
                <p className="text-secondary-foreground/90">
                  Piešķir plānotajam notikumam vērtību, saslēdz kopā ar kases aparātu un iegūsti funkcionējošu POS sistēmu. Dažādas pielāgojamas atskaites palīdzēs grāmatvedībā algu aprēķiniem un peļņas rādītāju analīzei.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DarborganizacijaPage;