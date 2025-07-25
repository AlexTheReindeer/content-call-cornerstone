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
              Atpakaļ uz sākumu
            </Button>
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-full bg-primary/10">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Darborganizācija</h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Kalendārs un plānošana
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Viegli plānojiet tikšanās, uzdevumus un atgādinājumus. Integrēts kalendārs ar 
                  automatizētiem paziņojumiem un resursu rezervāciju.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Resursu rezervācija</li>
                  <li>• Automatizēti atgādinājumi</li>
                  <li>• Komandas kalendārs</li>
                  <li>• Atkārtoti notikumi</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Atgādinājumi un paziņojumi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automatizēti atgādinājumi klientiem par gaidāmajiem pasākumiem. 
                  SMS, WhatsApp un e-pasta paziņojumi ar personalizētiem ziņojumiem.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Atskaites un analītika
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Detalizētas atskaites par darba efektivitāti, klientu aktivitāti un komandas sniegumu. 
                  Eksportējiet datus Excel vai PDF formātā.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-card bg-gradient-secondary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
                  Uzdevumu pārvaldība
                </h3>
                <p className="text-secondary-foreground/90 mb-6">
                  Izveidojiet, piešķiriet un sekojiet uzdevumiem. Kanban tēla saskarne ar vilkšanas 
                  un nomešanas funkcionalitāti, termiņu kontrole un progresa sekošana.
                </p>
                <Button variant="outline" className="bg-white/20 border-white/40 text-white hover:bg-white/30">
                  Skatīt uzdevumu sistēmu
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Komandas sadarbība
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Efektīva komandas sadarbība ar komentāriem, failu koplietošanu un reāllaika 
                  atjauninājumiem par projektu statusu.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Iekšējie komentāri</li>
                  <li>• Failu pielikumi</li>
                  <li>• Darbību vēsture</li>
                  <li>• Atbildīgo maiņa</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Klientu norēķini
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Integrēta norēķinu sistēma ar rēķinu izveidošanu, maksājumu sekošanu un 
                  atgādinājumiem par nesamaksātajiem rēķiniem.
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