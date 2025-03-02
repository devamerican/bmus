import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"  
// import { load } from "outstatic/server"



// async function getData(){
//     // return getDocuments('Mbbs-abroad-faqs', ['title', 'content', 'isTrue'])
//     // return getDocuments("Mbbs-abroad-faqs", ["title", "faqs", "content"]);
//     const db = await load()
//     const res = await db.find({title: 'faq'}).toArray()
//     return res
  
// }   

const data = [
    {
        question: "What is the admission process for MBBS abroad?",
        answer: "The admission process for MBBS abroad is very similar to the admission process in the home country. The admission process for MBBS abroad is conducted by the university itself. The admission process for MBBS abroad is conducted by the university itself. The admission process for MBBS abroad is conducted by the university itself. The admission process for MBBS abroad is conducted by the university itself."
    },
    {
        question: "What is the duration of the program?",
        answer: "The duration of the program is 4 years. The duration of the program is 4 years. The duration of the program is 4 years. The duration of the program is 4 years."
    },
    {
        question: "What is the tuition fee for MBBS abroad?",
        answer: "The tuition fee for MBBS abroad is Rs. 10,000/- per year. The tuition fee for MBBS abroad is Rs. 10,000/- per year. The tuition fee for MBBS abroad is Rs. 10,000/- per year. The tuition fee for MBBS abroad is Rs. 10,000/- per year."
    },
    {
        question: "What is the total cost of the program?",
        answer: "The total cost of the program is Rs. 10,000/- per year. The total cost of the program is Rs. 10,000/- per year. The total cost of the program is Rs. 10,000/- per year. The total cost of the program is Rs. 10,000/- per year."
    },
    {
        question: "What is the cost of living in the country of my choice?",
        answer: "The cost of living in the country of my choice is very affordable. The cost of living in the country of my choice is very affordable. The cost of living in the country of my choice is very affordable. The cost of living in the country of my choice is very affordable."
    },
    {
        question: "What is the visa policy for MBBS abroad?",
        answer: "The visa policy for MBBS abroad is very relaxed. The visa policy for MBBS abroad is very relaxed. The visa policy for MBBS abroad is very relaxed. The visa policy for MBBS abroad is very relaxed."
    },
    {
        question: "What is the residency policy for MBBS abroad?",
        answer: "The residency policy for MBBS abroad is very relaxed. The residency policy for MBBS abroad is very relaxed. The residency policy for MBBS abroad is very relaxed. The residency policy for MBBS abroad is very relaxed."
    },
    {
        question: "What is the language of instruction in MBBS abroad?",
        answer: "The language of instruction in MBBS abroad is English. The language of instruction in MBBS abroad is English. The language of instruction in MBBS abroad is English. The language of instruction in MBBS abroad is English."
    },
    {
        question: "What is the duration of the program?",
        answer: "The duration of the program is 4 years. The duration of the program is 4 years. The duration of the program is 4 years. The duration of the program is 4 years."
    },
]
export default async function MbbsAbroadFAQPage(){
    // const data = await getData()
    
    return(
        <section className="section-container my-10" >
            <h1 className="text-center text-h1 mb-16" >Study MBBS Abroad FAQ&apos;s</h1>
        <Accordion type="multiple" className="space-y-0.5 rounded-xl" >
            {
                data.map((item, index) => (
                <AccordionItem key={index} value={item.question} className="first:rounded-t-xl last:rounded-b-xl border bg-gray-100" >
                    <AccordionTrigger className="text-lg p-8 cursor-pointer"  >{item.question}</AccordionTrigger>
                    <AccordionContent className="text-base p-8" >
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
                ))
            }
        </Accordion>

        </section>
    )
}