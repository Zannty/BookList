import React from "react";
import "./Header.css";
import { inputChange, selectChange, buttonUse } from "./../../actions/action";
import { connect } from "react-redux";
const Header = ({
  inputChange,
  search,
  selectedItem,
  selectChange,
  buttonUse
}) => {
  return (
    <div className="header">
      <h2 className="main-title">Список книг</h2>
      <div className="search">
        Критерий поиска
        <select
          value={selectedItem}
          onChange={e => selectChange(e.target.value)}
          className="custom-select select-search"
        >
          <option value="def">По умолчанию</option>
          <option value="name">По названию</option>
          <option value="author">По автору</option>
          <option value="genre">По жанру</option>
        </select>
        Поиск
        <input
          className="form-control form-control-sm input-search"
          type="text"
          onChange={e => inputChange(e.target.value)}
          value={search}
        />
        <button onClick={buttonUse} className="btn btn-secondary btn-search">
          Применить
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = ({ search, selectedItem }) => {
  return {
    search,
    selectedItem
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inputChange: text => dispatch(inputChange(text)),
    selectChange: val => dispatch(selectChange(val)),
    buttonUse: () => dispatch(buttonUse())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
