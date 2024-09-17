"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readJSON = readJSON;
exports.writeJSON = writeJSON;
exports.addNewVote = addNewVote;
exports.getCountryData = getCountryData;
const promises_1 = __importDefault(require("fs/promises"));
const axios_1 = __importDefault(require("axios"));
function readJSON(path) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            try {
                yield promises_1.default.access(path);
            }
            catch (_a) {
                // If the file does not exist, a new one is created
                console.log("The file does not exist");
                yield promises_1.default.writeFile(path, JSON.stringify([]));
            }
            // Read the file
            const data = yield promises_1.default.readFile(path, "utf-8");
            // Check if the file is empty
            if (data.length === 0)
                return data;
            return JSON.parse(data);
        }
        catch (error) {
            console.error("There was an error reading the file", error);
            return [];
        }
    });
}
function writeJSON(newData, path) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield promises_1.default.writeFile(path, JSON.stringify(newData));
        }
        catch (error) {
            console.log("There was an error writing the file", error);
        }
    });
}
function addNewVote(countryName, path) {
    return __awaiter(this, void 0, void 0, function* () {
        const all_countries = yield readJSON(path);
        // Check if the country was already voted
        const index = all_countries.findIndex((country) => country.countryname === countryName);
        if (index === -1) {
            const data = yield getCountryData(countryName);
            all_countries.push(data);
        }
        else
            all_countries[index].votes++;
        writeJSON(all_countries, path);
    });
}
// Get all the data from a country
function getCountryData(countryName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
            const country = response.data[0];
            return {
                countryname: country.name.common,
                region: country.region,
                subregion: country.subregion,
                capital: country.capital[0],
                votes: 1,
            };
        }
        catch (error) {
            console.error("Error fetching country data");
            throw error;
        }
    });
}
