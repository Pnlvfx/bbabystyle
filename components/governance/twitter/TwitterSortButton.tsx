"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const TwitterSortButton = () => {
  const query = useSearchParams();
  const sort = query.get("sort");
  const pathname = usePathname();
  const router = useRouter();

  const changeOrder = () => {
    if (sort === "best") {
      router.push(`${pathname}?sort=recently`);
    } else {
      router.push(`${pathname}?sort=best`);
    }
  };

  return (
    <button onClick={changeOrder} className="rounded-full border border-reddit_border px-4 py-1 text-sm font-bold">
      {!sort ? "Best" : sort === "best" ? "Recently" : "Best"}
    </button>
  );
};

export default TwitterSortButton;
