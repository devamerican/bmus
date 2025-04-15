import CounselingForm from "@/components/home/counseling-form";
import { Home, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

const contactInfo = [
    {
      title: "Head Office (Palwal, Haryana)",
    //   address: "Office No. 304-305, 3rd Floor, OM Subham Tower, Neelam-Bata Road, NIT Faridabad 121001",
      details: ["Opposite Indian Overseas Bank, Near Vivekanand School, Railway Road, Palwal - 121102"],
      type: 'address',
      icon: <Home className="text-green-600" />,
    },
    // {
    //     title: "Jaipur Office",
    //     address:
    //     "Anil Kumar Sharma, Plot. No. 24/201, Brij Bihar Extension, Jagatpura Jaipur, Pin - 203016",
    //     details: ["+91 9417876746", "+91 6284091032"],
    //     icon: <Home className="text-green-600" />,
    // },
    // {
    //     title: "Gurugram Office",
    //     address: "667, Udyog Vihar Phase V, Sector 19, Gurugram, Haryana, 122008",
    //     icon: <Home className="text-green-600" />,
    // },
    {
      title: "Call us",
    //   details: ["+91 129 4150049", "+91 9910180049", "+91 9910850049"],
      details: ["+91 9050086500", "+91 7015303343"],
      type: 'phone',
      icon: <Phone className="text-red-500" />,
    },
    {
      title: "Write us",
      details: ["info@eduabroadservices.com"],
      type: 'email',
      icon: <Mail className="text-blue-600" />,
    },
  ];


export default function ContactUs(){
    return(
        <section className="section-container my-10 ">
            <h1 className="text-center text-h1 mb-16" >Contact US</h1>

            {/* <div className="flex items-center *:basis-1/2" > */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5" >
                <div className="max-w-3xl mx-auto space-y-5">
                    {contactInfo.map((item, index) => (
                        <Card key={index} className="shadow-none border-none bg-muted">
                        <CardContent className=" flex items-start space-x-4">
                            <div className="text-2xl">{item.icon}</div>
                            <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                {item.title}
                            </h3>
                            {/* {item.address && (
                                <p className="text-muted-foreground mt-1">{item.address}</p>
                            )} */}
                            {item.details && (
                                <ul className="text-muted-foreground flex flex-col gap-2">
                                {item.details.map((detail: string, i: number) => (
                                    <li key={i} className="hover:text-blue-500" >
                                        {
                                            item.type === 'phone' && <Link href={`tel:${detail}`}>
                                                {detail}
                                            </Link>
                                        }
                                        {
                                            item.type === 'email' && <Link href={`mailto:${detail}`}>
                                                {detail}
                                            </Link>
                                        }
                                        {
                                            item.type === 'address' && <Link target="_blank" href={`https://maps.app.goo.gl/NotXCRBUSfxC6g8v6`}>
                                                {detail}
                                            </Link>
                                        }
                                    </li>
                                ))}
                                </ul>
                            )}
                            </div>
                        </CardContent>
                        </Card>
                    ))}
                </div>
                {/* <Card className="bg-primary text-primary-foreground p-6 py-10 max-w-3xl mx-auto w-full" > */}
                <Card className=" p-6 py-10 max-w-3xl mx-auto w-full shadow-none border-2 border-muted" >
                    <CardHeader className="mb-4" >
                        <h2 className="text-h2" >We&apos;d love to hear from you!</h2>
                    </CardHeader>
                    <CardContent >
                        <CounselingForm  />
                    </CardContent>
                </Card>
            </div>


            <div className="mt-32" >
                <h2 className="text-h2 mb-8 text-center flex justify-center items-center gap-3" ><MapPin size={32} /> Find Us on Map</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.960262587472!2d77.33471047576815!3d28.147697875932984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cd24a4aaa4139%3A0x4e42f7f2f52396d7!2sAmerican%20Spoken%20English%20Classes!5e0!3m2!1sen!2sin!4v1740835136432!5m2!1sen!2sin" width="600" height="450" style={{border: "0", width: '100%', borderRadius: '16px', overflow: 'hidden'}} loading="lazy" referrerPolicy ="no-referrer-when-downgrade"></iframe>
            </div>


        </section>
    )
}