import React from "react";
import { useSelector } from "react-redux";

import Header from "./component/Header";
import ExtensionList from "./component/ExtensionList";
const App = () => {
  //const { allExtensions} = useSelector((state) => state.extensions);
  const theme = useSelector((state) => state.theme);
  return (
    <div className={`${theme === "dark" ? "bg-dark-gradient" : "bg-light-gradient"} min-h-screen`}>
      <main className="max-w-[1200px] mx-auto p-2">
        <Header />
        <ExtensionList/>
      </main>
    </div>
  );
};

export default App;
