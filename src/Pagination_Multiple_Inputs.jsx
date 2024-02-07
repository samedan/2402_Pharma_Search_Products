import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
// import faker from "faker";
// import { faker } from "@faker-js/faker";

import TextField from "@mui/material/TextField";

import { styled } from "@mui/material/styles";
import "./pagination.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Autocomplete from "@mui/material/Autocomplete";
import "./App.css";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function Pagination({ results, filteredResults, loading, letter }) {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  // console.log(results);
  // console.log(loading);

  // console.log(faker.lorem.words(5));
  // console.log(faker.lorem.sentences(8));

  const [pagination, setPagination] = useState({
    // data: new Array(1000).fill().map((value, index) => ({

    data: filteredResults.map((value, index) => ({
      id: index,
      title: value.label,
      body: value.label,
      prix: value.prix,
      code: value.code,
      letter: letter,
      // title: faker.lorem.words(5),
      // body: faker.lorem.sentences(8),
    })),
    offset: 0,
    numberPerPage: 10,
    pageCount: 0,
    currentData: [],
  });

  useEffect(() => {
    const data = filteredResults.map((value, index) => ({
      id: index,
      title: value.label,
      body: value.label,
      prix: value.prix,
      code: value.code,
      letter: letter,
      // title: faker.lorem.words(5),
      // body: faker.lorem.sentences(8),
    }));
    setPagination((prevState) => ({
      ...prevState,
      pageCount: data.length / 10,
      offset: 0,
      currentData: data.slice(0, 10),
    }));
    console.log("UPDATE pagination");
    console.log(pagination);
  }, [filteredResults, letter, results]);

  const [searchResult, setSearchResult] = useState("");
  const [searchedRow, setSearchedRow] = useState(null);

  useEffect(() => {
    console.log("HERE pagination");
    console.log(pagination);
    setPagination((prevState) => ({
      ...prevState,
      pageCount: prevState.data.length / prevState.numberPerPage,
      // offset: letter ? 0 : pagination.offset,
      currentData: prevState.data.slice(
        pagination.offset,
        pagination.offset + pagination.numberPerPage
      ),
    }));
  }, [pagination.numberPerPage, pagination.offset]);

  const handlePageClick = (event) => {
    const selected = event.selected;
    console.log("selected");
    console.log(selected);
    const offset = selected * pagination.numberPerPage;
    setPagination({ ...pagination, offset });
  };

  const functionSetSearchResult = (params) => {
    setSearchResult(params);
    if (params !== "") {
      displaySearchedRow(params);
    } else {
      setSearchedRow(null);
    }

    setSearchResult("");
  };

  const displaySearchedRow = (params) => {
    console.log("params");
    console.log(params);
    let result = results.filter((o) => o.label === params);
    console.log(result[0]);
    if (params) {
      setSearchedRow(result[0]);
    } else {
      setSearchedRow(null);
    }

    // return (
    // <TableRow>
    //   <TableCell align="right">
    //     <>{result[0].label}</>
    //   </TableCell>
    //   <TableCell align="right">
    //     <>{result[0].code}</>
    //   </TableCell>
    //   <TableCell align="right">
    //     <>{result[0].prix}</>
    //   </TableCell>
    // </TableRow>
    // );
  };

  return (
    <div>
      {pagination.currentData && (
        <>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>NOM</TableCell>
                  <TableCell align="right">Code</TableCell>
                  <TableCell align="right">Prix € TTC</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* SEARCH */}
                <TableRow>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    // options={top100Films}
                    options={results}
                    style={{ background: "aquamarine" }}
                    sx={{ width: 300 }}
                    renderInput={(params) => {
                      // console.log(params);
                      if (params.inputProps.value !== "") {
                        console.log(params.inputProps.value);
                        functionSetSearchResult(params.inputProps.value);
                      } else {
                        setSearchedRow(false);
                      }
                      return (
                        <TextField {...params} label="Cherchez le produit" />
                      );
                    }}
                  />
                </TableRow>
                {/* END SEARCH */}

                {searchedRow && (
                  <StyledTableRow
                    style={{
                      backgroundColor: "green",
                      color: "#ffffff",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    <StyledTableCell
                      align="left"
                      style={{
                        backgroundColor: "green",
                        color: "#ffffff",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      <>{searchedRow.label}</>
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      style={{
                        backgroundColor: "green",
                        color: "#ffffff",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      <>{searchedRow.code}</>
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      style={{
                        backgroundColor: "green",
                        color: "#ffffff",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      <>{searchedRow.prix}</>
                    </StyledTableCell>
                  </StyledTableRow>
                )}

                {searchResult !== "" && (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    {/* <div key={item.id} className="post_"> */}
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ backgroundColor: "green" }}
                    >
                      <>{`${searchResult}`}</>
                    </TableCell>
                    {/* <p>Body: {item.body}</p> */}
                    {/* <TableCell align="right">
                      <>{item.code}</>
                    </TableCell>
                    <TableCell align="right">
                      <>{item.prix}</>
                    </TableCell> */}
                    {/* </div> */}
                  </TableRow>
                )}
                {/* {searchedRow !== null && searchedRow} */}

                {pagination.currentData.map((item, index) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    {/* <div key={item.id} className="post_"> */}
                    <TableCell component="th" scope="row">
                      <>{`${item.title}`}</>
                    </TableCell>
                    {/* <p>Body: {item.body}</p> */}
                    <TableCell align="right">
                      <>{item.code}</>
                    </TableCell>
                    <TableCell align="right">
                      <>{item.prix}</>
                    </TableCell>
                    {/* </div> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 10,
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
        }}
      >
        <ReactPaginate
          // previousLabel={"précédent"}
          // nextLabel={"suivant"}
          nextLabel={<ArrowRightIcon style={{ fontSize: 18, width: 150 }} />}
          previousLabel={<ArrowLeftIcon style={{ fontSize: 18, width: 150 }} />}
          // breakLabel={"..."}
          pageCount={pagination.pageCount}
          // marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          // containerClassName={"pagination"}
          // activeClassName={"active"}
          // style={{ backgroundColor: "aquamarine", width: "90%" }}
          activeClassName={"item active "}
          breakClassName={"item break-me "}
          breakLabel={"..."}
          containerClassName={"pagination"}
          disabledClassName={"disabled-page"}
          marginPagesDisplayed={2}
          nextClassName={"item next "}
          pageClassName={"item pagination-page "}
          previousClassName={"item previous"}
        />
      </div>
    </div>
  );
}
export default Pagination;
