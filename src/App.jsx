import React, { useState } from "react";

const app = () => {
  const [gameState, setGameState] = useState("menu");
  return (
    <div>
      <h1>Quiz App</h1>
    </div>
  );
};

export default app;
