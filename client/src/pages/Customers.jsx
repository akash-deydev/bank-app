import styled from "styled-components";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import MainSection from "../components/Layout/MainSection";
import { useNavigate } from "react-router-dom";

import { useGetAllCustomersQuery } from "../services/customers";

const Customers = () => {
  const { data, isLoading } = useGetAllCustomersQuery();
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/customer-details/${id}`);
  };

  return (
    <div>
      <Header />
      <MainSection>
        {isLoading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "80vh" }}
          >
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <StyledTable className="container table table-sm table-hover table-striped mt-2">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {data?.users &&
                data?.users.map((user, idx) => {
                  return (
                    <tr key={user._id}>
                      <td>{idx + 1}.</td>
                      <td>{user.name}</td>
                      <td>
                        <button
                          className="primary-btn"
                          onClick={() => handleClick(user._id)}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </StyledTable>
        )}
      </MainSection>
      <Footer />
    </div>
  );
};

export default Customers;

const StyledTable = styled.table`
  .table {
    height: 60vh;
    padding: 20px 30px;
  }
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  background-color: #004880;
  color: white;
  padding: 4px 10px;
  border-radius: 4px;
  margin-right: 4rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;
