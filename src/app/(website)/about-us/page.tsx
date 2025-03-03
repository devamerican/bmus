import { Card, CardContent } from "@/components/ui/card";
import { Globe, Handshake, Landmark, Laugh } from "lucide-react";
import Image from "next/image";

const achievementsItems = [
    {
        id: 1,
        title: "13+ Years of Experience",
        icon: Handshake
    },
    {
        id: 2,
        title: "15+ Countries for MBBS",
        icon: Globe 
    },
    {
        id: 3,
        title: "100+ Connected Universities",
        icon: Landmark
    },
    {
        id: 4,
        title: "1000+ Happy Students",
        icon: Laugh 
    },
]

const team = [
    {
        id: 1,
        image: '/anik.jpg',
        name: 'Ajay Gaur',
        desingnation: 'Director',
    },
    {
        id: 2,
        image: '/anik.jpg',
        name: 'Ajay Gaur',
        desingnation: 'Associate Director',
    },
    {
        id: 3,
        image: '/anik.jpg',
        name: 'Ajay Gaur',
        desingnation: 'Director',
    },
    {
        id: 4,
        image: '/anik.jpg',
        name: 'Ajay Gaur',
        desingnation: 'Director',
    },
]


export default function AboutUs() {
  return (
    <section className="max-w-5xl mx-auto my-10">
      <h1 className="text-h1 text-center mb-20" >About Us</h1>
      <h2 className="text-h2 mb-8">Welcome to Education Abroad Services</h2>
      <div className="space-y-8" >
        <p>Education Abroad Services Overseas CAREER Consultants provides “One Stop Solution for All Your International Education Needs”.</p>
        <p>We offer a wide-ranging portfolio of outstanding and brilliantly managed services right from pre-admission to post landing services designed to suit the individual needs of the students.Our quality counseling distinguishes us from others in a way that we offer personalized counseling where there is direct involvement of the directors who have been educated in the finest institutes in India and abroad and have first-hand experience of the international culture and education system.</p>
        <p>Our team put forward sincere efforts and commitment on each student application case to help student realize the dream of studying in the best universities of the world. We are committed to contribute to our country and world in the education arena. Excellence is the top focus for our company. Our company continuously improves our services to deliver the best services and optimum satisfaction to all.</p>
        <p>We aim at bringing education in every corner of the country. Every town, village, district should be flooded with education is the motto that we believe in. With its corporate office in FARIDABAD NCR, EDUCATION ABROAD SERVICES is spreading its spectrum by getting functional PAN India to cater to maximum.</p>
      </div>


        {/* Achievements */}
      <div className="my-24" >

        <h2 className="text-h2 mb-12" >Achievements</h2>
        <div className="grid grid-cols-4 place-content-center place-items-center gap-4" >
            {
                achievementsItems.map((item) => (
                        <Card key={item.id} className="hover:shadow-md transition-shadow" >
                            <CardContent  >
                                <item.icon size={32} className=" mb-6 text-blue-500" />
                                <h4 className="text-lg font-semibold " >{item.title}</h4>
                            </CardContent>
                        </Card>
                ))
            }
        </div>

      </div>

        
    {/* our team */}
    <div>

        <h2 className="text-h2 mb-1" >Our Team</h2>
        <p className="text-muted-foreground mb-12" >Meet the experts behind Education Abroad Services</p>

        <div className="grid grid-cols-4 gap-10" >
        {
            team.map((item) => (
                <div key={item.id} className="flex flex-col items-center justify-center">
                    <Image className="w-full mb-2 rounded-2xl" src={item.image} alt={item.name} width={300} height={300} />
                    <h4 className="text-xl font-medium mb-1">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.desingnation}</p>
                </div>
            ))
        }
        </div>


    </div>


    </section>
  );
}