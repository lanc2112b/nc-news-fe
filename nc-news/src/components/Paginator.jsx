import { Pagination } from 'react-bootstrap';

const Paginator = ({ currPage, itemCount, limitVal, setCurrPage }) => {

  const iterator = [
    ...Array(Math.ceil(itemCount / limitVal) + 1).keys(),
  ].slice(1);

  const prev = currPage === 1 ? 1 : currPage - 1;
  const next = currPage === iterator.length ? iterator.length : currPage + 1;

  const paginatorClickHandler = (val) => {
    setCurrPage(val);
  };

  return (
    <Pagination>
      <Pagination.First
        onClick={() => {
          paginatorClickHandler(1);
        }}
      />
      <Pagination.Prev
        onClick={() => {
          paginatorClickHandler(prev);
        }}
      />
      {iterator.map((element) => {
        return (
          <Pagination.Item
            key={element}
            active={element === currPage}
            onClick={() => {
              paginatorClickHandler(element);
            }}
          >
            {element}
          </Pagination.Item>
        );
      })}

      <Pagination.Next
        onClick={() => {
          paginatorClickHandler(next);
        }}
      />
      <Pagination.Last
        onClick={() => {
          paginatorClickHandler(iterator.length);
        }}
      />
    </Pagination>
  );
};
export default Paginator;
