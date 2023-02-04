import { Spinner } from "../components/utils/Spinner";

const Loading = () => {
  return (
    <div className="mx-auto flex max-w-full justify-center md:py-5 md:px-6">
      <div className="w-full lg:w-[640px]">
        <Spinner />
      </div>
    </div>
  );
};

export default Loading;
