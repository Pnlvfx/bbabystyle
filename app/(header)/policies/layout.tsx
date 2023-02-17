import MainButtonNav from '../../../components/policies/MainButtonNav';
import style from './policy.module.css';
const PoliciesLayout = ({ children }: ChildrenProps) => {
  return (
    <div className="bg-white text-reddit_dark text-[14px] leading-[1.5]">
      <main
        className={`${style.main} lg:gap-x-[6rem] md:px-[1.5rem] md:gap-x-[4rem] md:gap-y-[2rem] md:grid-cols-[15rem_1fr] pt-[2rem] p-[1rem] max-w-[1132px] mx-auto scroll-smooth`}
      >
        <MainButtonNav />
        {children}
      </main>
    </div>
  );
};

export default PoliciesLayout;
