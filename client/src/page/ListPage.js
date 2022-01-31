import React from 'react';

import ListItem from '../components/ListItem';

const ListPage = (props) => {
    return (
        <div className='margin-page'>
            <h1>Showing the list of users</h1>
            <ul className='list-block'>
                {props.data.map(info => {
                    return < ListItem
                        id={info.id}
                        login={info.owner}
                        date={info.created_at}
                    />
                })}
            </ul>
        </div>
    )
}

export default ListPage;
