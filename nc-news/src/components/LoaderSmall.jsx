import { Spinner } from "react-bootstrap";
const LoaderSmall = ({ content }) => {
  return (
    <section className="w-100 d-flex flex-row align-items-center justify-content-center">
      <Spinner animation="border" role="status" className="mb-3 me-3" />
      <p>{content}</p>
    </section>
  );
};

export default LoaderSmall;
