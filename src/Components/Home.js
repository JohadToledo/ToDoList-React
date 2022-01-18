// import React from 'react'
// import './Home.css'

// export default function Home() {
//     return (
//         <div>
//             <img src='https://i.ibb.co/6vdyf8J/39019-completing-taskscompressed.gif' alt='home' />
//         </div>
//     )
// }

import React, { useRef } from "react";

export default function Home() {
  const myContainer = useRef(null);
  console.log(myContainer.current);

  return (
    <>
      <div ref={myContainer}>I can use the DOM with react ref</div>
    </>
  );
}