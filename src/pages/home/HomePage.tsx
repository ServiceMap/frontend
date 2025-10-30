import { useAuth } from "@/hooks/useAuth";

export const HomePage = () => {
  const { isLoggedIn, user, login, logout } = useAuth();

  return (
    <div className="p-6">
      <h1>Welcome to ServiceMap</h1>
      {!isLoggedIn ? (
        <button data-testid="login-btn" onClick={() => void login()}>
          Login
        </button>
      ) : (
        <>
          <p data-testid="hello-message">
            Hello, {user?.username ?? user?.preferredName}
          </p>
          <button data-testid="logout-btn" onClick={() => void logout()}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};
