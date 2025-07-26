import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import CRMDiagram from "@/components/CRMDiagram";
import ContentCard from "@/components/ContentCard";
import { Calendar, Phone, MessageSquare, Users, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import teleGroupLogo from "@/assets/telegroup-logo.png";
const Index = () => {
  const navigate = useNavigate();

  return <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Main Hero Section */}
      <main className="animate-fade-in">
        {/* Hero Content with CRM Diagram */}
        <section className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Features */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                TGCallSoft CRM
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Uzlabo saikni ar klientiem <span className="text-primary">ar TGCallSoft</span>
              </h1>
              
              <p className="text-muted-foreground text-lg">Pilnīgs CRM risinājums, kas apvieno komunikāciju, klientu vazdību un pārdošanas automatizāciju.</p>
              
              <div className="space-y-4 text-lg pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <span className="text-foreground font-medium">Bezmaksas uzstādīšana un pielāgošana</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <span className="text-foreground font-medium">Nekādu papildu licenču par lietotājiem</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <span className="text-foreground font-medium">Pieredze ES fondu piesaistē</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <span className="text-foreground font-medium">Beztermiņa līgums</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full mt-1 flex-shrink-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <span className="text-foreground font-medium">Individuāla pieeja un risinājumi</span>
                </div>
              </div>
              
              <div className="pt-4">
                <Button size="lg" className="rounded-full shadow-elegant">
                  Uzzināt vairāk
                </Button>
              </div>
            </div>

            {/* Right side - CRM Diagram */}
            <div className="bg-card rounded-3xl p-8 shadow-elegant border border-border/40 hover:shadow-card transition-all duration-500">
              <CRMDiagram />
            </div>
          </div>
        </section>

        {/* Content Cards Section */}
        <section className="container mx-auto px-6 py-16 bg-accent/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Galvenās funkcijas</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              TGCallSoft nodrošina plašu funkciju klāstu, lai uzlabotu jūsu biznesa procesus un klientu apkalpošanas kvalitāti.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <ContentCard 
              title="Komunikāciju kanāli" 
              content="Visi komunikācijas kanāli vienuviet. Multikanālu rīks, kas apvieno dažādu komunikācijas kanālu ziņas: Zvani, SMS, WhatsApp, e-pasti, Telegram. Integrācijas ar ML risinājumiem." 
              icon={<MessageSquare className="h-6 w-6 text-primary" />}
              onButtonClick={() => navigate('/komunikacija')}
            />
            
            <ContentCard 
              title="Darborganizācija" 
              content="Organizē un plāno darbus un informē klientus. Kalendārs darbu plānošanai, atgādinājumu izsūtīšana SMS un WhatsApp, atskaites, klientu norēķini, un daudz vairāk." 
              icon={<Calendar className="h-6 w-6 text-primary" />}
              onButtonClick={() => navigate('/darborganizacija')}
            />
            
            <ContentCard 
              title="Online klientu apkalpošana" 
              content="Piesaisti klientus online. Online reģistrācija ar vai bez priekšapmaksas, klientu pašapkalpošanās portāls, un citas iespējas." 
              icon={<Users className="h-6 w-6 text-primary" />}
              onButtonClick={() => navigate('/online-apkalpojana')}
            />
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Klientu stāsti</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Uzziniet, kā TGCallSoft ir palīdzējis mūsu klientiem sasniegt savus biznesa mērķus.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <Card className="shadow-elegant border border-border/40 hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">SIA</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">TechSolutions</h4>
                    <p className="text-sm text-muted-foreground">IT pakalpojumi</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "TGCallSoft ļāva mums apvienot visus klientu komunikācijas kanālus vienā platformā, kas ievērojami uzlaboja mūsu klientu apkalpošanas kvalitāti un efektivitāti."
                </p>
                <p className="text-sm font-medium text-primary">- Jānis Bērziņš, IT direktors</p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="shadow-elegant border border-border/40 hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">AS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Baltic Sales</h4>
                    <p className="text-sm text-muted-foreground">Tirdzniecība</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Kopš ieviešām TGCallSoft, mūsu pārdošanas rādītāji ir pieauguši par 25%, un klientu apmierinātība ir uzlabojusies par 30%."
                </p>
                <p className="text-sm font-medium text-primary">- Anna Kalniņa, Pārdošanas vadītāja</p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="shadow-elegant border border-border/40 hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">SIA</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">MediCare+</h4>
                    <p className="text-sm text-muted-foreground">Veselības aprūpe</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "TGCallSoft automatizācija ļauj mums efektīvāk plānot pacienta vizītes un nodrošināt laicīgus atgādinājumus, kas samazina kavētos vizīšu skaitu."
                </p>
                <p className="text-sm font-medium text-primary">- Dr. Mārtiņš Ozols, Klīnikas vadītājs</p>
              </CardContent>
            </Card>

            {/* Testimonial 4 */}
            <Card className="shadow-elegant border border-border/40 hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">SIA</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">BeautyStudio</h4>
                    <p className="text-sm text-muted-foreground">Skaistumkopšana</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Pateicoties TGCallSoft, mūsu klienti var viegli rezervēt laikus online, un mēs varam labāk pārvaldīt savu darba grafiku."
                </p>
                <p className="text-sm font-medium text-primary">- Linda Sproģe, Salona īpašniece</p>
              </CardContent>
            </Card>

            {/* Testimonial 5 */}
            <Card className="shadow-elegant border border-border/40 hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">AS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">AutoService Pro</h4>
                    <p className="text-sm text-muted-foreground">Auto serviss</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "TGCallSoft integrācija ar WhatsApp ļauj mums ātri komunicēt ar klientiem par remonta gaitu un nepieciešamajām rezerves daļām."
                </p>
                <p className="text-sm font-medium text-primary">- Andrejs Liepa, Servisa vadītājs</p>
              </CardContent>
            </Card>

            {/* Testimonial 6 */}
            <Card className="shadow-elegant border border-border/40 hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">SIA</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">EduCenter</h4>
                    <p className="text-sm text-muted-foreground">Izglītība</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Ar TGCallSoft mēs varam viegli koordinēt kursus, informēt studentus par izmaiņām un saņemt atsauksmes par mācību kvalitāti."
                </p>
                <p className="text-sm font-medium text-primary">- Ieva Krūmiņa, Izglītības direktore</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-6 py-12 bg-card border-y border-border/40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-muted-foreground">Apmierināti klienti</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">98%</p>
              <p className="text-muted-foreground">Klientu apmierinātība</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">24/7</p>
              <p className="text-muted-foreground">Tehniskais atbalsts</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">10+ gadi</p>
              <p className="text-muted-foreground">Pieredze nozarē</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="container mx-auto px-6 py-16 text-center">
          <Card className="max-w-3xl mx-auto shadow-elegant bg-gradient-primary rounded-3xl border-none overflow-hidden hover-scale">
            <CardContent className="p-12 md:p-16">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                  Gatavs sākt darbu ar TGCallSoft?
                </h2>
                <p className="text-primary-foreground/90 mb-8 text-lg max-w-xl mx-auto">
                  Rezervē bezmaksas konsultāciju un uzzini, kā mūsu risinājums var uzlabot tavu biznesu. Mūsu eksperti ir gatavi palīdzēt.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-card rounded-full">
                    <Calendar className="w-5 h-5 mr-2" />
                    Pieteikties sarunai
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full">
                    <Phone className="w-5 h-5 mr-2" />
                    Sazināties ar mums
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src={teleGroupLogo} alt="TeleGroup" className="h-10 w-auto mb-4" />
              <p className="text-muted-foreground text-sm mt-4 max-w-xs">
                TGCallSoft ir pilnīgs CRM risinājums, kas palīdz uzņēmumiem uzlabot klientu apkalpošanu un pārdošanas efektivitāti.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Produkts</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Funkcijas</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cenas</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Integrācijas</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Atbalsts</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Uzņēmums</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Par mums</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Karjera</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blogs</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Kontakti</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Kontakti</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" /> +371 XXXXXXXX
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <MessageSquare className="h-4 w-4" /> info@tgcallsoft.lv
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TGCallSoft. Visas tiesības aizsargātas.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Lietošanas noteikumi</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privātuma politika</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Sīkdatnes</a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;