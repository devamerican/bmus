import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { cachedSanityFetch } from "@/sanity/lib/fetch";

export default async function PhotoHighlights() {
  const QUERY = `*[_type == "gallery"][0]{ "images": images[0...6] }`;
  const data = await cachedSanityFetch<{ images?: any[] }>(
    QUERY,
    {},
    3600,
    ["gallery-photos"],
  );

  const images = (data?.images ?? [])
    .map((img: any) => urlFor(img)?.url() ?? "")
    .filter(Boolean);

  if (images.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-3">
              <Camera className="h-4 w-4" />
              <span>Glimpses from BMUS</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Moments at BMUS
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
              A glimpse into our students&apos; journeys, events, and campus life.
            </p>
          </div>
          <Link href="/gallery/photos">
            <Button
              variant="default"
              size="lg"
              className="group shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
            >
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {images.map((src, idx) => {
            const spanClass =
              idx === 0
                ? "col-span-2 row-span-2 aspect-square"
                : "aspect-square";
            return (
              <Link
                key={idx}
                href="/gallery/photos"
                className={`group relative overflow-hidden rounded-2xl border-2 border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 ${spanClass}`}
              >
                <Image
                  src={src}
                  alt={`BMUS gallery photo ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
