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
        <section className="section-container my-12" >
            <h1 className="text-h1 text-center mb-20" >Online Application Form</h1>



            <div className="flex *:basis-1/2 gap-6" >
            <Card className="bg-zinc-800 text-white p-6 py-10 max-w-3xl mx-auto w-full" >
                <CardContent >
                    <CounselingForm />
                </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow " >
                <CardHeader className="text-h3" >
                    Get in Touch With Us
                </CardHeader>
                <CardContent className="space-y-6 " >
                        {
                            items.map((item) => (
                                <div key={item.title} className="flex items-start gap-4 p-4  rounded-xl " >
                                    <item.icon size={22} />
                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            {item.title}
                                        </h3>
                                        <p>{item.details}</p>
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