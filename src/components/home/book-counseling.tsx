import Image from "next/image";
import CounselingForm from "./counseling-form";
import { CardContent, Card, CardTitle, CardHeader } from "../ui/card";

export default function BookCounseling(){
    return(
        <section id="book_counseling" className="section-container flex flex-col lg:flex-row  gap-6 scroll-mt-20" >
            <div className="basis-[55%]" >
                <Image className="object-cover w-full" src="/bmus-abroad.jpg" width={1600} height={1200} alt="book your counselling" />
            </div>
                {/* <Card className="bg-primary text-primary-foreground p-6 md:p-8 lg:p-10" > */}
                <Card className="px-6 md:px-8 lg:px-10 lg:py-0 lg:shadow-none lg:border-none basis-[45%]" >
                    <CardHeader className="mb-8 p-0" >
                        <CardTitle>
                            <h2 className="text-h2" >Book Your Counseling Now!</h2>
                        </CardTitle>
                            <p className="text-muted-foreground" >Fill in the details and our team will contact you in the next 24 hours!</p>
                    </CardHeader>
                    <CardContent className="p-0" >
                        <CounselingForm  />
                    </CardContent>
                </Card>
        </section>
    )
}