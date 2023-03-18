import { MessageContext } from "../contexts/Message";
import { useEffect, useState, useContext, useRef } from "react";
import { getCommentsByArtId, deleteUserCommentById } from "../api";
import CommentAccordian from "./CommentAccordian";
import { UserContext } from "../contexts/User";
import CommentCard from "./CommentCard";
import FlashMessage from "./FlashMessage";
import LoaderSmall from "./LoaderSmall";
import Paginator from "./Paginator";
import { Form } from "react-bootstrap";
/* import NotFoundError from "./NotFoundError";
import FiveOhOhError from "./FiveOhOhError"; */

const CommentsList = ({ article_id, commentTotalCount }) => {
  const { user } = useContext(UserContext);
  const { setMessage } = useContext(MessageContext);

  const scollToRef = useRef();

  const [comments, setComments] = useState([]);
  const [commentDeleted, setCommentDeleted] = useState(false);

  const [loading, setLoading] = useState(true);
  const [commentsError, setCommentsError] = useState(null);

  /** paginator stuff */
  const [currPage, setCurrPage] = useState(1);
  const [limitVal, setLimitVal] = useState(10);

const sortDispHandler = (event) => {
  const val = event.target.value;
  if (!isNaN(+val)) {
    setLimitVal(val);
  }
};

  const deleteHandler = (event) => {
    const val = event.target.value;

    if (isNaN(val)) return;

    const currentComment = comments.find((comment) => {
      return comment.comment_id === +val;
    });

    if (currentComment.author === user.username) {
      deleteUserCommentById(val)
        .then((result) => {
          const filteredComments = comments.filter((element) => {
            return element.comment_id !== val;
          });
          setComments(filteredComments);
          setCommentDeleted(true);
          setMessage({
            msgType: "info",
            showMsg: true,
            variant: "success",
            title: "Action Complete",
            msg: "Comment deleted",
          });
          scollToRef.current.scrollIntoView();
        })
        .catch((error) => {
          setMessage({
            msgType: "info",
            showMsg: true,
            variant: "danger",
            title: "Error",
            msg: "Could not delete comment",
          });
          scollToRef.current.scrollIntoView();
        });
    }
  };

  useEffect(() => {
    setLoading(true);
    getCommentsByArtId(article_id, limitVal, currPage)
      .then((results) => {
        setComments(results);
        setLoading(false);
        setCommentDeleted(false);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setCommentsError(404);
          setLoading(false);
        } else if (error.response.status === 500) {
          setCommentsError(500);
          setLoading(false);
        } else {
          setLoading(false);
          setCommentsError(true);
          setMessage({
            msgType: "error",
            showMsg: true,
            variant: "danger",
            title: "API Error",
            msg: "Bad request",
          });
        }
      });
  }, [article_id, commentDeleted, setMessage, currPage, limitVal]);

  if (loading) return <LoaderSmall content={"Loading Comments..."} />;
  
  /** maybe add a stopped 'spinner'
   *  component here to show specific loading error */
  if (commentsError) return;

  return (
    <section className="comments-list">
      <hr ref={scollToRef} />
      <CommentAccordian
        article_id={article_id}
        comments={comments}
        setComments={setComments}
      />
      <FlashMessage id="flash_message" />
      <hr />
      <div className="d-flex flex-row justify-content-between align-items-center">
        <h3>Comments: </h3>
        <Form.Select
          className="display-filter"
          size="sm"
          onChange={sortDispHandler}
          value={limitVal ?? ""}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </Form.Select>
      </div>

      <ul className="list-unstyled">
        {comments.map((element) => {
          return (
            <CommentCard
              key={element.comment_id}
              comment={element}
              deleteHandler={deleteHandler}
            />
          );
        })}
      </ul>
      <Paginator
        currPage={currPage}
        itemCount={commentTotalCount}
        limitVal={limitVal}
        setCurrPage={setCurrPage}
      />
    </section>
  );
};
export default CommentsList;
