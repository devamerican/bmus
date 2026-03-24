import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import Link from "next/link";

const countries = [
  { title: "Russia", href: "/mbbs/russia" },
  { title: "Kazakhstan", href: "/mbbs/kazakhstan" },
  { title: "Kyrgyzstan", href: "/mbbs/kyrgyzstan" },
  { title: "Uzbekistan", href: "/mbbs/uzbekistan" },
  { title: "Nepal", href: "/mbbs/nepal" },
  { title: "Georgia", href: "/mbbs/georgia" },
  { title: "Bangladesh", href: "/mbbs/bangladesh" },
];

const usefulLinks = [
  { title: "About Us", href: "/about-us" },
  { title: "Why MBBS Abroad", href: "/why-study-mbbs-abroad" },
  { title: "Services", href: "/services" },
  { title: "FAQ's", href: "/mbbs-abroad-faq" },
  { title: "Contact Us", href: "/contact-us" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1Bm1THt5LH/",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/best_medical_university_?igsh=MTYybncwZmdja3h2Mw==",
    icon: Instagram,
  },
  {
    name: "Whatsapp",
    href: "https://wa.me/917015303343",
    icon: FaWhatsapp,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@BestMedicalUniversityServices",
    icon: FiYoutube,
  },
];

const contactInfo = [
  {
    icon: MapPin,
    text: "Opposite Indian Overseas Bank, Near Vivekanand School, Railway Road, Palwal - 121102",
    label: "Address",
  },
  {
    icon: Phone,
    text: "+91 9354086500",
    href: "tel:+919354086500",
    label: "Phone",
  },
  {
    icon: Phone,
    text: "+91 7015303343",
    href: "tel:+917015303343",
    label: "Phone",
  },
  {
    icon: Mail,
    text: "bmus.helpdesk@gmail.com",
    href: "mailto:bmus.helpdesk@gmail.com",
    label: "Email",
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="max-w-[1400px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Office Address Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-1 text-blue-400">Get In Touch</h3>
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
            </div>
            <div className="space-y-4">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-all duration-300">
                    <item.icon className="h-4 w-4 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {item.text}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-1 text-blue-400">Quick Links</h3>
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
            </div>
            <ul className="space-y-3">
              {usefulLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* MBBS Abroad Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-1 text-blue-400">MBBS Abroad</h3>
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
            </div>
            <ul className="space-y-3">
              {countries.map((country) => (
                <li key={country.title}>
                  <Link
                    href={country.href}
                    className="text-sm text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    MBBS in {country.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-1 text-blue-400">Follow Us</h3>
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
            </div>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.href}
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                    <social.icon className="h-4 w-4 text-blue-400" />
                  </div>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="text-center md:text-left">
              © 2024-25 Best Medical University Services. All rights reserved.
            </p>
            <p className="text-center md:text-right">
              Website Owned by Vishnu Sharma
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient bar */}
      <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
    </footer>
  );
};

export default Footer;
