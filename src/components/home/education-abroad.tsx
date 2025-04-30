// import { Handshake } from "lucide-react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

import { client } from "@/sanity/client";
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// const achivementsItems = [
//     {
//         id: 1,
//         title: "13+ Years of Experience",
//         icon: Handshake
//     },
//     {
//         id: 2,
//         title: "15+ Countries for MBBS",
//         icon: Handshake
//     },
//     {
//         id: 3,
//         title: "100+ Connected Universities",
//         icon: Handshake
//     },
//     {
//         id: 4,
//         title: "1000+ Happy Students",
//         icon: Handshake
//     },
// ]

export default function EducationAbroad({data}: {data: any}){

        const { projectId, dataset } = client.config();
    const urlFor = (source: SanityImageSource) =>
      projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null;


    return(
        <section className="flex flex-col lg:flex-row gap-4 *:basis-1/2 section-container items-center" >
            <div className="space-y-4 " >

                <h2 className="text-h2 text-primary" >{data.heading}</h2>
                <div >
                    <PortableText value={data.content} />
                </div>
                {/* <p>Education Abroad Services Overseas CAREER Consultants provides “One Stop Solution for All Your International Education Needs”.
                </p>
                <p>We offer a wide-ranging portfolio of outstanding and brilliantly managed services right from pre-admission to post landing services designed to suit the individual needs of the students.Our quality counseling distinguishes us from others in a way that we offer personalized counseling where there is direct involvement of the directors who have been educated in the finest institutes in India and abroad and have first-hand experience of the international culture and education system.</p>
                <p>Our team put forward sincere efforts and commitment on each student application case to help student realize the dream of studying in the best universities of the world. We are committed to contribute to our country and world in the education arena. Excellence is the top focus for our company. Our company continuously improves our services to deliver the best services and optimum satisfaction to all.</p>
                <p>We aim at bringing education in every corner of the country. Every town, village, district should be flooded with education is the motto that we believe in. With its corporate office in FARIDABAD NCR, EDUCATION ABROAD SERVICES is spreading its spectrum by getting functional PAN India to cater to maximum.</p> */}
            </div>

            <div>
                <Image src={urlFor(data.image)?.url() ?? ""} width={1920} height={1080} alt="students"  />
            </div>

            {/* <div className="relative grid place-content-center p-4 max-sm:py-12 max-lg:py-20" >
                <Image className="absolute top-0 left-0 w-full h-full object-cover -z-10" src="/pic-vision.jpg" width={551} height={327} alt="background world map"  />
                <div>
                    <h3 className="mb-12 md:mb-24 text-4xl font-semibold text-center italic" >Achivements</h3>
                    <div className="grid grid-cols-2 place-content-center place-items-center gap-12" >
                        {
                            achivementsItems.map((item) => (
                                <div key={item.id} >
                                    <item.icon size={60} className="mx-auto" />
                                    <h4 className="text-2xl font-semibold italic text-center" >{item.title}</h4>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div> */}
        </section>
    )
}