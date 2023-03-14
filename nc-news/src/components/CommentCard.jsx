import { DateTime } from 'luxon';
import { Card } from 'react-bootstrap';

const CommentCard = ({ comment }) => {
  console.log(comment);
  return (
    <li className="py-2 ms-3">
      <Card>
        <Card.Header className="d-flex flex-row align-items-center">
          <h4 className="me-3 my-0 p-0">{comment.author} </h4>{" "}
          <p className="me-3 my-0 p-0">
            @{" "}
            {DateTime.fromISO(comment.created_at).toLocaleString(
              DateTime.DATETIME_SHORT
            )}
          </p>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {comment.body}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          Votes: {comment.votes}
        </Card.Footer>
      </Card>
    </li>
  );

}

export default CommentCard;