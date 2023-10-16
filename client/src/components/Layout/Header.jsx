import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { BiSolidUser } from "react-icons/bi";
import { MdOutlineBusiness } from "react-icons/md";
import { BiSolidPlane } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <div id="bank-logo">
        <NavLink to="/">
          <div>GRIP</div>
          <div id="bank">Bank</div>
        </NavLink>
      </div>

      <div id="bank-links">
        <div className="icons-links nav-items">
          <HiHome />
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="icons-links nav-items">
          <BiSolidUser />
          <NavLink href="/">Personal</NavLink>
        </div>
        <div className="icons-links nav-items">
          <MdOutlineBusiness />
          <NavLink href="/">Business</NavLink>
        </div>
        <div className="icons-links">
          <BiSolidPlane />
          <NavLink href="/">NRI</NavLink>
        </div>
      </div>
      <div id="bank-btn">
        <StyledButton
          className="btn btn-sm"
          onClick={(e) => navigate("/login")}
        >
          Login
        </StyledButton>
        <StyledButton className="btn btn-sm">Pay</StyledButton>
      </div>
    </StyledContainer>
  );
};

export default Header;

const StyledContainer = styled.div`
  display: flex;
  max-height: 10vh;
  justify-content: space-around;
  align-items: center;
  color: #004880;
  font-weight: bold;
  box-shadow: 6px 5px 6px #0000001f;

  #bank-logo {
    font-size: 20px;

    a {
      text-decoration: none;
      color: #004880;
    }

    #bank {
      font-size: 18px;
      font-weight: normal;
    }
  }

  #bank-links {
    display: flex;
    gap: 25px;

    .icons-links {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      padding: 10px;

      &:hover {
        background-color: #e3f2ff;
        padding: 10px;
      }
    }

    svg {
      display: block;
    }

    div a {
      text-decoration: none;
      color: #004880;
    }
  }
`;

const StyledButton = styled.button`
  width: 60px;
  border: none;
  outline: none;
  background-color: #004880;
  color: #eee;
  padding: 6px 10px;
  font-weight: bold;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;
