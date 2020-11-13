import React, {useState, useEffect} from 'react';
import {Display, Transactions, AddTransaction} from './components';
import * as S from './App.style';
import './App.css';

const App = () => {
  let [account, setAccount] = useState({
    balance: 0,
    income: 0,
    expense: 0
  });
  const [transactions, setTransactions] = useState([]);

  const countAccount = () => {
    transactions.forEach(transaction => {
      if (transaction.income) {
        account.balance += Number(transaction.amount);
        account.income += Number(transaction.amount);
      } else {
        account.balance += Number(transaction.amount);
        account.expense += Number(Math.abs(transaction.amount));
      }
    });

    setAccount({...account});
  }

  const addTransaction = (e, fields, setFields, clearFields) => {
    const newTransaction = {};
    let inputsEmpty = false;

    fields.map(field => {
      if (field.value === '') {
        inputsEmpty = true;
        field.error = true;
      }

      newTransaction[field.name] = field.value;

      if (field.value >= 0) {
        newTransaction.income = true;
      } else {
        newTransaction.income = false;
      }
    });

    if (!inputsEmpty) {
      transactions.push(newTransaction);
      setTransactions([...transactions]);

      clearFields();
    } else {
      setFields([...fields]);
    }

    e.preventDefault();
  }

  useEffect(() => {
    countAccount();
  }, [transactions]);

  return (
    <S.Main>
      <S.Section>
        <S.H1>Expense Tracker</S.H1>
        <Display account={account} />
        <Transactions transactions={transactions} />
        <AddTransaction addTransaction={addTransaction} />
      </S.Section>
    </S.Main>
  );
}

export default App;
