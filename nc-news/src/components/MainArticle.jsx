import { useParams } from "react-router-dom";
import MainArtCard from "./MainArtCard";
import CommentsList from './CommentsList';
import { useState } from "react";


const MainArticle = () => {

  const [commentTotalCount, setCommentTotalCount] = useState(null);

  const { article_id } = useParams();
  
/*   if (isNaN(article_id)) {

  } */
    return (
      <section className="article-section">
        <MainArtCard
          article_id={article_id}
          setCommentTotalCount={setCommentTotalCount}
        />

        <CommentsList
          article_id={article_id}
          commentTotalCount={commentTotalCount}
        />
      </section>
    );
};

export default MainArticle;
