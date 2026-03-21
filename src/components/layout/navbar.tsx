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
import { Download, Menu, Plane } from "lucide-react";

import { cachedSanityFetch } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import NavbarLayout from "./navbar-layout";

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
        href: "/director-message",
        description: "A message from our director",
      },
      {
        title: "Our Services",
        href: "/services",
        description: "Explore the services we offer",
      },
      {
        title: "Student Reviews",
        href: "/student-reviews",
        description: "Read our student reviews",
      },
    ],
  },
  {
    name: "MBBS Abroad",
    href: "#",
    items: [
      {
        title: "MBBS in Russia",
        href: "/mbbs/russia",
        description: "Study medicine in Russia",
      },
      {
        title: "MBBS in Georgia",
        href: "/mbbs/georgia",
        description: "Study medicine in Georgia",
      },
      {
        title: "MBBS in Kazakhstan",
        href: "/mbbs/kazakhstan",
        description: "Study medicine in Kazakhstan",
      },
      {
        title: "MBBS in Uzbekistan",
        href: "/mbbs/uzbekistan",
        description: "Study medicine in Uzbekistan",
      },
      {
        title: "MBBS in Kyrgyzstan",
        href: "/mbbs/kyrgyzstan",
        description: "Study medicine in kyrgyzstan",
      },
      {
        title: "MBBS in Bangladesh",
        href: "/mbbs/bangladesh",
        description: "Study medicine in Bangladesh",
      },
      {
        title: "MBBS in Mauritius",
        href: "/mbbs/mauritius",
        description: "Study medicine in Mauritius",
      },
      {
        title: "MBBS in Nepal",
        href: "/mbbs/nepal",
        description: "Study medicine in Nepal",
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
  // {
  //   name: "Latest News",
  //   href: "#",
  //   items: [
  //     {
  //       title: "News & Events",
  //       href: "/news-and-events",
  //       description: "Stay updated with our latest news",
  //     },
  //     {
  //       title: "Articles & Blog",
  //       href: "/blog",
  //       description: "Read our informative articles",
  //     },
  //   ],
  // },
  {
    name: "Gallery",
    href: "#",
    items: [
      {
        title: "Photos",
        href: "/gallery/photos",
        description: "View our photo gallery",
      },
      {
        title: "Videos",
        href: "/gallery/videos",
        description: "Watch our videos",
        disabled: true,
      },
    ],
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

export default async function Navbar() {
  const QUERY = `*[_type == "navbar"]`;
  const PROSPECTUS_QUERY = `*[_type == "prospectus"]{
        "pdfUrl": prospectus.asset->url
      }`;

  const navbarData = await cachedSanityFetch(QUERY);
  const prospectusData = await cachedSanityFetch(PROSPECTUS_QUERY);

  const prospectus = (prospectusData as any[])[0];
  const navbar = (navbarData as any[])[0];

  return (
    <NavbarLayout>
      <div className="flex items-center justify-between gap-2 p-2.5 xl:p-3 mx-auto">
        {/* Logo */}
        <div className="flex gap-3 items-center">
          <Link href="/" className="flex-none">
            <div className="flex items-center gap-2">
              <Image
                src={urlFor(navbar.logo)?.width(300).height(300).url() ?? ""}
                width={50}
                height={50}
                alt="logo"
                priority
              />
              <span className="font-semibold leading-none tracking-widest font-(family-name:--font-poppins) text-xs text-blue-800">
                Best <br /> Medical <br /> University <br /> Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => {
                  // If the item has no subitems, render a simple link
                  if (!item.items) {
                    return (
                      <NavigationMenuItem key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[active=true]:bg-accent/50 data-[state=open]:bg-accent/50 data-[active=true]:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1"
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  }

                  // If the item has subitems, render a dropdown
                  return (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTrigger className="px-3">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:grid-cols-3 lg:w-[600px] xl:w-[760px]">
                          {item.items?.map((subitem, index) => (
                            <li key={index}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subitem.href}
                                  className="block p-3 space-y-1 leading-none no-underline rounded-md outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {subitem.title}
                                  </div>
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
        </div>

        {/* CTA Buttons */}
        {/* <div className="hidden lg:flex gap-2">
        </div> */}
        <div className="flex gap-2 items-center max-lg:hidden ">
          <Link
            href={prospectus.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              {" "}
              <Download /> Prospectus
            </Button>
          </Link>
          <Link href="/apply-online">
            <Button variant="blue">
              <Plane />
              Apply Now
            </Button>
          </Link>
        </div>
        {/* <Button>Apply Now</Button> */}

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="!size-5" />
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
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className="flex items-center py-2 text-base font-medium transition-colors hover:text-primary"
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    ) : (
                      <AccordionItem
                        value={`item-${idx}`}
                        className="border-b-0"
                      >
                        <AccordionTrigger className="py-2 text-base font-medium">
                          {item.name}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="pl-4 space-y-2">
                            {item.items.map((subitem, subIdx) => (
                              <SheetClose asChild key={subIdx}>
                                <Link
                                  href={subitem.href}
                                  className="block py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  {subitem.title}
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    )}
                  </div>
                ))}
              </Accordion>
              <div className="flex flex-col space-y-2 mt-6">
                <SheetClose asChild>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href={prospectus.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download />
                      Prospectus
                    </Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button asChild variant="blue" className="w-full">
                    <Link href="/apply-online">
                      <Plane /> Apply Now
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </NavbarLayout>
  );
}
