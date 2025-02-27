import { Dice5 } from "lucide-react";

const studyAbroadBenefits = [
    { title: "Lower Tuition Fee Than India", image: Dice5 },
    { title: "NMC and WHO Approved Medical Universities", image: Dice5 },
    { title: "Internationally Trained and Experienced Faculty", image: Dice5 },
    { title: "Safe and Secure Countries", image: Dice5 },
    { title: "No Donation or Capitation Fee", image: Dice5 },
    { title: "Comfortable Weather for Study", image: Dice5 },
    { title: "Similar Cost of Living as India", image: Dice5 },
    { title: "English Medium Study", image: Dice5 },
    { title: "Availability of Better Medical Equipment", image: Dice5 },
    { title: "Indian Food Available", image: Dice5 },
    { title: "International Job Options", image: Dice5 }
  ];
  
export default function WhyStudyMbbsAbroad() {
  return (
    <section className="section-container my-10">   
      <h1 className="text-h1 text-center mb-20" >Why Study MBBS Abroad?</h1>

      <div className="grid grid-cols-4 gap-6" >
        {
            studyAbroadBenefits.map((item) => (
                <div key={item.title} className="border gap-4 p-4 h-56 grid place-content-center  rounded-xl shadow hover:shadow-md transition-shadow">
                    <item.image size={62} className="mx-auto" />
                    <h3 className="text-center max-w-[12rem]">{item.title}</h3>
                </div>
            ))
        }
      </div>
    </section>
  )
}