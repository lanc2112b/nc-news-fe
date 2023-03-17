import { MessageContext } from "../contexts/Message";
import { useEffect, useState, useContext, useRef } from "react";
import { getCommentsByArtId, deleteUserCommentById } from "../api";
import CommentAccordian from "./CommentAccordian";
import { UserContext } from "../contexts/User";
import CommentCard from "./CommentCard";
import FlashMessage from "./FlashMessage";
import LoaderSmall from "./LoaderSmall";
/* import NotFoundError from "./NotFoundError";
import FiveOhOhError from "./FiveOhOhError"; */

const CommentsList = ({ article_id }) => {
  
  const { user } = useContext(UserContext);
  const { setMessage } = useContext(MessageContext);

  const scollToRef = useRef();

  const [comments, setComments] = useState([]);
  const [commentDeleted, setCommentDeleted] = useState(false);


  const [loading, setLoading] = useState(true);
  const [commentsError, setCommentsError] = useState(null);



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
            msgType: 'info',
            showMsg: true,
            variant: "success",
            title: "Action Complete",
            msg: "Comment deleted",
          });
          scollToRef.current.scrollIntoView();
        })
        .catch((error) => {
          setMessage({
            msgType: 'info',
            showMsg: true,
            variant: "danger",
            title: "Error",
            msg: "Could not delete comment",
          });
          scollToRef.current.scrollIntoView();
        });
    }
  }

  useEffect(() => {
    setLoading(true);
    getCommentsByArtId(article_id)
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
   }, [article_id, commentDeleted,setMessage]);

  if (loading) return <LoaderSmall content={'Loading Comments...'} />;
  
/*   if (commentsError === 404) return <NotFoundError message={"ARTICLE "} />;
  if (commentsError === 500) return <FiveOhOhError />; */
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
      <ul className="list-unstyled">
        <li className="ms-3">
          <h3>Comments: </h3>
        </li>
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
    </section>
  );
};
export default CommentsList;
