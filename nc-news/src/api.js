import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://api.muninn.co.uk/api/",
});

export const getArticles = () => {
  return newsApi.get(`/articles`).then((results) => {
    return results.data;
  });
};

export const getArticleById = (id) => {

  return newsApi.get(`/articles/${id}`).then((results) => {
    return results.data.article;
  });
};


export const patchArtVotes = (id, votes) => {

  return newsApi.patch(`/articles/${id}`, { inc_votes: votes }).then((results) => {
    //console.log(votes, results);
    return results.data.article;
  });
}