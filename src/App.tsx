import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/components/Layout'
import PageLoader from '@/components/PageLoader'

const Home = lazy(() => import('@/pages/Home'))
const ServicesOverview = lazy(() => import('@/pages/ServicesOverview'))
const Driveways = lazy(() => import('@/pages/services/Driveways'))
const Patios = lazy(() => import('@/pages/services/Patios'))
const PoolDecks = lazy(() => import('@/pages/services/PoolDecks'))
const RetainingWalls = lazy(() => import('@/pages/services/RetainingWalls'))
const FoundationsSlabs = lazy(() => import('@/pages/services/FoundationsSlabs'))
const CommercialConcrete = lazy(() => import('@/pages/services/CommercialConcrete'))
const About = lazy(() => import('@/pages/About'))
const Gallery = lazy(() => import('@/pages/Gallery'))
const Contact = lazy(() => import('@/pages/Contact'))
const BlogIndex = lazy(() => import('@/pages/BlogIndex'))
const BlogPost = lazy(() => import('@/pages/BlogPost'))
const ServiceAreasIndex = lazy(() => import('@/pages/ServiceAreasIndex'))
const Dallas = lazy(() => import('@/pages/service-areas/Dallas'))
const UptownDallas = lazy(() => import('@/pages/service-areas/UptownDallas'))
const HighlandPark = lazy(() => import('@/pages/service-areas/HighlandPark'))
const UniversityPark = lazy(() => import('@/pages/service-areas/UniversityPark'))
const PrestonHollow = lazy(() => import('@/pages/service-areas/PrestonHollow'))
const Lakewood = lazy(() => import('@/pages/service-areas/Lakewood'))
const OakLawn = lazy(() => import('@/pages/service-areas/OakLawn'))
const LakeHighlands = lazy(() => import('@/pages/service-areas/LakeHighlands'))
const OakCliff = lazy(() => import('@/pages/service-areas/OakCliff'))
const BishopArtsDistrict = lazy(() => import('@/pages/service-areas/BishopArtsDistrict'))
const ServiceLocationPage = lazy(() => import('@/pages/ServiceLocationPage'))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />

            <Route path="/concrete-services" element={<ServicesOverview />} />
            <Route path="/driveways" element={<Driveways />} />
            <Route path="/patios" element={<Patios />} />
            <Route path="/pool-decks" element={<PoolDecks />} />
            <Route path="/retaining-walls" element={<RetainingWalls />} />
            <Route path="/foundations-slabs" element={<FoundationsSlabs />} />
            <Route path="/commercial-concrete" element={<CommercialConcrete />} />

            <Route path="/about-advanced-concrete-of-dallas" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/free-estimate-dallas" element={<Contact />} />

            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            <Route path="/service-areas" element={<ServiceAreasIndex />} />
            <Route path="/service-areas/dallas" element={<Dallas />} />
            <Route path="/service-areas/uptown-dallas" element={<UptownDallas />} />
            <Route path="/service-areas/highland-park" element={<HighlandPark />} />
            <Route path="/service-areas/university-park" element={<UniversityPark />} />
            <Route path="/service-areas/preston-hollow" element={<PrestonHollow />} />
            <Route path="/service-areas/lakewood" element={<Lakewood />} />
            <Route path="/service-areas/oak-lawn" element={<OakLawn />} />
            <Route path="/service-areas/lake-highlands" element={<LakeHighlands />} />
            <Route path="/service-areas/oak-cliff" element={<OakCliff />} />
            <Route path="/service-areas/bishop-arts-district" element={<BishopArtsDistrict />} />

            <Route path="/:serviceSlug/:locationSlug" element={<ServiceLocationPage />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
