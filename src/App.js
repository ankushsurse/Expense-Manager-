import Currentexpense from "./components/Currentexpense";
import CurrentIncome from "./components/CurrentIncome";
import Form from "./components/Form";
import Currentbalance from "./Currentbalance";
import Result from "./components/Result";

function App() {

  return (
    <>
      <p className="h1 border border-light text-center container bg-light mt-3 w-50">Expense Manager</p>
      <div id="Expense_Manager" className="w-100 d-flex p-5 expense_manager">
        <CurrentIncome />
        <Form  />
        <Currentexpense  />
      </div>
      <Currentbalance  />
      <Result  />
    </>
  );
}
export default App;