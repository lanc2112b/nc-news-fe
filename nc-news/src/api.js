import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://news.hugin.uk/api/",
});

export const getApi = () => {

  return newsApi.get(`/`)
    .then((results) => {
     
      return objectsToArray(results.data.endpoints)
    });

}

export const getArticles = (topic = null, sortCol = null, sortDir = null, limit=40, currPage = 1) => {
  return newsApi
    .get(`/articles`, {
    //.get(`/articlesz`, {
    params: {
      topic: topic,
      sort_by: sortCol,
      order: sortDir,
      limit: limit,
      p: currPage,
    }
  }).then((results) => {
    return results.data;
  });
};

export const getCommentsByArtId = (id, limitVal, page = 1) => {

  return newsApi
    .get(`/articles/${id}/comments`, {
      params: {
        limit:limitVal,
        p: page,
      }
    })
    .then((results) => {
    return results.data.comments;
  });

};

export const getArticleById = (id) => {

  return newsApi.get(`/articles/${id}`).then((results) => {
    return results.data.article;
  });
};

export const postCommentByArtId = (id, comment) => {

  return newsApi.post(`/articles/${id}/comments`, comment)
    .then((results) => {
      return results;
    });
}

export const patchArtVotes = (id, votes) => {

  return newsApi.patch(`/articles/${id}`, { inc_votes: votes })
    .then((results) => {
      return results.data.article;
    });
}



export const getTopics = () => {
  return newsApi
    .get(`/topics`)
    //.get(`/topicsz`)  // toggle the get used to force error
    .then((results) => {
      return results.data.topics;
    });
}

export const deleteUserCommentById = (id) => {

  return newsApi.delete(`/comments/${id}`)
    .then((result) => {
    return result;
  });

}

export const getUsers = () => {
  return (
    newsApi
      .get(`/users`)
      //.get(`/topicsz`)  // toggle the get used to force error
      .then((results) => {
        return results.data.users;
      })
  );
};

export const getUserById = (id) => {
  return (
    newsApi
      .get(`/users/${id}`)
      //.get(`/topicsz`)  // toggle the get used to force error
      .then((results) => {
        return results.data.user;
      })
  );
};


function objectsToArray(obj) {
  const arr = [];

  for (let key in obj) {
    const newObj = { endpoint: key, ...obj[key] };
    arr.push(newObj);
  }

  return arr;
}