/* eslint-disable react/prop-types */
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./paginate.css";

const Paginate = ({ pages, page, isAdmin = false }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={!isAdmin ? `/page/${x + 1}` : `/admin/productlist/${x + 1}`}
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
