import ServiceAreaPage from '../ServiceAreaPage'
import { getServiceAreaBySlug } from '@/data/serviceAreas'

export default function Dallas() {
  return <ServiceAreaPage area={getServiceAreaBySlug('dallas')!} />
}
