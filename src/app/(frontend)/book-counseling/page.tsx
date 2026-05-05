import BookCounseling from "@/components/home/book-counseling";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Counselling | BMUS - MBBS Abroad Admission Guidance",
  description:
    "Book your free counselling session with BMUS for expert MBBS abroad admission guidance. Our team will contact you within 24 hours.",
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

export default function BookCounselingPage() {
  return (
    <main>
      <BookCounseling />
    </main>
  );
}
