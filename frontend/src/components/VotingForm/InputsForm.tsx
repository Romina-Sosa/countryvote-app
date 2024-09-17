import { useEffect, useState } from "react";
import {
  InputsFormsStyled,
  InputStyled,
  SelectStyled,
  SubmitStyled,
} from "./styles/VotingFormStyles";
import validator from "validator";

interface InputsFormsProps {
  onFormSubmit: () => void;
}

interface Country {
  name: string;
}

const InputsForms: React.FC<InputsFormsProps> = ({ onFormSubmit }) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [isMailValid, setIsMailValid] = useState(false);
  const [userVoted, setUserVoted] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  const [inputs, setInputs] = useState({
    username: "",
    emailuser: "",
    countryname: "",
  });

  useEffect(() => {
    // Set a list with all the countries
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const countriesList = data.map((country: any) => ({
          name: country.name.common,
        }));
        setCountries(countriesList);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    // Checks if the user has already voted
    if (inputs.emailuser) {
      const checksEmail = async () => {
        try {
          const response = await fetch(
            "http://localhost:5000/api/checks-email",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ emailuser: inputs.emailuser }),
            }
          );
          const exist = await response.json();
          setUserVoted(exist);
        } catch (error) {
          console.error("Error checking if the user has already voted:", error);
        }
      };

      checksEmail();
    }
  }, [inputs.emailuser]);

  useEffect(() => {
    // Checks that all voting conditions are met
    const { username } = inputs;
    setIsFormValid(
      !!(username && isMailValid && selectedCountry && !userVoted)
    );
  }, [inputs, isMailValid, selectedCountry, userVoted]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
    if (name === "emailuser") {
      setIsMailValid(validator.isEmail(value));
    }
    if (name === "countryname") {
      setSelectedCountry(value);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await fetch("http://localhost:5000/api/submit-vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      onFormSubmit();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputsFormsStyled>
        <InputStyled
          type="text"
          name="username"
          value={inputs.username}
          onChange={handleChange}
          placeholder="Name"
        />
        <InputStyled
          type="text"
          name="emailuser"
          value={inputs.emailuser}
          onChange={handleChange}
          placeholder="Email"
        />
        <SelectStyled
          name="countryname"
          value={inputs.countryname}
          onChange={handleChange}
        >
          <option value="" disabled>
            Country
          </option>
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </SelectStyled>
        <SubmitStyled
          type="submit"
          value="Submit Vote"
          disabled={!isFormValid}
        />
      </InputsFormsStyled>
    </form>
  );
};

export default InputsForms;
