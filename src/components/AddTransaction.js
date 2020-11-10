import React, {useState} from 'react';
import * as S from './style/AddTransaction.style';
import * as ST from './style/Title.style';

const AddTransaction = () => {
    // const [inputs, setInputs] = useState([
    //     {
    //         label: 'Text:',
    //         name: 'title',
    //         type: 'text',
    //         placeholder: 'Enter title'
    //     },
    //     {
    //         label: 'Amount:',
    //         name: 'title',
    //         type: 'text',
    //         placeholder: 'Enter title'
    //     }
    // ]);

    return (
        <form>
            <ST.H2>Add New Transaction</ST.H2>
            <label htmlFor="title">Text:</label>
            <input name="title" id="title" type="text" placeholder="Enter title" />
            <label htmlFor="amount">
                Amount
                <br />
                (- expense, + income)
            </label>
            <input name="amount" id="amount" type="number" placeholder="Enter amount" />
            <button name="add_transaction">Add Transaction</button>
        </form>
    );
}

export default AddTransaction;