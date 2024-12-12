import React, { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`w-[100%] max-w-[1400px] m-auto relative px-5 ${className}`}
    >
      {children}
    </div>
  );
  {
    /* Added mx-auto for centering */
  }
};

export default Container;
