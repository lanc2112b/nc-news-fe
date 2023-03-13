import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import Card from "react-bootstrap/Card";

const MainArtCard = () => {
  const { article_id } = useParams();

  console.log(article_id);

  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getArticleById(article_id).then((result) => {
      setArticle(result);
      setLoading(false);
    });
  }, [article_id]);

  return (
    <section>
      <Card className="w-100">
        <Card.Title className="my-4 ms-4">{article.title}</Card.Title>
        <Card.Img variant="top" src={article.article_img_url} />
        <Card.Body>
          <Card.Text>
            Really need some text for the body, rather than letting the title
            initiate discussion
          </Card.Text>
        </Card.Body>
        <Card.Footer className=" d-flex flex-row justify-content-around align-items-center">
          <p className="m-0">Votes: {article.votes}</p>
          <p className="m-0">Comments: {article.comment_count} </p>
        </Card.Footer>
      </Card>
    </section>
  );
};

export default MainArtCard;
