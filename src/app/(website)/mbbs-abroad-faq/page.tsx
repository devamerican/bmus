import { getDocuments } from "outstatic/server"


async function getData(){
    return getDocuments('posts', ['Test title'])
}   

export default async function MbbsAbroadFAQPage(){
    const data = await getData()
    console.log('data', data)
    
    return(
        <section>
            {JSON.stringify(data)}
        </section>
    )
}