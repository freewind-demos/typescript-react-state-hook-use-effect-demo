import React, {useEffect} from 'react'
import {useState} from "react";

export default function Hello() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('Component is rendered')
    return () => {
      console.log('Clean up this component')
    }
  })
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
