import Card from "react-bootstrap/Card";
import {Link } from 'react-router-dom'

const ShortArticleCard = ({ article }) => {
  return (
    <li className="mb-4">
      <Card className="w-100 flex-row flex-wrap">
        <Card.Img
          variant="top"
          src={article.article_img_url}
          className="w-25"
        />
        <Card.Body className="w-75">
          <Card.Title className="pb-2">
            <h3>{article.title}</h3>
          </Card.Title>
          <Card.Subtitle className="pb-2">Topic: {article.topic}</Card.Subtitle>
          <Card.Text className="pb-1">
            Evidently articles have no body text?? Hey ho.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="w-100 d-flex flex-row justify-content-between align-items-center">
          <p className="p-0 m-0">Votes: {article.votes}</p>{" "}
          <p className="p-0 m-0">Comments: {article.comment_count} </p>
          <Link to={`/articles/${article.article_id}`}> Read More...</Link>
        </Card.Footer>
      </Card>
    </li>
  );
};

export default ShortArticleCard;
