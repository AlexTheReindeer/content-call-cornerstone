import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface InterestFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const InterestFormModal = ({ open, onOpenChange }: InterestFormModalProps) => {
  useEffect(() => {
    // Load the form embed script when modal opens
    if (open) {
      const script = document.createElement('script');
      script.src = 'https://updates.digitalmaverick.lv/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup script when modal closes
        document.body.removeChild(script);
      };
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden p-0">
        <DialogTitle className="sr-only">Kalendāra pieraksta forma</DialogTitle>
        <div className="w-full h-[524px]">
          <iframe
            src="https://updates.digitalmaverick.lv/widget/form/JVq6iM85Zi5873qjcYV0"
            className="w-full h-full border-none rounded-md"
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
      </DialogContent>
    </Dialog>
  );
};

export default InterestFormModal;