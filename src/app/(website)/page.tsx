import Countries from "@/components/home/countries";
import EducationAbroad from "@/components/home/education-abroad";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <main className="space-y-12" >
      <Hero />
      <EducationAbroad />
      <Countries />
    </main>
  );
}
