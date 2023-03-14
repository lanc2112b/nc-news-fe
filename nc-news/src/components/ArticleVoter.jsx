import { useState } from "react";
import { Button, Badge } from "react-bootstrap";
import { patchArtVotes } from "../api";

const ArticleVoter = ({ votes, article_id }) => {
  let newVotes = 0;

  const [dispVotes, setDispVotes] = useState(votes);

  const voterHandler = (val) => {
      
    newVotes = +val;

    if (isNaN(newVotes)) {
      // return a flash or toast here at some point soon
      return;
    }

    setDispVotes(votes + newVotes);

    patchArtVotes(article_id, +newVotes)
      .then((results) => {
        setDispVotes(results.votes);
        return;
      })
      .then(() => {
        newVotes = 0;
      });
  };

  return (
    <div className="d-flex flex-row align-items-center">
      <Button className="p-2" variant="teal" onClick={() => voterHandler(1)}>
        <i className="inc_vote"></i>
      </Button>
      <Badge bg="light" text="dark" className="vote_badge">
        {dispVotes}
      </Badge>
      <Button
        className="p-2"
        variant="orange"
        value="dec"
        onClick={() => voterHandler(-1)}
      >
        <i className="dec_vote"></i>
      </Button>
    </div>
  );
};

export default ArticleVoter;
