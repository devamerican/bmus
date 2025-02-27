import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"  
import { load } from "outstatic/server"



async function getData(){
    // return getDocuments('Mbbs-abroad-faqs', ['title', 'content', 'isTrue'])
    // return getDocuments("Mbbs-abroad-faqs", ["title", "faqs", "content"]);
    const db = await load()
    const res = await db.find({title: 'faq'}).toArray()
    return res
  
}   

export default async function MbbsAbroadFAQPage(){
    const data = await getData()
    console.log('data', data)
    
    return(
        <section>
        <Accordion type="multiple" >
            {
                data.map((item, index) => (
                <AccordionItem key={index} value="item-1">
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>
                        {item.content}
                    </AccordionContent>
                </AccordionItem>
                ))
            }
        </Accordion>

        </section>
    )
}