import styled from "styled-components";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
// import Headers from "../components/Layout/Headers";
import Main from "../components/Layout/MainSection";
// import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const handleViewCustomersBtn = () => {
    navigate("/all-customers");
  };

  const handleViewTransactions = () => {
    navigate("/all-transfers");
  };

  return (
    <div>
      <Header />
      {/* <Headers /> */}
      <Main>
        <MainContainer>
          <MainPageSection>
            <div id="main-heading">
              <h1>Welcome to the circle of success & happiness</h1>
              <p>No matter where you enter the circle, we are here for you</p>
            </div>
            <div
              style={{
                width: "35vw",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <StyledButton onClick={handleViewTransactions}>
                View All Transactions
              </StyledButton>
              <StyledButton onClick={handleViewCustomersBtn}>
                View All Customers
              </StyledButton>
            </div>
          </MainPageSection>
        </MainContainer>
      </Main>
      <Footer />
    </div>
  );
};

export default Homepage;

const MainContainer = styled.div`
  margin-top: 3px;
  min-height: inherit;
  background: transparent linear-gradient(180deg, #f1f8ff 0%, #ffffff 100%) 0%
    0% no-repeat padding-box;
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  background-color: #004880;
  color: white;
  width: auto;
  padding: 4px 10px;
  font-weight: bold;
  border-radius: 4px;
  margin-right: 4rem;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
  }
`;

const MainPageSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 80vh;
  align-items: center;
  justify-content: space-around;
  gap: 30px;

  #main-heading h1 {
    color: #004880;
    font-size: 4rem;
    max-width: 35vw;
  }
  }
`;
