import Transactions from "../Components/Transactions";
import "../Style/Transactions.css"

const Index = ({transactions, amounts, deleteTransaction}) => {
  return (
    <div className="Transactions" >
      <h1>Bank Account Total: {amounts.reduce((amount1, amount2) => amount1 + amount2, 0 ) /*< 0 ? {color:"red"} : {color: "darkgreen"}*/} </h1>
      <Transactions transactions={transactions} deleteTransaction={deleteTransaction}/>
    </div>
  );
};
export default Index;
