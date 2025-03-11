// import { camera } from "lucide-react";
import { DynamicIcon, type IconName} from 'lucide-react/dynamic'; 

const studyAbroadBenefits = [
    { title: "Lower Tuition Fee Than India", image: "camera" },
    { title: "NMC and WHO Approved Medical Universities", image: "camera" },
    { title: "Internationally Trained and Experienced Faculty", image: "camera" },
    { title: "Safe and Secure Countries", image: "camera" },
    { title: "No Donation or Capitation Fee", image: "camera" },
    { title: "Comfortable Weather for Study", image: "camera" },
    { title: "Similar Cost of Living as India", image: "camera" },
    { title: "English Medium Study", image: "camera" },
    { title: "Availability of Better Medical Equipment", image: "camera" },
    { title: "Indian Food Available", image: "camera" },
    { title: "International Job Options", image: "camera" }
  ];
  
export default function WhyStudyMbbsAbroad() {

  return (
    <section className="section-container my-10">   
      <h1 className="text-h1 text-center mb-20" >Why Study MBBS Abroad?</h1>

      <div className="grid grid-cols-4 gap-6" >
        {
            studyAbroadBenefits.map((item) => (
                <div key={item.title} className="border gap-4 p-4 h-56 grid place-content-center  rounded-xl shadow hover:shadow-md transition-shadow">
                    <DynamicIcon name={item.image as IconName} size={62} className="mx-auto" />
                    <h3 className="text-center max-w-[12rem]">{item.title}</h3>
                </div>
            ))
        }
      </div>
    </section>
  )
}