import React from "react";
import "./Header.css";
import {
  handleInputChange,
  handleFilterAuthorChange,
  handleFilterGenreChange,
  handleFilterNameChange,
  buttonUse
} from "./../../actions/action";
import { connect } from "react-redux";
export const Header = ({
  handleInputChange,
  filterSearchValue,
  handleFilterAuthorChange,
  handleFilterGenreChange,
  handleFilterNameChange,
  buttonUse
}) => {
  const sub = e => {
    e.preventDefault();
    buttonUse();
  };
  return (
    <div className="header">
      <h2 className="main-title">Список книг</h2>
      <form onSubmit={sub} className="search">
        Критерии поиска
        <p className="checkbox-filter">
          Название
          <input type="checkbox" value="a2" onChange={handleFilterNameChange} />
        </p>
        <p className="checkbox-filter">
          Автор
          <input
            type="checkbox"
            value="a3"
            onChange={handleFilterAuthorChange}
          />
        </p>
        <p className="checkbox-filter">
          Жанр
          <input
            type="checkbox"
            value="a4"
            onChange={handleFilterGenreChange}
          />
        </p>
        Поиск
        <input
          className="form-control form-control-sm input-search"
          type="text"
          onChange={e => handleInputChange(e.target.value)}
          value={filterSearchValue}
        />
        <button
          type="submit"
          onClick={sub}
          className="btn btn-secondary btn-search"
        >
          Применить
        </button>
      </form>
    </div>
  );
};
const mapStateToProps = ({ filterSearchValue }) => {
  return {
    filterSearchValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange: text => dispatch(handleInputChange(text)),
    handleFilterAuthorChange: () => dispatch(handleFilterAuthorChange()),
    handleFilterGenreChange: () => dispatch(handleFilterGenreChange()),
    handleFilterNameChange: () => dispatch(handleFilterNameChange()),
    buttonUse: () => dispatch(buttonUse())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
