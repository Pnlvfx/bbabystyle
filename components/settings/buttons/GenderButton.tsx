import { RiArrowDownSLine } from "react-icons/ri"

const GenderButton = () => {
  return (
    <div className="settings-button-container">
        <div className="settings-button-left">
            <p className="settings-button-left-in-p">Gender</p>
            <p className="settings-button-left-in-p-small">Bbabystyle will never share this information and only uses it to improve what content you see.</p>
        </div>
        <div className="settings-button-right">
            <div className="flex items-center ml-4">
                <div className="cursor-pointer">
                    <div className="flex items-center">
                        <button className="text-[12px] font-bold leading-6 uppercase p-1 block whitespace-nowrap text-left w-full" role={'menuitem'}>
                            <span className="inline-block">SELECT</span>
                        </button>
                        <span>
                            <RiArrowDownSLine className="inline-block w-5 h-5 ml-[2px] align-middle" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GenderButton