import teleGroupLogo from "@/assets/telegroup-new-logo.png";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-card border-b border-border shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={teleGroupLogo} 
              alt="TeleGroup" 
              className="h-24 w-auto"
            />
          </div>
          
          <Button variant="purple" size="sm" className="hidden md:flex">
            <Phone className="w-4 h-4 mr-2" />
            Esmu ieinteresēts
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;