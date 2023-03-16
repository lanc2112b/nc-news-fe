import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getArticles } from "../api";
import ShortArticleCard from "./ShortArticleCard";
import TopicCard from "./TopicCard";
import ArticleFilter from "./ArticleFilter";
import LoaderLarge from "./LoaderLarge";

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

  const [sortCol, setSortCol] = useState(null);
  const [sortDir, setSortDir] = useState(null);
  const [sortDirToggle, setSortDirToggle] = useState('desc');
  const [limitVal, setLimitVal] = useState(10);

  const sortDispHandler = (event) => {

    const val = event.target.value;
    if (!isNaN(+val)) {
      setLimitVal(val);
    }
  }

  const sortDirHandler = (event) => {
    const val = event.target.value;
    const directions = ['asc', 'desc'];
    if (directions.includes(val)) {
      setSortDir(val);
      val === "asc" ? setSortDirToggle("desc") : setSortDirToggle("asc");
    }

  }

  const sortColHandler = (event) => {
    const val = event.target.value;
    const cols = ['votes', 'comment_count', 'created_at'];
    if (cols.includes(val)) {
      setSortCol(val);
    }
  }



  useEffect(() => {
    setLoading(true);
    getArticles(topic, sortCol, sortDir, limitVal).then((results) => {
      setArticles(results.articles);
      setLoading(false);
    });
  }, [topic, sortCol, sortDir, limitVal]);

  if (loading) {
    return <LoaderLarge content={'Loading Articles...'} />;
  }

  return (
    <section className="articles-list">
      <ArticleFilter
        sortColHandler={sortColHandler}
        sortDirHandler={sortDirHandler}
        sortDirToggle={sortDirToggle}
        sortDispHandler={sortDispHandler}
        limitVal={limitVal}
        sortCol={sortCol}
      />
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
