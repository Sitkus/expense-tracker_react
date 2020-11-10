import React, {useState} from 'react';
import {Display, Transactions, AddTransaction} from './components';
import * as S from './App.style';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([
    {
      title: 'Salary received',
      amount: 800,
      income: true
    },
    {
      title: 'Holiday to Miami',
      amount: -500,
      income: false
    },
    {
      title: 'React courses',
      amount: -400,
      income: false
    }
  ]);

  return (
    <S.Main>
      <S.Section>
        <S.H1>Expense Tracker</S.H1>
        <Display />
        <Transactions transactions={transactions} />
        <AddTransaction />
      </S.Section>
    </S.Main>
  );
}

export default App;
