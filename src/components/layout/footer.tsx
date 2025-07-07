import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import Link from "next/link";

const countries = [
  {
    title: "Russia",
    href: "/mbbs/russia",
  },
  {
    title: "Kazakhstan",
    href: "/mbbs/kazakhstan",
  },
  {
    title: "Kyrgyzstan",
    href: "/mbbs/kyrgyzstan",
  },
  {
    title: "Uzbekistan",
    href: "/mbbs/uzbekistan",
  },
  // {
  //   title: "Serbia",
  //   href: "/mbbs/serbia",
  // },
  {
    title: "Nepal",
    href: "/mbbs/nepal",
  },
  {
    title: "Georgia",
    href: "/mbbs/georgia",
  },
  {
    title: "Bangladesh",
    href: "/mbbs/bangladesh",
  },
];

const usefulLinks = [
  { title: "About Us", href: "/about-us" },
  { title: "Why MBBS Abroad", href: "/why-study-mbbs-abroad" },
  { title: "Services", href: "/services" },
  // { title: "News & Events", href: "/news-and-events" },
  { title: "Countries", href: "/countries" },
  // { title: "Blog", href: "/blog" },
  { title: "Contact Us", href: "/contact-us" },
];

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-primary-foreground pt-12">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Office Address Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Office Address</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1 flex-none" />
                <p className="text-sm hover:opacity-75">
                  Opposite Indian Overseas Bank <br /> Near Vivekanand School{" "}
                  <br /> Railway Road <br /> Palwal - 121102
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a
                  href="tel:+919910180049"
                  className="text-sm hover:opacity-75"
                >
                  +91 9050086500
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a
                  href="mailto:info@eduabroadservices.com"
                  className="text-sm hover:opacity-75"
                >
                  info@bmus.co.in
                </a>
              </div>
            </div>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-sm hover:opacity-75">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* MBBS Abroad Section */}
          <div>
            <h3 className="text-xl font-semibold  mb-4">MBBS Abroad</h3>
            <ul className="space-y-2">
              {countries.map((country) => (
                <li key={country.title}>
                  <Link
                    href={country.href}
                    className="text-sm hover:opacity-75"
                  >
                    MBBS in {country.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
            {/* react out to facebook, twitter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Facebook className="h-5 w-5" />
                <a
                  target="_blank"
                  href="https://www.facebook.com/share/1Bm1THt5LH/"
                  className="text-sm hover:opacity-75"
                >
                  Facebook
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="h-5 w-5" />
                <a
                  target="_blank"
                  href="https://www.instagram.com/best_medical_university_?igsh=MTYybncwZmdja3h2Mw=="
                  className="text-sm hover:opacity-75"
                >
                  Instagram
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp  className="h-5 w-5" />
                <a
                  target="_blank"
                  href="https://wa.me/917015303343"
                  className="text-sm hover:opacity-75"
                >
                  Whatsapp
                </a>
              </div>
            </div>
            {/* <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 bg-zinc-800 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 bg-zinc-800 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Message"
                rows={3}
                className="w-full px-3 py-2 bg-zinc-800 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button
                type="submit"
                variant="secondary"
              >
                Send Message
              </Button>
            </form> */}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 py-6   text-center text-xs md:text-sm">
          <p>
            Copyright © 2024-25 | Best Medical University Services | Website 
            Owned by Vishnu Sharma
            {/* <Link
              target="_blank"
              href="https://ajaygaur.in"
              className="hover:text-white transition-colors underline hover:no-underline"
            >
              Ajay Gaur
            </Link> */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
