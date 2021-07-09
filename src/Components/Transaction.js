import { Link } from "react-router-dom";


const Transaction = ({ transaction, index }) => {
  let options = { month: "short", day: "numeric" }
  // let date = new Date(transaction.date)
  // date.toLocaleDateString(undefined, options)
  return (
    <tbody>
      <tr>
        <td>{new Date(transaction.date).toLocaleDateString(undefined, options)} </td>
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
