import { errorToast } from "@/components/libs/react-hot-toast";
import { store } from "@/components/libs/redux-toolkit";
import { login, logout, updateUser } from "@/components/libs/redux-toolkit/auth/authSlice";
import { http, poster } from "@/utils/helper/http.helper";

class AuthService {
  // user login with email and password
  login(email: string, password: string) {
    return poster("/login", {
      email,
      password,
    }).then((response) => {
      http.defaults.headers['Authorization'] = `Bearer ${response.payload.access_token}`;
      store.dispatch(login(response.payload.token));
      store.dispatch(updateUser(response.payload.user));
    }).catch((error) => {
      errorToast(error.response?.data?.message || 'Error logging in');
    });
  }

  // Register user
  register(data: any) {
    return poster("/register", {
      data
    });
  }

  // Logout user
  logout() {
    store.dispatch(logout());
    return poster("/logout");
  }

  // refetch token with refresh token
  getRefreshToken() {
    const refreshToken = store.getState()?.auth?.token?.refresh_token;
    if (!refreshToken) {
      return Promise.reject('No refresh token');
    }

    console.log('token xa', refreshToken);

    return poster("/refresh-token", {
      refresh_token: refreshToken,
    }).then((response) => {
      console.log('response aayo xa', response);
      const payload = response.payload.token;
      store.dispatch(login(payload));
      return payload;
    }).catch((error) => {
      console.log('error aayo xa', error.response);
      store.dispatch(logout());
      errorToast(error.response.data.message || 'error');
      return error;
    });
  }
}

const authService = new AuthService();
export default authService;
