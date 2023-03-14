import { useParams } from "react-router-dom";
import MainArtCard from "./MainArtCard";
import CommentsList from './CommentsList';
import CommentAccordian from "./CommentAccordian";

const MainArticle = () => {
    const { article_id } = useParams();
    
  return (
    <section className="article-section">
      <MainArtCard article_id={article_id} />
      <hr />
      <CommentAccordian />
      <hr />
      <CommentsList article_id={article_id} />
    </section>
  );
};

export default MainArticle;
