import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/shared/logo";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const addresses = [
    {
      country: "India",
      address: "One42 North Tower, 1101 - 1103, Ambli Rd, off Iscon, near Jayantilal BRTS Bus Stand, Ashok Vatika, Ahmedabad, Gujarat 380058",
    },
    {
      country: "India",
      address: "Samarth House, SH 215, Paldi Road, Visnagar – 384315",
    }
  ];

  return (
    <footer className="bg-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              {/* <Logo /> */}
              <img 
                src="/Founder/SamarthTechLogo/SD_Technoverse_SVG.svg"
                alt="Samarth Technoverse Logo"
                className="h-28 w-56"
              />
            </Link>
            <p className="text-muted-foreground">
              Transforming businesses through innovative technology solutions and
              expert consultancy services.
            </p>
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
              {/* <li>
                <Link
                  href="/team"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Our Team
                </Link>
              </li> */}
              <li>
                <Link
                  href="/Careers"
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

          <div className="">
            {/* <h3 className="font-semibold text-lg">Newsletter</h3>
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
            </div> */}
            <div className="bg-card p-6 rounded-lg shadow space-y-4 pt-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">+91 90394 90594</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                info@samarthtechnoverse.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Locations</h2>
            <div className="flex items-start space-x-4">
              <MapPin className="h-10 w-10 text-muted-foreground" />
              <ul className="space-y-2">
                {addresses.map((addr, idx) => (
                  <li key={idx}>
                    <span> • {addr.address}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-start md:justify-end space-x-4">
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