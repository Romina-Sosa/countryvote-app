"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const fileUtils_1 = require("./fileUtils");
const emailsUsersPath = "./src/emailsUsers.json";
const topCountriesPath = "./src/topCountries.json";
const app = (0, express_1.default)();
const port = 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Retrieve the 10 most voted countries
app.get("/api/top-countries", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    let top_countries = yield (0, fileUtils_1.readJSON)(topCountriesPath);
    const top10Countries = top_countries.slice(0, 10);
    res.send(top10Countries);
  })
);

// Search for countries by name, capital, region, or subregion
app.get("/api/search-countries", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { query } = req.query;
    try {
      let top_countries = yield (0, fileUtils_1.readJSON)(topCountriesPath);
      const list_of_countries = yield (0, fileUtils_1.filterCountries)(
        query,
        top_countries
      );
      const top10Countries = list_of_countries.slice(0, 10);
      res.send(top10Countries);
    } catch (error) {
      res.status(500).send({ message: "Error searching countries" });
    }
  })
);
// Submit the new vote
app.post("/api/submit-vote", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { emailuser, countryname } = req.body;
    res.status(200).send("Data received successfully");
    let emailsUsers = yield (0, fileUtils_1.readJSON)(emailsUsersPath);
    emailsUsers.push(emailuser);
    yield (0, fileUtils_1.writeJSON)(emailsUsers, emailsUsersPath);
    yield (0, fileUtils_1.addNewVote)(countryname, topCountriesPath);
  })
);
// Checks if the email already exists
app.post("/api/checks-email", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { emailuser } = req.body;
    let emails = yield (0, fileUtils_1.readJSON)(emailsUsersPath);
    res.send(emails.includes(emailuser));
  })
);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
