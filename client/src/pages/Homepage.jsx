import MainSection from "../components/Layout/MainSection";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Main from "../components/Layout/MainSection";
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
      <Main>
        <MainSection>
          <div className="container text-center mt-1">
            <div className="row">
              <div className="col">
                <div
                  className="display-1 m-auto"
                  style={{ width: "35vw", color: "#004880" }}
                >
                  Welcome to the circle of success & happiness
                </div>
                <p className="lead">
                  No matter where you enter the circle, we are here for you
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div>
                  <button
                    className="primary-btn mb-3 me-3"
                    onClick={handleViewTransactions}
                  >
                    View All Transactions
                  </button>
                  <button
                    className="primary-btn mb-3 me-3"
                    onClick={handleViewCustomersBtn}
                  >
                    View All Customers
                  </button>
                </div>
              </div>
            </div>
          </div>
        </MainSection>
      </Main>
      <Footer />
    </div>
  );
};

export default Homepage;

// const MainContainer = styled.div`
//   margin-top: 3px;
//   min-height: inherit;
//   background: transparent linear-gradient(180deg, #f1f8ff 0%, #ffffff 100%) 0%
//     0% no-repeat padding-box;
// `;
