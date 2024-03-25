import useAuth from "@/components/hooks/auth/useAuth";
import LoginForm from "@/components/login"
import GlobalLayout from "@/components/sharedModule/layout/globalLayout";
import { ROUTE } from "@/utils/constants/route.constant";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LoginPage = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace(ROUTE.MY_ACCOUNT);
    }
  }, [router, isAuthenticated]);

  return (
    <GlobalLayout>
      <h1>Login</h1>
      <LoginForm />
    </GlobalLayout>
  )
}

export default LoginPage;