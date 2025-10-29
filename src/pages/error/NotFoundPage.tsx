import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants/routes.ts";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6 text-center">
      <h1>NOT FOUND</h1>
      <button onClick={() => void navigate(ROUTES.HOME)}>
        Go back to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
