import Table from "react-bootstrap/Table";
import Transaction from "./Transaction";
import "../Style/Transactions.css"

const Transactions = ({ transactions, deleteTransaction }) => {
  return (
    <div className="Transactions">
      <Table striped bordered hover responsive variant="success">
        <thead>
          <tr>
            <th>Date</th>
            <th>From</th>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
            {transactions.map((transaction, index) => (
              <Transaction
                key={index}
                transaction={transaction}
                index={index}
                // deleteTransaction={deleteTransaction}
              />
            ))}
      </Table>
    </div>
  );
};

export default Transactions;
