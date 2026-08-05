import ServiceAreaPage from '../ServiceAreaPage'
import { getServiceAreaBySlug } from '@/data/serviceAreas'

export default function OakCliff() {
  return <ServiceAreaPage area={getServiceAreaBySlug('oak-cliff')!} />
}
