import ServiceAreaPage from '../ServiceAreaPage'
import { getServiceAreaBySlug } from '@/data/serviceAreas'

export default function LakeHighlands() {
  return <ServiceAreaPage area={getServiceAreaBySlug('lake-highlands')!} />
}
