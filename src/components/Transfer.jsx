import { useState } from "react";
import styled from "styled-components";
import { useGetAllCustomersQuery } from "../services/customers";
import { useParams } from "react-router-dom";
import { useHandleFundTransferMutation } from "../services/customers";
import toast, { Toaster } from "react-hot-toast";

const initialValue = "Select a customer account to transfer money";
const initialAmount = "";

const Transfer = ({ setIsTransfer, user }) => {
  const [value, setValue] = useState(initialValue);
  const [amount, setAmount] = useState(initialAmount);
  const { data, isLoading } = useGetAllCustomersQuery();
  const { id } = useParams();

  const [fundTransfer] = useHandleFundTransferMutation();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleResetBtn = (e) => {
    e.preventDefault();
    setError("");
    setAmount(initialAmount);
    setValue(initialValue);
  };

  const handleCancelBtn = (e) => {
    e.preventDefault();
    setIsTransfer(false);
  };

  const handlePaymentBtn = async (e) => {
    e.preventDefault();

    if (value === initialValue) {
      toast.error("Choose a customers account to transfer money.");
      return;
    }

    if (Number(amount) == "") {
      toast.error("Amount field is required");
      return;
    }
    if (Number(amount) < 10) {
      toast.error("Amount should be greater than ₹10");
      return;
    }

    if (value === id) {
      toast.error("You cannot choose your own account.");
      return;
    }

    if (Number(amount) > user.balance) {
      toast.error("Insufficient fund.");
      return;
    }

    const transactionDetails = {
      sender: id,
      receiver: value,
      amount: Number(amount),
    };

    await fundTransfer(transactionDetails);
    toast.success("Fund Transfer Successful");
    setValue(initialValue);
    setAmount(initialAmount);
  };

  return (
    <div className="container text-center">
      <Toaster />
      <div className="row">
        <div className="col">
          <select
            value={value}
            onChange={handleChange}
            className="form-select form-select-sm"
          >
            <option>Select a customer to transfer money</option>
            {isLoading ? (
              <option>Loading...</option>
            ) : (
              data?.users &&
              data?.users.map((u) => {
                return (
                  <option key={u._id} value={u._id}>
                    {u.name}
                  </option>
                );
              })
            )}
          </select>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Enter the Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <button
          className="btn btn-sm btn-success mt-3 me-2"
          onClick={handlePaymentBtn}
        >
          Make Payment
        </button>

        <button
          className="btn btn-sm btn-primary mt-3 me-2"
          onClick={handleResetBtn}
        >
          Reset
        </button>

        <button
          className="btn btn-sm btn-danger mt-3"
          onClick={handleCancelBtn}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Transfer;
