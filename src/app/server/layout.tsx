import React, { type PropsWithChildren } from "react";

function ServerLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-10 pt-10 items-center">
      <h2 className="text-2xl ">Server side</h2>
      {children}
    </div>
  );
}

export default ServerLayout;
