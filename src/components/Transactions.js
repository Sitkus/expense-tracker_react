import React from 'react';
import * as S from './style/Transactions.style';
import * as ST from './style/Title.style';

const Transactions = ({transactions}) => {
    return (
        <S.Article>
            <ST.H2>History</ST.H2>
            {
                transactions.map((transaction, index) => (
                    <S.Section key={index}>
                        <S.H3>{transaction.title}</S.H3>
                        <S.DivContainer>
                            <S.Span>+234</S.Span>
                            <S.DivColor income={transaction.income}></S.DivColor>
                        </S.DivContainer>
                    </S.Section>
                ))
            }
        </S.Article>
    );
}

export default Transactions;