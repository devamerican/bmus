
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download, Globe, Mail, Menu, Phone } from "lucide-react";

const navItems = [
//   {
//     name: "Home",
//     href: "/",
//   },
  {
    name: "About Us",
    href: "#",
    items: [
      {
        title: "Overview",
        href: "/about-us",
        description: "Learn about our mission and vision",
      },
      {
        title: "Director's message",
        href: "/about-us",
        description: "A message from our director",
      },
      {
        title: "Our Services",
        href: "/services",
        description: "Explore the services we offer",
      },
    ],
  },
  {
    name: "MBBS Abroad",
    href: "#",
    items: [
      {
        title: "MBBS in Russia",
        href: "/mbbs-abroad",
        description: "Study medicine in Russia",
      },
      {
        title: "MBBS in India",
        href: "/mbbs-abroad",
        description: "Study medicine in India",
      },
      {
        title: "MBBS in UAE",
        href: "/mbbs-abroad",
        description: "Study medicine in UAE",
      },
      {
        title: "MBBS in Tajikistan",
        href: "/mbbs-abroad",
        description: "Study medicine in Tajikistan",
      },
      {
        title: "MBBS in Georgia",
        href: "/mbbs-abroad",
        description: "Study medicine in Georgia",
      },
    ],
  },
  {
    name: "Student Essentials",
    href: "#",
    items: [
      {
        title: "Why study MBBS Abroad",
        href: "/why-study-mbbs-abroad",
        description: "Benefits of studying medicine abroad",
      },
      {
        title: "MBBS Abroad Eligibility and Document",
        href: "/mbbs-abroad-eligibility-and-document",
        description: "Requirements and documentation",
      },
      {
        title: "MBBS Abroad FAQ's",
        href: "/mbbs-abroad-faq",
        description: "Frequently asked questions",
      },
      {
        title: "Admission Process",
        href: "/admission-process",
        description: "Steps to secure admission",
      },
    ],
  },
  {
    name: "Latest News",
    href: "#",
    items: [
      {
        title: "News & Events",
        href: "/news-and-events",
        description: "Stay updated with our latest news",
      },
      {
        title: "Articles & Blog",
        href: "/blog",
        description: "Read our informative articles",
      },
    ],
  },
  {
    name: "Gallery",
    href: "#",
    items: [
      {
        title: "Photos",
        href: "/photos",
        description: "View our photo gallery",
      },
      {
        title: "Videos",
        href: "/videos",
        description: "Watch our videos",
      },
    ],
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

export default function Navbar() {

  return (
    <>
          <div className="hidden lg:flex justify-between items-center gap-3 p-3 bg-secondary " >
            <ul className="flex gap-3" >
                <li className="flex gap-1 text-sm"> <Phone size={18} /> +91 9910180049</li>
                <li className="flex gap-1 text-sm"> <Mail size={18} /> info@eduabroadservices.com</li>
            </ul>
            <Button size="sm" variant="outline" >
                <Globe />
                Apply Now
            </Button>
        </div>
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="flex items-center justify-between gap-2 p-2.5 xl:p-3 mx-auto">
        {/* Logo */}
        <Link href="/" className="flex-none">
          <Image
            src="/newlogo.png"
            width={100}
            height={30}
            alt="logo"
            className="h-auto hidden xl:block"
            priority
          />
          <Image
            src="/sm-logo.jpg"
            width={50}
            height={50}
            alt="logo"
            className="h-auto xl:hidden"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navItems.map((item) => {
                // If the item has no subitems, render a simple link
                if (!item.items) {
                  return (
                    <NavigationMenuItem key={item.name}>
                      <Link href={item.href} legacyBehavior passHref>
                        {/* <NavigationMenuLink className={navigationMenuTriggerStyle()}> */}
                        <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[active=true]:bg-accent/50 data-[state=open]:bg-accent/50 data-[active=true]:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1" >
                          {item.name}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  );
                }

                // If the item has subitems, render a dropdown
                return (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.items?.map((subitem, index) => (
                          <li key={index}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={subitem.href}
                                className="block p-3 space-y-1 leading-none no-underline rounded-md outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{subitem.title}</div>
                                {subitem.description && (
                                  <p className="text-sm leading-snug text-muted-foreground">
                                    {subitem.description}
                                  </p>
                                )}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Buttons */}
        {/* <div className="hidden lg:flex gap-2">
        </div> */}
          <Button className="max-lg:hidden "> <Download /> Prospectus</Button>
          {/* <Button>Apply Now</Button> */}

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <div className="p-4">
              <Accordion type="single" collapsible className="w-full">
                {navItems.map((item, idx) => (
                  <div key={idx} className="py-1">
                    {!item.items ? (
                      <Link
                        href={item.href}
                        className="flex items-center py-2 text-base font-medium transition-colors hover:text-primary"
                      >
                        <SheetClose>
                            {item.name}
                        </SheetClose>
                      </Link>
                    ) : (
                      <AccordionItem value={`item-${idx}`} className="border-b-0">
                        <AccordionTrigger className="py-2 text-base font-medium">
                          {item.name}
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="pl-4 space-y-2">
                                {item.items.map((subitem, subIdx) => (
                                    <Link
                                    key={subIdx}
                                    href={subitem.href}
                                    className="block py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                    <SheetClose key={subIdx}>
                                        {subitem.title}
                                    </SheetClose>
                                </Link>
                                ))}
                            </div>
                        </AccordionContent>
                      </AccordionItem>
                    )}
                  </div>
                ))}
              </Accordion>
              <div className="flex flex-col space-y-2 mt-6">
                <Button variant="outline" className="w-full">Prospectus</Button>
                <Button className="w-full">Apply Now</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
    </>

  );
}