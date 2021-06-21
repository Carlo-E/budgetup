import EditTransaction from "../Components/EditTransaction";
import "../Style/EditForm.css"

const Edit = ({ updateTransaction }) => {
  return (
    <div className="EditForm">
      <h1>Edit Budget</h1>
      <EditTransaction updateTransaction={updateTransaction} />
    </div>
  );
};

export default Edit;
