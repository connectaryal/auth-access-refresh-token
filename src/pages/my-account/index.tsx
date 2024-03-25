import GlobalLayout from "@/components/sharedModule/layout/globalLayout";
import { fetcher } from "@/utils/helper/http.helper";
import { useCallback } from "react";

const MyAccount = () => {
  const fetchAccount = useCallback(() => {
    // fetch api
    try {
      fetcher('/my-account').then(res => {
        console.log(res);
      });
    } catch (error) {

    }
  }, []);
  return (
    <GlobalLayout>
      <h1 onClick={fetchAccount}>My Account</h1>
    </GlobalLayout>
  )
}

export default MyAccount;