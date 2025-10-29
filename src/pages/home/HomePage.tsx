import { useAuth } from "@/hooks/useAuth";

export const HomePage = () => {
  const { authenticated, user, login, logout } = useAuth();

  return (
    <div className="p-6">
      <h1>Welcome to ServiceMap</h1>
      {!authenticated ? (
        <button onClick={() => void login()}>Login</button>
      ) : (
        <>
          <p>Hello, {user?.username}</p>
          <button onClick={() => void logout()}>Logout</button>
        </>
      )}
    </div>
  );
};
