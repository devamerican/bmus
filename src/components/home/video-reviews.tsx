import { cachedSanityFetch } from "@/sanity/lib/fetch";

export default async function VideoReviews() {
    // Query to fetch videos, getting originalFilename to filter out videos with "whatsapp" in the name
    const VIDEO_QUERY = `*[_type == "gallery"]{
    videos[0...10]{
      asset->{
        url,
        originalFilename
      }
    }
  }`
    const galleryData = await cachedSanityFetch<any[]>(VIDEO_QUERY)

    // Filter out videos with "whatsapp" in the original filename and take top 4
    const validVideos = galleryData[0]?.videos?.filter((v: any) => {
        const name = v.asset?.originalFilename?.toLowerCase() || "";
        return !name.includes("whatsapp");
    }).slice(0, 4);

    if (!validVideos || validVideos.length === 0) return null;

    return (
        <section className="px-4">
            <h2 className="text-h2 mb-8 lg:mb-12 text-center">Video Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {validVideos.map((video: any, idx: number) => (
                    <video key={idx} controls className="w-full rounded-xl shadow-md object-cover bg-black/5" >
                        <source src={video.asset.url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ))}
            </div>
        </section>
    )
}
