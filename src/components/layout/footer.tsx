import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

const countries = [
    'Russia',
    'Kazakhstan',
    'Kyrgyzstan',
    'Uzbekistan',
    'Serbia',
    'Georgia',
    'Bangladesh'
  ]

const usefulLinks = ['About Us', 'Why MBBS Abroad', 'Services', 'News & Events', 'Countries', 'Blog', 'Contact Us']

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12">
      <div className="container max-w-[1440px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Office Address Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Office Address</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1" />
                <p className="text-sm hover:opacity-75">
                  Education Abroad Services<br />
                  304-305, 3rd Floor, OM Subham Tower<br />
                  Neelam-Bata Road, NIT<br />
                  Faridabad-121001<br />
                  Haryana, India
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:+919910180049" className="text-sm hover:opacity-75">
                  +91 9910180049
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:info@eduabroadservices.com" className="text-sm hover:opacity-75" >
                  info@eduabroadservices.com
                </a>
              </div>
            </div>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <Link 
                    href={`/${link.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                    className="text-sm hover:opacity-75"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* MBBS Abroad Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">MBBS Abroad</h3>
            <ul className="space-y-2">
              {countries.map((country) => (
                <li key={country}>
                  <Link 
                    href={`/mbbs-in-${country.toLowerCase()}`}
                    className="text-sm hover:opacity-75"
                  >
                    MBBS in {country}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact Form */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Contact</h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2 bg-slate-800 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 bg-slate-800 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Message"
                rows={3}
                className="w-full px-3 py-2 bg-slate-800 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button
                type="submit"
                variant="secondary"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-slate-800/75 text-center text-sm">
          <p>
            Copyright © 2014-25 || Education Abroad Services || Website Designed & developed by Ajay Gaur
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;