import useAuth from "@/components/hooks/auth/useAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";

type propsType = {
  children: React.ReactNode;
}

const PrivateLayout: React.FC<propsType> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return (
    <>
      {children}
    </>
  )

}

export default PrivateLayout;