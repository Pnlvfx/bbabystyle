import { CloseIcon } from "../../utils/svg/SVG";
import { useAuthModal } from "./AuthModalProvider";

const AuthModal = () => {
  const authModal = useAuthModal();

  const closeModal = async () => {
    authModal.setShow("hidden");
  };
  return (
    <div>
      <div className="fixed left-0 top-0 z-[110] h-full w-full bg-[rgba(0,0,0,.4)]">
        <div
          className="z-[111 fixed left-[50%] top-[50%] h-[640px] w-[400px] overflow-hidden rounded-[12px] shadow-[1px_7px_20px_2px_rgb(0_0_0/40%)]"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          {authModal.show === "login" ? (
            <iframe key={authModal.show} src={`${process.env.NEXT_PUBLIC_CLIENT_URL}/account/login`} className="h-full w-full" />
          ) : authModal.show === "register" ? (
            <iframe key={authModal.show} src={`${process.env.NEXT_PUBLIC_CLIENT_URL}/account/register`} className="h-full w-full" />
          ) : (
            <div />
          )}
          <button onClick={closeModal} className="absolute right-[16px] top-[16px]">
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
