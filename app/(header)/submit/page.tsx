import { redirect } from 'next/navigation'
import { use } from 'react'
import ssrapis from '../../../components/API/ssrapis'
import Submit from '../../../components/submit/Submit'
import { SubmitContextProvider } from '../../../components/submit/SubmitProvider'
import TempSubmitWid from '../../../components/widget/TempSubmitWid'

const SubmitPage = () => {
  const session = use(ssrapis.getSession())

  if (!session?.user) {
    redirect('/')
  }

  return (
    <div className="mx-auto my-0 box-border flex max-w-[1248px] flex-row justify-center md:px-6 md:py-5">
      <div className="mr-0 w-full grow md:mr-6 lg:w-[740px] lg:max-w-[740px]">
        <SubmitContextProvider session={session} minimal={false}>
          <Submit />
        </SubmitContextProvider>
      </div>
      <div className="mt-11 hidden lg:block">
        <TempSubmitWid />
      </div>
    </div>
  )
}

export default SubmitPage

export const metadata = {
  title: 'Submit to Bbabystyle',
}
