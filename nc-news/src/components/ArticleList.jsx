import { useState, useEffect } from "react";
import { useParams, } from "react-router-dom"; //useResolvedPath 
import {getArticles} from '../api';
import ShortArticleCard from "./ShortArticleCard";
import TopicCard from "./TopicCard";

const ArticleList = () => {
    
    const { topic } = useParams();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
      setLoading(true);

      getArticles(topic).then((results) => {
        setArticles(results.articles);
        setLoading(false);
      });
    }, [topic]);
  
    if (loading) {
        return (<p>Loading.... </p>)
    }

    return (
        <section className="articles-list">
            <TopicCard />
            <ul className="p-0 m-0">
            {articles.map((element) => {
                return <ShortArticleCard article={element} key={element.article_id} />;
            })}
            </ul>
        </section>
    )

}

export default ArticleList;