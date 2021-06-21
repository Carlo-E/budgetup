import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import NavBar from "./Components/NavBar";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import Home from "./Pages/Home"
import { apiURL } from "./util/apiURL";
import "./App.css";
const API = apiURL();
const TRANS = "transactions";

function App() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(`${API}/${TRANS}`);
      setTransactions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTransaction = async (newTransaction) => {
    try {
      const res = await axios.post(`${API}/${TRANS}`, newTransaction);
      setTransactions([...transactions, res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTransaction = async (updateTransactions, index) => {
    try {
      await axios.put(`${API}/${TRANS}/${index}`, updateTransactions);
      const newTransaction = [...transactions];
      newTransaction[index] = updateTransactions;
      setTransactions(newTransaction);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTransaction = async (index) => {
    try {
      await axios.delete(`${API}/${TRANS}/${index}`);
      const prevState = [...transactions];
      prevState.splice(index, 1);
      setTransactions(prevState);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const amounts = transactions.map((item) => Number(item.amount));
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path={`/${TRANS}/new`}>
          <New amounts={amounts} addTransaction={addTransaction} />
        </Route>
        <Route path={`/${TRANS}/:index/edit`}>
          <Edit updateTransaction={updateTransaction} />
        </Route>
        <Route exact path={`/${TRANS}/:index`}>
          <Show deleteTransaction={deleteTransaction} />
        </Route>
        <Route exact path={`/${TRANS}`}>
          <Index amounts={amounts} transactions={transactions} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
