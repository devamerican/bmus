import { cachedSanityFetch } from "@/sanity/lib/fetch";
import type { Metadata } from "next";
import { buildMetadata, type SanitySeo } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await cachedSanityFetch<SanitySeo>(
    `*[_type == "studentReviewsPage"][0].seo`,
    {},
    3600,
    ['student-reviews'],
  )
  return buildMetadata(seo, {
    title: "Student Reviews",
    description: "What our students have to say about BMUS",
  })
}

export default async function StudentReviews() {
  const QUERY = `*[_type == "gallery"]{videos[]{
        asset->{
          url
        }
      }}`
  const galleryData = await cachedSanityFetch<any[]>(QUERY, {}, 3600, ['gallery-videos'])
  const gallery = galleryData[0]

  return (
    <section className="section-container my-5 md:my-10 mx-auto px-4 py-8">
      <h1 className="text-h1 text-center mb-10 lg:mb-20" >Student Reviews</h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {gallery.videos?.map((video: any, idx: number) => (
          <video key={idx} controls width="600" className="rounded-lg" >
            <source src={video.asset.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>

    </section>
  );
}