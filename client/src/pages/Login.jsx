import styled from "styled-components";
import Header from "../components/Layout/Header";
import MainSection from "../components/Layout/MainSection";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Header />
      <MainSection>
        <StyledForm className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-muted text-center">Sign In</h1>
          <div>
            <label htmlFor="email">Email</label>
            <StyledInput type="text" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <StyledInput type="text" id="email" />
          </div>
          <StyledButton>Submit</StyledButton>
          <FormText>
            <Link to="/">
              <p>Trouble Signin In?</p>
            </Link>
          </FormText>
        </StyledForm>
      </MainSection>
    </div>
  );
};

export default Login;

const StyledForm = styled.form`
  height: 80vh;

  input,
  label {
    display: block;
    margin-bottom: 8px;
  }
`;

const StyledInput = styled.input`
  border: 1px solid #f4f4f4;
  width: 300px;
  padding: 12px 20px;
  background-color: #f4f4f4;
  margin-bottom: 30px;
  border-radius: 4px;
  outline: none;
  font-size: 18px;

  &:focus {
    border: 1px solid #d6d6d6;
    transition: all 0.2s;
  }
`;

const StyledButton = styled.button`
  margin: 20px 0;
  background-color: #3e6ae1;
  cursor: pointer;
  color: white;
  width: 300px;
  padding: 12px 40px;
  font-size: 18px;
  border-radius: 3px;
  border: none;
  outline: none;
  transition: all 0.4s;
  &:hover {
    background-color: #3457b1;
  }
`;

const FormText = styled.div`
  margin: 20px 0;

  a {
    text-decoration: none;
    color: #004880;
  }

  p {
    font-size: 18px;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: black;
    }
  }
`;
