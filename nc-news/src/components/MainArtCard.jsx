import { useState, useEffect } from "react";
//import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import Card from "react-bootstrap/Card";
import { DateTime } from "luxon";

const MainArtCard = ({article_id}) => {
  //const { article_id } = useParams();

  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getArticleById(article_id).then((result) => {
      setArticle(result);
      setLoading(false);
    });
  }, [article_id]);

  if(loading) return (<p>Loading... </p>)



  return (
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
          <p className="m-0">Votes: {article.votes}</p>
          <p className="m-0">Comments: {article.comment_count} </p>
        </Card.Footer>
      </Card>
    </article>
  );

};

export default MainArtCard;
