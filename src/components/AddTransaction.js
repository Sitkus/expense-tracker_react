import React, {useState} from 'react';
import * as S from './style/AddTransaction.style';
import * as ST from './style/Title.style';

const AddTransaction = ({addTransaction}) => {
  const [fields, setFields] = useState([
    {
      label: {
        title: 'Text:',
        tagTitle: ''
      },
      name: 'title',
      type: 'text',
      placeholder: 'Enter title',
      value: ''
    },
    {
      label: {
        title: 'Amount:',
        tagTitle: '(- expense, + income)'
      },
      name: 'amount',
      type: 'number',
      placeholder: 'Enter amount',
      value: ''
    },
  ]);

  const validateInput = (e, index) => {
    if (e.target.value === '') {
      fields[index].error = true;
    } else {
      delete fields[index].error;
    }
  }

  const getInputValue = (e, index) => {
    validateInput(e, index);
    fields[index].value = e.target.value;

    setFields([...fields]);
  }

  return (
    <S.Form>
      <ST.H2>Add New Transaction</ST.H2>
      {
        fields.map((field, index) => (
          <S.Label key={index}>
            {field.label.title}
          {
            field.label.tagTitle ?
            <S.LabelSpan>{field.label.tagTitle}</S.LabelSpan> :
            null
          }
            <S.Input 
                onChange={e => getInputValue(e, index)} 
                name={field.name}
                type={field.type} 
                placeholder={field.placeholder} 
                error={field.error}
            />
          </S.Label>
        ))
      }
      <S.Button onClick={e => addTransaction(e, fields, setFields)} name="add_transaction">Add Transaction</S.Button>
    </S.Form>
  );
}

export default AddTransaction;