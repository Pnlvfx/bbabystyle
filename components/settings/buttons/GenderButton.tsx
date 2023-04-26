import { RiArrowDownSLine } from 'react-icons/ri'

const GenderButton = () => {
  return (
    <div className="settings-button-container">
      <div className="settings-button-left">
        <p className="settings-button-left-in-p">Gender</p>
        <p className="settings-button-left-in-p-small">
          Bbabystyle will never share this information and only uses it to improve what content you see.
        </p>
      </div>
      <div className="settings-button-right">
        <div className="ml-4 flex items-center">
          <div className="cursor-pointer">
            <div className="flex items-center">
              <button className="block w-full whitespace-nowrap p-1 text-left text-[12px] font-bold uppercase leading-6" role={'menuitem'}>
                <span className="inline-block">SELECT</span>
              </button>
              <span>
                <RiArrowDownSLine className="ml-[2px] inline-block h-5 w-5 align-middle" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GenderButton
