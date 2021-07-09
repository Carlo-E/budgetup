import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../Style/Transaction.css"
const API = apiURL();

const TransactionDetails = ({ deleteTransaction }) => {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let history = useHistory();

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const res = await axios.get(`${API}/transactions/${index}`);
        setTransaction(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTransaction();
  }, [index]);

  const handleDelete = () => {
    deleteTransaction(index);
    history.push(`/transactions`);
  };

  let options = { month: "short", day: "numeric" }

  return (
    <div>
      <Table striped bordered hover responsive variant="success">
        <thead>
          <tr>
            <th>Date</th>
            <th>From</th>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{new Date(transaction.date).toLocaleDateString(undefined, options).replace(/-/, "/")}</td>
            <td>{transaction.name}</td>
            <td>{transaction.from}</td>
            <td>{transaction.amount}</td>
          </tr>
        </tbody>
      </Table>
      <div className="TransactionButtons">
        <Link to={`/transactions`}>
          <Button className="TransactionButtons" variant="outline-success">Back</Button>
        </Link>
        <Link to={`/transactions/${index}/edit`}>
          <Button className="TransactionButtons" variant="outline-success">Edit</Button>
        </Link>
        <Button className="TransactionButtons" onClick={() => handleDelete()} variant="outline-danger">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TransactionDetails;
