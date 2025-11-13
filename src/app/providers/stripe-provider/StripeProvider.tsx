import React from "react";
import { Elements } from "@stripe/react-stripe-js";

import { getStripe } from "@/app/config";

interface IStripeProviderProps {
  children: React.ReactNode;
}

export const StripeProvider: React.FC<IStripeProviderProps> = ({
  children,
}) => {
  const stripePromise = getStripe();

  return <Elements stripe={stripePromise}>{children}</Elements>;
};
