import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import CRMDiagram from "@/components/CRMDiagram";
import ContentCard from "@/components/ContentCard";
import RegistrationModal from "@/components/RegistrationModal";
import InterestFormModal from "@/components/InterestFormModal";
import { Calendar, Phone, MessageSquare, Users, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import teleGroupLogo from "@/assets/telegroup-new-logo.png";
import latvijaslotoOfficial from "@/assets/logos/latvijas-loto-official.svg";
import vcaLogo from "@/assets/logos/vca-logo.png";
import vcaRealLogo from "@/assets/logos/vca-real-logo.png";
import centralaLogo from "@/assets/logos/centrala-laboratorija-logo.png";
import ltvLogo from "@/assets/logos/ltv-official-logo.png";
import rigasVeselibasLogo from "/lovable-uploads/be06b95e-e6a0-4465-9443-b95fd903e0ba.png";
const Index = () => {
  const navigate = useNavigate();
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isInterestFormModalOpen, setIsInterestFormModalOpen] = useState(false);
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
              
              <p className="text-muted-foreground text-lg">Komplekss CRM risinājums, kas apvieno komunikāciju, klientu vadību un pārdošanas automatizāciju.</p>
              
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Galvenie ieguvumi</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              TGCallSoft nodrošina plašu funkciju klāstu, lai uzlabotu jūsu biznesa procesus un klientu apkalpošanas kvalitāti.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <ContentCard 
              title="Komunikāciju kanāli" 
              content="Visi komunikācijas kanāli vienuviet. Multikanālu rīks, kas apvieno dažādu komunikācijas kanālu ziņas: Zvani, SMS, WhatsApp, e-pasti, Telegram. Integrācijas ar ML risinājumiem." 
              icon={<MessageSquare className="h-6 w-6 text-primary" />} 
              buttonText="Uzzināt vairāk"
              onButtonClick={() => navigate('/komunikacija')}
            />
            
            <ContentCard 
              title="Darborganizācija" 
              content="Organizē un plāno darbus un informē klientus par gaidāmām vizītēm un tikšanām. Kalendārds darbu plānošanai, atgādinājumu izsūtīšana SMS un WhatsApp, atskaites, klientu norēķini, utt Piesaisti klientus tiešsaistē 24/7" 
              icon={<Calendar className="h-6 w-6 text-primary" />} 
              buttonText="Uzzināt vairāk"
              onButtonClick={() => navigate('/darborganizacija')}
            />
            
            <ContentCard 
              title="ES fondi" 
              content="Mūsu plašā pieredze Eiropas Savienības fondu piesaistē un apgūšanā var palīdzēt veicināt jūsu biznesa izaugsmi, piesaistot Eiropas finansējumu. Nodrošināsim atbalstu gan projekta sagatavošanā un dokumentu iesniegšanā, gan arī tā īstenošanas laikā." 
              icon={<BarChart3 className="h-6 w-6 text-primary" />} 
              buttonText="Uzzināt vairāk"
              onButtonClick={() => navigate('/es-fondi')} 
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
            {/* Testimonial 1 - Latvijas Loto */}
            <Card className="shadow-elegant border border-border/40 hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img src={latvijaslotoOfficial} alt="Latvijas Loto" className="w-12 h-12 object-contain" />
                  <div>
                    <h4 className="font-semibold text-foreground">Latvijas Loto</h4>
                    <p className="text-sm text-muted-foreground">Valsts izlozes</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Valsts mēroga izložu, tai skaitā interaktīvo izložu, organizēšana, laimestu apstrāde un izmaksa,organizēšana un pārdošana tiešsaistes režīmā internetā. Jau vairākus gadus izmantojam saziņai un sarunu apstrādei TBCallSoft."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 2 - VCA poliklīnika */}
            <Card className="shadow-elegant border border-border/40 hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img src={vcaRealLogo} alt="VCA poliklīnika" className="w-12 h-12 object-contain" />
                  <div>
                    <h4 className="font-semibold text-foreground">VCA poliklīnika</h4>
                    <p className="text-sm text-muted-foreground">Veselības aprūpe</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Veselības centru apvienība (VCA) ir viens no lielākajiem privātās veselības aprūpes uzņēmumiem Latvijā. Tas piedāvā medicīnas pakalpojumus Rīgā un lielākajās reģionu pilsētās. Lai apstrādātu ienākošo komunikāciju ir ieviests TBCallSoft, kas lieliski pilda saziņu ar pacientiem."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 3 - Centrālā Laboratorija */}
            <Card className="shadow-elegant border border-border/40 hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center p-1">
                    <img src={centralaLogo} alt="Centrālā Laboratorija" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Centrālā Laboratorija</h4>
                    <p className="text-sm text-muted-foreground">Medicīnas laboratorija</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Kā viena no vadošajām Latvijas laboratorijām, rūpīgi izvērtējam sadarbības partnerus, ar TBCallSoft sākām sadarbību Covid-19 pašā pīķī, kad vitāli svarīgi bija ieviest risinājumu, lai operatori zvanus varētu apkalpot no mājām un jebkuru strādājošu telefonu."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 4 - Latvijas televīzija */}
            <Card className="shadow-elegant border border-border/40 hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img src={ltvLogo} alt="Latvijas televīzija" className="w-12 h-12 object-contain" />
                  <div>
                    <h4 className="font-semibold text-foreground">Latvijas televīzija (šobrīd SIA "Latvijas Sabiedriskais medijs")</h4>
                    <p className="text-sm text-muted-foreground">Sabiedriskā raidorganizācija</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "Latvijas Televīzija ir sabiedriska raidorganizācija, kas atspoguļo un līdzdarbojoties veido Latvijas sabiedrības dienaskārtību. TBCallSoft esam ierīkojuši jau vairākus gadus, izmantojam zvanu robotu darbinieku apziņošanai, SMS izsūtni dažādos projektos un citas softā iekļautos moduļus."
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 5 - Rīgas veselības centrs */}
            <Card className="shadow-elegant border border-border/40 hover:shadow-card transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img src={rigasVeselibasLogo} alt="Rīgas veselības centrs" className="w-12 h-12 object-contain rounded-lg" />
                  <div>
                    <h4 className="font-semibold text-foreground">Rīgas veselības centrs</h4>
                    <p className="text-sm text-muted-foreground">Pašvaldības veselības centrs</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">
                  "SIA 'Rīgas veselības centrs' ir 100% apmērā Rīgas pašvaldībai piederoša kapitālsabiedrība ar vairākas desmitgades ilgu pieredzi veselības aprūpes pakalpojumu sniegšanā. Ieviesām TBCallSoft, lai apvienotu vairākus komunikāciju kanālus no visām mūsu ārstniecības iestādēm, saziņai ar pacientiem viņiem ērtā komunikāciju kanālā."
                </p>
              </CardContent>
            </Card>
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
                  <Button 
                    size="lg" 
                    variant="secondary" 
                    className="bg-white text-primary hover:bg-white/90 shadow-card rounded-full transition-all duration-300 hover:scale-105"
                    onClick={() => setIsInterestFormModalOpen(true)}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Pieteikties sarunai
                  </Button>
                  <a href="tel:+37165025535">
                    <Button size="lg" variant="outline" className="border-white/30 text-primary hover:bg-white/90 rounded-full transition-all duration-300 hover:scale-105">
                      <Phone className="w-5 h-5 mr-2" />
                      Sazināties ar mums
                    </Button>
                  </a>
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
      
      <RegistrationModal 
        open={isRegistrationModalOpen} 
        onOpenChange={setIsRegistrationModalOpen} 
      />
      <InterestFormModal 
        open={isInterestFormModalOpen} 
        onOpenChange={setIsInterestFormModalOpen} 
      />
    </div>;
};
export default Index;