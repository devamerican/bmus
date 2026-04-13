import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  UserCircle2,
  FileSpreadsheet,
  TicketsPlane,
  Briefcase,
  Plane
} from 'lucide-react';
import type { Metadata } from 'next';
import { cachedSanityFetch } from '@/sanity/lib/fetch';
import { buildMetadata, type SanitySeo } from '@/lib/seo';


export async function generateMetadata(): Promise<Metadata> {
  const seo = await cachedSanityFetch<SanitySeo>(
    `*[_type == "admissionProcessPage"][0].seo`,
    {},
    3600,
    ['admission-process'],
  )
  return buildMetadata(seo, {
    title: "Admission Process",
    description: "Simple steps to get admission in MBBS Abroad",
  })
}


interface AdmissionStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AdmissionStep: React.FC<AdmissionStepProps> = ({ icon, title, description }) => (
  <Card className="p-0 w-full h-full flex flex-col justify-between hover:shadow-lg transition-all duration-300">
    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
      <div className="text-primary p-4 bg-primary/10 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </CardContent>
  </Card>
);

const MBBSAdmissionFlow: React.FC = () => {
  const steps: AdmissionStepProps[] = [
    {
      icon: <UserCircle2 size={40} />,
      title: "Counselor Consultation",
      description: "Visit/Contact Education Abroad Services via WhatsApp, Email, or In-Person"
    },
    {
      icon: <FileSpreadsheet size={40} />,
      title: "Document Submission",
      description: "Submit 10th and 12th certificates with original and photocopies"
    },
    {
      icon: <TicketsPlane size={40} />,
      title: "Visa & Invitation",
      description: "Assistance in arranging Visa for Selected Country"
    },
    {
      icon: <Briefcase size={40} />,
      title: "Preparation",
      description: "Comprehensive briefing about destination country details"
    },
    {
      icon: <Plane size={40} />,
      title: "Departure",
      description: "Travel support from home to university arrangement"
    }
  ];

  return (
    <div className="section-container mx-auto px-4 my-12">
        <h1 className='text-h1 text-center mb-10' >Admission Process</h1>
      <h2 className="text-h3 text-center mb-10">
        Simple Steps to Get Admission in MBBS Abroad
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {steps.map((step) => (
          <div 
            key={step.title} 
            className="relative group"
          >
            {/* {index < steps.length - 1 && (
              <div className="absolute top-1/2 -right-1/2 w-full h-1 
                bg-primary/20 group-last:hidden 
                transform -translate-y-1/2 
                hidden md:block"
              />
            )} */}
            <AdmissionStep {...step} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MBBSAdmissionFlow;