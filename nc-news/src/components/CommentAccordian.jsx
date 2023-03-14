import { Accordion } from "react-bootstrap";
import CommentForm from "./CommentForm";

const CommentAccordian = ({ article_id , comments, setComments}) => {
  return (
    <section className="comment-adder">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Button className="ps-4 p-2 text-right">
            Add Comment
          </Accordion.Button>

          <Accordion.Body>
            <CommentForm
              article_id={article_id}  comments={comments} setComments={setComments} 
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default CommentAccordian;
