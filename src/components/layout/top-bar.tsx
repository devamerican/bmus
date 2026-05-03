import Link from "next/link";
import { CalendarCheck, Mail, Phone } from "lucide-react";
import { Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

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

export default function TopBar() {
  return (
    <div className="hidden md:block bg-blue-950 text-white text-xs">
      <div className="flex items-center justify-between px-4 py-1.5 mx-auto max-w-[1400px]">
        <div className="flex items-center gap-4">
          <a
            href="tel:+919354086500"
            className="flex items-center gap-1.5 hover:text-blue-300 transition-colors"
          >
            <Phone className="size-3" />
            <span>+91 9354086500</span>
          </a>
          <a
            href="mailto:bmus.helpdesk@gmail.com"
            className="flex items-center gap-1.5 hover:text-blue-300 transition-colors"
          >
            <Mail className="size-3" />
            <span>bmus.helpdesk@gmail.com</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="hover:text-blue-300 transition-colors"
              >
                <social.icon className="size-3.5" />
              </a>
            ))}
          </div>
          <div className="w-px h-3.5 bg-blue-700" />
          <Link
            href="/appointment-form"
            className="flex items-center gap-1.5 font-medium hover:text-blue-300 transition-colors"
          >
            <CalendarCheck className="size-3" />
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
