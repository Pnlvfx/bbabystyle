import Link from 'next/link'
import { TiktakProps } from '../../../API/tiktakapis/types/tiktypes'
import styles from './tiktaklist.module.css'

type TiktakContainer = {
  tiktak: TiktakProps
}

const TiktakList = ({ tiktaks }: { tiktaks: TiktakProps[] }) => {
  const Tiktak = ({ tiktak }: TiktakContainer) => {
    return (
      <li className={styles.trendingItem}>
        <Link href={tiktak.permalink} className="trending-link">
          {tiktak.original_title.substring(0, 50)}
        </Link>
      </li>
    )
  }
  return (
    <div className={styles.trendingContainer}>
      <h2 className={styles.trendingTitle}>Your TikTak</h2>
      <ul className={styles.trendingList}>{tiktaks.length > 0 && tiktaks.map((tiktak) => <Tiktak key={tiktak._id} tiktak={tiktak} />)}</ul>
    </div>
  )
}

export default TiktakList
