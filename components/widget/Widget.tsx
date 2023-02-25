const Widget = ({ children }: ChildrenProps) => {
  return (
    <div className="mb-5 box-content w-[312px] overflow-hidden rounded-md border border-bbaby-border bg-bbaby-brighter">
      <div className="flex h-full flex-col">{children}</div>
    </div>
  );
};

export default Widget;
