import { Link } from "react-router-dom";

const NoArticles = ({ backHandler }) => {
  return (
    <section className="w-100 no_articles fill_height">
      <div className="w-75 messsage_box mx-auto px-4 fill_height text-white text-center d-flex flex-column align-items-center justify-content-center">
        <h3 className="display-2 mb-0">A softer 404 :( </h3>
        <p>No articles found for this topic</p>
        <Link
          className="btn btn-lg btn-primary px-5 mb-3 rounded-pill"
          to="/article/create/article"
        >
          Create an Article?
        </Link>
        <Link
          className="btn btn-lg btn-warning px-5 rounded-pill"
          onClick={backHandler}
          to="/articles"
        >
          Back to Articles
        </Link>
      </div>
    </section>
  );
};

export default NoArticles;
