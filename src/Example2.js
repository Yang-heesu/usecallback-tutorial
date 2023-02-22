import React, { useCallback, useState } from "react";

import Box from "./Box";

function Example2() {
  const [size, setSizes] = useState(100);
  const [isDark, setIsDark] = useState(false);

  // const createBoxStyle = () => {
  //   return {
  //     backgroundColor:'pink',
  //     width: `${size}px`,
  //     height: `${size}px`
  //   }
  // }

  //size가 바뀔 때만 초기화!
  //Change Theme을 클릭해도 Box의 useEffect가 호출되지 않는다.
  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor:'pink',
      width: `${size}px`,
      height: `${size}px`
    }
  }, [size]);

  return (
    <div
      style={{
        background: isDark ? 'black' : 'white'
      }}
    >
      <input
        type="number"
        value={size}
        onChange={(e) => setSizes(e.target.value)}
      />
      <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
      <Box createBoxStyle={createBoxStyle}/>
    </div>
  );
}

export default Example2;