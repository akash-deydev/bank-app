import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import MainSection from "../components/Layout/MainSection";
import { useGetAllTransactionsQuery } from "../services/customers";

const AllTransfers = () => {
  const { data, error, isLoading } = useGetAllTransactionsQuery();

  var format = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });

  return (
    <div>
      <Header />
      <MainSection>
        <table className="container table table-sm table-hover table-striped mt-2">
          <thead>
            <tr>
              <th>#</th>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Amount</th>
              <th>Date & Time</th>
            </tr>
          </thead>

          {isLoading ? (
            <tbody>
              <tr>
                <td>Loading...</td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {data.transactions &&
                data.transactions.map((transaction, idx) => {
                  return (
                    <tr key={transaction._id}>
                      <td>{idx + 1}</td>
                      <td>{transaction.sender.name}</td>
                      <td>{transaction.receiver.name}</td>
                      <td>{format.format(transaction.amount)}</td>
                      <td>
                        {new Date(transaction.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          )}
        </table>
      </MainSection>
      <Footer />
    </div>
  );
};

export default AllTransfers;
