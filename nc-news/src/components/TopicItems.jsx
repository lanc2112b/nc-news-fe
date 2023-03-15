//import { Button } from 'react-bootstrap'; // may switch back to a button 'cloud' of topic links
import { Nav } from "react-bootstrap";

const TopicItems = ({ topicObj }) => {
  // href={`/articles/view/${topic.slug}`}
  return (
    <Nav.Item>
      <Nav.Link eventKey={topicObj.slug} className="text-capitalize">
        {topicObj.slug}
      </Nav.Link>
    </Nav.Item>
  );
};

export default TopicItems;
