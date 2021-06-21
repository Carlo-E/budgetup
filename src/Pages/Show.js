import TransactionDetails from "../Components/TransactionDetails";
import "../Style/Transaction.css"


const Show = ({ deleteTransaction }) => {
  return (
    <div className="Transaction">
        <h1>Transaction</h1>
      <TransactionDetails deleteTransaction={deleteTransaction} />
    </div>
  );
};

export default Show;
