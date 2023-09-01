import { useRef, useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const isUpdate = useRef(true);

  useEffect(() => {
    console.log("已挂载");
    return () => {
      if (!isUpdate.current) {
        console.log("count", count);
      }
      isUpdate.current = false;
    };
  }, [count]);

  function handleClick() {
    setCount((prev) => prev + 1);
    isUpdate.current = true;
  }

  return <button onClick={handleClick}> {count} </button>;
}

export default function APP() {
  const [show, setShow] = useState(true);
  function handleReset() {
    setShow(!show);
  }

  return (
    <>
      <button onClick={handleReset}> {show ? "卸载" : "挂载"} 组件 </button>
      {show && <Counter />}
    </>
  );
}