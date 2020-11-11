import React, {useState, useEffect} from 'react';
import {Display, Transactions, AddTransaction} from './components';
import * as S from './App.style';
import './App.css';

const App = () => {
  const [account, setAccount] = useState({    
    balance: 0,
    income: 0,
    expense: 0
  });

  const [transactions, setTransactions] = useState([
    {
      title: 'Salary received',
      amount: 800,
      income: true
    },
    {
      title: 'Holiday to Miami',
      amount: -1500,
      income: false
    },
    {
      title: 'React courses',
      amount: -100,
      income: false
    }
  ]);

  const countAccount = () => {
    transactions.forEach(transaction => {
      if (transaction.income) {
        account.balance += transaction.amount
        account.income += transaction.amount;
      } else {
        account.balance += transaction.amount;
        account.expense += Math.abs(transaction.amount);
      }
    });

    setAccount({...account});
  }

  useEffect(() => {
    countAccount();
  }, []);

  return (
    <S.Main>
      <S.Section>
        <S.H1>Expense Tracker</S.H1>
        <Display account={account} />
        <Transactions transactions={transactions} />
        <AddTransaction />
      </S.Section>
    </S.Main>
  );
}

export default App;
