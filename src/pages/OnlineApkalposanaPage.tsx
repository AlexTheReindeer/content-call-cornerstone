import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import { Users, ArrowLeft, Globe, CreditCard, UserCheck, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const OnlineApkalposanaPage = () => {
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
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Online klientu apkalpošana</h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Online rezervācijas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Ļaujiet klientiem rezervēt pakalpojumus tiešsaistē jebkurā diennakts laikā. 
                  Automātiska kalendāra sinhronizācija un brīvo laiku rādīšana.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• 24/7 pieejamība</li>
                  <li>• Reāllaika brīvo laiku rādīšana</li>
                  <li>• Pakalpojumu kategorijas</li>
                  <li>• Automatizēti apstiprinājumi</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Priekšapmaksa un norēķini
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Integrēta maksājumu sistēma ar iespēju pieprasīt priekšapmaksu vai pilnu 
                  apmaksu rezervācijas laikā. Atbalsta visas populārās maksājumu metodes.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-primary" />
                  Klientu reģistrācija
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Vienkārša klientu reģistrācijas forma ar automatizētu profila izveidi. 
                  Integrācija ar esošo klientu datubāzi un dublēšanās novēršana.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-card bg-gradient-secondary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
                  Klientu pašapkalpošanās portāls
                </h3>
                <p className="text-secondary-foreground/90 mb-6">
                  Personalizēts klientu portāls, kur klienti var apskatīt savu vēsturi, 
                  rezervēt pakalpojumus, lejupielādēt rēķinus un sazināties ar atbalstu.
                </p>
                <Button variant="outline" className="bg-white/20 border-white/40 text-white hover:bg-white/30">
                  Demo portāls
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  Pielāgojama saskarne
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Pilnībā pielāgojama online rezervāciju saskarne, kas atbilst jūsu zīmola 
                  identitātei. Krāsu shēmas, logo un teksta pielāgošana.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Zīmola krāsas un fonts</li>
                  <li>• Logo integrācija</li>
                  <li>• Pielāgoti lauki</li>
                  <li>• Responsive dizains</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Mobilā aplikācija</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Mobilo ierīču optimizēta saskarne ar push paziņojumiem par rezervācijām, 
                  atgādinājumiem un statusu izmaiņām.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OnlineApkalposanaPage;