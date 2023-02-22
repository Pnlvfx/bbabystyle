import Link from 'next/link';
import Widget from './Widget';

const PolicyWidget = () => {
  return (
    <Widget>
      <div className="relative flex-grow">
        <div className="sticky top-[57px]">
          <div className="bg-transparent p-2">
            <div className="solid mx-3 flex border-b border-transparent py-2">
              <div className="flex w-[50%] flex-col flex-nowrap px-1">
                <Link href={'/policies/user-agreement'} className="mx-1 inline-block text-[12px] leading-4">
                  User Agreement
                </Link>
                <Link href={'/policies/privacy-policy'} className="mx-1 mt-1 inline-block text-[12px] leading-4">
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div className="flex p-3 text-[12px] leading-4">Bbabystyle Inc © 2023. All rights reserved</div>
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default PolicyWidget;
