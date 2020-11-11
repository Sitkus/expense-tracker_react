import React from 'react';
import * as S from './style/AddTransaction.style';
import * as ST from './style/Title.style';

const AddTransaction = () => {
    return (
        <S.Form>
            <ST.H2>Add New Transaction</ST.H2>
            <S.Label htmlFor="title">Text:</S.Label>
            <S.Input name="title" id="title" type="text" placeholder="Enter title" />
            <S.Label htmlFor="amount">
                Amount:
                <br />
                <S.LabelSpan>(- expense, + income)</S.LabelSpan>
            </S.Label>
            <S.Input name="amount" id="amount" type="number" placeholder="Enter amount" />
            <S.Button name="add_transaction">Add Transaction</S.Button>
        </S.Form>
    );
}

export default AddTransaction;