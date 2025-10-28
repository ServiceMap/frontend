import { useAuth } from "@/providers/AuthProvider";

export const HomePage = () => {
  const { authenticated, user, login, logout } = useAuth();

  return (
    <div className="p-6">
      <h1>Welcome to ServiceMap</h1>
      {!authenticated ? (
        <button onClick={login}>Login</button>
      ) : (
        <>
          <p>Hello, {user?.username}</p>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  );
};
