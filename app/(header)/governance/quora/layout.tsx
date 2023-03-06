import Widget from '../../../../components/widget/Widget'

const QuoraLayout = ({ children }: ChildrenProps) => {
  return (
    <div className="mx-auto flex max-w-full justify-center md:py-5 md:px-6">
      <div className="w-full lg:w-[640px]">
        <div className="mb-4"></div>
        <ul>{children}</ul>
      </div>
      <div className="ml-6 hidden lg:block">
        <Widget>
          <div></div>
        </Widget>
      </div>
    </div>
  )
}

export default QuoraLayout
