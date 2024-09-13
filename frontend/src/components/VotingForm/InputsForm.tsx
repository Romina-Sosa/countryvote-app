import { useEffect, useState } from "react";
import styled from "styled-components";

const InputsFormsStyled = styled.div`
  display: flex;
  gap: 12px;
`;

const InputStyled = styled.input`
  display: flex;
  padding: 7px 14px; 
  border-radius: 10px;
  border: 1px solid #EFEFEF;
`;

const InputSubmitStyled = styled.input`
  display: flex;
  padding: 9px 16px; 
  border-radius: 8px;
  border: 1px solid #EFEFEF;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: white;
  background-color: #15172A;

   &:disabled {
    background-color: #EDEDED; 
    color: #A3A3A3;
    cursor: not-allowed; 
  }
`;

interface InputsFormsProps {
  onFormSubmit: () => void;
}

const InputsForms: React.FC<InputsFormsProps> = ({ onFormSubmit }) => {
  const [isFormValid, setIsFormValid] = useState(false);

  const [inputs, setInputs] = useState({
    username: '',
    emailuser: '',
    countryname: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onFormSubmit();
    alert('Form submitted');
  };

  useEffect(() => {
    const { username, emailuser, countryname } = inputs;
    setIsFormValid(!!(username && emailuser && countryname));
  }, [inputs]);
  
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
        <InputStyled 
          type="text" 
          name="countryname"
          value={inputs.countryname}
          onChange={handleChange}
          placeholder="Country" 
        />
        <InputSubmitStyled type="submit" value='Submit Vote' disabled={!isFormValid}/>
      </InputsFormsStyled>
    </form>
  );
}

export default InputsForms;
