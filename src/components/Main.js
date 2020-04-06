import React from "react";
import RightSidebar from "./main/RightSidebar";

const App = () => {
  return (
    <>
      <div className="left">left</div>
      <div className="right">
        <RightSidebar />
      </div>
    </>
  );
};

export default App;
