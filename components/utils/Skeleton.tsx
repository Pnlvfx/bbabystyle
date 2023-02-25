interface SkeletonProps {
  isImage?: boolean
}

const Skeleton = ({ isImage }: SkeletonProps) => {
  const postClasses = 'block border border-reddit_border rounded-md hover:border-reddit_text mb-3'

  return (
    <div className={postClasses}>
      <div className="flex overflow-hidden rounded-md bg-reddit_dark-brighter relative">
        <div className="p-2 w-full">
          <div className="mb-3 flex w-full h-[24px] bg-reddit_dark-brightest loading" />
          <div className="min-h-[120px] bg-reddit_dark-brightest mb-4 loading" />
          {isImage && <div className="max-h-[500px] min-h-[300px] bg-reddit_dark-brightest overflow-hidden mb-4 loading" />}
          <div>
            <div className="min-h-[36px] bg-reddit_dark-brightest flex rounded-sm p-2 text-sm text-[#717273] hover:bg-bbaby-hover loading" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton
