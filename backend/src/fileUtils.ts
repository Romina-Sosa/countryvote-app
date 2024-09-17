import fs from "fs/promises";
import axios from "axios";

export async function readJSON(path: string) {
  try {
    try {
      await fs.access(path);
    } catch {
      // If the file does not exist, a new one is created
      console.log("The file does not exist");
      await fs.writeFile(path, JSON.stringify([]));
    }
    // Read the file
    const data = await fs.readFile(path, "utf-8");

    // Check if the file is empty
    if (data.length === 0) return data;

    return JSON.parse(data);
  } catch (error) {
    console.error("There was an error reading the file", error);
    return [];
  }
}

export async function writeJSON(newData: string[], path: string) {
  try {
    await fs.writeFile(path, JSON.stringify(newData));
  } catch (error) {
    console.log("There was an error writing the file", error);
  }
}

export async function addNewVote(countryName: string, path: string) {
  const all_countries = await readJSON(path);
  // Check if the country was already voted
  const index = all_countries.findIndex(
    (country: { countryname: string }) => country.countryname === countryName
  );
  if (index === -1) {
    const data = await getCountryData(countryName);
    all_countries.push(data);
  } else all_countries[index].votes++;
  writeJSON(all_countries, path);
}

// Get all the data from a country
export async function getCountryData(countryName: string) {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );
    const country = response.data[0];
    return {
      countryname: country.name.common,
      region: country.region,
      subregion: country.subregion,
      capital: country.capital[0],
      votes: 1,
    };
  } catch (error) {
    console.error("Error fetching country data");
    throw error;
  }
}
