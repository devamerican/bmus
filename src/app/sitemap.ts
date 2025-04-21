const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

const ROUTES = [
    "",
    "/about-us",
    "/contact-us",
    "/admission-process",
    "/apply-online",
    "/director-message",
    "/gallery",
    "/mbbs",
    "/mbbs-abroad-eligibility-and-document",
    "/mbbs-abroad-faq",
    "/services",
    "/why-study-mbbs-abroad",
]

export default function sitemap() {
    const staticRoutes = ROUTES.map((route) => ({
      url: BASE_URL + route,
      lastModified: new Date().toISOString()
    }));

    // const mbbsRoutes
    
    return [ ...staticRoutes ];
}

