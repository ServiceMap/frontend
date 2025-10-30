import { useNavigate } from "react-router-dom";

import { ROUTES } from "@/constants/routes.ts";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6 text-center">
      <h1>Invalid realm or access denied</h1>
      <button
        onClick={() => {
          navigate(ROUTES.HOME);
        }}
      >
        Go back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
