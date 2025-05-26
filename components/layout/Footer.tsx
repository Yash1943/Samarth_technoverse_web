import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/shared/logo";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Logo />
            </Link>
            <p className="text-muted-foreground">
              Transforming businesses through innovative technology solutions and
              expert consultancy services since 2025.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/erp-solutions"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  ERP Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-app-development"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Web & App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consultancy-services"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Consultancy Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/automation-solutions"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Automation Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Newsletter</h3>
            <p className="text-muted-foreground">
              Subscribe to receive updates on new services and tech insights.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="max-w-[220px]"
              />
              <Button>Subscribe</Button>
            </div>
            <div className="space-y-2 pt-4">
              <div className="flex flex-col sm:flex-row items-start sm:space-x-2 gap-2">
                <div className="flex items-start space-x-2 mb-2 sm:mb-0">
                  <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Samarth House, Visnagar, Gujarat, India, 384315
                  </p>
                </div>
                <div className="w-full sm:w-[350px]">
                  <iframe
                    src="https://www.google.com/maps?q=Samarth+House,+Visnagar,+Gujarat,+India,+384315&output=embed"
                    width="100%"
                    height="150"
                    style={{ border: 0, borderRadius: '0.5rem', marginTop: '0.5rem' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Samarth Technoverse Location"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  info@samarth-technoverse.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Samarth Technoverse Pvt. Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}