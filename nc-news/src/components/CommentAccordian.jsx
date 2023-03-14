import { Accordion, Button } from "react-bootstrap";

const CommentAccordian = ({ comment_id }) => {
  return (
    <section className="comment-adder">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Button>
            <Button variant="primary" onClick={() => console.log("Primary")}>
              Add Comment
            </Button>
          </Accordion.Button>

          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default CommentAccordian;
