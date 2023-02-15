'use client';
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const TwitterSortButton = () => {
    const query = useSearchParams();
    const sort = query.get('sort');
    const pathname = usePathname();
    const router = useRouter();

    const changeOrder = () => {
        if (sort === 'best') {
            //setTweets(tweets.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()))
            router.push(`${pathname}?sort=recently`);
        } else {
            router.push(`${pathname}?sort=best`)
        }
    }

  return (
    <button
      onClick={changeOrder}
      className="rounded-full border border-reddit_border px-4 py-1 text-sm font-bold"
    >
      {sort ? sort : "Best"}
    </button>
  );
};

export default TwitterSortButton;
