import React from 'react';

import './ListItem.css';

const ListItem = (props) => {
  return (
    <li className='item-card'>
      <p>Login: {props.login}</p>
      <p>Creation date: {props.date}</p>
    </li>
  )
};

export default ListItem;
