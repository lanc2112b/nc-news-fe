import Card from "react-bootstrap/Card";

const ShortArticleCard = ({ article }) => {
  return (
    <li className="mb-4">
      <Card className="w-100 flex-row flex-wrap">
        <Card.Img variant="top" src={article.article_img_url} className="w-25" />
        <Card.Body className="w-75">
          <Card.Title className="pb-2"><h3>{article.title}</h3></Card.Title>
          <Card.Subtitle className="pb-2">Topic: {article.topic}</Card.Subtitle>
          <Card.Text className="pb-1">Evidently articles have no body text?? Hey ho.</Card.Text>
        </Card.Body>
        <Card.Footer className="w-100">
          Votes: {article.votes} Comments: {article.comment_count}{" "}
        </Card.Footer>
      </Card>
    </li>
  );
};

export default ShortArticleCard;
