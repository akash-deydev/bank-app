import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { BiSolidUser } from "react-icons/bi";
import { MdOutlineBusiness } from "react-icons/md";
import { BiSolidPlane } from "react-icons/bi";
import styled from "styled-components";

function Headers() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">
          GRIP <div>Bank</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <StyledContainer>
              <NavLink to="/">
                <HiHome />
                Home
              </NavLink>
              <NavLink href="/">
                <BiSolidUser />
                Personal
              </NavLink>
              <NavLink href="/">
                <MdOutlineBusiness />
                Business
              </NavLink>
              <NavLink href="/">
                <BiSolidPlane />
                NRI
              </NavLink>
            </StyledContainer>
          </Nav>
          <Button className="me-2">Login</Button>
          <Button>Pay</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headers;

const StyledContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: #004880;
  }
`;
