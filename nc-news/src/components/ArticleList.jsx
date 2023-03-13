import { useState, useEffect } from "react";
import {getArticles} from '../api';
import ShortArticleCard from "./ShortArticleCard";

const ArticleList = () => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setLoading(true);
        
        getArticles().then((results) => {
            setArticles(results.articles);
            setLoading(false);
     
        });


    }, [])
    
    console.log(articles);

    if (loading) {
        return (<p>Loading.... </p>)
    }

    return (
        <section className="articles-list">
            <ul className="p-0 m-0">
            {articles.map((element) => {
                return <ShortArticleCard article={element} key={element.article_id} />;
            })}
            </ul>
        </section>
    )

}

export default ArticleList;