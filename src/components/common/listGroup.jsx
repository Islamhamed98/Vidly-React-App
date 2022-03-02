import React from "react";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty, selectedItem, onItemSelect } =
    props;
  return (
    <ul className="list-group">
      {items.map((genre) => (
        <li
          key={genre[textProperty]}
          className={
            selectedItem == genre ? "list-group-item active" : "list-group-item"
          }
          style={{ cursor: "pointer" }}
          onClick={() => onItemSelect(genre)}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
