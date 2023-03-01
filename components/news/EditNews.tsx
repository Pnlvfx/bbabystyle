import { Dispatch, SetStateAction, useState } from 'react'
import { catchErrorWithMessage } from '../API/config/apiErrors'
import newsapis from '../API/newsapis'
import { useMessage } from '../utils/message/TimeMsgContext'
import { Spinner } from '../utils/Spinner'
import TextareaAutosize from '../utils/TextareaAutosize'

interface EditNewsProps {
  news: NewsProps
  setNews: Dispatch<SetStateAction<NewsProps>>
  setEditMode: Dispatch<SetStateAction<boolean>>
}

const EditNews = ({ news, setNews, setEditMode }: EditNewsProps) => {
  const [title, setTitle] = useState(news.title)
  const [description, setDescription] = useState(news.description)
  const message = useMessage()
  const [loading, setLoading] = useState(false)

  const edit = async () => {
    try {
      setLoading(true)
      await newsapis.editNews(news.permalink, title, description)
      setNews({
        ...news,
        title,
        description,
      })
      setEditMode(false)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      catchErrorWithMessage(err, message)
    }
  }

  return (
    <div className={`p-2`}>
      <TextareaAutosize
        value={title}
        className="w-full bg-reddit_dark-brighter p-2 text-center font-bold outline-none"
        onChange={(e) => setTitle(e.target.value)}
      />
      {news.mediaInfo.isImage && news.mediaInfo.image && news.mediaInfo.width && news.mediaInfo.height && (
        <picture className="max-h-[510px] overflow-hidden">
          <img src={news.mediaInfo.image} width={news.mediaInfo.width} height={news.mediaInfo.height} alt={news.mediaInfo.alt} />
        </picture>
      )}
      <TextareaAutosize
        value={description}
        className="w-full bg-reddit_dark-brighter p-2 text-center outline-none"
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="mt-2 flex items-end justify-end border-t border-reddit_border p-2">
        <button
          disabled={loading}
          className="h-[34px] w-[90px] rounded-full border border-reddit_border bg-white font-semibold text-black"
          onClick={edit}
        >
          {loading ? <Spinner /> : 'Submit'}
        </button>
      </div>
    </div>
  )
}

export default EditNews
