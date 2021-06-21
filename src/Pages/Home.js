import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../Style/Home.css"

const Home = () => {
  return (
    <div className="Home">
      <h1> Let's Budget Up!</h1>
     <Link to={`/transactions`}>
     <Button variant="outline-success" className="Button">Begin</Button>
     </Link> 
    </div>
  );
};

export default Home;
