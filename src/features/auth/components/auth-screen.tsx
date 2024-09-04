"use client";

import React from "react";
import { SignInFlow } from "../types";

export const AuthScreen = () => {
  const [state, setState] = React.useState<SignInFlow>("signIn");

  return (
    <div className="h-full flex items-center justify-center bg-[#5c3b58]">
      <div className="md:h-auto md:w-[420px]">AuthScreen</div>
    </div>
  );
};
