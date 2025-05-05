import Image from "next/image"
import Link from "next/link"

const countries = [
    {
        flag: '/flags/flag-russia.jpg',
        name: "Russia",
        title: "35+ Universities",
        href: "/mbbs/russia",
    },
    {
        flag: '/flags/flag-kazakhstan.jpg',
        name: "Kazakhstan",
        title: "8+ Universities",
        href: "/mbbs/kazakhstan",
    },
    {
        flag: '/flags/flag-georgia.jpg',
        name: "Georgia",
        title: "20+ Colleges",
        href: "/mbbs/georgia",
    },
    {
        flag: '/flags/flag-uzbekistan.jpg',
        name: "Uzbekistan",
        title: "6+ Universities",
        href: "/mbbs/uzbekistan",
    },
    {
        flag: '/flags/flag-mauritius.jpg',
        name: "Mauritius",
        title: "4+ Universities",
        href: "/mbbs/mauritius",
    },
    {
        flag: '/flags/flag-nepal.jpg',
        name: "Nepal",
        title: "18+ Colleges",
        href: "/mbbs/nepal",
    },
    {
        flag: '/flags/flag-bangladesh.jpg',
        name: "Bangladesh",
        title: "30+ Colleges",
        href: "/mbbs/bangladesh",
    },
    {
        flag: '/flags/flag-kyrgyzstan.jpg',
        name: "Kyrgyzstan",
        title: "6+ Colleges",
        href: "/mbbs/kyrgyzstan",
    }
]

export default function MBBSAbroadForIndians() {
    return (
        <section className="section-container my-12 md:my-16 lg:my-20" >
            <div className="mb-10 md:mb-14 lg:mb-20" >
                <h2 className="text-h2 text-center mb-2" >MBBS Abroad For Indian Students</h2>
                <p className="text-center max-w-3xl mx-auto" >Get admission in world-ranking top medical universities approved by NMC, WHO at lowest fees & sophisticated education facilities.</p>
            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" >
                {
                    countries.map((country) => (
                        <div key={country.name} className="flex items-center gap-4 p-4  rounded-xl " >
                            <Link href={country.href} >
                                <Image className='size-20 object-cover rounded-full ring-4 ring-indigo-500 hover:ring-0 hover:scale-[1.1] cursor-pointer transition-all' src={country.flag} width={100} height={100} alt={country.name} /> 
                            </Link>
                            <div>
                                <h3 className="text-base md:text-lg font-semibold">
                                    {country.title}
                                </h3>
                                {country.name}
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}