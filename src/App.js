import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/expenseForm';
import ExpenseList from './components/expenseList';

function App() {
const [expenses, setExpenses] = useState([]);
const [editModal, setEditModal] = useState(false)
const [editedExpense, setEditedExpense] = useState(null)



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
  setEditedExpense(expenseToEdit);
  setEditModal(true);
};

const openEditModal = (index) => {
  setEditedExpense(expenses[index]);
  setEditModal(true);
};
const closeEditModal = () => {
  setEditModal(false);
  setEditedExpense(null)
};

 const handleEditExpense = (updatedExpense) => {
    const updatedExpenses = [...expenses];
    const index = updatedExpenses.findIndex(expense => expense === editedExpense);
    updatedExpenses[index] = updatedExpense;
    setExpenses(updatedExpenses);
    closeEditModal();
  };

  return (
    <div className="App">
      <ExpenseForm addExpense={addExpense}/>
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} editExpense={editExpense} openEditModal={openEditModal}/>
      {/* Modal de Edição */}
      {editModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeEditModal}>&times;</span>
            <h2>Editar Despesa</h2>
            <ExpenseForm 
              expense={editedExpense} 
              onSubmit={handleEditExpense} 
              onCancel={closeEditModal} 
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
