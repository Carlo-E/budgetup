import { useState } from "react";
import { useHistory } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Style/New.css";

const New = ({ addTransaction, amounts }) => {
  const [transaction, setTrasanction] = useState({
    date: "",
    from: "",
    name: "",
    amount: "",
  });
  const history = useHistory();

  
  const handleChange = (event) => {
    setTrasanction({ ...transaction, [event.target.id]: event.target.value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction(transaction);
    history.push("/transactions");
  };
  
  return (
    <div className="New">
      <h1>New Transaction</h1>
      <form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Date:</Form.Label>
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
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="name">Name:</Form.Label> <br></br>
          <Form.Control
            id="name"
            value={transaction.name}
            type="text"
            onChange={handleChange}
            placeholder="Income/Expense"
          />
        </Form.Group>
        <Form.Label htmlFor="amount">Amount:</Form.Label>
        <Form.Group>
          <Form.Control
            id="amount"
            value={transaction.amount}
            type="number"
            onChange={handleChange}
            placeholder="Amount"
          />
        </Form.Group>
        <Button variant="outline-success" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default New;
