import { useSelector } from "react-redux";

const useAuth = () => {
  const authSlice = useSelector((state: any) => state.auth);

  return {
    user: authSlice.user,
    isAuthenticated: authSlice.isAuthenticated,
    token: authSlice.token
  };
}

export default useAuth;