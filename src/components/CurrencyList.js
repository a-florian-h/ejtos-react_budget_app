
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencyList = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [isCurrency, setIsCurrency] = useState('');

const handleCurrencyChange = (event) => {


    dispatch({
        type: 'CHG_CURRENCY',
        payload: event.target.value,
    });


}


    return (
        // <div className='alert alert-primary'>
            <select className="custom-select alert alert-primary" id="inputGroupSelect01" onChange={handleCurrencyChange}>
                <option defaultValue>Choose...</option>
                <option value="$" name="Dollar">$ Dollar</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
            </select>
        // </div>
    );
};
export default CurrencyList;