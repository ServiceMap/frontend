import React from "react";
import { Elements } from "@stripe/react-stripe-js";

import { getStripe } from "@/shared/configs/external/stripe.ts";

interface IStripeProviderProps {
  children: React.ReactNode;
}

export const StripeProvider: React.FC<IStripeProviderProps> = ({
  children,
}) => {
  const stripePromise = getStripe();

  return <Elements stripe={stripePromise}>{children}</Elements>;
};
