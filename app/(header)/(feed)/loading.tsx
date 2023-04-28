import Skeleton from '../../../components/utils/Skeleton'

const Loading = () => {
  return (
    <div>
      <div>
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} />
        ))}
      </div>
    </div>
  )
}

export default Loading
