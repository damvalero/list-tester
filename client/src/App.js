import React, { useEffect, useState } from 'react';

import ListPage from './page/ListPage';
import './App.css';

function App() {

  const [data, setData] = useState();

  const DUMMY_DATA = [
    {
      id: "7ecfa2df5c6d399b7511413b0a5d13fc",
      login: 'goku',
      created_at: "2022-01-29T17:25:17Z",
    },
    {
      id: "7ecfa2df5c6d399b7566613b0a5d13fc",
      login: 'superman',
      created_at: "2022-01-29T17:25:17Z",
    },
    {
      id: "7ecfa2df5c6d399b7522463b0a5d13fc",
      login: 'bobafett',
      created_at: "2022-01-29T17:25:17Z",
    },
  ];

  useEffect(() => {
    // fetch('https://api.github.com/gists')
    //   .then((res) => {
    //     const obj = res.json();
    //     // let allUsers = obj.map(info => {
    //     //   const obj = {
    //     //     "id": info.id,
    //     //     "owner": info.owner
    //     //   }
    //     //   return obj;
    //     // })
    //     // setData(allUsers);
    //     console.log('funcioó obj',obj);
    //     // console.log('funcioó fetch',allUsers);
    //   })
    //   .catch((err) => {
    //     console.log('show my error', err)
    //   });
    async function getUsers() {
      try {
        let response = await fetch('https://api.github.com/gists');
        let obj = await response.json();
        console.log("first obj", obj)
        const newObj = obj.map((info)=> {
          const objData = {
            "id": info.id,
            "created_at": info.created_at.split("T")[0],
            "owner": info.owner.login,
          }
          return objData
        })
        console.log("newObj", newObj)
        // return newObj
        setData(newObj)
      } catch(err) {
        console.log("my error",err)
      }
    };

    getUsers();
  }, [])

  return (
    <div className="App">
      <ListPage data={data} />
    </div>
  );
}

export default App;
