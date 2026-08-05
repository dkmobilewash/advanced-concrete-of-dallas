import ServiceAreaPage from '../ServiceAreaPage'
import { getServiceAreaBySlug } from '@/data/serviceAreas'

export default function Lakewood() {
  return <ServiceAreaPage area={getServiceAreaBySlug('lakewood')!} />
}
