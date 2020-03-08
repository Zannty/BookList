import React, { useEffect } from "react";
import "./BookList.css";
import BookListItem from "./../BookListItem/BookListItem";
import BookListService from "./../../services/BookListService";
import { connect } from "react-redux";
import {
  fetchRequest,
  fetchSuccess,
  handleChangeCurrentPage
} from "./../../actions/action";
import Spinner from "./../Spinner/Spinner";

export const BookList = ({
  fetchRequest,
  fetchSuccess,
  loading,
  visibleBooks,
  totalBooksCount,
  pageSize,
  currentPage,
  handleChangeCurrentPage
}) => {
  useEffect(() => {
    const bookListService = new BookListService();
    fetchRequest();
    bookListService.getBooks().then(data => fetchSuccess(data));
  }, []);

  const onPageChanged = page => {
    handleChangeCurrentPage(page);
  };

  if (loading) return <Spinner />;

  if (visibleBooks.length === 0)
    return (
      <h2>
        К сожалению по вашему запросу ничего не найдено, попробуйте еще раз.
      </h2>
    );
  let pagesCount = Math.ceil(totalBooksCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className="pages">
        {pages.map(el => (
          <span
            key={el}
            className={currentPage === el ? "current-page " : ""}
            onClick={() => onPageChanged(el)}
          >
            {el}
          </span>
        ))}
      </div>

      <ul className="list-group">
        {visibleBooks.map(el => {
          return (
            <li key={el.id} className="list-group-item">
              <BookListItem book={el} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const mapStateToProps = ({
  visibleBooks,
  loading,
  totalBooksCount,
  pageSize,
  currentPage
}) => {
  return {
    visibleBooks,
    loading,
    totalBooksCount,
    pageSize,
    currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRequest: () => dispatch(fetchRequest()),
    fetchSuccess: data => dispatch(fetchSuccess(data)),
    handleChangeCurrentPage: page => dispatch(handleChangeCurrentPage(page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
