'use client';

import { server } from "../../../config/config";
import { catchErrorWithMessage } from "../../API/config/apiErrors";
import { useMessage } from "../../utils/message/TimeMsgContext";

const ResendEmail = () => {
    const message = useMessage();

    const resendEmail = async () => {
        try {
            const url = `${server}/send_verification_email`;
            const res = await fetch(url, {
                method: 'get',
                credentials: 'include',
            });
            const data = await res.json();
            if (!res.ok) message.setMessage({value: data?.msg || 'Sorry for this error, we are working to fix it!', status: 'error'});
            message.setMessage({value: data?.msg, status: 'success'});
        } catch (err) {
            catchErrorWithMessage(err, message)
        }
    }

  return (
    <button role={'button'} tabIndex={0} className="text-[12px] leading-4 relative border border-transparent text-[#4fbcff] px-1 underline w-auto rounded box-border text-center py-[3px] min-h-[32px] min-w-[32px] flex items-center justify-center" onClick={resendEmail}>
        Click to resend
    </button>
  )
}

export default ResendEmail