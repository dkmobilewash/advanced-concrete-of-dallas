import { Location } from '@/types'
import { testimonials } from './testimonials'

const findTestimonial = (area: string) => {
  const t = testimonials.find((t) => t.area === area)!
  return { quote: t.quote, name: t.name, area: t.area, rating: t.rating }
}

export const locations: Location[] = [
  {
    area: 'West Plano',
    slug: 'west-plano',
    metaTitle: 'Concrete Contractor in West Plano, Plano TX',
    metaDescription:
      'Concrete driveways, patios, and repairs in West Plano, TX. Locally owned, licensed and insured. Free estimates — call (214) 751-8014.',
    heroSubtitle: 'Trusted concrete work for West Plano homeowners.',
    intro: [
      "West Plano is known for tree-lined residential streets and a strong sense of homeowner pride, with many properties built in the 1980s and 90s now reaching the age where original driveways and patios need replacing. We see a steady mix of driveway replacements, patio upgrades, and walkway repairs across West Plano as homeowners invest in bringing older concrete up to current standards.",
      "Plano Concrete Solutions has poured and repaired concrete throughout West Plano for years, and we understand the mature landscaping, established HOA guidelines, and finish expectations that come with the area's established neighborhoods. Whether you need a full driveway replacement or a patio addition for the backyard, we bring the same attention to detail West Plano homeowners expect.",
    ],
    landmarks: ['Prestonwood Preparatory School area', 'Ridgeview Ranch', 'Prestonwood Country Club', 'Coit Road corridor'],
    nearbyAreas: ['Willow Bend', 'Deerfield', 'North Plano'],
    testimonial: findTestimonial('West Plano'),
  },
  {
    area: 'East Plano',
    slug: 'east-plano',
    metaTitle: 'Concrete Contractor in East Plano, Plano TX',
    metaDescription:
      'Affordable, reliable concrete driveways and slabs in East Plano, TX. Free estimates from a locally owned contractor. Call (214) 751-8014.',
    heroSubtitle: 'Reliable, affordable concrete work for East Plano homes.',
    intro: [
      "East Plano offers some of the area's more affordable, entry-level housing stock, and we've seen a steady rise in homeowners and investors alike updating driveways and pouring functional slabs as part of renovation and flip projects. Fast turnaround and a straightforward quote matter here as much as the finished product.",
      "We work with both long-time East Plano homeowners and investors managing renovation timelines, delivering durable, code-compliant concrete without unnecessary upsells. From driveway replacements to backyard slabs, our East Plano projects are built to hold up and to help the property look its best.",
    ],
    landmarks: ['Oak Point Park', 'Plano Sports Authority (PSA)', 'East side of US-75 corridor'],
    nearbyAreas: ['Downtown Plano', 'North Plano', 'Preston Meadow'],
    testimonial: findTestimonial('East Plano'),
  },
  {
    area: 'North Plano',
    slug: 'north-plano',
    metaTitle: 'Concrete Contractor in North Plano, Plano TX',
    metaDescription:
      'Concrete patios, pool decks, and driveways in North Plano, TX. Serving master-planned communities with free estimates. Call (214) 751-8014.',
    heroSubtitle: 'Patios, pool decks, and driveways for North Plano families.',
    intro: [
      "North Plano is home to newer master-planned communities with larger lots and families who use their outdoor space year-round. Pools and patios are common here, and we regularly build and resurface pool decks, pour stamped patios, and install driveways sized for larger North Plano homes and multi-car garages.",
      "Because so many North Plano properties include pools and expansive backyards, we bring particular experience with cool deck finishes and patio layouts designed for entertaining. Our crews are familiar with the HOA standards common across North Plano's newer developments and build every project to meet them.",
    ],
    landmarks: ['Windhaven Meadows Park', 'Los Rios Community Park', 'Stonebriar area border'],
    nearbyAreas: ['West Plano', 'East Plano', 'Deerfield'],
    testimonial: findTestimonial('North Plano'),
  },
  {
    area: 'Downtown Plano',
    slug: 'downtown-plano',
    metaTitle: 'Concrete Contractor in Downtown Plano, Plano TX',
    metaDescription:
      'Decorative concrete finishes and driveway replacements in Downtown Plano, TX. Free estimates — call (214) 751-8014.',
    heroSubtitle: 'Decorative concrete for Downtown Plano’s historic character.',
    intro: [
      "Downtown Plano blends its historic Arts District charm with a wave of new infill construction, and the concrete work reflects that mix. Renovated bungalows often call for decorative finishes — exposed aggregate walkways, stamped patios — that complement a home's original character, while new infill builds bring more modern driveway and patio requests.",
      "We've poured decorative concrete for homeowners across Downtown Plano who want their driveway or walkway to add curb appeal rather than just function. Our crews are experienced working on smaller, older lots common near the Arts District, where access and site prep require more careful planning than a typical suburban build.",
    ],
    landmarks: ['Haggard Park', 'Plano Downtown Arts District', 'Interurban Railway Museum'],
    nearbyAreas: ['East Plano', 'North Plano', 'Legacy West'],
    testimonial: findTestimonial('Downtown Plano'),
  },
  {
    area: 'Legacy West',
    slug: 'legacy-west',
    metaTitle: 'Concrete Contractor in Legacy West, Plano TX',
    metaDescription:
      'Commercial concrete and high-spec hardscaping in Legacy West, Plano TX. Bonded and insured. Call (214) 751-8014 for a quote.',
    heroSubtitle: 'Commercial concrete and premium hardscaping for Legacy West.',
    intro: [
      "Legacy West is one of Plano's premier mixed-use corridors, home to major corporate campuses, luxury apartment communities, and high-end retail. Concrete work here tends to be commercial in nature — parking structures, walkways, plaza hardscaping — and held to a higher visual and structural standard than typical residential work.",
      "We handle commercial concrete and high-spec decorative hardscaping for property managers and businesses throughout Legacy West, with scheduling built around minimizing disruption to tenants, employees, and retail traffic. Every project is bonded and insured to meet commercial contract requirements.",
    ],
    landmarks: ['Legacy West Plaza', 'Toyota Motor North America campus', 'The Star in Frisco border area'],
    nearbyAreas: ['Willow Bend', 'Downtown Plano', 'West Plano'],
    testimonial: findTestimonial('Legacy West'),
  },
  {
    area: 'Willow Bend',
    slug: 'willow-bend',
    metaTitle: 'Concrete Contractor in Willow Bend, Plano TX',
    metaDescription:
      'Stamped and decorative concrete for Willow Bend, Plano TX estate homes. High-end finishes, free estimates. Call (214) 751-8014.',
    heroSubtitle: 'High-end stamped and decorative concrete for Willow Bend estates.',
    intro: [
      "Willow Bend is one of Plano's more affluent enclaves, with large estate-style lots and homeowners who expect a finish level to match the rest of the property. Stamped concrete, decorative borders, and premium sealer finishes are the norm rather than the exception on Willow Bend projects.",
      "We bring the same craftsmanship to Willow Bend driveways and patios that the neighborhood's architecture calls for, from intricate stamped patterns to custom color blends. Larger lots also mean larger-scale pours, and our crews are equipped to handle expansive driveway circles and estate patios without sacrificing finish quality.",
    ],
    landmarks: ['The Shops at Willow Bend', 'Willow Bend Polo & Hunt Club area', 'Ridgeview Trail'],
    nearbyAreas: ['Legacy West', 'West Plano', 'Deerfield'],
    testimonial: findTestimonial('Willow Bend'),
  },
  {
    area: 'Deerfield',
    slug: 'deerfield',
    metaTitle: 'Concrete Contractor in Deerfield, Plano TX',
    metaDescription:
      'HOA-compliant driveway and patio concrete work in Deerfield, Plano TX. Free estimates — call (214) 751-8014.',
    heroSubtitle: 'HOA-friendly driveway and patio replacements in Deerfield.',
    intro: [
      "Deerfield is a well-established Plano neighborhood with an active HOA and a consistent architectural character that homeowners take seriously. When it's time to replace a cracked driveway or add a backyard patio, matching community standards on finish, color, and edging is part of getting the project approved and done right.",
      "We've worked directly with Deerfield homeowners navigating HOA submittal requirements, and we know what finishes and specifications typically get approved. From straightforward driveway replacements to new patio additions, we handle the concrete work so it fits the neighborhood the first time.",
    ],
    landmarks: ['Deerfield Elementary area', 'Bob Woodruff Park', 'Los Rios Boulevard corridor'],
    nearbyAreas: ['West Plano', 'North Plano', 'Willow Bend'],
    testimonial: findTestimonial('Deerfield'),
  },
  {
    area: 'Preston Meadow',
    slug: 'preston-meadow',
    metaTitle: 'Concrete Contractor in Preston Meadow, Plano TX',
    metaDescription:
      'Patio and pool deck resurfacing for Preston Meadow, Plano TX families. Free estimates — call (214) 751-8014.',
    heroSubtitle: 'Patios and pool deck resurfacing for Preston Meadow families.',
    intro: [
      "Preston Meadow is a family-oriented neighborhood with mid-size lots and homeowners who make the most of their backyards, from weekend cookouts to pool days through the summer. That active outdoor lifestyle drives steady demand for new patios and pool deck resurfacing throughout the area.",
      "We've built and resurfaced patios and pool decks for Preston Meadow families who wanted a durable, low-maintenance surface that could keep up with regular use. Whether it's a fresh patio for a growing family or a tired pool deck that needs a slip-resistant, cooler-to-the-touch update, we scope the work to fit how the space actually gets used.",
    ],
    landmarks: ['Jack Carter Park', 'Preston Meadow Elementary area', 'Ohio Drive corridor'],
    nearbyAreas: ['East Plano', 'North Plano', 'West Plano'],
    testimonial: findTestimonial('Preston Meadow'),
  },
]

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug)
}
