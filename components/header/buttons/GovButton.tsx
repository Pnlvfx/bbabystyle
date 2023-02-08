'use client'
import { useRouter } from "next/navigation";
import {TbBabyCarriage} from 'react-icons/tb'

const GovButton = () => {
  const router = useRouter();

  const click = () => {
    router.push("/governance");
  };
  return (
    <span className="md:ml-2 h-8">
      <button
        aria-label="Governance"
        className={`w-8 h-8 rounded-[2px] items-center flex flex-row relative `}
        onClick={click}
      >
        <TbBabyCarriage className="icon absolute top-0 bottom-0 left-0 right-0 m-auto" />
      </button>
    </span>
  );
};

export default GovButton;
