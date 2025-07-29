import { MessageCircle, Mail, Phone, BarChart3, Users, TrendingUp, Activity } from "lucide-react";

const CRMDiagram = () => {
  const topServices = [
    { name: "Zvani", icon: Phone, color: "text-blue-500" },
    { name: "WhatsApp", icon: MessageCircle, color: "text-green-500" },
    { name: "E-pasts", icon: Mail, color: "text-purple-500" },
    { name: "SMS", icon: MessageCircle, color: "text-orange-500" }
  ];

  const bottomServices = [
    { name: "Komunikācija", icon: MessageCircle, color: "text-primary" },
    { name: "Klientu vadība", icon: Users, color: "text-secondary" },
    { name: "Pārdošana un mārketings", icon: TrendingUp, color: "text-accent" },
    { name: "Analītika un kontrole", icon: BarChart3, color: "text-muted-foreground" }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Top services */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {topServices.map((service, index) => (
          <div key={service.name} className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
            <div className="mb-4 p-4 rounded-full bg-background shadow-lg border-2 border-border/50 group-hover:shadow-xl transition-all duration-300">
              <service.icon className={`w-8 h-8 ${service.color}`} />
            </div>
            <span className="text-sm font-medium text-foreground">{service.name}</span>
          </div>
        ))}
      </div>

      {/* Central TGCallSoft hub */}
      <div className="flex justify-center mb-16">
        <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
          <div className="bg-gradient-primary text-primary-foreground rounded-full p-8 shadow-elegant border-4 border-primary-light group-hover:shadow-glow transition-all duration-300">
            <div className="flex items-center gap-3">
              <Activity className="w-10 h-10" />
              <span className="text-2xl font-bold">TGCallSoft</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom services */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {bottomServices.map((service, index) => (
          <div key={service.name} className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
            <div className="mb-4 p-4 rounded-full bg-background shadow-lg border-2 border-border/50 group-hover:shadow-xl transition-all duration-300">
              <service.icon className={`w-8 h-8 ${service.color}`} />
            </div>
            <span className="text-sm font-medium text-foreground">{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CRMDiagram;