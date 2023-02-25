import { FaRegFlag } from "react-icons/fa";

const Donations = () => {
  // const [paypal, setPaypal] = useState(<Spinner />);

  // const PaypalComp = () => {
  //   return (
  //     <form action="https://www.paypal.com/donate" method="post" target="_top">
  //       <input type="hidden" name="hosted_button_id" value="ATPT3DVZYJ8L4" />
  //       <input
  //         type="image"
  //         src="https://www.paypalobjects.com/en_US/IT/i/btn/btn_donateCC_LG.gif"
  //         name="submit"
  //         title="PayPal - The safer, easier way to pay online!"
  //         alt="Donate with PayPal button"
  //       />
  //     </form>
  //   );
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPaypal(PaypalComp);
  //   }, 500);
  // }, []);

  return (
    <div className="mb-5 box-content h-[220px] w-[312px] rounded-md border border-bbaby-border bg-bbaby-brighter">
      <div className="flex p-4">
        <div className="self-center">
          <FaRegFlag className="h-6 w-6" />
        </div>
        <div className="ml-4 text-center text-sm">
          <div className="mr-4 font-bold">
            <p>Bbaby</p>
          </div>
          <div className="self-center">
            <p className="flex break-words">If you want to help us develop a social platform where everyone can share without censorship,</p>
            <p>Consider making a small PayPal donation</p>
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-2 mb-3 flex justify-center">
        <form action="https://www.paypal.com/donate" method="post" target="_top">
          <input type="hidden" name="hosted_button_id" value="ATPT3DVZYJ8L4" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/IT/i/btn/btn_donateCC_LG.gif"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
        </form>
      </div>
    </div>
  );
};

export default Donations;
