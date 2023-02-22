import React, { useEffect, useState, useCallback } from "react";

function App() {
  const [number, setNumber] = useState(0);

  //함수형 컴포넌트는 state를 변경할 때마다 렌더링된다.
  //someFunction은 함수 객체가 들어있는 메모리의 주소값을 가지고 있다.
  //컴포넌트가 렌더링되면 함수 객체가 새로 만들어진다.
  //그래서 number값이 바뀌어도 useEffect가 호출된다.
  // const someFunction = () => {
  //   console.log(`someFunc : number : ${number}`);
  //   return;
  // };

  //number가 바뀔 때마다 메모리제이션된 함수가 업데이트 된다. 
  const someFunction = useCallback(() => {
    console.log(`someFunc : number : ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("someFucntion이 변경되었습니다.");
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br/>
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}

export default App;