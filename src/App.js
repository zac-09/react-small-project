import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";

import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import { useState } from "react/cjs/react.development";
import ExpensesList from "./components/Expenses/ExpensesList";
import ExpensesChart from "./components/Expenses/ExpensesChart";
const App = () => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangedHandler = (selectedYear) => {
    console.log("the filtered year is", selectedYear);
    setFilteredYear(selectedYear);
  };

  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Papers",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    // expenses.push(expense);
    setExpenses((prevState) => {
      return [...prevState, expense];
    });
    // console.log(expenses);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <div className="expenses">
        <ExpensesList items={filteredExpenses} />
      </div>
    </div>
  );
};

export default App;
