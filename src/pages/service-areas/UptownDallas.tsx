import ServiceAreaPage from '../ServiceAreaPage'
import { getServiceAreaBySlug } from '@/data/serviceAreas'

export default function UptownDallas() {
  return <ServiceAreaPage area={getServiceAreaBySlug('uptown-dallas')!} />
}
