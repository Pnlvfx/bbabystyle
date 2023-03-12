interface SkeletonProps {
  isImage?: boolean
}

const Skeleton = ({ isImage }: SkeletonProps) => {
  return (
    <div className={'border border-bbaby-border rounded-md hover:border-bbaby-text mb-3'}>
      <div className="flex overflow-hidden rounded-md bg-bbaby-brighter relative">
        <div className="p-2 w-full">
          <div className="mb-3 flex w-full h-[24px] bg-bbaby-brightest loading" />
          <div className="min-h-[120px] bg-bbaby-brightest mb-4 loading" />
          {isImage && <div className="max-h-[500px] min-h-[300px] bg-bbaby-brightest overflow-hidden mb-4 loading" />}
          <div>
            <div className="min-h-[36px] bg-bbaby-brightest flex rounded-sm p-2 text-sm text-[#717273] hover:bg-bbaby-hover loading" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton
