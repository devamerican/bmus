import BookCounseling from "@/components/counseling/book-counseling";
import { cachedSanityFetch } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import {
  BOOK_COUNSELING_PAGE_QUERY,
  BOOK_COUNSELING_PAGE_SEO_QUERY,
} from "@/sanity/queries/bookCounselingPage";
import { buildMetadata, type SanitySeo } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await cachedSanityFetch<SanitySeo>(
    BOOK_COUNSELING_PAGE_SEO_QUERY,
    {},
    3600,
    ["bookCounselingPage"],
  );
  return {
    ...buildMetadata(seo, {
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
    }),
    alternates: {
      canonical: "https://counseling.bmus.co.in/",
    },
  };
}

export default async function BookCounselingPage() {
  const NAVBAR_QUERY = `*[_type == "navbar"]`;
  const [navbarData, pageData] = await Promise.all([
    cachedSanityFetch<any[]>(NAVBAR_QUERY, {}, 3600, ["navbar"]),
    cachedSanityFetch<any>(BOOK_COUNSELING_PAGE_QUERY, {}, 3600, [
      "bookCounselingPage",
    ]),
  ]);

  const navbar = navbarData?.[0];
  const logoUrl =
    (navbar?.logo && urlFor(navbar.logo)?.width(200).height(200).url()) ?? "";

  return (
    <main>
      <BookCounseling logoUrl={logoUrl} data={pageData} />
    </main>
  );
}
