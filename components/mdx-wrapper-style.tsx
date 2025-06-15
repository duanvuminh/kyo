import React from "react";

export const MdxWrapperStyle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="w-full prose p-2 mx-auto">{children}</div>;
};
