import React, { useState } from "react";
import Editor from "./Editor";
import "./index.css";

const App = () => {
  const [layout, setLayout] = useState("horizontal");

  return (
    <div>
      <div className="layout-switcher">
        <button onClick={() => setLayout("horizontal")}>Horizontal</button>
        <button onClick={() => setLayout("vertical")}>Vertical</button>
        <button onClick={() => setLayout("tabbed")}>Tabbed</button>
      </div>
      <div className={`wrapper ${layout}`}>
        <Editor layout={layout} />
      </div>
    </div>
  );
};

export default App;
