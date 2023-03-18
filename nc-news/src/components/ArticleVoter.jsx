import { useState, useContext, useEffect } from "react";
import { MessageContext } from "../contexts/Message";
import { Button, Badge } from "react-bootstrap";
import { patchArtVotes } from "../api";

const ArticleVoter = ({ votes, article_id }) => {
  const { setMessage } = useContext(MessageContext);

  const [dispVotes, setDispVotes] = useState(votes);

  const [newVotes, setNewVotes] = useState(0);

  const voterHandler = (val) => {
    setNewVotes(val);
  };

  useEffect(() => {
    patchArtVotes(article_id, newVotes)
      .then((results) => {
        setDispVotes(results.votes);
        setNewVotes(0);
      })
      .catch((error) => {

        setDispVotes(votes);
        setNewVotes(0);
        setMessage({
          msgType: "info",
          showMsg: true,
          variant: "warning",
          title: "API Error",
          msg: "Unable to commit vote at this time, please try again later",
        });
      });
  }, [article_id, newVotes, setMessage, votes]);

  return (
    <div className="d-flex flex-row align-items-center">
      <Button size="sm" variant="success" onClick={() => voterHandler(1)}>
        <i className="inc_vote"></i>
      </Button>
      <Badge bg="light" text="dark" className="vote_badge">
        {dispVotes}
      </Badge>
      <Button
        variant="danger"
        size="sm"
        value="dec"
        onClick={() => voterHandler(-1)}
      >
        <i className="dec_vote mt-1"></i>
      </Button>
    </div>
  );
};

export default ArticleVoter;
