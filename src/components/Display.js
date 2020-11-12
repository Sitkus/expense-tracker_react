import React from 'react';
import * as S from './style/Display.style';

const Display = ({account}) => {
  return (
    <S.Section>
      <S.H2>Your Balance</S.H2>
      <S.H4>${account.balance}</S.H4>
      <S.Article>
        <aside>
          <S.H3>Income</S.H3>
          <S.P income>${account.income}</S.P>
        </aside>
        <S.Line></S.Line>
        <aside>
          <S.H3>Expense</S.H3>
          <S.P>${account.expense}</S.P>
        </aside>
      </S.Article>
    </S.Section>
  );
}

export default Display;