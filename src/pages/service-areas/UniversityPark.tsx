import ServiceAreaPage from '../ServiceAreaPage'
import { getServiceAreaBySlug } from '@/data/serviceAreas'

export default function UniversityPark() {
  return <ServiceAreaPage area={getServiceAreaBySlug('university-park')!} />
}
