import { PortableText, SanityDocument } from "next-sanity";
import Image from "next/image";
import { cachedSanityFetch } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import type { Metadata } from "next";
import { buildMetadata, type SanitySeo } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
    const seo = await cachedSanityFetch<SanitySeo>(
        `*[_type == "directorsMessage"][0].seo`,
        {},
        3600,
        ['director-message'],
    )
    return buildMetadata(seo, {
        title: "Director's Message",
        description: "Director's Message for BMUS MBBS Abroad Program",
    })
}

export default async function DirectorMessage() {
    const QUERY = `*[_type == "directorsMessage"]`
    const directorMessageData = await cachedSanityFetch<any[]>(QUERY, {}, 3600, ['director-message'])
    const directorMessage = directorMessageData[0]

    return (
        <div>
            {/* Hero Section with Director's Image */}
            <div className="relative w-full h-[300px] md:h-[400px] bg-gray-100">
                {directorMessage?.heroImage && (
                    <Image
                        src={urlFor(directorMessage.heroImage)?.url() ?? ""}
                        alt={directorMessage?.imageAlt || "Director's Photo"}
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                )}
                <div className="absolute inset-0 bg-black/30 flex items-end pb-10 justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-h1 font-bold text-white mb-2">
                            {directorMessage.heading}
                        </h1>
                        {directorMessage?.subtitle && (
                            <p className="text-lg text-white/90">
                                {directorMessage.subtitle}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Message Content Section */}
            <section className="max-w-5xl px-4 mx-auto my-12 md:my-20">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                    {/* Optional Side Image (could be signature or another photo) */}
                    {directorMessage?.sideImage && (
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <Image
                                src={urlFor(directorMessage.sideImage)?.width(400).height(500).url() ?? ""}
                                alt={directorMessage?.sideImageAlt || "Director"}
                                width={400}
                                height={500}
                                className="rounded-lg object-cover h-full max-h-[400px]"
                            />
                        </div>
                    )}

                    {/* Main Content */}
                    <div className={`leading-loose prose max-w-full ${directorMessage?.sideImage ? 'md:w-2/3' : 'w-full'}`}>
                        <PortableText value={directorMessage.content} />

                        {/* Optional Signature */}
                        {directorMessage?.signature && (
                            <div className="mt-8">
                                <Image
                                    src={urlFor(directorMessage.signature)?.width(200).height(100).url() ?? ""}
                                    alt="Director's Signature"
                                    width={200}
                                    height={100}
                                    className="mt-6"
                                />
                                <p className="font-semibold mt-2">{directorMessage?.directorName}</p>
                                <p className="text-muted-foreground">{directorMessage?.directorTitle}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}