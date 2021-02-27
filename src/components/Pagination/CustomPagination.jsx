import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const CustomPagination = ({ setPage, numberofPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    console.log(page);
    window.scroll(0, 0);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "10px"
        }}
      >
        <Pagination
          count={numberofPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
          hideNextButton
          hidePrevButton
        />
      </div>
    </ThemeProvider>
  );
};

export default CustomPagination;
