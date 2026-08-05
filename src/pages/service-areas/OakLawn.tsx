import ServiceAreaPage from '../ServiceAreaPage'
import { getServiceAreaBySlug } from '@/data/serviceAreas'

export default function OakLawn() {
  return <ServiceAreaPage area={getServiceAreaBySlug('oak-lawn')!} />
}
