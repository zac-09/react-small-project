import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./../UI/Card";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  return (
    <li>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">{props.price}</div>
      </div>
    </li>
  );
};

export default ExpenseItem;
