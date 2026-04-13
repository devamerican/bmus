import { Check } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { cachedSanityFetch } from "@/sanity/lib/fetch";
import { buildMetadata, type SanitySeo } from "@/lib/seo";

const studyAbroadEligibility = [
  "12th Science/A Level PCB (Physics-Chemistry-Biology); English should be a Subject in 12th",
  " NEET Qualified",
];
const studyAbroadDocument = [
  "Application form for the university.",
  "Matriculation passing Certificate & Mark sheet.",
  "10+2th standard with PCB passing Certificate & Mark sheet.",
  "Birth certificate.",
  "Valid Proof of Nationality (Passport).",
  "A self-addressed envelope containing the exact address.",
  "An agreement letter from parents.",
];

export async function generateMetadata(): Promise<Metadata> {
  const seo = await cachedSanityFetch<SanitySeo>(
    `*[_type == "eligibilityAndDocumentPage"][0].seo`,
    {},
    3600,
    ['mbbs-abroad-eligibility-and-document'],
  )
  return {
    ...buildMetadata(seo, {
      title: "MBBS Abroad Eligibility & Admission Process",
      description:
        "Check MBBS abroad eligibility criteria, age limit, NEET requirements & admission process for Indian students with BMUS.",
      keywords: [
        "MBBS eligibility abroad",
        "NEET MBBS abroad",
        "MBBS admission process",
      ],
    }),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/eligibility`,
    },
  }
}


export default function MbbsAbroadEligibilityAndDocument() {
  return (
    <section className="section-container my-8 md:my-10">
      <h1 className="text-h1 text-center mb-10 md:mb-20">
        MBBS Abroad Eligibility and Document
      </h1>

      <div className="flex flex-col md:flex-row  gap-6 *:basis-1/2">
      <div className="basis-1/2" >

        <Image
          src="/eligibility.jpg"
          alt="requirements"
          width={1600}
          height={1200}
          className="object-cover"
          />
        </div>
        <div className="basis-1/2" >
          <div className="mb-9 md:mb-16">
            <h4 className="text-h4 mb-6">Eligibility:</h4>
            <ul className="space-y-4">
              {studyAbroadEligibility.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6" >
            <h4 className="text-h4 mb-6">Document:</h4> 
            <ul className="space-y-4">
              {studyAbroadDocument.map((item) => (
                <li key={item} className="flex gap-3">
                  {" "}
                  <Check /> {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-destructive" >* All documents need to be submitted in original, along with 3 sets of photocopies.</p>
        </div>
      </div>
    </section>
  );
}
