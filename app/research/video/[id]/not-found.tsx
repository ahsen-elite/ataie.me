import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Video Not Found
        </h1>
        <p className="text-muted-foreground mb-6">
          The requested video could not be found.
        </p>
        <Link href="/research">
          <Button>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Research
          </Button>
        </Link>
      </div>
    </main>
  );
}
