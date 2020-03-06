import React, { useEffect } from "react";
import "./BookList.css";
import BookListItem from "./../BookListItem/BookListItem";
import BookListService from "./../../services/BookListService";
import { connect } from "react-redux";
import { fetchRequest, fetchSuccess } from "./../../actions/action";
import Spinner from "./../Spinner/Spinner";

export const BookList = ({
  fetchRequest,
  fetchSuccess,
  loading,
  visibleBooks
}) => {
  useEffect(() => {
    const bookListService = new BookListService();
    fetchRequest();
    bookListService.getBooks().then(data => fetchSuccess(data));
  }, []);

  if (loading) return <Spinner />;

  if (visibleBooks.length === 0)
    return (
      <h2>
        К сожалению по вашему запросу ничего не найдено, попробуйте еще раз.
      </h2>
    );

  return (
    <ul className="list-group">
      {visibleBooks.map(el => {
        return (
          <li key={el.id} className="list-group-item">
            <BookListItem book={el} />
          </li>
        );
      })}
    </ul>
  );
};
const mapStateToProps = ({ visibleBooks, loading }) => {
  return {
    visibleBooks,
    loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRequest: () => dispatch(fetchRequest()),
    fetchSuccess: data => dispatch(fetchSuccess(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
