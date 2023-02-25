export const buttonClass = (outline?: boolean) => {
  let classNames = "border border-gray-300 rounded-full px-3 text-sm font-bold ";
  if (outline) {
    classNames += "text-gray-300 ";
  } else {
    classNames += "bg-gray-300 text-bbaby-dark ";
  }
  return classNames;
};
