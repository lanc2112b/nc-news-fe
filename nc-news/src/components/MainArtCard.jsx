import { useState, useEffect, useContext } from "react";
import { MessageContext } from "../contexts/Message";
//import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import Card from "react-bootstrap/Card";
import ArticleVoter from "./ArticleVoter";
import { DateTime } from "luxon";
import LoaderLarge from "./LoaderLarge";
import NotFoundError from './NotFoundError';
import FiveOhOhError from './FiveOhOhError';


const MainArtCard = ({article_id}) => {
  //const { article_id } = useParams();
  const { setMessage } = useContext(MessageContext);

  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [articleError, setArticleError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getArticleById(article_id)
      .then((result) => {
        setArticle(result);
        setLoading(false);
        setArticleError(null);
        setMessage({
          msgType: null,
          showMsg: null,
          variant: null,
          title: null,
          msg: null,
        });
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status === 404) {
          setArticleError(404);
          setLoading(false);
        } else if (error.response.status === 500) {
          setArticleError(500);
          setLoading(false);
        } else {
          setMessage({
            msgType: "error",
            showMsg: true,
            variant: "danger",
            title: "API Error",
            msg: "Bad request",
          });
        }
      });
  }, [article_id, setMessage]);

  if(loading) return <LoaderLarge content={'Loading Article...'} />

  if (articleError === 404) return <NotFoundError message={"ARTICLE "} />;
  if (articleError === 500) return <FiveOhOhError />;

  return (
    <section className="article-section">
      <article className="main-article">
        <Card className="w-100">
          <Card.Title className="my-4 ms-4">
            <h4 className="font-weight-bold">{article.title}</h4>
          </Card.Title>
          <Card.Img variant="top" src={article.article_img_url} />
          <Card.Body>
            <Card.Text className="dropcap">{article.body}</Card.Text>
            <Card.Text className="font-weight-bold d-flex flex-row justify-content-between ">
              <span>
                {" "}
                Author:{" "}
                <span className="font-weight-normal">{article.author}</span>
              </span>{" "}
              <span>
                Posted: <span className="font-weight-normal"></span>
              {DateTime.fromISO(article.created_at).toLocaleString(
                DateTime.DATETIME_SHORT
              )}
              </span>
            </Card.Text>
          </Card.Body>
          <Card.Footer className=" d-flex flex-row justify-content-around align-items-center ">
            <ArticleVoter votes={article.votes} article_id={article_id} />
            <p className="m-0">Comments: {article.comment_count} </p>
          </Card.Footer>
        </Card>
      </article>
    </section>

  );

};

export default MainArtCard;
