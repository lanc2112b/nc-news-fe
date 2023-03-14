import { useEffect, useState } from "react";
import { getCommentsByArtId } from "../api";

import CommentCard from './CommentCard';

const CommentsList = ({article_id}) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getCommentsByArtId(article_id).then((results) => {
            setComments(results);
            setLoading(false)
        })

    }, [article_id]);

    if (loading) {
        return (
            <p>Loading...</p>
        )
    }

    return (
      <section className="comments-list">
            <ul className="list-unstyled">
                <li className="ms-3"><h3>Comments: </h3></li>
          {comments.map((element) => {
            return <CommentCard key={element.comment_id} comment={element} />;
          })}
        </ul>
      </section>
    );

}
export default CommentsList;