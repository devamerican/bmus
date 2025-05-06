"use client"
import LightGallery from 'lightgallery/react';
import Image from "next/image";

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// // If you want you can use SCSS instead of css
// import 'lightgallery/scss/lightgallery.scss';
// import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export default function PhotoGallery({images}: {images: string[]}) {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                elementClassNames='grid md:grid-cols-2 xl:grid-cols-3 gap-4'
                plugins={[lgThumbnail, lgZoom]}
                
            >
                {
                    images.map((image, index) => (
                        <a href={image} key={index}>
                            <Image alt={image} src={image} width={400} height={400} className='h-[400px] w-full object-cover' />
                        </a>
                    ))
                }
            </LightGallery>
        </div>
    );
}
