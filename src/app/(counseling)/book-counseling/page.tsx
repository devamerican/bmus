import BookCounseling from "@/components/counseling/book-counseling";
import { cachedSanityFetch } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Free MBBS Abroad Counselling | BMUS",
  description:
    "Book your free 1-on-1 MBBS abroad counselling session with BMUS. Get expert guidance on NMC-approved universities, fees, eligibility, visa and admission.",
  keywords: [
    "book counselling",
    "MBBS counselling",
    "MBBS abroad guidance",
    "admission counselling",
    "BMUS counselling",
  ],
  alternates: {
    canonical: "https://counseling.bmus.co.in/",
  },
};

export default async function BookCounselingPage() {
  const QUERY = `*[_type == "navbar"]`;
  const navbarData = await cachedSanityFetch(QUERY, {}, 3600, ["navbar"]);
  const navbar = (navbarData as any[])[0];
  const logoUrl =
    (navbar?.logo && urlFor(navbar.logo)?.width(200).height(200).url()) ?? "";

  return (
    <main>
      <BookCounseling logoUrl={logoUrl} />
    </main>
  );
}
