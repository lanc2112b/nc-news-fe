import { Form, Button } from 'react-bootstrap';
const ArticleFilter = ({
  sortDirHandler,
  sortColHandler,
  sortDirToggle,
  sortDispHandler,
  limitVal,
  sortCol
}) => {


  return (
    <section className="filter_bar">
      <div className="d-flex flex-row align-items-center justify-content-end mb-4 me-3">
        <Form.Label className="me-2 mb-0">Display:</Form.Label>
        <Form.Select
          className="display-filter me-2"
          size="sm"
          onChange={sortDispHandler}
          value={limitVal ?? ""}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </Form.Select>{" "}
        <Form.Label className="me-2 mb-0">SortBy:</Form.Label>
        <Form.Select
          size="sm"
          className="p-1 me-2 column-filter"
          value={sortCol ?? "created_at"}
          onChange={sortColHandler}
        >
          <option value="comment_count">Comment Count</option>
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
        </Form.Select>{" "}
        Order:{" "}
        <Button
          value={sortDirToggle}
          variant="secondary"
          size="sm"
          className={
            sortDirToggle === "asc"
              ? "button-up px-2 py-1 ms-2"
              : "button-down px-2 py-1 ms-2"
          }
          onClick={sortDirHandler}
        ></Button>
      </div>
    </section>
  );
};

export default ArticleFilter;