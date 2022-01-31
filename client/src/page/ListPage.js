import React from 'react';

import ListItem from '../components/ListItem';

const ListPage = (props) => {

    if (props.data.length === 0) {
        return (<div className='page-margin'>
            <div className="page-space">
                <h1 className='title'>List of users</h1>
                <p>There are no users.</p>
            </div>
        </div>)
    }


    return (
        <div className='margin-page'>
            <h1 className='title'>List of users</h1>
            <ul className='list-block'>
                {props.data.map(info => {
                    return < ListItem
                        key={info.id}
                        login={info.owner}
                        date={info.created_at}
                    />
                })}
            </ul>
        </div>
    )
}

export default ListPage;
