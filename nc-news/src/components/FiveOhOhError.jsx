import { Link } from 'react-router-dom';

const FiveOhOhError = ({message}) => {

    return (
      <section className="w-100 server_error fill_height">
        <div className="w-75 messsage_box mx-auto px-4 fill_height text-white text-center d-flex flex-column align-items-center justify-content-center">
          <h3 className="display-2 mb-0">500 {message ?? ''}Crunch</h3>
          <p>
            Oh, damn, should have changed the pixie oil. 
          </p>
          <Link
            id="book"
            className="btn btn-lg btn-primary px-5 rounded-pill"
            to="/articles"
          >
            Back To Safety
          </Link>
        </div>
      </section>
    );

}

export default FiveOhOhError;
