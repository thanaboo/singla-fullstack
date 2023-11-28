import React from "react";

type Props = {
  children: React.ReactNode;
};
function PageWrapper({ children }: Props) {
  return <div>{children}</div>;
}

export default PageWrapper;
