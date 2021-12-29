
import React,{useState} from 'react';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './Expenseitem.css';

 
function ExpenseItem(props) {

  const[title,setTitle]=useState(props.title);

  const clickhandler =()=>{
    setTitle('Updated');
    console.log('Clicked!!!!');
  };

  return (
    <li>
    <Card className='expense-item'>
        <ExpenseDate  date={props.date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className='expense-item__price'>{props.amount}</div>
        </div>
      <button onClick={clickhandler}>Change Title</button>
    </Card>
    </li>
  );
}

export default ExpenseItem;
