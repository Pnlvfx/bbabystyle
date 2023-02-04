import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import ClickOutHandler from "react-clickout-ts";
import { catchErrorWithMessage } from "../../API/config/apiErrors";
import searchapis from "../../API/searchapis";
import { useMessage } from "../../utils/message/TimeMsgContext";

interface SearchDropdownProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const SearchDropdown = ({ show, setShow }: SearchDropdownProps) => {
  const [trends, setTrends] = useState<PostProps[]>([]);
  const message = useRef(useMessage());
  const shouldRequest = useRef(true);

  useEffect(() => {
    if (!shouldRequest.current) return;
    shouldRequest.current = false;
    setTimeout(async () => {
      try {
        const t = await searchapis.searchTrend();
        setTrends(t);
      } catch (err) {
        console.log(err);
        catchErrorWithMessage(err, message.current);
      }
    }, 1000);
  }, []);

  if (!show) return null;

  return (
    <ClickOutHandler
      onClickOut={() => {
        setShow(false);
      }}
    >
      <div className="rounded-md border border-reddit_border bg-reddit_dark-brighter">
        <div className="w-full p-2">
          <p className="text-xs font-bold text-reddit_text-darker">TRENDING TODAY</p>
          {trends.length >= 1 && trends.map((trend, index) => <div key={index}></div>)}
        </div>
      </div>
    </ClickOutHandler>
  );
};

export default SearchDropdown;
