import { useEffect } from "react";

interface InterestFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const InterestFormModal = ({ open, onOpenChange }: InterestFormModalProps) => {
  useEffect(() => {
    if (open) {
      // Load the form embed script when modal opens
      const script = document.createElement('script');
      script.src = 'https://updates.digitalmaverick.lv/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup script when modal closes
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden relative">
        <button 
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
        >
          ✕
        </button>
        <iframe
          src="https://updates.digitalmaverick.lv/widget/form/JVq6iM85Zi5873qjcYV0"
          className="w-full h-[524px] border-none rounded-lg"
          id="inline-JVq6iM85Zi5873qjcYV0" 
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Kalendāra pieraksta forma | Standarta"
          data-height="524"
          data-layout-iframe-id="inline-JVq6iM85Zi5873qjcYV0"
          data-form-id="JVq6iM85Zi5873qjcYV0"
          title="Kalendāra pieraksta forma | Standarta"
        />
      </div>
    </div>
  );
};

export default InterestFormModal;