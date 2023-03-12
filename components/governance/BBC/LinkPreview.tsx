import Link from 'next/link'
import TimeAgo from '../../react-time-ago'

interface LinkPreviewProps {
  title: string
  url: string
  image: string
  date: string
  description: string
}

const LinkPreview = ({ title, url, image, date, description }: LinkPreviewProps) => {
  return (
    <div className={`mx-auto mb-3 max-w-[700px] overflow-hidden rounded-md border border-bbaby-border bg-bbaby-brighter lg:h-[450px] xl:mx-2`}>
      <Link className="flex-col" href={url}>
        <div>
          <div className="mb-4 w-full px-3 text-center text-lg">
            <p className="font-bold">{title}</p>
          </div>
          <div className="mb-4 flex max-h-[350px] items-center justify-center overflow-hidden">
            <picture>
              <img src={image} height={350} alt="Link Image" width={700} />
            </picture>
          </div>
        </div>
        <div className="mt-2 flex p-2 text-sm text-bbaby-text_darker">
          <div>
            <span>Description length: {description.length}</span>
          </div>
          <TimeAgo className="ml-auto" date={date} />
        </div>
      </Link>
    </div>
  )
}

export default LinkPreview

export const LinkPreviewLoader = () => {
  return (
    <div
      className={`mx-auto mb-3 h-[350px] max-w-[700px] overflow-hidden rounded-md border border-bbaby-border bg-bbaby-brighter lg:h-[450px] xl:mx-2`}
    >
      <div className="p-2">
        <div className={`loading mb-4 h-[28px] w-full text-center text-lg`} />
        <div className="loading mb-4 flex h-[350px] items-center justify-center" />
        <div className="loading flex min-h-[300px] justify-center" />
      </div>
    </div>
  )
}
