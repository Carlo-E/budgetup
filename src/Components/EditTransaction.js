import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Style/EditTransaction.css"
const API = apiURL();

const EditTransaction = ({ updateTransaction }) => {
  const [transaction, setTrasanction] = useState({
    date: "",
    from: "",
    name: "",
    amount: 0,
  });
  let { index } = useParams();
  const history = useHistory();

  const handleChange = (event) => {
    setTrasanction({ ...transaction, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const res = await axios.get(`${API}/transactions/${index}`);
        setTrasanction(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTransaction();
  }, [index]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateTransaction(transaction, index);
    history.push(`/transactions/${index}`);
  };

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="date">Date:</Form.Label>
          <Form.Control
            id="date"
            value={transaction.date}
            type="date"
            onChange={handleChange}
            placeholder="Enter Date"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="from">From:</Form.Label>
          <Form.Control
            id="from"
            value={transaction.from}
            type="text"
            onChange={handleChange}
            placeholder="From Who?"
          />
        </Form.Group>
        <Form.Group>
        <Form.Label htmlFor="name">Name:</Form.Label>
        <Form.Control
          id="name"
          value={transaction.name}
          type="text"
          onChange={handleChange}
          placeholder="What's This For?"
        />

        </Form.Group>
        <Form.Group>
        <Form.Label htmlFor="amount">Amount:</Form.Label>
        <Form.Control
          id="amount"
          value={transaction.amount}
          type="number"
          onChange={handleChange}
          placeholder="Amount"
        />
        </Form.Group>
        <Button className="Button" variant="outline-success" type="submit">
          Submit
        </Button>
      </form>
      <div>
      <Link to={`/transactions/${index}`}>
        <Button className="Button" variant="outline-success">Back</Button>
      </Link>
      </div>
      <br/>
    </div>
  );
};

export default EditTransaction;
