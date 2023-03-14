import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://api.muninn.co.uk/api/",
});

export const getArticles = () => {
  return newsApi.get(`/articles`).then((results) => {
    return results.data;
  });
};

export const getCommentsByArtId = (id) => {

  return newsApi.get(`/articles/${id}/comments`).then((results) => {
    return results.data.comments;
  });

};

export const getArticleById = (id) => {

  return newsApi.get(`/articles/${id}`).then((results) => {
    return results.data.article;
  });
};
