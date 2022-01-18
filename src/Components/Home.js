// import React from 'react'
// import './Home.css'

// export default function Home() {
//     return (
//         <div>
//             <img src='https://i.ibb.co/6vdyf8J/39019-completing-taskscompressed.gif' alt='home' />
//         </div>
//     )
// }

import React, { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const add = () => setCount(count + 1);

  const deduct = () => setCount(count - 1)
  return (
    <>
      <h1>Hook State</h1>
      <nav>
          <button onClick={add}>+</button>
          <button onClick={deduct}>-</button>
          <h1>{count}</h1>
      </nav>
    </>
  );
}