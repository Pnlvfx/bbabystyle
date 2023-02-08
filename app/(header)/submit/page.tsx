import Submit from "../../../components/submit/Submit";
import { SubmitContextProvider } from "../../../components/submit/SubmitProvider";
import UserSecurity from "../../../components/utils/security/UserSecurity";
import TempSubmitWid from "../../../components/widget/TempSubmitWid";

const SubmitPage = () => {

  return (
    <div className="max-w-[1248px] md:py-5 md:px-6 flex flex-row justify-center box-border my-0 mx-auto">
      <div className="lg:max-w-[740px] mr-0 w-full md:mr-6 lg:w-[740px] flex-grow">
        <SubmitContextProvider minimal={false}>
          <UserSecurity>
            <Submit />
          </UserSecurity>
        </SubmitContextProvider>
      </div>
      <div className="mt-11 hidden lg:block">
        <TempSubmitWid />
      </div>
    </div>
  );
};

export default SubmitPage;