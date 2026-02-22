import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { cachedSanityFetch } from "@/sanity/lib/fetch";


export const metadata = {
    title: "MBBS Abroad FAQ",
    description: "Most Frequently Asked Questions for BMUS MBBS Abroad Program",
}

export default async function MbbsAbroadFAQPage() {

    const QUERY = `*[_type == "mbbsFaqs"]`

    const mbbsFaqsData = await cachedSanityFetch<any[]>(QUERY)
    const mbbsFaqs = mbbsFaqsData[0]

    return (
        <section className="max-w-6xl mx-auto my-10" >
            <h1 className="text-center text-h1 mb-16" >{mbbsFaqs?.heading}</h1>
            <Accordion type="multiple" className=" rounded-xl" >
                {
                    mbbsFaqs?.items.map((item: { question: string, answer: string, _key: string }, index: number) => (
                        <AccordionItem key={index} value={item.question} className="first:rounded-t-xl last:rounded-b-xl bg-muted/50" >
                            <AccordionTrigger className="text-lg p-5 cursor-pointer"  >{item.question}</AccordionTrigger>
                            <AccordionContent className="text-base p-5 leading-relaxed text-zinc-700" >
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>

        </section>
    )
}