// import logo from "./logo.svg";
import "./App.css";
// import { useEffect, useState } from "react";
// import { cacheChecker } from "./cacheChecker";
import { Cases } from "./Cases";
// import Pagination from "./Pagination";

function App() {
  // const [data, setData] = useState();
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   // cacheChecker();
  //   // setData(resJson);

  //   setLoading(false);
  //   return () => {};
  // }, []);

  return (
    <div className="App">
      <>
        <Cases />
      </>
    </div>
  );

  // return <div className="App">loading</div>;
}

export default App;
