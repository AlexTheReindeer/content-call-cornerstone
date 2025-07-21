import { MessageCircle, Mail, Phone, BarChart3, Users, TrendingUp, Activity } from "lucide-react";

const CRMDiagram = () => {
  const topServices = [
    { name: "Zvani", icon: Phone },
    { name: "WhatsApp", icon: MessageCircle },
    { name: "E-pasts", icon: Mail },
    { name: "SMS", icon: MessageCircle }
  ];

  const bottomServices = [
    { name: "Komunikācija", icon: MessageCircle },
    { name: "Klientu vadība", icon: Users },
    { name: "Pārdošana un mārketings", icon: TrendingUp },
    { name: "Analītika un kontrole", icon: BarChart3 }
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto p-8">
      {/* Top services */}
      <div className="flex justify-center items-center gap-8 mb-12">
        {topServices.map((service, index) => (
          <div key={service.name} className="relative">
            <div className="bg-secondary-light border-2 border-secondary rounded-full px-6 py-3 shadow-card">
              <div className="flex items-center gap-2">
                <service.icon className="w-5 h-5 text-secondary-dark" />
                <span className="text-sm font-medium text-foreground">{service.name}</span>
              </div>
            </div>
            {/* Connection lines */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-secondary opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Central TGCallSoft hub */}
      <div className="flex justify-center mb-12">
        <div className="relative">
          <div className="bg-gradient-primary text-primary-foreground rounded-full px-12 py-8 shadow-elegant border-4 border-primary-light">
            <div className="flex items-center gap-3">
              <Activity className="w-8 h-8" />
              <span className="text-2xl font-bold">TGCallSoft</span>
            </div>
          </div>
          
          {/* Connecting lines to bottom services */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-secondary opacity-60"></div>
        </div>
      </div>

      {/* Bottom services */}
      <div className="flex justify-center items-center gap-8">
        {bottomServices.map((service, index) => (
          <div key={service.name} className="relative">
            {/* Connection line from center */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-secondary opacity-60"></div>
            
            <div className="bg-secondary-light border-2 border-secondary rounded-full px-6 py-3 shadow-card">
              <div className="flex items-center gap-2">
                <service.icon className="w-5 h-5 text-secondary-dark" />
                <span className="text-sm font-medium text-foreground">{service.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CRMDiagram;