import { Spinner } from '../../../components/utils/Spinner'

const Loading = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="mx-auto">
        <Spinner height={50} width={50} />
      </div>
    </div>
  )
}

export default Loading
