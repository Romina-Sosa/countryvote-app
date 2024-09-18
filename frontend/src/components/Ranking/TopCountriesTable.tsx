import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TABLE_ROWS } from "../../utils/constans";
import { useEffect, useState } from "react";

interface TopCountriesProps {
  query?: string;
  voteSubmitted: boolean;
}

const TopCountries = (props: TopCountriesProps) => {
  const [topCountries, setTopCountries] = useState<string[]>([]);
  let baseUrl = "http://localhost:5000/api/top-countries";
  useEffect(() => {
    const fetchTopCountries = async () => {
      const url = props.query
        ? `http://localhost:5000/api/search-countries?query=${props.query}`
        : baseUrl;

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        setTopCountries(result);
      } catch (error) {
        console.error("Error fetching top countries:", error);
      }
    };

    fetchTopCountries();
  }, [props.query, props.voteSubmitted]);

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: "20px",
      }}
    >
      <Table
        sx={{
          "& .MuiTableCell-root": {
            borderBottom: "none",
          },
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              {TABLE_ROWS.COUNTRY}
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              {TABLE_ROWS.CAPITAL_CITY}
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              {TABLE_ROWS.REGION}
            </TableCell>
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              {TABLE_ROWS.SUB_REGION}
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              {TABLE_ROWS.VOTES}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {topCountries.map((item: any) => (
            <TableRow key={item.countryname}>
              <TableCell align="left">{item.countryname}</TableCell>
              <TableCell align="left">{item.capital}</TableCell>
              <TableCell align="left">{item.region}</TableCell>
              <TableCell align="left">{item.subregion}</TableCell>
              <TableCell align="center">{item.votes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TopCountries;
