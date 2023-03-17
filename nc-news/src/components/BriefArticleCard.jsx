import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";

const BriefArticleCard = ({ article }) => {
  return (
    
    <li className="mb-2">
      <Card className="w-100 bg-transparent">
        <Card.Body className="w-100 flex-row px-3 py-2">
          <Card.Title className="mb-1">
            <h5 className="d-inline m-0">{article.title}</h5>
          </Card.Title>
          <Card.Text className="pb-1">
            <span className="d-inline">
              Posted:{" "}
              {DateTime.fromISO(article.created_at).toLocaleString(
                DateTime.DATETIME_SHORT
              )}
            </span>
            <span className="d-inline me-3">
              {" "}
              in <Link to={`/articles/view/${article.topic}`}>{article.topic}</Link>
            </span>
            <Link to={`/articles/${article.article_id}`}>Read more...</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </li>
  );
};

export default BriefArticleCard;
