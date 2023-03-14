//import { Button } from 'react-bootstrap'; // may switch back to a button 'cloud' of topic links
import { Nav } from "react-bootstrap";

const TopicItems = ({ topic}) => {

  return (
    <Nav.Item>
      <Nav.Link
        href={`/articles/view/${topic.slug}`}
        eventKey={topic.slug}
        className="text-capitalize"
      >
        {topic.slug}
      </Nav.Link>
    </Nav.Item>
  );
};

export default TopicItems;
