import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${
    import.meta.env.VITE_REACT_APP_GITHUB_TOKEN
  }`;
  return config;
});

export async function searchUsers(search) {
  return await api.get(`https://api.github.com/search/users?q=${search}`);
}
