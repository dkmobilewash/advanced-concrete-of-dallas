import ServiceAreaPage from '../ServiceAreaPage'
import { getServiceAreaBySlug } from '@/data/serviceAreas'

export default function PrestonHollow() {
  return <ServiceAreaPage area={getServiceAreaBySlug('preston-hollow')!} />
}
