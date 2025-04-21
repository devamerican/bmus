import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import PhotoGallery from "./photo-gallery";

export const metadata = {
  title: "Gallery",
  description: "BMUS Success Stories – A Photo Journey",
}

export default async function Gallery() {

  const  QUERY = `*[_type == "gallery"]`
  const galleryData = await client.fetch<SanityDocument>(QUERY, {});
  const gallery = galleryData[0]
  const { projectId, dataset } = client.config();
  const urlFor = (source: SanityImageSource) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;

  const images = gallery.images.map((image: any) => urlFor(image)?.url() ?? "")

  return (
    <section className="section-container my-5 md:my-10 mx-auto px-4 py-8">
      <h1 className="text-h1 text-center mb-10 lg:mb-20" >{gallery.title}</h1>

      {images?.length > 0 && <PhotoGallery images={images} />}

    </section>
  );
}