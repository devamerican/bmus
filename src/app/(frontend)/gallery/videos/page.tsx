import { sanityFetch } from "@/sanity/lib/live";

export const metadata = {
  title: "Gallery",
  description: "BMUS Success Stories – A Photo Journey",
}

export default async function VideoGallery() {

  const  QUERY = `*[_type == "gallery"]{videos[]{
    asset->{
      url
    }
  }}`
  const { data: galleryData } = await sanityFetch({query: QUERY})
  const gallery = galleryData[0]

  return (
    <section className="section-container my-5 md:my-10 mx-auto px-4 py-8">
      <h1 className="text-h1 text-center mb-10 lg:mb-20" >Vidoes Gallery</h1>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {gallery.videos?.map((video: any, idx: number) => (
            <video key={idx} controls width="600">
                <source src={video.asset.url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            ))}
        </div>

    </section>
  );
}