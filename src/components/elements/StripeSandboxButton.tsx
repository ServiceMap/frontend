import React, { useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";

export const StripeSandboxButton: React.FC = () => {
  const stripe = useStripe();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleClick = () => {
    setLoading(true);
    setStatus("");

    const stripeLink = import.meta.env.VITE_STRIPE_PAYMENT_LINK;

    if (!stripeLink) {
      setStatus("Missing VITE_STRIPE_PAYMENT_LINK in environment!");
      setLoading(false);
      return;
    }

    window.location.href = stripeLink;
  };

  return (
    <div>
      <h2>Stripe Sandbox Payment</h2>
      <p>Click below to test Stripe payment flow in sandbox.</p>
      <button onClick={handleClick} disabled={loading || !stripe}>
        {loading ? "Redirecting..." : "💳 Pay $5"}
      </button>
      {status && <p>{status}</p>}
    </div>
  );
};
