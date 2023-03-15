import { useState, useContext } from "react";
import { MessageContext } from "../contexts/Message";
import { Button, Form, FormGroup } from "react-bootstrap";
import { postCommentByArtId } from "../api";

const CommentForm = ({ article_id, comments, setComments }) => {

  const { message, setMessage } = useContext(MessageContext);

  const [formData, setFormData] = useState({
    body: "",
    username: "jessjelly",
  });

  const [commentError, setCommentError] = useState(null);

  const reserHandler = () => {
    setFormData((formData) => ({ ...formData, body: "" }));
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;

    if (name === "body") {
      if (value.length < 5 || value.length > 1000) {
        setCommentError("Comment must be between 5 & 1000 chars");

      } else {
        setCommentError(null);
      }
    }

    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const submitHandler = (event) => {
    //stop form submission & redirection elsewhere
    event.preventDefault();

    if (formData.body.length < 5 || formData.body.length > 1000) {
      setCommentError("Comment must be between 5 & 1000 chars");
    } else {
      setCommentError(null);
    }

    if (commentError) {
      // do nothing here except error message
      return;
    }

    postCommentByArtId(article_id, formData).then((result) => {
      if (result.status === 201) {
        setFormData({
          body: "",
          username: "jessjelly",
        });
        setComments([result.data.comment, ...comments]);
        setMessage({
          showMsg: true,
          variant: "info",
          title: "Action Complete",
          msg: "New comment added",
        });
        console.log(message);
      }
    });
  };

  return (
    <section className="form-section">
      <form onSubmit={submitHandler}>
        <FormGroup className="mb-2">
          <Form.Label htmlFor="comment_body">
            Comment:{" "}
            <span className="error-text">
              {commentError ? `(${commentError})` : ""}
            </span>
          </Form.Label>
          <Form.Control
            as="textarea"
            id={commentError && "error-field"}
            name="body"
            value={formData.body}
            placeholder="Add your comment here"
            onChange={changeHandler}
          />
          <span className="char-count">{`Character count: ${formData.body.length}`}</span>
        </FormGroup>
        <FormGroup className="mb-2 d-flex flex-row justify-content-end">
          <Button
            type="reset"
            value="reset"
            variant="secondary"
            className="me-2"
            onClick={reserHandler}
          >
            Reset
          </Button>
          <Button type="submit" variant="success">
            Submit
          </Button>
        </FormGroup>
      </form>
    </section>
  );
};

export default CommentForm;
