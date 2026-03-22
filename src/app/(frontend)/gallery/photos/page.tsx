import PhotoGallery from "../photo-gallery";
import { urlFor } from "@/sanity/lib/image";
import { cachedSanityFetch } from "@/sanity/lib/fetch";

export const metadata = {
  title: "Photo Gallery",
  description: "BMUS Success Stories – A Photo Journey",
}

export default async function Gallery() {

  const QUERY = `*[_type == "gallery"]`
  const galleryData = await cachedSanityFetch<any[]>(QUERY, {}, 3600, ['gallery-photos'])
  const gallery = galleryData[0]

  const images = gallery.images.map((image: any) => urlFor(image)?.url() ?? "")

  return (
    <section className="section-container my-5 md:my-10 mx-auto px-4 py-8">
      <h1 className="text-h1 text-center mb-10 lg:mb-20" >{gallery.title}</h1>

      {images?.length > 0 && <PhotoGallery images={images} />}

    </section>
  );
}