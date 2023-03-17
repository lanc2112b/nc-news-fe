import { useState, useContext } from "react";
import { MessageContext } from "../contexts/Message";
import { Button, Badge } from "react-bootstrap";
import { patchArtVotes } from "../api";

const ArticleVoter = ({ votes, article_id }) => {
  let newVotes = 0;

  const { setMessage } = useContext(MessageContext);

  const [dispVotes, setDispVotes] = useState(votes);

  const voterHandler = (val) => {
      
    newVotes = +val;

    if (isNaN(newVotes)) {
      // return a flash or toast here at some point soon
      return;
    }

    setDispVotes(votes + newVotes);

    patchArtVotes(article_id, +newVotes)// +'c'
      .then((results) => {
        newVotes = 0;
        setDispVotes(results.votes);
        return;
      })
      .catch((error) => {
        console.log(error)
        setDispVotes(votes);
        setMessage({
          msgType: "info",
          showMsg: true,
          variant: "warning",
          title: "API Error",
          msg: "Unable to commit vote at this time, please try again later",
        });
      });
  };

  return (
    <div className="d-flex flex-row align-items-center">
      <Button className="p-2" variant="success" onClick={() => voterHandler(1)}>
        <i className="inc_vote"></i>
      </Button>
      <Badge bg="light" text="dark" className="vote_badge">
        {dispVotes}
      </Badge>
      <Button
        className="p-2 "
        variant="danger"
        value="dec"
        onClick={() => voterHandler(-1)}
      >
        <i className="dec_vote mt-1"></i>
      </Button>
    </div>
  );
};

export default ArticleVoter;
