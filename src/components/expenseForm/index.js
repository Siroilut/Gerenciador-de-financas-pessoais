import {useState} from 'react'

function ExpenseForm({addExpense}){
const [description, setDescription] = useState('');
const [amount, setAmount] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({
        description,
        amount: parseFloat(amount)
    });
    setDescription('');
    setAmount('');
}

    return(
<div>
    <h2>Adicionar Despesa</h2>
    <form onSubmit={handleSubmit}>
        <input type='string' placeholder='descrição' value={description} onChange={(e) => setDescription(e.target.value)} required/>
        <input type='number' placeholder='valor' value={amount} onChange={(e) => setAmount(e.target.value)} required/>
<button type='submit'>Adicionar Despesa</button>
    </form>
</div>
    )
}

export default ExpenseForm;