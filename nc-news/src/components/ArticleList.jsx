import { useState, useEffect, useContext } from "react";
import { MessageContext } from "../contexts/Message";
import { useNavigate, useParams, useLocation } from "react-router-dom";  //
import { getArticles } from "../api";
import ShortArticleCard from "./ShortArticleCard";
import TopicCard from "./TopicCard";
import ArticleFilter from "./ArticleFilter";
import LoaderLarge from "./LoaderLarge";
import NoArticles from './NoArticles';
import Paginator from "./Paginator";

const ArticleList = () => {
  const navigate = useNavigate();

  /** get info from URL */
  const { topic_id } = useParams();
  const search = useLocation().search;
  const searchObj = new URLSearchParams(search);

  const initialTopic = topic_id ? topic_id : null;
  const initialPage = searchObj.get("page") ? searchObj.get("page") : 1;

  /** basic loading reqs */
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState(initialTopic);
  

  /** sort, limit, pagination etc */
  const [sortCol, setSortCol] = useState(null);
  const [sortDir, setSortDir] = useState(null);
  const [sortDirToggle, setSortDirToggle] = useState("desc");
  const [limitVal, setLimitVal] = useState(10);
  const [currPage, setCurrPage] = useState(Number(initialPage));

  const [articleCount, setArticleCount] = useState(0);

  /** error handling */
  const [articleError, setArticleError] = useState(false);
  const { setMessage } = useContext(MessageContext);

  const tabSelector = (event) => {
    
    //TODO: Alter url to include optional page number
    /** URL E.G. SE friendly
     * /articles/view/:topic_id/:view_num/:page_num
     * /articles/view/football/10/2
     * OR 
     * /articles/view/all/25/1
     **/

    const selectedTopic = event === "articles" ? null : event;
    setCurrPage(1);

    if (selectedTopic) {
      navigate(`/articles/view/${selectedTopic}`);
    } else {
      navigate(`/articles`);
    }

    setTopic(selectedTopic);
  };

  const sortDispHandler = (event) => {
    const val = event.target.value;
    if (!isNaN(+val)) {
      setLimitVal(val);
    }
  };

  const sortDirHandler = (event) => {
    const val = event.target.value;
    const directions = ["asc", "desc"];
    if (directions.includes(val)) {
      setSortDir(val);
      val === "asc" ? setSortDirToggle("desc") : setSortDirToggle("asc");
    }
  };

  const sortColHandler = (event) => {
    const val = event.target.value;
    const cols = ["votes", "comment_count", "created_at"];
    if (cols.includes(val)) {
      setSortCol(val);
    }
  };

  const backHandler = () => {
    setTopic("");
  };

  useEffect(() => {
    setLoading(true);
    getArticles(topic, sortCol, sortDir, limitVal, currPage)
      .then((results) => {
        setArticles(results.articles);
        setArticleCount(results.total_count);
        setLoading(false);
        setArticleError(false);
        setMessage({
          msgType: null,
          showMsg: false,
          variant: "",
          title: "",
          msg: "",
        });
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setArticleError(404);
          setLoading(false);
        } else if (error.response.status === 500) {
          setArticleError(500);
          setLoading(false);
        } else {
          setLoading(false);
          setArticleError(true);
          setMessage({
            msgType: "error",
            showMsg: true,
            variant: "danger",
            title: "API Error",
            msg: "Cannot load articles, please try again later.",
          });
        }
      });
  }, [topic, sortCol, sortDir, limitVal, setMessage, currPage]);

  if (loading) return <LoaderLarge content={"Loading Articles..."} />;

  if (articleError === 500)
    return <LoaderLarge content={"Error Loading Articles..."} />;

  if (articleError === 404) return <NoArticles backHandler={backHandler} />;

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
      <Paginator
        currPage={currPage}
        limitVal={limitVal}
        itemCount={articleCount}
        setCurrPage={setCurrPage}
      />
    </section>
  );
};

export default ArticleList;
