import { useState, useContext, useRef } from "react";
import { MessageContext } from "../contexts/Message";
import { Button, Form, FormGroup } from "react-bootstrap";
import { postCommentByArtId } from "../api";

const CommentForm = ({ article_id, comments, setComments }) => {
  const { setMessage } = useContext(MessageContext);
  const scollToRef = useRef();

  const [formData, setFormData] = useState({
    body: "",
    username: "jessjelly", // Add random chars to user name then submit a comment to see error
  });

  const [commentError, setCommentError] = useState(null);


  const reserHandler = () => {
    //FIXME: spelling
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

    postCommentByArtId(article_id, formData)
      .then((result) => {
        setFormData({
          body: "",
          username: "jessjelly",
        });
        setComments([result.data.comment, ...comments]);
        setMessage({
          msgType: "info",
          showMsg: true,
          variant: "info",
          title: "Action Complete",
          msg: "New comment added",
        });
        scollToRef.current.scrollIntoView();
      })
      .catch((error) => {
        let errorMsg = "";
        if (error.response.data.msg === "Username not found") {
          errorMsg = "Invalid user, are you logged in?";
        } else {
          //other possibilities here...
          errorMsg = "Something went wrong";
        }
        setMessage({
          msgType: "info",
          showMsg: true,
          variant: "warning",
          title: "Error",
          msg: errorMsg,
        });
        scollToRef.current.scrollIntoView();
      });
  };

  return (
    <section className="form-section" ref={scollToRef}>
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
            size="sm"
            variant="secondary"
            className="me-2"
            onClick={reserHandler}
          >
            Reset
          </Button>
          <Button type="submit" variant="success" size="sm">
            Submit
          </Button>
        </FormGroup>
      </form>
    </section>
  );
};

export default CommentForm;
