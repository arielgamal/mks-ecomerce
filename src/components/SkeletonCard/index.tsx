import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { CardSkeleton } from './style'

export default function SkeletonCard() {
  return(
    <div>
      <CardSkeleton>
        <Skeleton width={210} height={150} />
        <Skeleton count={3} />
        <Skeleton width={210} height={35} />
      </CardSkeleton>
    </div>
  )
}