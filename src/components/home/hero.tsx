"use client"
// import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const heroItems = [
    {
        id: 1,
        img: '/hero-img.jpg'
    },
    {
        id: 2,
        img: '/hero-img.jpg'
    },
    {
        id: 3,
        img: '/hero-img.jpg'
    },
]

export default function Hero(){
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
    return(
        <section>
            <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
                {
                    heroItems.map((item) => (
                        <div className="flex-[0_0_100%] min-w-0" key={item.id}>
                            <Image className='w-full' src={item.img} width={1000} height={500} alt="hero" />
                        </div>
                    ))
                }
       
            </div>
            </div>
        </section>
    )
}