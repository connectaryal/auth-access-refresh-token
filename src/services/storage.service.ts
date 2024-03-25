import Cookies from 'js-cookie';

// get data from storage
class LocalStorageService {
  storage: Storage;
  constructor() {
    this.storage = localStorage;
  }
  get(key: string) {
    const getValue = this.storage.getItem(key);
    return getValue ? JSON.parse(getValue) : null;
  }
  set(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }
  remove(key: string) {
    this.storage.removeItem(key);
  }
  clear() {
    this.storage.clear();
  }
}

// get data from cookies
class CookieStorageService {
  get(key: string) {
    const cookieValue = Cookies.get('cookieName');
    return cookieValue ? JSON.parse(cookieValue) : null;
  }
  set(key: string, value: string) {
    Cookies.set(key, JSON.stringify(value), { expires: Date.now() - 5 * 60 * 1000, path: '/', secure: true, sameSite: 'strict' });
  }
  remove(key: string) {
    Cookies.remove(key);
  }
  clear() {
    Object.keys(Cookies.get()).forEach(key => {
      Cookies.remove(key);
    });
  }
}

export { LocalStorageService, CookieStorageService };