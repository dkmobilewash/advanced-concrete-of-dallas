import ServiceAreaPage from '../ServiceAreaPage'
import { getServiceAreaBySlug } from '@/data/serviceAreas'

export default function BishopArtsDistrict() {
  return <ServiceAreaPage area={getServiceAreaBySlug('bishop-arts-district')!} />
}
