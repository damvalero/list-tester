import React, { useEffect, useState } from 'react';

import Loading from './components/Loading'
import ListPage from './page/ListPage';
import './App.css';

function App() {

  const [data, setData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    async function getUsers() {
      try {
        let response = await fetch('https://api.github.com/gists');
        let obj = await response.json();
        const newObj = obj.map((info) => {
          const objData = {
            "id": info.id,
            "created_at": info.created_at.split("T")[0],
            "owner": info.owner.login,
          }
          return objData
        })
        setData(newObj);
        setLoadingData(false);
      } catch (err) {
        console.log("the error is", err)
      }
    };
    getUsers();
  }, [])

  if (loadingData) {
    return (
      <div className='page-margin'>
        <div className="page-space">
          <Loading />
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <ListPage data={data} />
    </div>
  );
}

export default App;
