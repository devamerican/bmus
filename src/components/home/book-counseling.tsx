import Image from "next/image";
import CounselingForm from "./counseling-form";
import { CardContent, Card } from "../ui/card";

export default function BookCounseling(){
    return(
        <section className="section-container flex items-center gap-6 *:basis-1/2" >
            <div>
                <Image className="object-cover rounded-sm" src="/formbg1.jpg" width={800} height={600} alt="background counseling" />
            </div>
            <div className="w-full px-12" >
                <Card className="bg-zinc-900 text-white" >
                    <CardContent  >
                        <h2 className="text-h2 mb-2" >Book Your Counseling Now!</h2>
                        <p className="mb-12 text-zinc-500" >Fill in the details and our team will contact you in the next 24 hours!</p>
                        <CounselingForm />
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}