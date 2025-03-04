import {  Mail, MessageSquare, Phone } from "lucide-react";
import {Card, CardHeader, CardContent } from "@/components/ui/card";
import CounselingForm from "@/components/home/counseling-form";

const items = [
    {
        title: "Call Our Team",
        icon: Phone,
        details: "+91 129 4150049, +91-9910180049, +91-9910850049"
    },
    {
        title: "Chat on WhatsApp",
        icon: MessageSquare,
        details: "+91-9910180049, +91-9910850049"
    },
    {
        title: "Write to us",
        icon: Mail,
        details: "info@eduabroadservices.com"
    }
]

export default function ApplyOnlinePage(){
    return(
        <section className="section-container my-8 md:my-12" >
            <h1 className="text-h1 text-center mb-10 md:mb-14 lg:mb-20" >Online Application Form</h1>



            <div className="flex flex-col md:flex-row *:basis-1/2 gap-6" >
            <Card className=" p-6 mx-auto w-full" >
                <CardContent className="p-0" >
                    <CounselingForm theme="light" />
                </CardContent>
            </Card>

            <Card className="" >
                <CardHeader className="text-h3 md:mb-6" >
                    Get in Touch With Us
                </CardHeader>
                <CardContent className="space-y-3 md:space-y-6 px-3 md:px-6" >
                        {
                            items.map((item) => (
                                <div key={item.title} className="flex items-start gap-4 p-4  rounded-xl " >
                                    <item.icon size={22} className="flex-none" />
                                    <div>
                                        <h3 className="text-base md:text-lg font-semibold">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm md:text-base" >{item.details}</p>
                                    </div>
                                </div>
                            ))
                        }
                </CardContent>
        </Card>
            </div>

        </section>
    )
}