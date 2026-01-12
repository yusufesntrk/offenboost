import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";
import { PAGE_SEO } from "@/lib/seo-config";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <SEO
        title={PAGE_SEO.notFound.title}
        description={PAGE_SEO.notFound.description}
        noindex={true}
      />
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold gradient-text mb-4">404</div>
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Seite nicht gefunden
        </h1>
        <p className="text-muted-foreground mb-8">
          Die angeforderte Seite existiert leider nicht. Möglicherweise wurde
          sie verschoben oder gelöscht.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/">
              <Home className="mr-2 w-4 h-4" />
              Zur Startseite
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Zurück
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
