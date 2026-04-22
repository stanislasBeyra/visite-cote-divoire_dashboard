"use client";

import * as React from "react";
import { InputOtp, type InputOtpProps } from "@/components/ui/input-otp";

export type VerificationCodeInputProps = InputOtpProps;

/** Alias sémantique de [InputOtp] pour codes de vérification. */
export function VerificationCodeInput(props: VerificationCodeInputProps) {
  return (
    <div data-ui="verificationcode">
      <InputOtp {...props} />
    </div>
  );
}
