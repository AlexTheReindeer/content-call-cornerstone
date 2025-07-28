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

        <div className="space-y-8">
          <Card className="shadow-card">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed text-lg">
                TGCallSoft ir radīts, lai atvieglotu uzņēmumu ikdienu laikā, kad atsevišķi komunikācijas rīki no vienas puses palīdz, bet no otras — apgrūtina informācijas plūsmas pārvaldību.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                Mūsu risinājums integrē klasiskos fiksētos un mobilos sakarus, SMS, e-pastus un WhatsApp. Visa saziņas vēsture ar konkrēto klientu vai partneri ir ērti pārskatāma TGCallSoft platformā — to iespējams filtrēt un meklēt pēc nepieciešamajiem kritērijiem.
              </p>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-6 w-6 text-primary" />
                  Tālruņa funkcionalitāte
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  Iegūstiet jaunas iespējas savai tālruņa līnijai:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Automātiskais atbildētājs ar vai bez balss pasta</li>
                  <li>• Vairākas paralēlas sarunas vienam tālruņa numuram</li>
                  <li>• Zvani un zvanu saņemšana jebkur, kur ir internets — izmantojot datoru vai lietotni telefonā</li>
                  <li>• IVR (Interactive Voice Response) — ienākošo zvanu sadale pa tēmu un atbildīgajiem darbiniekiem</li>
                  <li>• Zvanu ieraksti iekšējai kontrolei vai klientu servisa uzlabošanai</li>
                  <li>• Zvanu uzraudzība — pārliecinieties, ka visi zvani tiek apkalpoti kvalitatīvi un savlaicīgi</li>
                  <li>• Robotzvani — atgādinājumi klientiem un partneriem par aktualitātēm</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-6 w-6 text-primary" />
                  SMS funkcijas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  Sūtiet un saņemiet SMS ziņas web platformā — nav nepieciešams mobilais tālrunis
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Automātiska izsūtīšana — masveidā vai individuāli, ar vai bez sagatavēm</li>
                  <li>• Pārskatāms ienākošo un izejošo ziņu arhīvs</li>
                  <li>• Sūtiet atgādinājumus, statusu izmaiņas vai mārketinga ziņas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  WhatsApp integrācija
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  Sūtiet un saņemiet ziņas no vienas vietas — mūsu platformas
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Automātiska masveida vai individuāla WhatsApp ziņu izsūtīšana</li>
                  <li>• Automatizēti atgādinājumi, statusu izmaiņas vai mārketinga informācija</li>
                  <li>• Saņemiet klientu iepriekš definētas atbildes vai brīvu komunikāciju</li>
                  <li>• Veidojiet darbplūsmas, lai WhatsApp kļūtu par biznesa procesu daļu</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-6 w-6 text-primary" />
                  E-pasts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Izmantojiet esošo e-pastu vai TGCallSoft platformā iebūvēto e-pasta klientu</li>
                  <li>• Visa saziņa tiek piesaistīta konkrētam klientam vai partnerim, pamatojoties uz e-pasta adresi</li>
                  <li>• Automātiska rēķinu vai mārketinga ziņu izsūtīšana</li>
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