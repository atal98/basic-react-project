import { useState } from "react";
import './style.css';

function Counter() {
  const [count,setCount] = useState(0)

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1)

  return (
    <>
    <div class="container{">
      <h1 class="number"> {count} </h1>
    </div>

    <section class="btns-container">
      <button onClick={increment} class="increment"><span class="plus">+</span></button>
      <button onClick={decrement} class="decrement"><span class="minus">-</span></button>
    </section>
    </>
  )
}

export default Counter;