import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";
const services = [
    { title: "Free counseling to select right university.", image: "/service.png" },
    { title: "Guaranteed admission in the university of choice.", image: "/service.png" },
    { title: "Visa, Apostille, Invitation letter & Other Documentation", image: "/service.png" },
    { title: "Assistance in foreign exchanges.", image: "/service.png" },
    { title: "Advance booking of Hostel Rooms.", image: "/service.png" },
    { title: "Travel arrangements from Delhi to University Campus.", image: "/service.png" },
    { title: "Sim card Arrangements", image: "/service.png" },
    { title: "Airport Pickup, Hotel Arrangement & Other Services", image: "/service.png" },
    { title: "Opening Bank Account", image: "/service.png" },
    { title: "Any Emergency Assistance", image: "/service.png" },
    { title: "Regular Feedback To Parents", image: "/service.png" },
    { title: "Assistance & Guidance During the Course of Study", image: "/service.png" }
  ];

export default function OurServicesPage(){
    return(
        <section className="section-container my-12" > 
            <h1 className="text-h1 mb-10 text-center" > Our Services</h1>
            <p className="mb-10 text-center max-w-5xl mx-auto" >We at Education Abroad Services, not only help you with the admission process, when it comes to your MBBS abroad, but also partner with you at each and every step. We are there to support you from your step into the medical university abroad till you graduate and start living your dream career. At Education Abroad Services, we provide you with the best services that make your studying MBBS abroad much easier, simpler, and hassle-free so that you enjoy maximum benefits!</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" >
                {
                    services.map((item) => (
                        <Card key={item.title} className="hover:shadow-md transition-shadow" >
                            <CardContent className="flex flex-col justify-center items-center gap-6" >
                                <Image className="object-cover rounded-sm" src={item.image} width={100} height={100} alt={item.title} />
                                <h3 className="text-center max-w-[12rem]">{item.title}</h3>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        </section>
    )
}