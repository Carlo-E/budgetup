import { Link } from "react-router-dom";


const Transaction = ({ transaction, index, deleteTransaction, id }) => {
  return (
    <tbody>
      <tr>
        <td>{transaction.date} </td>
        <td>{transaction.from} </td>
        <td>
          <Link to={`/transactions/${index}`}>{transaction.name} </Link>{" "}
        </td>
        <td>{transaction.amount}</td>
      </tr>
    </tbody>
  );
};

export default Transaction;
