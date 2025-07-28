import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface RegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  notes: string;
}

const RegistrationModal = ({ open, onOpenChange }: RegistrationModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "Kļūda",
        description: "Lūdzu aizpildiet visus obligātos laukus",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create email body
      const emailBody = `
Jauna reģistrācijas forma no TGCallSoft vietnes:

Vārds: ${formData.name}
Uzņēmums: ${formData.company || 'Nav norādīts'}
Tālrunis: ${formData.phone}
E-pasts: ${formData.email || 'Nav norādīts'}
Piezīmes/komentāri: ${formData.notes || 'Nav piezīmju'}

Nosūtīts: ${new Date().toLocaleString('lv-LV')}
      `.trim();

      // Create mailto link
      const subject = encodeURIComponent('Jauna pieteikšanās TGCallSoft');
      const body = encodeURIComponent(emailBody);
      const mailtoLink = `mailto:uldis@telegroup.lv?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      toast({
        title: "Paldies!",
        description: "Jūsu pieteikums ir sagatavots. E-pasta programma tiks atvērta automātiski.",
      });
      
      // Reset form and close modal
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        notes: ""
      });
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Kļūda",
        description: "Neizdevās nosūtīt pieteikumu. Lūdzu mēģiniet vēlreiz.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Pieteikties konsultācijai
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Jūsu vārds <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-foreground">
              Uzņēmums
            </Label>
            <Input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">
              Tālrunis <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              E-pasts
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes" className="text-foreground">
              Piezīmes/komentāri
            </Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              rows={4}
              className="w-full resize-none"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 rounded-full"
              style={{ backgroundColor: '#0ffdbc', color: '#000' }}
            >
              {isSubmitting ? 'Nosūta...' : 'Nosūtīt'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="rounded-full"
            >
              Atcelt
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;