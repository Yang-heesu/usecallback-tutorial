import React, { useState } from "react";

import Box from "./Box";

function Example2() {
  const [size, setSizes] = useState(100);

  const createBoxStyle = () => {
    return {
      backgroundColor:'pink',
      width: `${size}px`,
      height: `${size}px`
    }
  }

  return (
    <div>
      <input
        type="number"
        value={size}
        onChange={(e) => setSizes(e.target.value)}
      />
      <Box createBoxStyle={createBoxStyle}/>
    </div>
  );
}

export default Example2;