import { ReactHotToast } from "@/components/libs/react-hot-toast";
import Footer from "@/components/sharedModule/footer";
import Header from "@/components/sharedModule/header";
import { http } from "@/utils/helper/http.helper";
import { useDispatch } from "react-redux";
import useAuth from "@/components/hooks/auth/useAuth";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import authService from "@/services/auth.service";

type propsType = {
  children: React.ReactNode;
  className?: string;
  isBanner?: boolean;
}

const GlobalLayout: React.FC<propsType> = ({ children, className, isBanner }) => {
  const dispatch = useDispatch();
  const { token } = useAuth();
  const router = useRouter();

  let isRefreshing = useRef(false);
  let failedQueue: any[] = [];

  function processQueue(error: any, token = null) {
    failedQueue.forEach((prom) => {
      if (error) {
        prom.reject(error);
      } else {
        prom.resolve(token);
      }
    });

    failedQueue = [];
  };


  useEffect(() => {
    http.interceptors.response.use(
      response => {
        // If the response was successful, there's no need to do anything
        return response;
      },
      async error => {
        const originalRequest = error.config;

        // If the server responded with a 401 status code and this was not a retry request, refresh the token
        if (error.response.status === 401 && !originalRequest._retry && error.response.data.message === 'Unauthenticated') {
          if (isRefreshing.current) {
            return new Promise(function (resolve, reject) {
              failedQueue.push({ resolve, reject });
            }).then((token) => {
              console.log('orher', token)
              originalRequest.headers["Authorization"] = "Bearer " + token;
              return http(originalRequest);
            }).catch((err) => {
              return Promise.reject(err);
            });
          }

          originalRequest._retry = true;
          isRefreshing.current = true;

          authService.getRefreshToken().then((response) => {
            console.log(response);
            originalRequest.headers["Authorization"] = "Bearer " + response.access_token;
            processQueue(null, response.access_token);
            return http(originalRequest);
          }).catch((err) => {
            processQueue(err, null);
            router.push('/login');
          }).finally(() => {
            isRefreshing.current = false;
          });;
        }

        return Promise.reject(error);
      }
    );

  }, [dispatch, router, token]);

  return (
    <div id="site-page" className={`site ${className}`}>
      <Header isBanner={isBanner} />
      {children}
      <Footer />
      <ReactHotToast />
    </div>
  );
}

export default GlobalLayout;