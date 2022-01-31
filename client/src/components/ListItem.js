import React from 'react';

import './ListItem.css';

const ListItem = (props) => {
  return (
  <li className='item-card' key={`${props.id}${props.login}`}>
      <p>{props.login}</p>
      <p>{props.date}</p>
  </li>
  )
};

export default ListItem;
