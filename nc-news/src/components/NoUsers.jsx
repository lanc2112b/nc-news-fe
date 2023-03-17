import { Link } from "react-router-dom";

const NoUsers = () => {
  return (
    <section className="w-100 no_articles fill_height">
      <div className="w-75 messsage_box mx-auto px-4 fill_height text-white text-center d-flex flex-column align-items-center justify-content-center">
        <h3 className="display-2 mb-0">A softer 404 :( </h3>
        <p>No users found</p>
        <Link
          className="btn btn-lg btn-warning px-5 rounded-pill"
          to="/"
        >
          Back to Main Page
        </Link>
      </div>
    </section>
  );
};

export default NoUsers;
