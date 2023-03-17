import { Link } from 'react-router-dom';

const NotFoundError = ({message}) => {

    return (
      <section className="w-100 not_found fill_height">
        <div className="w-75 messsage_box mx-auto px-4 fill_height text-white text-center d-flex flex-column align-items-center justify-content-center">
          <h3 className="display-2 mb-0">404 {message ?? ''}NOT FOUND</h3>
          <p>
            Whatever it was you were looking for, the http pixies couldn't find
            it. It's very much like lost socks, you know they went in, and now?
            Who knows where they are, it's a complete mystery, anyhoo, enough
            rambling, let's get you right back on track, there's a button below
            that'll take you back to safety (out here there be dragons.... and
            maybe lost socks... ) Failing the button, if you know where you need
            to go, there's the navbar above :)
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

export default NotFoundError;
