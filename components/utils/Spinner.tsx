import { AiOutlineLoading3Quarters } from "react-icons/ai";

type SpinnerProps = {
  width?: number;
  height?: number;
  color?: string;
};

export const Spinner = ({ width, height, color }: SpinnerProps) => {
  return <AiOutlineLoading3Quarters className="mx-auto animate-spin" style={{ width, height, color }} />;
};
