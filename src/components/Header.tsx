import teleGroupLogo from "@/assets/telegroup-new-logo.png";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const [showFormIframe, setShowFormIframe] = useState(false);

  useEffect(() => {
    if (showFormIframe) {
      const script = document.createElement('script');
      script.src = 'https://updates.digitalmaverick.lv/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [showFormIframe]);

  return (
    <header className="w-full bg-card border-b border-border shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={teleGroupLogo} 
              alt="TeleGroup" 
              className="h-[150px] w-auto"
            />
          </div>
          
          <Button 
            variant="purple" 
            size="sm" 
            className="hidden md:flex"
            onClick={() => setShowFormIframe(true)}
          >
            <Phone className="w-4 h-4 mr-2" />
            Esmu ieinteresēts
          </Button>
        </div>
      </div>
      {/* Form iframe overlay */}
      {showFormIframe && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden relative">
            <button 
              onClick={() => setShowFormIframe(false)}
              className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
            >
              ✕
            </button>
            <iframe
              src="https://updates.digitalmaverick.lv/widget/form/JVq6iM85Zi5873qjcYV0"
              className="w-full h-[524px] border-none rounded-lg"
              id="popup-JVq6iM85Zi5873qjcYV0" 
              data-layout="{'id':'POPUP'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Kalendāra pieraksta forma | Standarta"
              data-height="524"
              data-layout-iframe-id="popup-JVq6iM85Zi5873qjcYV0"
              data-form-id="JVq6iM85Zi5873qjcYV0"
              title="Kalendāra pieraksta forma | Standarta"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;