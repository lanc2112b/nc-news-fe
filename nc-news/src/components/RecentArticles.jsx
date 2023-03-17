import { useState, useEffect } from "react";
import {getArticles} from "../api";
import BriefArticleCard from "./BriefArticleCard";

const RecentArticles = () => {

  const [recentArts, setRecentArts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getArticles(null, null, null, 6)
      .then((results) => {
        setRecentArts(results.articles);
        setLoading(false);
      })
      .catch((error) => {
        // TODO: Add error handling here console.log(error);
      });
  }, []);
    
    if (loading) return (<p>Loading...</p>); // replace with spinner
    
    return (
      <section>
        <hr />
        <h4 className="h4">Recent Articles:</h4>
        <ul className="p-0 m-0 list-unstyled recent_list">
          {recentArts.map((element) => {
            return (
              <BriefArticleCard article={element} key={element.article_id} />
            );
          })}
        </ul>
      </section>
    );
};

export default RecentArticles;
