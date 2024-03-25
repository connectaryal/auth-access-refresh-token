import axios from "axios";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

// fetch data from the server
async function fetcher(url: string) {
  try {
    const response = await http.get(url);
    return response.data;
  } catch (error: any) {
    return error.response?.data;
  }
};

// post data to the server
async function poster(url: string, data?: any) {
  try {
    const response = await http.post(url, data);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

// put data to the server
async function putter(url: string, data: any) {
  const response = await http.put(url, data);
  return response.data;
};

// delete data from the server
async function deleter(url: string) {
  const response = await http.delete(url);
  return response.data;
};

export { http, fetcher, poster, putter, deleter };