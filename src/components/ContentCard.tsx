import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ContentCardProps {
  title: string;
  content: string;
  buttonText?: string;
  className?: string;
}

const ContentCard = ({ title, content, buttonText = "Vairāk", className = "" }: ContentCardProps) => {
  return (
    <Card className={`h-full shadow-card hover:shadow-elegant transition-shadow duration-300 ${className}`}>
      <CardContent className="p-6 h-full flex flex-col">
        <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
        <p className="text-muted-foreground flex-1 leading-relaxed">{content}</p>
        <div className="mt-6">
          <Button variant="outline" size="sm" className="w-full">
            {buttonText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentCard;