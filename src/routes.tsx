import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'

import Home from '@/pages/Home'
import ServicesOverview from '@/pages/ServicesOverview'
import Driveways from '@/pages/services/Driveways'
import Patios from '@/pages/services/Patios'
import PoolDecks from '@/pages/services/PoolDecks'
import RetainingWalls from '@/pages/services/RetainingWalls'
import FoundationsSlabs from '@/pages/services/FoundationsSlabs'
import CommercialConcrete from '@/pages/services/CommercialConcrete'
import About from '@/pages/About'
import Gallery from '@/pages/Gallery'
import Contact from '@/pages/Contact'
import BlogIndex from '@/pages/BlogIndex'
import BlogPost from '@/pages/BlogPost'
import ServiceAreasIndex from '@/pages/ServiceAreasIndex'
import Dallas from '@/pages/service-areas/Dallas'
import UptownDallas from '@/pages/service-areas/UptownDallas'
import HighlandPark from '@/pages/service-areas/HighlandPark'
import UniversityPark from '@/pages/service-areas/UniversityPark'
import PrestonHollow from '@/pages/service-areas/PrestonHollow'
import Lakewood from '@/pages/service-areas/Lakewood'
import OakLawn from '@/pages/service-areas/OakLawn'
import LakeHighlands from '@/pages/service-areas/LakeHighlands'
import OakCliff from '@/pages/service-areas/OakCliff'
import BishopArtsDistrict from '@/pages/service-areas/BishopArtsDistrict'
import ServiceLocationPage from '@/pages/ServiceLocationPage'
import NotFound from '@/pages/NotFound'

// Shared between the client entry (App.tsx, wrapped in BrowserRouter) and
// the build-time prerender script (scripts/prerender.tsx, wrapped in
// MemoryRouter) so the two can't drift out of sync. Every route is a static
// (non-lazy) import: the client hydrates against prerendered HTML, which
// requires its first render pass to produce the same markup the server
// already sent — lazy()/Suspense would render a loading fallback first
// instead, causing a hydration mismatch.
export default function AppRoutes() {
  return (
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

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
