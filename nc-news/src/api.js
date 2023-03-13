import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://api.muninn.co.uk/api/",
});

export const getArticles = () => {
  return newsApi.get(`/articles`).then((results) => {
    return results.data;
  });
};
