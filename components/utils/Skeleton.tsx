interface SkeletonProps {
  isImage?: boolean
}

const Skeleton = ({ isImage }: SkeletonProps) => {
  return (
    <div className={'mb-3 rounded-md border border-bbaby-border hover:border-bbaby-text'}>
      <div className="relative flex overflow-hidden rounded-md bg-bbaby-brighter">
        <div className="w-full p-2">
          <div className="loading mb-3 flex h-[24px] w-full bg-bbaby-brightest" />
          <div className="loading mb-4 min-h-[120px] bg-bbaby-brightest" />
          {isImage && <div className="loading mb-4 max-h-[500px] min-h-[300px] overflow-hidden bg-bbaby-brightest" />}
          <div>
            <div className="loading flex min-h-[36px] rounded-sm bg-bbaby-brightest p-2 text-sm text-[#717273] hover:bg-bbaby-hover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton
