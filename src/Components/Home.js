// import React from 'react'
// import './Home.css'

// export default function Home() {
//     return (
//         <div>
//             <img src='https://i.ibb.co/6vdyf8J/39019-completing-taskscompressed.gif' alt='home' />
//         </div>
//     )
// }

import React, { useEffect, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState('');

  const onChange = e => {
    console.log('click', e)
    setSearch(e.target.value);
  }

  
  return (
    <>
      <div>
        <div>
          <input placeholder="buscate algo" onChange={onChange}/>
        </div>
        <div>
          {/* <button onClick={onChange}>Buscar</button> */}
          <div>{search}</div>
        </div>
      </div>
    </>
  );
}