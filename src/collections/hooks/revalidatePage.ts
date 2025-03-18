
import type { CollectionAfterChangeHook} from 'payload'

import { revalidatePath } from 'next/cache'

import type { Page } from '../../payload-types'

export const revalidatePage: CollectionAfterChangeHook<Page> = ({
  doc
}) => {
    
    revalidatePath('/', 'layout')
  
    return doc
}

// export const revalidateDelete: CollectionAfterDeleteHook<Page> = ({ doc, req: { context } }) => {
//   if (!context.disableRevalidate) {
//     const path = doc?.slug === 'home' ? '/' : `/${doc?.slug}`
//     revalidatePath(path)
//     revalidateTag('pages-sitemap')
//   }

//   return doc
// }
