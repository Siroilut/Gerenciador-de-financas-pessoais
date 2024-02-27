import React from "react";



function ExpenseList({expenses, editExpense, deleteExpense}){

const handleDelete = (index) =>{
    deleteExpense(index)
}
const handleEdit = (index) => {
    editExpense(index);
}


    return(
<div>
    <h2>lista de despesas</h2>
    <ul>
        {expenses.map((expense, index) => (
  <li key={index}>
<span>{expense.description}</span>
<span>{expense.amount}</span>
<button onClick={() => handleEdit(index)}> Alterar despesa</button>
        <button onClick={() => handleDelete(index)}>Excluir despesa</button>
  </li>
        ))}
       
    </ul>
    
</div>

    )
}

export default ExpenseList;