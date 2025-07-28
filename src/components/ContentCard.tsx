import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ContentCardProps {
  title: string;
  content: string;
  buttonText?: string;
  className?: string;
  icon?: React.ReactNode;
  onButtonClick?: () => void;
  navigateTo?: string;
}

const ContentCard = ({ 
  title, 
  content, 
  buttonText = "Vairāk", 
  className = "",
  icon,
  onButtonClick,
  navigateTo
}: ContentCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    } else if (onButtonClick) {
      onButtonClick();
    }
  };
  return (
    <Card className={`h-full shadow-card hover:shadow-elegant transition-all duration-300 hover:translate-y-[-5px] ${className}`}>
      <CardContent className="p-8 h-full flex flex-col">
        {icon && (
          <div className="mb-4 p-3 rounded-full bg-primary-light/20 w-fit">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-semibold text-foreground mb-4">{title}</h3>
        <p className="text-muted-foreground flex-1 leading-relaxed">{content}</p>
        <div className="mt-6">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full hover:bg-primary hover:text-primary-foreground group transition-all duration-300"
            onClick={handleClick}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentCard;