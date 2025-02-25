import Image from "next/image"

const countries = [
    {
        name: 'Kazakhstan',
        image: '/Kazakhstan.jpg'
    },
    {
        name: 'Kazakhstan',
        image: '/Kazakhstan.jpg'
    },
    {
        name: 'Kazakhstan',
        image: '/Kazakhstan.jpg'
    },
    {
        name: 'Kazakhstan',
        image: '/Kazakhstan.jpg'
    },
    {
        name: 'Kazakhstan',
        image: '/Kazakhstan.jpg'
    },
    {
        name: 'Kazakhstan',
        image: '/Kazakhstan.jpg'
    },
]
export default function Countries(){
    return(
        <section className="max-w-[1440px] mx-auto p-4" >
            <h2 className="text-center text-2xl font-semibold mb-8" >Countries</h2>
            <div className="grid grid-cols-3 gap-10" >
                {
                    countries.map((country, i) => (
                        <div key={i} >
                            <Image className="object-cover rounded-sm" src={country.image} width={800} height={600} alt={country.name} />
                            <h4 className="text-center text-lg font-semibold mt-2" >{country.name}</h4>
                        </div>  
                    ))
                }
            </div>
        </section>
    )
}