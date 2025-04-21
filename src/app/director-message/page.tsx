import { client } from "@/sanity/client";
import { PortableText, SanityDocument } from "next-sanity";

export const metadata = {
    title: "Director's Message",
    description: "Director's Message for BMUS MBBS Abroad Program",
}

export default async function DirectorMessage(){
    const QUERY = `*[_type == "directorsMessage"]`

    const directorMessageData = await client.fetch<SanityDocument>(QUERY, {});
    const directorMessage = directorMessageData[0]

    console.log("director message", directorMessage)
    return(
        <section className="max-w-5xl px-4 mx-auto mb-20 pt-10" > 
            <h1 className="text-center text-h1 mb-12" >{directorMessage.heading}</h1>
            <div className="leading-loose prose" >
                <PortableText value={directorMessage.content} />
            </div>
        </section>
    )
}