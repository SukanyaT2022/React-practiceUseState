import React, { useState } from 'react'

const App = () => {
  const [add, setAdd] = useState('good night')
  const [count, setcount] = useState(0)

const handleClick2 = () => {
  setcount(count + 1);
};
  


  return (
    <div>
{/* {add} */}
{count}
{/* <input type="text" value={add}/> */}
{/* way 1 */}
{/* <button onClick={()=>setAdd('bye')}>Click to Change</button> */}
{/* way2 */}
{/* <button onClick={handleClick}>Click to Change</button> */}
<button onClick={handleClick2}>Click to Change</button>

    </div>
  )
}


export default App
