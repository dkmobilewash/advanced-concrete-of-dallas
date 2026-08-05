import ServiceAreaPage from '../ServiceAreaPage'
import { getServiceAreaBySlug } from '@/data/serviceAreas'

export default function HighlandPark() {
  return <ServiceAreaPage area={getServiceAreaBySlug('highland-park')!} />
}
