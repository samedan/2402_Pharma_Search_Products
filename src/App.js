// import logo from "./logo.svg";
import "./App.css";
// import { useEffect, useState } from "react";
// import { cacheChecker } from "./cacheChecker";
import { Cases } from "./Cases";
// import HomeLoader from "./HomeLoader";
// import { HomeLoaderFunction } from "./HomeLoaderFunction";
// import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
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
    // <div className={`base-page ${className}`}>
    //   <Container className="containerClass">
    //     {title && (
    //       <div className="page-header">
    //         <h1 className="page-header-title">{title}</h1>
    //       </div>
    //     )}
    //     {props.children}
    //   </Container>
    // </div>

    // <div className={`base-page ${className} App`}>
    // <div className={`base-page App`}>
    <div
      className={`d-flex justify-content-center"`}
      style={{
        margin: " 25px;",
        width: "1200",
        height: "600px;",
        maxHeight: "600px !important;",
      }}
      // maxWidth="1110px"
    >
      <div
        className="containerClass_"
        style={{
          width: "1110px",
          height: "540px",
          maxHeight: "540px !important",
          margin: "0 auto",
        }}
      >
        <>
          <Cases />
          {/* <HomeLoader /> */}
          {/* <HomeLoaderFunction /> */}
          {/* {children} */}
        </>
      </div>
    </div>
  );

  // return <div className="App">loading</div>;
}

export default App;
