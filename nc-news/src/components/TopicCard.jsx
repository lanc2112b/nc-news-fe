import { useEffect, useState } from "react";
import { getTopics } from "../api";
import { Nav } from 'react-bootstrap';
import TopicItems from "./TopicItems";

const TopicCard = ({ topic, tabSelector }) => {

  const [topics, setTopics] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getTopics().then((results) => {
      setTopics(results);
      setLoading(false);
    });
  }, []);

  const tabTopic = (topic === null) ? 'articles' : topic;

  if (loading) return <p>Loading...</p>;
  
  return (
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
      {topics.map((element, index) => {
        return <TopicItems key={index} topicObj={element} />;
      })}
    </Nav>
  );
}

export default TopicCard;
