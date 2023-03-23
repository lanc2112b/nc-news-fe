
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { Link } from 'react-router-dom';
import { DateTime } from 'luxon';
import { Card } from 'react-bootstrap';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';


const CommentCard = ({ comment, deleteHandler }) => {

  const { user } = useContext(UserContext);

  const isUser = (user.username === comment.author) ? true : false;

  return (
    <li className="py-2">
      <Card>
        <Card.Header className="d-flex flex-row align-items-center">
          <h6 className="me-2 mb-1 p-0 ">
            <Link to={`/users/${comment.author}`}>{comment.author}</Link>
          </h6>
          <p className="me-3 my-0 p-0 small">
            @{" "}
            {DateTime.fromISO(comment.created_at).toLocaleString(
              DateTime.DATETIME_SHORT
            )}
          </p>
        </Card.Header>
        <Card.Body>
          <Card.Text>{comment.body}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex flex-row align-items-center justify-content-between">
          Votes: {comment.votes}
          {isUser === true ? (
            <OverlayTrigger
              placement="left"
              overlay={<Tooltip id="button-tooltip-2">Delete Comment</Tooltip>}
            >
              <Button
                variant="danger"
                value={comment.comment_id}
                className="delete-comment"
                size="sm"
                onClick={deleteHandler}
              ></Button>
            </OverlayTrigger>
          ) : (
            ""
          )}
        </Card.Footer>
      </Card>
    </li>
  );
};

export default CommentCard;