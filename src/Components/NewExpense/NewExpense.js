import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';



const NewExpense = (props)=>{
    const saveExpenseForm = (enteredExpenseData)=>{ 
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }

       props.onAddExpenseHandler(expenseData);
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpense = {saveExpenseForm}/>
    </div>
}

export default NewExpense;