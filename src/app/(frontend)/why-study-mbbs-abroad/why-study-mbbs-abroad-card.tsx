"use client"
import { GlareCard } from "@/components/ui/glare-card";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

export default function WhyStudyMbbsAbroadCard({item}: {item: any}){
    return(
  <GlareCard className="flex flex-col items-center justify-center p-8 sm:p-10 min-h-56">
{/* <div key={item._key} className="  rounded-xl bg-muted"> */}
                    <DynamicIcon name={item.icon as IconName} size={42} className='mb-6 text-white' /> 
                    <h3 className="text-lg font-semibold text-center text-white">{item.title}</h3>
    {/* </div>  */}
                 </GlareCard>
    )
}