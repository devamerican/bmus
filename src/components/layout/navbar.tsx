import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    // NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    // NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  

const navItems = [
    {
        name: "Home",
        href: "#",
    },
    {
        name: "About Us",
        href: "#",
    },
    {
        name: "MBBS Abroad",
        href: "#",
    },
    {
        name: "Student Essentials",
        href: "#",
    },
    {
        name: "Latest News",
        href: "#",
    },
    {
        name: "Gallery",
        href: "#",
    },
    {
        name: "Contact Us",
        href: "#",
    },
];          
    

export default function Navbar(){
    return(
        <nav className="flex justify-between items-center gap-2 p-4 border-b" >
            <Image src="/newlogo.png" width={130} height={50} alt="logo" />

            <div>
            <NavigationMenu>
            <NavigationMenuList>

                {
                    navItems.map((item) => (
                        <NavigationMenuItem key={item.name}>
                            <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink href={item.href}>Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ))
                }

            </NavigationMenuList>
            </NavigationMenu>


            </div>

            <div className="space-x-2" >
                <Button>Prospectus</Button>
                <Button>Apply Now</Button>
            </div>
        </nav>
    )
}