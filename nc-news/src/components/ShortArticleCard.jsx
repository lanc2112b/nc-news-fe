import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import { DateTime } from 'luxon';

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
            <Link to={`/articles/${article.article_id}`}>Read more...</Link>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="w-100 p-2 d-flex flex-row justify-content-between">
          <p className="mb-1">Votes: {article.votes}</p>
          <p className="mb-1">Comments: {article.comment_count} </p>
          <p className="mb-1">
            Posted:{" "}
            {DateTime.fromISO(article.created_at).toLocaleString(
              DateTime.DATETIME_SHORT
            )}
          </p>
        </Card.Footer>
      </Card>
    </li>
  );
};

export default ShortArticleCard;
