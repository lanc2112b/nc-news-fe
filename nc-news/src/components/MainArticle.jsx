import { useParams } from "react-router-dom";
import MainArtCard from "./MainArtCard";
import CommentsList from './CommentsList';

const MainArticle = () => {
    const { article_id } = useParams();
    
    console.log(article_id); 
  return (
    <section className="article-section">
          <MainArtCard article_id={article_id} />
          <hr />
      <CommentsList article_id={article_id} />
    </section>
  );
};

export default MainArticle;
