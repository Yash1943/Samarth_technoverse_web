import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 flex justify-center">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-teal-500">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-10 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full opacity-10 -translate-x-1/3 translate-y-1/3" />

          <div className="relative px-6 py-16 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-2xl mx-auto">
              Ready to Transform Your Business with Technology?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can address your unique challenges and drive growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
                <Link href="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}