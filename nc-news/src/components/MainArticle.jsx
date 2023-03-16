import { useParams } from "react-router-dom";
import MainArtCard from "./MainArtCard";
import CommentsList from './CommentsList';


const MainArticle = () => {
  const { article_id } = useParams();
  
/*   if (isNaN(article_id)) {

  } */
    return (
      <section className="article-section">
        <MainArtCard article_id={article_id} />
        

        <CommentsList article_id={article_id} />
      </section>
    );
};

export default MainArticle;
