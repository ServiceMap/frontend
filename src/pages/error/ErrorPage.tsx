import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants/routes.ts";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6 text-center">
      <h1>Invalid tenant or access denied</h1>
      <button onClick={() => navigate(ROUTES.HOME)}>Go back to Home</button>
    </div>
  );
};
