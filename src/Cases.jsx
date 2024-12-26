// import packageJson from "./package.json";
import axios from "axios";
// const { DateTime } = require("luxon");
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { Button, Link } from "@mui/material";
import Stack from "@mui/material/Stack";
import HomeIcon from "@mui/icons-material/Home";
import ModalView from "./ModalView";

export async function cacheChecker() {
  // fetch("/meta.json");
  const res = await fetch("https://articole-smart.eu/search/config.php");
  // const res = await fetch("http://localhost/demo/search.php");
  
  const response = await res.json();
  return response;

  // return res.json().then((meta) => {
  //   const latestVersionDate = meta.buildDate;
  //   const currentVersionDate = packageJson.buildDate;

  //   const shouldForceRefresh = latestGreaterThanCurrent(
  //     latestVersionDate,
  //     currentVersionDate
  //   );

  //   console.log(`Current Build ${getBuildDate(currentVersionDate)}`, null);
  //   console.log(`Latest Build ${getBuildDate(latestVersionDate)}`, null);

  //   if (shouldForceRefresh) {
  //     refreshCacheAndReload();
  //   }
  // });
}
export const Cases = () => {
  const axiosEndPoint = "https://articole-smart.eu/search/config_test.php";
  // const axiosEndPoint = "http://localhost/demo/search.php";

  const [results, setResults] = useState([]);
  const [resultsLoaded, setResultsLoaded] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  const [letter, setLetter] = useState("");
  const [dateInsert, setDateInsert] = useState("");

  useEffect(() => {
    // setLoading(true);
    let resJson = cacheChecker();
    // setData(resJson);
    // console.log(resJson);
    // setLoading(false);
    return () => {};
  }, []);

  useEffect(() => {
    // setLoading(true);
    getData(axiosEndPoint);
    // setLoading(false);
  }, []);

  useEffect(() => {
    // return () => {};
    setResults(filteredResults);
    setFilteredResults(filteredResults);
    // setFilteredResults
    setLetter(letter);
  }, [filteredResults, letter]);

  function goToAnimation() {
    window.location.replace(
      "https://bilan-sante.pharmacie-en-couleurs-eragny.com/"
    );
  }

  const getData = async function cacheChecker() {
    setLoading(true);

    try {
      const res = await axios(axiosEndPoint).then((response) => {
        // console.log("Data:", response);
        // console.log("dateInsert:");
        // console.log(response.data["dateInsert"][0]);
        setDateInsert(response.data["dateInsert"][0]);

        // return response.data;
        setResults(response.data["data"]);
        setResultsLoaded(response.data["data"]);
        // setResults(response.data); // No date server res
        // setResultsLoaded(response.data); // No date server res

        // let filteredUsers = response.data.filter((rowWithLetter) => {
        //   console.log("user");
        //   console.log(rowWithLetter);
        //   return rowWithLetter.label.startsWith("O");
        // });
        // return response.data;
        // setResults(filteredUsers);

        setLoading(false);
      });

      // console.log(res);

      // const response  = await res.then((output) => console.log(output))
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  // Filter data
  const getDataLetter = async (letter) => {
    setLoading(true);
    setLetter(letter);
    if (letter === "1-9") {
      console.log("1_9 on Cases");

      let arrayOfOneTo9 = [];
      for (let x = 0; x < 10; x++) {
        // setLetter(x);
        let filteredUsersX = resultsLoaded.filter((rowWithLetter) => {
          return rowWithLetter.label.startsWith(x);
        });
        if (filteredUsersX.length !== 0) {
          arrayOfOneTo9 = [...arrayOfOneTo9, ...filteredUsersX];
          // arrayOfOneTo9.push(filteredUsersX);
        }
      }
      setFilteredResults(arrayOfOneTo9);
      setResults(arrayOfOneTo9);
      // console.log("arrayOfOneTo9");
      // console.log(arrayOfOneTo9);
      setLoading(false);
    } else {
      let filteredUsers = resultsLoaded.filter((rowWithLetter) => {
        return rowWithLetter.label.startsWith(letter);
      });
      // console.log("filteredUsers");
      // console.log(filteredUsers);

      setFilteredResults(filteredUsers);
      setResults(filteredUsers);
      setLoading(false);
    }
  };
  // setLoading(false);

  const setNoLetter = () => {
    setFilteredResults([]);
    setLetter("");
  };

  const alphabet = [
    "1-9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <>
      {!loading && (
        <>
          {/* <Pagination results={getDataLetter("A")} loading={loading} /> */}
          <div
            className="pagination"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              // padding: "10px",
              boxSizing: "border-box",
              width: "100%",
              height: "40px",
            }}
          >
            {
              <div
                className={`item `}
                style={{
                  minWidth: "10px !important",
                  backgroundColor: "#2e7d32",
                }}
              >
                <HomeIcon onClick={() => setNoLetter()} />
              </div>
            }
            {alphabet.map((lettre) => (
              <div
                className={`item ${letter === lettre ? " active" : ""} `}
                style={{ minWidth: "10px !important" }}
                onClick={() => getDataLetter(lettre)}
              >
                {lettre}
              </div>
            ))}
          </div>
          {filteredResults.length === 0 && letter !== "1-9" && (
            <div
              style={{
                height: "80vh",
                width: "100%",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ width: 1, height: "100vh" }}
                style={{ height: "60vh", width: "100%", textAlign: "center" }}
              >
                <div style={{ width: "80%" }}>
                  <h1>Rechercher le prix d'un médicament</h1>
                  {dateInsert && (
                    <p>Dernière mise à jour : {dateInsert.label.toString()}</p>
                  )}

                  <br />
                  <h1>
                    Dans la liste ci-dessus, veuillez choisir la{" "}
                    <span style={{ color: "#0fbcf9", fontWeight: "bold" }}>
                      Première lettre du nom du produit
                    </span>{" "}
                    pour lancer la recherche
                  </h1>
                </div>
              </Stack>
              <div
                style={{
                  background: "gray",
                  height: "3px",
                  marginBottom: "60px",
                }}
              />
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  color="success"
                  style={{ width: "200px" }}
                  onClick={goToAnimation}
                >
                  Retour au debut
                </Button>
              </div>
            </div>
          )}

          {/* {letter === "1-9" && (
            <>
              <p>1-9</p>
              <Pagination
                results={filteredResults}
                loading={loading}
                // filteredResults={filteredResults}
                letter={letter}
              /> */}

          {/* <p>{JSON.stringify(results)}</p> */}
          {/* </>
          )} */}
          {filteredResults.length !== 0 && letter !== "" && (
            <>
              <Pagination
                results={filteredResults}
                loading={loading}
                // filteredResults={filteredResults}
                letter={letter}
              />

              {/* <p>{JSON.stringify(results)}</p> */}
            </>
          )}
          {/* <Pagination results={results} loading={loading} letterResults={getDataLetter("A")} /> */}
        </>
        // <table>
        //   {results.map((r) => (
        //     <tr>
        //       <td>{r.label}</td>
        //       <td>{r.code}</td>
        //       <td>{r.prix}</td>
        //       <td>{r.stock}</td>
        //     </tr>
        //   ))}
        // </table>
      )}
      {loading && <p>Loading...</p>}
      <ModalView />
    </>
  );
};

// Cases().then((output) => console.log(output));

// const refreshCacheAndReload = () => {
//   if (caches) {
//     // Service worker cache should be cleared with caches.delete()
//     caches.keys().then((names) => {
//       for (const name of names) {
//         caches.delete(name);
//       }
//     });
//   }
//   window.location.reload(true);
// };

// const latestGreaterThanCurrent = (latestDate, currentDate) => {
//   const latestBuildDateTime = DateTime.fromMillis(latestDate);
//   const currentBuildDateTime = DateTime.fromMillis(currentDate);

//   return latestBuildDateTime > currentBuildDateTime;
// };

// const getBuildDate = (epoch) => {
//   const buildDate = DateTime.fromMillis(epoch).toLocaleString(
//     DateTime.DATETIME_MED
//   );
//   return buildDate;
// };
