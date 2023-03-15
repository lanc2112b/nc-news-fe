import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getArticles } from "../api";
import ShortArticleCard from "./ShortArticleCard";
import TopicCard from "./TopicCard";

const ArticleList = () => {

  const navigate = useNavigate();

  const { topic_id } = useParams();
  const initialTopic = topic_id ? topic_id : null;

  const tabSelector = (event) => {
      
    const selectedTopic = event === "articles" ? null : event;

    if (selectedTopic) {
      navigate(`/articles/view/${selectedTopic}`);
    } else {
      navigate(`/articles`);
    }

    setTopic(selectedTopic);
  };

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState(initialTopic);

  useEffect(() => {
    setLoading(true);

    getArticles(topic).then((results) => {
      setArticles(results.articles);
      setLoading(false);
    });
  }, [topic]);

  if (loading) {
    return <p>Loading.... </p>;
  }

  return (
    <section className="articles-list">
      <TopicCard tabSelector={tabSelector} topic={topic} />
      <ul className="p-0 m-0">
        {articles.map((element) => {
          return (
            <ShortArticleCard article={element} key={element.article_id} />
          );
        })}
      </ul>
    </section>
  );
};

export default ArticleList;
