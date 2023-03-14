import { useEffect, useState } from "react";
import { getTopics } from "../api";
import { Nav } from 'react-bootstrap';
import TopicItems from "./TopicItems";

const TopicCard = () => {

    const [topics, setTopics] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getTopics().then((results) => {
            //console.log(results, 'in component')
            setTopics(results);
            setLoading(false);
        })
    },[])

    if (loading) return (<p>Loading...</p>);

    return (
      <Nav fill variant="tabs" className="articles-tablist">
        <Nav.Item>
          <Nav.Link href={`/articles`} eventKey="/articles">
            All
          </Nav.Link>
        </Nav.Item>
        {topics.map((element, index) => {
          //console.log(element.slug, index);
          return <TopicItems key={index} topic={element} />;
        })}
      </Nav>
    );

}

export default TopicCard;
