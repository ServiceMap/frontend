import React from "react";
import { Elements } from "@stripe/react-stripe-js";

import { getStripe } from "@/external/stripe.ts";

interface StripeProviderProps {
  children: React.ReactNode;
}

export const StripeProvider: React.FC<StripeProviderProps> = ({ children }) => {
  const stripePromise = getStripe();

  return <Elements stripe={stripePromise}>{children}</Elements>;
};
