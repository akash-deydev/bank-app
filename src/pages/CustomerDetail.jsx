import Header from "../components/Layout/Header";
import MainSection from "../components/Layout/MainSection";
import Footer from "../components/Layout/Footer";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Transfer from "../components/Transfer";
import { useGetCustomerDetailQuery } from "../services/customers";

const CustomerDetail = () => {
  const { id } = useParams();
  const [isTransfer, setIsTransfer] = useState(false);
  const { data, isLoading } = useGetCustomerDetailQuery(id);

  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate("/all-customers");
  };

  const handleTransferMoneyBtn = () => {
    setIsTransfer(true);
  };

  var format = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });

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
          <div className="container p-5" style={{ color: "#004880" }}>
            <dl className="row">
              <dt className="col-sm-3">Name</dt>
              <dd className="col-sm-9">{data?.user[0].name}</dd>
              <dt className="col-sm-3">Email</dt>
              <dd className="col-sm-9">{data?.user[0].email}</dd>
              <dt className="col-sm-3">Mobile Number</dt>
              <dd className="col-sm-9">+91 {data?.user[0].mobile}</dd>
              <dt className="col-sm-3">Current A/C Balance</dt>
              <dd className="col-sm-9">
                {format.format(data?.user[0].balance)}
              </dd>
            </dl>
            <div className="d-flex justify-content-center mt-5">
              <button
                className="primary-btn"
                onClick={handleBackButton}
                style={{ marginRight: "1rem" }}
              >
                Back
              </button>
              <button className="primary-btn" onClick={handleTransferMoneyBtn}>
                Transfer Money
              </button>
            </div>
          </div>
        )}

        {isTransfer ? (
          <Transfer
            setIsTransfer={setIsTransfer}
            user={isLoading ? null : data}
          />
        ) : null}
      </MainSection>
      <Footer />
    </div>
  );
};

export default CustomerDetail;

const StyledButton = styled.button`
  border: none;
  outline: none;
  background-color: #004880;
  color: #eee;
  padding: 6px 10px;
  border-radius: 4px;
  margin-right: 1rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;
