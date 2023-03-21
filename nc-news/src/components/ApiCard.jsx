import { Button } from 'react-bootstrap';
const ApiCard = ({ endpoint }) => {
  return (
    <li className="mb-3">
      <div className="d-flex flex-row align-items-center">
        <Button
          variant="success"
          size="sm"
          onClick={() => console.log("Primary")}
        >
          {endpoint.endpoint.split(" ")[0]}
        </Button>
        <h5 className="fw-bolder mb-0 ms-2">
          {endpoint.endpoint.split(" ")[1]}
        </h5>
      </div>
      <p>
        <strong>Description:</strong> {endpoint.description}
      </p>
      <p>
        <strong>Consumes (JSON):</strong>
      </p>
      {endpoint.consumes ? (
        <div className="border rounded p-4 bg-light mb-2 ms-3">
          <code>{JSON.stringify(endpoint.consumes)}</code>
        </div>
      ) : (
        <p className="ms-3">N/A</p>
      )}

      <p>
        <strong>Example Response (JSON):</strong> <br />
      </p>
      {endpoint.exampleResponse && JSON.stringify(endpoint.exampleResponse) !== '{}' ? (
        <div className="border rounded p-4 bg-light mb-2 ms-3">
          <code>{JSON.stringify(endpoint.exampleResponse)}</code>
        </div>
      ) : (
        <p className="ms-3">N/A</p>
      )}
      <p>
        <strong>Queries (JSON):</strong>
      </p>
      {endpoint.queries.length !== 0 ? (
        <div className="border rounded p-4 bg-light mb-2 ms-3">
          <code>{JSON.stringify(endpoint.queries)}</code>
        </div>
      ) : (
        <p className="ms-3">N/A</p>
      )}

      <hr />
    </li>
  );
};

export default ApiCard; 