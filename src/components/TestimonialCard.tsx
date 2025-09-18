import { Card, CardContent } from "@/components/ui/card";
import { useImageIntersection } from "@/hooks/useImageIntersection";

interface TestimonialCardProps {
  logo: string;
  alt: string;
  title: string;
  description: string;
}

const TestimonialCard = ({ logo, alt, title, description }: TestimonialCardProps) => {
  const { ref, isVisible } = useImageIntersection();

  return (
    <Card className="bg-card/80 border border-border/20 shadow-soft hover:shadow-medium transition-all duration-300">
      <CardContent className="p-6 text-center">
        <div ref={ref} className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-soft">
          {isVisible ? (
            <img 
              src={logo}
              alt={alt}
              className="max-w-full max-h-full object-contain p-2 testimonial-img loaded"
              width="80"
              height="80"
              loading="lazy"
              decoding="async"
              onLoad={(e) => e.currentTarget.classList.add('loaded')}
            />
          ) : (
            <div className="w-16 h-16 skeleton" />
          )}
        </div>
        <h3 className="font-playfair font-bold text-primary mb-2">{title}</h3>
        <p className="font-lato text-muted-foreground text-sm">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;