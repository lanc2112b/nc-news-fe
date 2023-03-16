import { useEffect, useState, useContext } from "react";
import { MessageContext } from "../contexts/Message";
import { getTopics } from "../api";
import { Nav } from 'react-bootstrap';
import TopicItems from "./TopicItems";
import LoaderSmall from './LoaderSmall';

const TopicCard = ({ topic, tabSelector }) => {

  const { setMessage } = useContext(MessageContext);

  const [topics, setTopics] = useState({});
  const [loading, setLoading] = useState(true);
  const [topicsError, setTopicsError] = useState(false);
  

  useEffect(() => {
    setLoading(true);
    getTopics()
      .then((results) => {
        setTopics(results);
        setLoading(false);
        setTopicsError(false);
        setMessage({
          msgType: null,
          showMsg: false,
          variant: "",
          title: "",
          msg: "",
        });
      })
      .catch((error) => {
        setTopicsError(true);
        setLoading(false);
        setMessage({
          msgType: 'error',
          showMsg: true,
          variant: "danger",
          title: "API Error",
          msg: "Cannot load topics, please try again later.",
        });
      });
  }, [setMessage]);

  const tabTopic = (topic === null) ? 'articles' : topic;

  if (loading) return <LoaderSmall content={"Loading Topics..."} />;

  if (topicsError) return <LoaderSmall content={"Error Loading Topics..."} />;
  
  return (
    <section>
      <Nav
        fill
        variant="tabs"
        className="articles-tablist"
        defaultActiveKey="articles"
        activeKey={tabTopic}
        onSelect={tabSelector}
      >
        <Nav.Item>
          <Nav.Link eventKey="articles">All</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="coffee">Coffee</Nav.Link>
        </Nav.Item>
        {topics.map((element, index) => {
          return <TopicItems key={index} topicObj={element} />;
        })}
      </Nav>
    </section>
  );
}

export default TopicCard;
