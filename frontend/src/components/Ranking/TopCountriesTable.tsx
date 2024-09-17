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
}

const TopCountries = (props: TopCountriesProps) => {
  const [topCountries, setTopCountries] = useState<string[]>([]);
  let url = "http://localhost:5000/api/top-countries";

  useEffect(() => {
    const fetchTopCountries = async () => {
      if (props.query)
        url = `http://localhost:5000/api/search-countries?query=${props.query}`;
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
  }, [props.query]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">{TABLE_ROWS.COUNTRY}</TableCell>
            <TableCell align="center">{TABLE_ROWS.CAPITAL_CITY}</TableCell>
            <TableCell align="center">{TABLE_ROWS.REGION}</TableCell>
            <TableCell align="center">{TABLE_ROWS.SUB_REGION}</TableCell>
            <TableCell align="right">{TABLE_ROWS.VOTES}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {topCountries.map((item: any) => (
            <TableRow key={item.countryname}>
              <TableCell align="left">{item.countryname}</TableCell>
              <TableCell align="center">{item.capital}</TableCell>
              <TableCell align="center">{item.region}</TableCell>
              <TableCell align="center">{item.subregion}</TableCell>
              <TableCell align="right">{item.votes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TopCountries;
