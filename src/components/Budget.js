
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget , expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);


    const handleBudgetChange = (event) => {

      if (event.target.value > totalExpenses) {
          setNewBudget(event.target.value); 
          const budget = {
            newBudget: parseInt(newBudget),
        }; 

        dispatch({
            type: 'SET_BUDGET',
            payload: budget.newBudget,
        });

      }else {
        alert(`Nope, you can't reduce the budget value lower than the spending: ${totalExpenses}`)
        return; 
      }

       
    };


    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );

};
export default Budget;