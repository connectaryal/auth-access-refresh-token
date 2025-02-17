import useAuth from "@/components/hooks/auth/useAuth";
import GlobalLayout from "@/components/sharedModule/layout/globalLayout";
import { fetcher } from "@/utils/helper/http.helper";
import { useCallback } from "react";

export default function Home() {
  const { isAuthenticated, user, token } = useAuth();

  console.log({ isAuthenticated, user, token })

  const fetchAccount = useCallback(() => {
    // fetch api
    try {
      fetcher('/my-account').then(res => {
        console.log(res);
      });
      fetcher('/orders').then(res => {
        console.log(res);
      });
    } catch (error) {

    }
  }, []);

  return (
    <GlobalLayout>
      <h1 onClick={fetchAccount}>Home</h1>
    </GlobalLayout>
  );
}
