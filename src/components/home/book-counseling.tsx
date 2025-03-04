import Image from "next/image";
import CounselingForm from "./counseling-form";
import { CardContent, Card, CardTitle, CardHeader } from "../ui/card";

export default function BookCounseling(){
    return(
        <section className="section-container flex flex-col lg:flex-row items-end gap-6 *:basis-1/2" >
            <div>
                <Image className="object-cover rounded-xl" src="/formbg1.jpg" width={800} height={600} alt="background counseling" />
            </div>
                <Card className="bg-primary text-primary-foreground p-6 md:p-8 lg:p-10" >
                    <CardHeader className="mb-8 p-0" >
                        <CardTitle>
                            <h2 className="text-h2" >Book Your Counseling Now!</h2>
                        </CardTitle>
                            <p className="text-muted" >Fill in the details and our team will contact you in the next 24 hours!</p>
                    </CardHeader>
                    <CardContent className="p-0" >
                        <CounselingForm theme="dark" />
                    </CardContent>
                </Card>
        </section>
    )
}