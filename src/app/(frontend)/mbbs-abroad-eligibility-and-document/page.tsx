import { Check } from "lucide-react";
import Image from "next/image";

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

export default function MbbsAbroadEligibilityAndDocument() {
  return (
    <section className="section-container my-10">
      <h1 className="text-h1 text-center mb-20">
        MBBS Abroad Eligibility and Document
      </h1>

      <div className="flex flex-col-reverse md:flex-row items-center gap-6 *:basis-1/2">
        <Image
          src="/eligibility.png"
          alt="requirements"
          width={1000}
          height={1000}
        />
        <div>
          <div className="mb-16">
            <h2 className="text-h2 mb-6">Eligibility:</h2>
            <ul className="space-y-4">
              {studyAbroadEligibility.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6" >
            <h2 className="text-h2 mb-6">Document:</h2>
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
