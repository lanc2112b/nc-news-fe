import { MessageContext } from "../contexts/Message";
import { useEffect, useState, useContext } from "react";
import { getCommentsByArtId, deleteUserCommentById } from "../api";
import CommentAccordian from "./CommentAccordian";
import { UserContext } from "../contexts/User";

import CommentCard from "./CommentCard";
import FlashMessage from "./FlashMessage";
import LoaderSmall from "./LoaderSmall";

const CommentsList = ({ article_id }) => {
  const { user } = useContext(UserContext);
  const { setMessage } = useContext(MessageContext);

  const [comments, setComments] = useState([]);

  const [commentDeleted, setCommentDeleted] = useState(false);

  const [loading, setLoading] = useState(true);

  const deleteHandler = (event) => {
    const val = event.target.value;

    if (isNaN(val)) return;

    const currentComment = comments.find((comment) => {
      return comment.comment_id === +val;
    });

    if (currentComment.author === user.username) {
      deleteUserCommentById(val).then((result) => {
        if (result.status === 204) {
          const filteredComments = comments.filter((element) => {
            return element.comment_id !== val;
          });
          setComments(filteredComments);
          setCommentDeleted(true);
          setMessage({
            showMsg: true,
            variant: 'success',
            title: "Action Complete",
            msg: "Comment deleted",
          });

        } else {
          setMessage({
            showMsg: true,
            variant: "danger",
            title: "Error",
            msg: "Something went wrong",
          });
        }
      });
    } else {
      console.log("incorrect user");
    }
  };

  useEffect(() => {
    setLoading(true);
    getCommentsByArtId(article_id).then((results) => {
      setComments(results);
      setLoading(false);
      setCommentDeleted(false);
    });
  }, [article_id, commentDeleted]);

  if (loading) return <LoaderSmall content={'Loading Comments...'} />;
  

  return (
    <section className="comments-list">
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
