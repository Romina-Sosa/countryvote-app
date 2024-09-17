import express from "express";
import cors from "cors";
import { readJSON, writeJSON, addNewVote } from "./fileUtils";

const emailsUsersPath = "./src/emailsUsers.json";
const topCountriesPath = "./src/topCountries.json";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Retrieve the 10 most voted countries
app.get("/api/top-countries", async (req, res) => {
  let top_countries = await readJSON(topCountriesPath);
  const top10Countries = top_countries.slice(0, 10);
  res.send(top10Countries);
});

// Submit the new vote
app.post("/api/submit-vote", async (req, res) => {
  const { emailuser, countryname } = req.body;
  res.status(200).send("Data received successfully");

  let emailsUsers = await readJSON(emailsUsersPath);
  emailsUsers.push(emailuser);

  await writeJSON(emailsUsers, emailsUsersPath);
  await addNewVote(countryname, topCountriesPath);
});

// Checks if the email already exists
app.post("/api/checks-email", async (req, res) => {
  const { emailuser } = req.body;
  let emails = await readJSON(emailsUsersPath);
  res.send(emails.includes(emailuser));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
