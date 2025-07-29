import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import { Calendar, ArrowLeft, Clock, Users, FileText, CreditCard, Phone, MessageSquare } from "lucide-react";
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
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/src/assets/telegroup-new-logo.png" alt="TeleGroup" className="h-10 w-auto mb-4" />
              <p className="text-muted-foreground text-sm mt-4 max-w-xs">
                TGCallSoft ir pilnīgs CRM risinājums, kas palīdz uzņēmumiem uzlabot klientu apkalpošanu un pārdošanas efektivitāti.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Pakalpojumi</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.telegroup.lv/lv/sakaru-pakalpojumi/fiksetie-telefonijas-sakari/" className="text-muted-foreground hover:text-primary transition-colors">Sakaru pakalpojumi</a></li>
                <li><a href="https://www.telegroup.lv/lv/internets/internets/" className="text-muted-foreground hover:text-primary transition-colors">Internets</a></li>
                <li><a href="https://www.telegroup.lv/lv/iekartas-un-tehniskie-risinajumi/ip-pbx-telefonijas-centrale/" className="text-muted-foreground hover:text-primary transition-colors">IP PBX centrāle</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Uzņēmums</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.telegroup.lv/lv/par-kompaniju/" className="text-muted-foreground hover:text-primary transition-colors">Par mums</a></li>
                <li><a href="https://www.telegroup.lv/lv/kontakti/" className="text-muted-foreground hover:text-primary transition-colors">Kontakti</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Kontakti</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" /> +371 677 99 000
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <MessageSquare className="h-4 w-4" /> info@telegroup.lv
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Telegrupa Baltijā SIA. Visas tiesības aizsargātas.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="https://www.telegroup.lv/lv/lietosanas-noteikumi/" className="text-muted-foreground hover:text-primary transition-colors text-sm">Lietošanas noteikumi</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DarborganizacijaPage;