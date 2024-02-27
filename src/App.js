import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/expenseForm';
import ExpenseList from './components/expenseList';

function App() {
const [expenses, setExpenses] = useState([]);

const addExpense = (expense) =>{
  setExpenses([...expenses, expense])
};
const deleteExpense = (index) => {
  const newExpense = [...expenses];
  newExpense.splice(index, 1);
  setExpenses(newExpense)
}
const editExpense = (index) => {
  const expenseToEdit = expenses[index];
  console.log("Editar despesa com índice", index);
  console.log("Detalhes da despesa:", expenseToEdit);
};

  return (
    <div className="App">
      <ExpenseForm addExpense={addExpense}/>
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} editExpense={editExpense}/>
    </div>
  );
}

export default App;
