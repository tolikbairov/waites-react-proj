import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import uuid from "react-uuid";
const PaginationComp = ({
  todosPerPage,
  totalTodos,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i += 1) {
    pageNumbers.push(i);
  }
  return (
    <>
      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink first href="#" onClick={() => paginate(1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            previous
            href="#"
            onClick={() => paginate(currentPage - 1)}
          />
        </PaginationItem>
        {pageNumbers.map((number) => (
          <PaginationItem key={uuid()}>
            <PaginationLink href="#" onClick={() => paginate(number)}>
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationLink
            next
            href="#"
            onClick={() => paginate(currentPage + 1)}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            last
            href="#"
            onClick={() => paginate(pageNumbers.length)}
          />
        </PaginationItem>
      </Pagination>
    </>
  );
};
export default PaginationComp;
